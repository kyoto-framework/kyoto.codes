# Quick start

Let's go straight into a simple example. Then, we will dig into details, step by step, how it works.

```go
package main

import (
	"net/http"
	"encoding/json"

	"github.com/kyoto-framework/kyoto/v2"
)

// This example demonstrates main advantage of kyoto library - asynchronous lifecycle.
// Multiple UUIDs will be fetched from httpbin in asynchronous way, without explicitly touching goroutines
// and synchronization tools like sync.WaitGroup.

type CUUIDState struct {
	UUID string
}

// Let's assume markup of this component is stored in 'component.uuid.html'
//
// {{ define "CUUID" }}
//  <div>UUID: {{ .UUID }}</div>
// {{ end }}
func CUUID(ctx *kyoto.Context) (state CUUIDState) {
	// Fetch uuid data
	resp, _ := http.Get("http://httpbin.org/uuid")
	data := map[string]string{}
	json.NewDecoder(resp.Body).Decode(&data)
	// Set state
	state.UUID = data["uuid"]
	// Return
	return
}

type PIndexState struct {
	UUID1 *kyoto.ComponentF[CUUIDState]
	UUID2 *kyoto.ComponentF[CUUIDState]
}

// Let's assume markup of this page is stored in 'page.index.html'
//
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Example</title>
// </head>
// <body>
// 	{{ template "CUUID" await .UUID1 }}
// 	{{ template "CUUID" await .UUID2 }}
// </body>
// </html>
func PIndex(ctx *kyoto.Context) (state PIndexState) {
	// Define rendering
	kyoto.Template(ctx, "page.index.html")
	// Attach components
	state.UUID1 = kyoto.Use(ctx, CUUID)
	state.UUID2 = kyoto.Use(ctx, CUUID)
	// Return
	return
}

func main() {
	// Register page
	kyoto.HandlePage("/", PIndex)
	// Serve
	kyoto.Serve(":8080")
}
```

