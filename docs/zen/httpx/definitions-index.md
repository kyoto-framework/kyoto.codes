 Index

- [Variables](<#variables>)
- [type PathWrapper](<#type-pathwrapper>)
  - [func Path(path string) PathWrapper](<#func-path>)
  - [func PathFromTokens(tokens []string) PathWrapper](<#func-pathfromtokens>)
  - [func (p PathWrapper) Get(index int) string](<#func-pathwrapper-get>)
  - [func (p PathWrapper) GetAfter(token string) string](<#func-pathwrapper-getafter>)
  - [func (p PathWrapper) GetAfterWithIndex(token string) (string, int)](<#func-pathwrapper-getafterwithindex>)
  - [func (p PathWrapper) GetBefore(token string) string](<#func-pathwrapper-getbefore>)
  - [func (p PathWrapper) GetBeforeWithIndex(token string) (string, int)](<#func-pathwrapper-getbeforewithindex>)
  - [func (p PathWrapper) Tokens() []string](<#func-pathwrapper-tokens>)
- [type QueryWrapper](<#type-querywrapper>)
  - [func Query(q url.Values) QueryWrapper](<#func-query>)
  - [func (q QueryWrapper) Unmarshal(target any) error](<#func-querywrapper-unmarshal>)
- [type RequestBuilder](<#type-requestbuilder>)
  - [func Request(method, href string) *RequestBuilder](<#func-request>)
  - [func (r *RequestBuilder) Async() *async.Future[*ResponseWrapper]](<#func-requestbuilder-async>)
  - [func (r *RequestBuilder) Body(body io.Reader) *RequestBuilder](<#func-requestbuilder-body>)
  - [func (r *RequestBuilder) Build() *http.Request](<#func-requestbuilder-build>)
  - [func (r *RequestBuilder) Client(client *http.Client) *RequestBuilder](<#func-requestbuilder-client>)
  - [func (r *RequestBuilder) Do() *ResponseWrapper](<#func-requestbuilder-do>)
  - [func (r *RequestBuilder) Form(body any) *RequestBuilder](<#func-requestbuilder-form>)
  - [func (r *RequestBuilder) Header(key, val string) *RequestBuilder](<#func-requestbuilder-header>)
  - [func (r *RequestBuilder) HeaderMap(headers map[string]string) *RequestBuilder](<#func-requestbuilder-headermap>)
  - [func (r *RequestBuilder) HeaderMapFmt(headers map[string]any) *RequestBuilder](<#func-requestbuilder-headermapfmt>)
  - [func (r *RequestBuilder) HeaderValues(headers map[string][]string) *RequestBuilder](<#func-requestbuilder-headervalues>)
  - [func (r *RequestBuilder) JSON(body any) *RequestBuilder](<#func-requestbuilder-json>)
  - [func (r *RequestBuilder) Query(key, val string) *RequestBuilder](<#func-requestbuilder-query>)
  - [func (r *RequestBuilder) QueryMap(values map[string]string) *RequestBuilder](<#func-requestbuilder-querymap>)
  - [func (r *RequestBuilder) QueryMapFmt(values map[string]any) *RequestBuilder](<#func-requestbuilder-querymapfmt>)
  - [func (r *RequestBuilder) QueryStruct(values any) *RequestBuilder](<#func-requestbuilder-querystruct>)
  - [func (r *RequestBuilder) QueryValues(values url.Values) *RequestBuilder](<#func-requestbuilder-queryvalues>)
  - [func (r *RequestBuilder) Text(body string) *RequestBuilder](<#func-requestbuilder-text>)
- [type ResponseWrapper](<#type-responsewrapper>)
  - [func Response(resp *http.Response, err ...error) *ResponseWrapper](<#func-response>)
  - [func (r *ResponseWrapper) Clear() *ResponseWrapper](<#func-responsewrapper-clear>)
  - [func (r *ResponseWrapper) Debug() *ResponseWrapper](<#func-responsewrapper-debug>)
  - [func (r *ResponseWrapper) Error() error](<#func-responsewrapper-error>)
  - [func (r *ResponseWrapper) Must()](<#func-responsewrapper-must>)
  - [func (r *ResponseWrapper) Success() *ResponseWrapper](<#func-responsewrapper-success>)
  - [func (r *ResponseWrapper) Text() string](<#func-responsewrapper-text>)
  - [func (r *ResponseWrapper) Unmarshal(target any) *ResponseWrapper](<#func-responsewrapper-unmarshal>)


## Variables

```go
var ErrUnmarshalTarget = errors.New("failed to encode form values to struct, non struct type is given")
```

## type [PathWrapper](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L9>)

PathWrapper type is a wrapper around path string. It provides a few useful extra methods to operate with path.

```go
type PathWrapper string
```

### func [Path](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L122>)

```go
func Path(path string) PathWrapper
```

Path wraps a given path string into PathWrapper to provide extra methods.

Usage:

```
path := httpx.Path("/foo/bar/baz")
```

### func [PathFromTokens](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L134>)

```go
func PathFromTokens(tokens []string) PathWrapper
```

Path wraps a given path tokens into PathWrapper to provide extra methods.

Usage:

```
path := httpx.PathFromTokens([]string{"foo", "bar", "baz"})
```

### func \(PathWrapper\) [Get](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L19>)

```go
func (p PathWrapper) Get(index int) string
```

Get returns path token at the given index.

Usage:

```
path := httpx.Path("/foo/bar/baz")
path.Get(1) // string{"bar"}
```

### func \(PathWrapper\) [GetAfter](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L73>)

```go
func (p PathWrapper) GetAfter(token string) string
```

GetAfter returns path token located after provided token.

Usage:

```
path := httpx.Path("/foo/bar/baz")
path.GetAfter("bar") // string{"baz"}
```

### func \(PathWrapper\) [GetAfterWithIndex](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L87>)

```go
func (p PathWrapper) GetAfterWithIndex(token string) (string, int)
```

GetAfterWithIndex returns path token and it's index located after provided token.

Usage:

```
path := httpx.Path("/foo/bar/baz")
path.GetAfterWithIndex("bar") // string{"baz"}, 2
```

### func \(PathWrapper\) [GetBefore](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L36>)

```go
func (p PathWrapper) GetBefore(token string) string
```

GetBefore returns path token located before provided token.

Usage:

```
path := httpx.Path("/foo/bar/baz")
path.GetBefore("baz") // string{"bar"}
```

### func \(PathWrapper\) [GetBeforeWithIndex](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L50>)

```go
func (p PathWrapper) GetBeforeWithIndex(token string) (string, int)
```

GetBeforeWithIndex returns path token and it's index located before provided token.

Usage:

```
path := httpx.Path("/foo/bar/baz")
path.GetBeforeWithIndex("baz") // string{"bar"}, 1
```

### func \(PathWrapper\) [Tokens](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/path.go#L110>)

```go
func (p PathWrapper) Tokens() []string
```

Tokens returns path tokens.

Usage:

```
path := httpx.Path("/foo/bar/baz")
path.Tokens() // []string{"foo", "bar", "baz"}
```

## type [QueryWrapper](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/query.go#L17-L19>)

QueryWrapper type is a wrapper for url.Values. It provides a few useful extra methods.

```go
type QueryWrapper struct {
    url.Values
}
```

### func [Query](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/query.go#L132>)

```go
func Query(q url.Values) QueryWrapper
```

Query wraps a given url.Values into QueryWrapper to provide extra methods.

### func \(QueryWrapper\) [Unmarshal](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/query.go#L36>)

```go
func (q QueryWrapper) Unmarshal(target any) error
```

Unmarshal helps to parse url.Values into a struct. Slightly modified version of github.com/knadh/querytostruct

Example:

```
var target struct {
	Foo string `query:"foo"`
	Bar int `query:"bar"`
}

q, _ := url.ParseQuery("foo=asdqwe&bar=123")
kyoto.Query(q).Unmarshal(&target)
```

## type [RequestBuilder](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L20-L27>)

RequestBuilder provides set of chainable functions to build a request and execute it.

```go
type RequestBuilder struct {
    // contains filtered or unexported fields
}
```

### func [Request](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L252>)

```go
func Request(method, href string) *RequestBuilder
```

Request initializes a \*RequestBuilder with a given required parameters. See RequestBuilder for details.

### func \(\*RequestBuilder\) [Async](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L226>)

```go
func (r *RequestBuilder) Async() *async.Future[*ResponseWrapper]
```

Async wraps a request execution \(Do\) with an async.Future.

### func \(\*RequestBuilder\) [Body](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L142>)

```go
func (r *RequestBuilder) Body(body io.Reader) *RequestBuilder
```

Body sets a body as\-is.

### func \(\*RequestBuilder\) [Build](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L237>)

```go
func (r *RequestBuilder) Build() *http.Request
```

Build composes provided parameters into \*http.Request.

### func \(\*RequestBuilder\) [Client](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L203>)

```go
func (r *RequestBuilder) Client(client *http.Client) *RequestBuilder
```

Client sets a client, which will be used on request execution \(with Do or Async methods\).

### func \(\*RequestBuilder\) [Do](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L215>)

```go
func (r *RequestBuilder) Do() *ResponseWrapper
```

Do builds an \*http.Request and executes it with a provided client. If client wasn't provided, uses http.DefaultClient.

### func \(\*RequestBuilder\) [Form](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L181>)

```go
func (r *RequestBuilder) Form(body any) *RequestBuilder
```

Form transforms given struct into url encoded string, wraps it with an io.Reader and sets as a request body. Also, it sets a "Content\-Type: application/x\-www\-form\-urlencoded" header. If body is not serializable with json, it panics.

### func \(\*RequestBuilder\) [Header](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L100>)

```go
func (r *RequestBuilder) Header(key, val string) *RequestBuilder
```

Header sets a header with a given parameters.

### func \(\*RequestBuilder\) [HeaderMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L109>)

```go
func (r *RequestBuilder) HeaderMap(headers map[string]string) *RequestBuilder
```

HeaderMap sets a header values with a given parameters, stored in map.

### func \(\*RequestBuilder\) [HeaderMapFmt](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L120>)

```go
func (r *RequestBuilder) HeaderMapFmt(headers map[string]any) *RequestBuilder
```

HeaderMapFmt formats and sets header values with a given parameters, stored in map.

### func \(\*RequestBuilder\) [HeaderValues](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L131>)

```go
func (r *RequestBuilder) HeaderValues(headers map[string][]string) *RequestBuilder
```

HeaderValues sets a headers as\-is.

### func \(\*RequestBuilder\) [JSON](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L167>)

```go
func (r *RequestBuilder) JSON(body any) *RequestBuilder
```

JSON transforms given object into json, wraps it with an io.Reader and sets as a request body. Also, it sets a "Content\-Type: application/json" header. If body is not serializable with json, it panics.

### func \(\*RequestBuilder\) [Query](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L34>)

```go
func (r *RequestBuilder) Query(key, val string) *RequestBuilder
```

Query sets a query value with a given parameters.

### func \(\*RequestBuilder\) [QueryMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L45>)

```go
func (r *RequestBuilder) QueryMap(values map[string]string) *RequestBuilder
```

QueryMap sets a query values with a given parameters, stored in map.

### func \(\*RequestBuilder\) [QueryMapFmt](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L59>)

```go
func (r *RequestBuilder) QueryMapFmt(values map[string]any) *RequestBuilder
```

QueryMapFmt formats and sets query values with a given parameters, stored in map.

### func \(\*RequestBuilder\) [QueryStruct](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L88>)

```go
func (r *RequestBuilder) QueryStruct(values any) *RequestBuilder
```

QueryStruct sets a query values with a given object. It uses conv.Map to extract values, then acts in the same way as QueryMapFmt. If something goes wrong with marshalling, it panics.

### func \(\*RequestBuilder\) [QueryValues](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L76>)

```go
func (r *RequestBuilder) QueryValues(values url.Values) *RequestBuilder
```

QueryValues sets a query as\-is.

### func \(\*RequestBuilder\) [Text](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/request.go#L153>)

```go
func (r *RequestBuilder) Text(body string) *RequestBuilder
```

Text wraps a given string body parameter with an io.Reader and sets as a request body. Also, it sets a "Content\-Type: text/plain" header.

## type [ResponseWrapper](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L18-L22>)

ResponseWrapper is a wrapper around http.Response. It provides a set of functions for a chained response processing.

```go
type ResponseWrapper struct {
    *http.Response
    // contains filtered or unexported fields
}
```

### func [Response](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L150>)

```go
func Response(resp *http.Response, err ...error) *ResponseWrapper
```

Response wraps \*http.Response with own wrapper, providing extra functions. See httpx.ResponseWrapper for details.

### func \(\*ResponseWrapper\) [Clear](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L49>)

```go
func (r *ResponseWrapper) Clear() *ResponseWrapper
```

Clear removes an error from response. Needed for cases when we are acknowledged about it, processed it, and want to proceed with response results.

### func \(\*ResponseWrapper\) [Debug](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L60>)

```go
func (r *ResponseWrapper) Debug() *ResponseWrapper
```

Debug prints the response to stdout. If something goes wrong during dump, chain execution will be stopped. Returns wrapper for chaining.

### func \(\*ResponseWrapper\) [Error](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L40>)

```go
func (r *ResponseWrapper) Error() error
```

Error is a chain closer. Ensures that there was no errors in processing chain. If not, error is not nil.

### func \(\*ResponseWrapper\) [Must](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L29>)

```go
func (r *ResponseWrapper) Must()
```

Must is a chain closer. Ensures that there was no errors in processing chain. If not, it panics.

### func \(\*ResponseWrapper\) [Success](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L87>)

```go
func (r *ResponseWrapper) Success() *ResponseWrapper
```

Success ensures that response code is between 200 and 299. If not, chain execution will be stopped. Returns wrapper for chaining.

### func \(\*ResponseWrapper\) [Text](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L104>)

```go
func (r *ResponseWrapper) Text() string
```

Text reads response body as a text.

### func \(\*ResponseWrapper\) [Unmarshal](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/httpx/response.go#L114>)

```go
func (r *ResponseWrapper) Unmarshal(target any) *ResponseWrapper
```

Unmarshal detects response type and decodes it into target. If response type is not supported, or there is an error during decoding, chain execution will be stopped. Returns wrapper for chaining.



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
