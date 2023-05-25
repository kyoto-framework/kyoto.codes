# Pages and components

Kyoto provides a way to define components. It's a very common approach for modern libraries to manage frontend parts. In kyoto each component is a context receiver, which returns it's state. Each component becomes a part of the page or top-level component, which executes component asynchronously and gets a state future object. In that way your components are executing in a non-blocking way.

Pages are just top-level components, where you can configure rendering and page related stuff.

Example:

```go
// Component is a context receiver, that returns it's state.
// State can be whatever you want (simple type, struct, slice, map, etc).
func CUUID(ctx *kyoto.Context) (state CUUIDState) {
	// Fetch uuid data
	resp, _ := http.Get("http://httpbin.org/uuid")
	data := map[string]string{}
	json.NewDecoder(resp.Body).Decode(&data)
	// Set state
	state.UUID = data["uuid"]
}

// Page is just a top-level component, which attaches components and defines rendering
func PExample(ctx *kyoto.Context) (state PExampleState) {
	// Define rendering
	kyoto.Template(ctx, "page.example.html")
	// Attach components
	state.UUID1 = kyoto.Use(ctx, CUUID)
	state.UUID2 = kyoto.Use(ctx, CUUID)
}
```

As an option, you can wrap component with another function to accept additional paramenters from top-level page/component.

Example:

```go
func CUUID(hburl string) kyoto.Component[CUUIDState] {
	return func(ctx *kyoto.Context) (state CUUIDState) {
		// Fetch uuid data
		resp, _ := http.Get(hburl)
		data := map[string]string{}
		json.NewDecoder(resp.Body).Decode(&data)
		// Set state
		state.UUID = data["uuid"]
	}
}
```

