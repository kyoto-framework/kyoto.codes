# Templates

Kyoto provides a set of parameters and functions to provide a comfortable template building process. You can configure template building parameters with kyoto.TemplateConf configuration.

See template.go for available functions and kyoto.TemplateConfiguration for configuration details.

Example:

```go
func Page(ctx *kyoto.Context) (state PageState) {
	// By default it will:
	// - use kyoto.FuncMap as a FuncMap
	// - parse everything in the current directory with a .ParseGlob("*.html")
	// - render a template with a given name
	kyoto.Template(ctx, "page.index.html")
	...
}
```

