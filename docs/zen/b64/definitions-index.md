 Index

- [func Base64[T string | []byte](value T) string](<#func-base64>)
- [func Base64Runtime(value any) string](<#func-base64runtime>)
- [func Bytes(b64string string) []byte](<#func-bytes>)
- [func String(b64string string) string](<#func-string>)


## func [Base64](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/b64/base64.go#L10>)

```go
func Base64[T string | []byte](value T) string
```

Base64 converts provided string or bytes value into base64 string. It's a wrapper around existing "base64.StdEncoding.EncodeToString\(\[\]byte\(...\)\)". Created to simplify work with base64 and provide convenient template function for "templatex".

## func [Base64Runtime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/b64/base64.go#L14>)

```go
func Base64Runtime(value any) string
```

## func [Bytes](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/b64/bytes.go#L16>)

```go
func Bytes(b64string string) []byte
```

Bytes converts the given base64 string to a bytes value. Should be used in a known environment, when values are expected to be correct. Panics in case of failure. It's a wrapper around existing "base64.StdEncoding.DecodeString\(...\)". Created to simplify work with base64.

## func [String](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/b64/string.go#L16>)

```go
func String(b64string string) string
```

String converts the given base64 string to a string value. Should be used in a known environment, when values are expected to be correct. Panics in case of failure. It's a wrapper around existing "base64.StdEncoding.DecodeString\(...\)". Created to simplify work with base64 and provide convenient template function for "templatex".



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
