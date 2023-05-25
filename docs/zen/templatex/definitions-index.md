 Index

- [Variables](<#variables>)
- [func Import[T any](extension T) func() T](<#func-import>)
- [type AsyncExtension](<#type-asyncextension>)
  - [func (e *AsyncExtension) Await(f async.ImplementsAwaitRuntime) (any, error)](<#func-asyncextension-await>)
  - [func (e *AsyncExtension) FuncMap() template.FuncMap](<#func-asyncextension-funcmap>)
- [type B64Extension](<#type-b64extension>)
  - [func (e *B64Extension) Base64(value string) string](<#func-b64extension-base64>)
  - [func (e *B64Extension) Base64Bytes(value []byte) string](<#func-b64extension-base64bytes>)
  - [func (e *B64Extension) FuncMap() template.FuncMap](<#func-b64extension-funcmap>)
  - [func (e *B64Extension) String(b64string string) string](<#func-b64extension-string>)
- [type ConvExtension](<#type-convextension>)
  - [func (e *ConvExtension) Bool(val any) bool](<#func-convextension-bool>)
  - [func (e *ConvExtension) Float(val any) float64](<#func-convextension-float>)
  - [func (e *ConvExtension) Float64(val any) float64](<#func-convextension-float64>)
  - [func (e *ConvExtension) FuncMap() template.FuncMap](<#func-convextension-funcmap>)
  - [func (e *ConvExtension) Int(val any) int](<#func-convextension-int>)
  - [func (e *ConvExtension) Ptr(val any) any](<#func-convextension-ptr>)
  - [func (e *ConvExtension) String(val any) string](<#func-convextension-string>)
- [type EnvExtension](<#type-envextension>)
  - [func (e *EnvExtension) FuncMap() template.FuncMap](<#func-envextension-funcmap>)
  - [func (e *EnvExtension) Get(key string) string](<#func-envextension-get>)
- [type ErrorsxExtension](<#type-errorsxextension>)
  - [func (e *ErrorsxExtension) FuncMap() template.FuncMap](<#func-errorsxextension-funcmap>)
  - [func (e *ErrorsxExtension) Ignore(val any, err error) any](<#func-errorsxextension-ignore>)
  - [func (e *ErrorsxExtension) Must(val any, err error) any](<#func-errorsxextension-must>)
- [type FmtxExtension](<#type-fmtxextension>)
  - [func (e *FmtxExtension) FuncMap() template.FuncMap](<#func-fmtxextension-funcmap>)
  - [func (e *FmtxExtension) Number(number float64, precision int, prefix, suffix string) string](<#func-fmtxextension-number>)
  - [func (e *FmtxExtension) NumberP0(number float64) string](<#func-fmtxextension-numberp0>)
  - [func (e *FmtxExtension) NumberP1(number float64) string](<#func-fmtxextension-numberp1>)
  - [func (e *FmtxExtension) Numeral(number float64, precision int) string](<#func-fmtxextension-numeral>)
  - [func (e *FmtxExtension) NumeralP0(number float64) string](<#func-fmtxextension-numeralp0>)
  - [func (e *FmtxExtension) NumeralP1(number float64) string](<#func-fmtxextension-numeralp1>)
- [type JsonxExtension](<#type-jsonxextension>)
  - [func (e *JsonxExtension) FuncMap() template.FuncMap](<#func-jsonxextension-funcmap>)
  - [func (e *JsonxExtension) String(value any) string](<#func-jsonxextension-string>)
- [type MapxExtension](<#type-mapxextension>)
  - [func (e *MapxExtension) Compose(vals ...any) map[any]any](<#func-mapxextension-compose>)
  - [func (e *MapxExtension) FuncMap() template.FuncMap](<#func-mapxextension-funcmap>)
- [type MathxExtension](<#type-mathxextension>)
  - [func (e *MathxExtension) DivRuntime(vals ...any) any](<#func-mathxextension-divruntime>)
  - [func (e *MathxExtension) FuncMap() template.FuncMap](<#func-mathxextension-funcmap>)
  - [func (e *MathxExtension) MulRuntime(vals ...any) any](<#func-mathxextension-mulruntime>)
  - [func (e *MathxExtension) SubRuntime(vals ...any) any](<#func-mathxextension-subruntime>)
  - [func (e *MathxExtension) SumRuntime(vals ...any) any](<#func-mathxextension-sumruntime>)
- [type RegexpxExtension](<#type-regexpxextension>)
  - [func (e *RegexpxExtension) FuncMap() template.FuncMap](<#func-regexpxextension-funcmap>)
  - [func (e *RegexpxExtension) Replace(str, old, new string) string](<#func-regexpxextension-replace>)
- [type SliceExtension](<#type-sliceextension>)
  - [func (e *SliceExtension) FuncMap() template.FuncMap](<#func-sliceextension-funcmap>)
  - [func (e *SliceExtension) In(val any, sliceval any) bool](<#func-sliceextension-in>)
  - [func (e *SliceExtension) Range(from, to int) []int](<#func-sliceextension-range>)
- [type StringsExtension](<#type-stringsextension>)
  - [func (e *StringsExtension) Contains(str string, substr string) bool](<#func-stringsextension-contains>)
  - [func (e *StringsExtension) FuncMap() template.FuncMap](<#func-stringsextension-funcmap>)
  - [func (e *StringsExtension) Lower(str string) string](<#func-stringsextension-lower>)
  - [func (e *StringsExtension) Replace(str, old, new string) string](<#func-stringsextension-replace>)
  - [func (e *StringsExtension) Sprintf(format string, a ...any) string](<#func-stringsextension-sprintf>)
  - [func (e *StringsExtension) Title(str string) string](<#func-stringsextension-title>)
  - [func (e *StringsExtension) Trim(str string) string](<#func-stringsextension-trim>)
  - [func (e *StringsExtension) Upper(str string) string](<#func-stringsextension-upper>)
- [type TimeExtension](<#type-timeextension>)
  - [func (e *TimeExtension) FuncMap() template.FuncMap](<#func-timeextension-funcmap>)
  - [func (e *TimeExtension) Now() time.Time](<#func-timeextension-now>)
  - [func (e *TimeExtension) Nowfmt(format string) string](<#func-timeextension-nowfmt>)


## Variables

FuncMap is a map of utilities functions to be used in templates.

```go
var FuncMap = template.FuncMap{
    "mathx":   Import(&MathxExtension{}),
    "async":   Import(&AsyncExtension{}),
    "b64":     Import(&B64Extension{}),
    "conv":    Import(&ConvExtension{}),
    "errorsx": Import(&ErrorsxExtension{}),
    "fmtx":    Import(&FmtxExtension{}),
    "jsonx":   Import(&JsonxExtension{}),
    "mapx":    Import(&MapxExtension{}),
    "regexpx": Import(&RegexpxExtension{}),
    "slice":   Import(&SliceExtension{}),

    "time":    Import(&TimeExtension{}),
    "env":     Import(&EnvExtension{}),
    "strings": Import(&StringsExtension{}),
}
```

## func [Import](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/import.go#L16>)

```go
func Import[T any](extension T) func() T
```

Import allows to pack a given struct into getter function. In that way, you're able to use struct and struct methods as funcmap extensions.

Usage:

```
// Example of import
example := template.FuncMap{ "jsonx": Import(&templatex.JsonxExtension{}) }
// Example of usage
"{{ jsonx.String .Value }}"
```

## type [AsyncExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.async.go#L13>)

AsyncExtension is a template compatibility wrapper around existing async zen package.

```go
type AsyncExtension struct{}
```

### func \(\*AsyncExtension\) [Await](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.async.go#L15>)

```go
func (e *AsyncExtension) Await(f async.ImplementsAwaitRuntime) (any, error)
```

### func \(\*AsyncExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.async.go#L19>)

```go
func (e *AsyncExtension) FuncMap() template.FuncMap
```

## type [B64Extension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.b64.go#L13>)

B64Extension is a template compatibility wrapper around existing b64 zen package.

```go
type B64Extension struct{}
```

### func \(\*B64Extension\) [Base64](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.b64.go#L15>)

```go
func (e *B64Extension) Base64(value string) string
```

### func \(\*B64Extension\) [Base64Bytes](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.b64.go#L19>)

```go
func (e *B64Extension) Base64Bytes(value []byte) string
```

### func \(\*B64Extension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.b64.go#L27>)

```go
func (e *B64Extension) FuncMap() template.FuncMap
```

### func \(\*B64Extension\) [String](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.b64.go#L23>)

```go
func (e *B64Extension) String(b64string string) string
```

## type [ConvExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L13>)

ConvExtension is a template compatibility wrapper around existing conv zen package.

```go
type ConvExtension struct{}
```

### func \(\*ConvExtension\) [Bool](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L15>)

```go
func (e *ConvExtension) Bool(val any) bool
```

### func \(\*ConvExtension\) [Float](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L16>)

```go
func (e *ConvExtension) Float(val any) float64
```

### func \(\*ConvExtension\) [Float64](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L17>)

```go
func (e *ConvExtension) Float64(val any) float64
```

### func \(\*ConvExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L22>)

```go
func (e *ConvExtension) FuncMap() template.FuncMap
```

### func \(\*ConvExtension\) [Int](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L18>)

```go
func (e *ConvExtension) Int(val any) int
```

### func \(\*ConvExtension\) [Ptr](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L19>)

```go
func (e *ConvExtension) Ptr(val any) any
```

### func \(\*ConvExtension\) [String](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.conv.go#L20>)

```go
func (e *ConvExtension) String(val any) string
```

## type [EnvExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.env.go#L12>)

EnvExtension is a template compatibility wrapper around existing environment\-related package.

```go
type EnvExtension struct{}
```

### func \(\*EnvExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.env.go#L18>)

```go
func (e *EnvExtension) FuncMap() template.FuncMap
```

### func \(\*EnvExtension\) [Get](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.env.go#L14>)

```go
func (e *EnvExtension) Get(key string) string
```

## type [ErrorsxExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.errorsx.go#L13>)

ErrorsxExtension is a template compatibility wrapper around existing errorsx zen package.

```go
type ErrorsxExtension struct{}
```

### func \(\*ErrorsxExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.errorsx.go#L23>)

```go
func (e *ErrorsxExtension) FuncMap() template.FuncMap
```

### func \(\*ErrorsxExtension\) [Ignore](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.errorsx.go#L15>)

```go
func (e *ErrorsxExtension) Ignore(val any, err error) any
```

### func \(\*ErrorsxExtension\) [Must](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.errorsx.go#L19>)

```go
func (e *ErrorsxExtension) Must(val any, err error) any
```

## type [FmtxExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L13>)

AsyncExtension is a template compatibility wrapper around existing async zen package.

```go
type FmtxExtension struct{}
```

### func \(\*FmtxExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L39>)

```go
func (e *FmtxExtension) FuncMap() template.FuncMap
```

### func \(\*FmtxExtension\) [Number](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L15>)

```go
func (e *FmtxExtension) Number(number float64, precision int, prefix, suffix string) string
```

### func \(\*FmtxExtension\) [NumberP0](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L19>)

```go
func (e *FmtxExtension) NumberP0(number float64) string
```

### func \(\*FmtxExtension\) [NumberP1](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L23>)

```go
func (e *FmtxExtension) NumberP1(number float64) string
```

### func \(\*FmtxExtension\) [Numeral](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L27>)

```go
func (e *FmtxExtension) Numeral(number float64, precision int) string
```

### func \(\*FmtxExtension\) [NumeralP0](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L31>)

```go
func (e *FmtxExtension) NumeralP0(number float64) string
```

### func \(\*FmtxExtension\) [NumeralP1](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.fmtx.go#L35>)

```go
func (e *FmtxExtension) NumeralP1(number float64) string
```

## type [JsonxExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.jsonx.go#L13>)

JsonxExtension is a template compatibility wrapper around existing jsonx zen package.

```go
type JsonxExtension struct{}
```

### func \(\*JsonxExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.jsonx.go#L19>)

```go
func (e *JsonxExtension) FuncMap() template.FuncMap
```

### func \(\*JsonxExtension\) [String](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.jsonx.go#L15>)

```go
func (e *JsonxExtension) String(value any) string
```

## type [MapxExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mapx.go#L13>)

MapxExtension is a template compatibility wrapper around existing mapx zen package.

```go
type MapxExtension struct{}
```

### func \(\*MapxExtension\) [Compose](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mapx.go#L15>)

```go
func (e *MapxExtension) Compose(vals ...any) map[any]any
```

### func \(\*MapxExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mapx.go#L19>)

```go
func (e *MapxExtension) FuncMap() template.FuncMap
```

## type [MathxExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mathx.go#L13>)

MathxExtension is a template compatibility wrapper around existing mathx zen package.

```go
type MathxExtension struct{}
```

### func \(\*MathxExtension\) [DivRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mathx.go#L15>)

```go
func (e *MathxExtension) DivRuntime(vals ...any) any
```

### func \(\*MathxExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mathx.go#L20>)

```go
func (e *MathxExtension) FuncMap() template.FuncMap
```

### func \(\*MathxExtension\) [MulRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mathx.go#L16>)

```go
func (e *MathxExtension) MulRuntime(vals ...any) any
```

### func \(\*MathxExtension\) [SubRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mathx.go#L17>)

```go
func (e *MathxExtension) SubRuntime(vals ...any) any
```

### func \(\*MathxExtension\) [SumRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.mathx.go#L18>)

```go
func (e *MathxExtension) SumRuntime(vals ...any) any
```

## type [RegexpxExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.regexpx.go#L13>)

RegexpxExtension is a template compatibility wrapper around existing regexpx zen package.

```go
type RegexpxExtension struct{}
```

### func \(\*RegexpxExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.regexpx.go#L19>)

```go
func (e *RegexpxExtension) FuncMap() template.FuncMap
```

### func \(\*RegexpxExtension\) [Replace](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.regexpx.go#L15>)

```go
func (e *RegexpxExtension) Replace(str, old, new string) string
```

## type [SliceExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.slice.go#L13>)

SliceExtension is a template compatibility wrapper around existing slice zen package.

```go
type SliceExtension struct{}
```

### func \(\*SliceExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.slice.go#L23>)

```go
func (e *SliceExtension) FuncMap() template.FuncMap
```

### func \(\*SliceExtension\) [In](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.slice.go#L15>)

```go
func (e *SliceExtension) In(val any, sliceval any) bool
```

### func \(\*SliceExtension\) [Range](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.slice.go#L19>)

```go
func (e *SliceExtension) Range(from, to int) []int
```

## type [StringsExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L13>)

StringsExtension is a template compatibility wrapper around existing string\-related packages.

```go
type StringsExtension struct{}
```

### func \(\*StringsExtension\) [Contains](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L19>)

```go
func (e *StringsExtension) Contains(str string, substr string) bool
```

### func \(\*StringsExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L43>)

```go
func (e *StringsExtension) FuncMap() template.FuncMap
```

### func \(\*StringsExtension\) [Lower](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L27>)

```go
func (e *StringsExtension) Lower(str string) string
```

### func \(\*StringsExtension\) [Replace](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L23>)

```go
func (e *StringsExtension) Replace(str, old, new string) string
```

### func \(\*StringsExtension\) [Sprintf](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L15>)

```go
func (e *StringsExtension) Sprintf(format string, a ...any) string
```

### func \(\*StringsExtension\) [Title](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L35>)

```go
func (e *StringsExtension) Title(str string) string
```

### func \(\*StringsExtension\) [Trim](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L39>)

```go
func (e *StringsExtension) Trim(str string) string
```

### func \(\*StringsExtension\) [Upper](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.strings.go#L31>)

```go
func (e *StringsExtension) Upper(str string) string
```

## type [TimeExtension](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.time.go#L12>)

TimeExtension is a template compatibility wrapper around existing time package.

```go
type TimeExtension struct{}
```

### func \(\*TimeExtension\) [FuncMap](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.time.go#L22>)

```go
func (e *TimeExtension) FuncMap() template.FuncMap
```

### func \(\*TimeExtension\) [Now](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.time.go#L14>)

```go
func (e *TimeExtension) Now() time.Time
```

### func \(\*TimeExtension\) [Nowfmt](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/templatex/ext.time.go#L18>)

```go
func (e *TimeExtension) Nowfmt(format string) string
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
