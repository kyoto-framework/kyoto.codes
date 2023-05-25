# Routing

Kyoto provides a set of simple net/http handlers, handler builders and function wrappers to provide serving, pages rendering, component actions, etc. Anyway, this is not an ultimative solution for any case. If you ever need to wrap/extend existing functionality, library encourages this.

See functions inside of nethttp.go file for details and advanced usage.

Example:

```go
func main() {
	kyoto.HandlePage("/foo", PageFoo)
	kyoto.HandlePage("/bar", PageBar)

	kyoto.Serve(":8000")
}
```

