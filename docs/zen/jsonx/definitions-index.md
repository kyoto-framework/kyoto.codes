 Index

- [func Bytes(value any) []byte](<#func-bytes>)
- [func Map(jsonstring string) map[string]any](<#func-map>)
- [func String(value any) string](<#func-string>)


## func [Bytes](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/jsonx/bytes.go#L16>)

```go
func Bytes(value any) []byte
```

Bytes is a function that converts the given value to a JSON string, converted to bytes.

Usage:

```
jsonx.Bytes(map[any]any{"foo": 1, "bar": 2}) // []byte{'{"foo":1,"bar":2}'}
```

## func [Map](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/jsonx/map.go#L18>)

```go
func Map(jsonstring string) map[string]any
```

String is a function that converts the given json string into map\[string\]any. Should be used in a known environment, when values are expected to be correct. Panics in case of failure.

Usage:

```
jsonx.Map({"foo":1,"bar":2}) // map[string]any{"foo": 1, "bar": 2}
```

## func [String](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/jsonx/string.go#L17>)

```go
func String(value any) string
```

String is a function that converts the given value to a JSON string. Almost useless for typical use\-cases, but useful as template function.

Usage:

```
jsonx.String(map[any]any{"foo": 1, "bar": 2}) // {"foo":1,"bar":2}
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
