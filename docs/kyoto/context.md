# Context

Kyoto provides a context, which holds common objects like http.ResponseWriter, \*http.Request, etc.

See kyoto.Context for details.

Example:

```go
func Component(ctx *kyoto.Context) (state ComponentState) {
	log.Println(ctx.Request.UserAgent())
	...
}
```

