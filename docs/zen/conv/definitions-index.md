 Index

- [func Bool(val any) bool](<#func-bool>)
- [func Compose(vals ...any) map[any]any](<#func-compose>)
- [func Float64(val any) float64](<#func-float64>)
- [func Int(val any) int](<#func-int>)
- [func Map(value any) map[string]any](<#func-map>)
- [func Ptr[T any](val T) *T](<#func-ptr>)
- [func PtrRuntime(val any) any](<#func-ptrruntime>)
- [func String(val any) string](<#func-string>)


## func [Bool](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/bool.go#L18>)

```go
func Bool(val any) bool
```

Bool converts the given value to boolean. Should be used in a known environment, when values are expected to be correct. Panics in case of failure.

Usage:

```
conv.Bool(5.4) // true
conv.Bool("") // false
conv.Bool(0) // false
conv.Bool(struct{}) // panic!
```

## func [Compose](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/compose.go#L4>)

```go
func Compose(vals ...any) map[any]any
```

Deprecated: Use mapx.Compose instead

## func [Float64](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/float64.go#L17>)

```go
func Float64(val any) float64
```

Float64 converts the given value to float64. Should be used in a known environment, when values are expected to be correct. Panics in case of failure.

Usage:

```
conv.Float64("5") // 5.0
conv.Float64(true) // 1.0
conv.Float64("qwe") // panic!
```

## func [Int](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/int.go#L16>)

```go
func Int(val any) int
```

Int converts the given value to int. Should be used in a known environment, when values are expected to be correct. Panics in case of failure.

Usage:

```
conv.Int("123") // 123
conv.Int("asd") // panic!
```

## func [Map](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/map.go#L26>)

```go
func Map(value any) map[string]any
```

Map transforms a given json\-marshalable value \(usually it's a struct\) to the map\[string\]any.

Usage:

```
type Example struct{
	A string
	B string
}

conv.Map(Example{ // map[string]any{"A": 1, "B": 2}
	A: "1",
	B: "2",
})
```

## func [Ptr](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/ptr.go#L10>)

```go
func Ptr[T any](val T) *T
```

Ptr makes a pointer for a given value.

Usage:

```
conv.Ptr(1) // *int{1}
```

## func [PtrRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/ptr.go#L22>)

```go
func PtrRuntime(val any) any
```

PtrRuntime is a runtime version of conv.Ptr.

Usage:

```
// Please note, you'll receive "any" type which you'll need to cast.
conv.PtrRuntime(1) // any, which holds *int{1}
```

## func [String](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/conv/string.go#L17>)

```go
func String(val any) string
```

String converts the given value to a string. Uses fmt.Sprintf\("%v", val\) as fallback for unknown types.

Usage:

```
conv.String(true) // "true"
conv.String(1) // "1"
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
