 Index

- [func All[T any](slice []T, fn func(v T) bool) bool](<#func-all>)
- [func Any[T any](slice []T, fn func(v T) bool) bool](<#func-any>)
- [func Cartesian[T any](slices ...[]T) (res [][]T)](<#func-cartesian>)
- [func Chunks[T any](slice []T, size int) (chunks [][]T)](<#func-chunks>)
- [func Filter[T any](slice []T, fn func(v T) bool) []T](<#func-filter>)
- [func FuncIn[T comparable](values ...T) func(T) bool](<#func-funcin>)
- [func FuncNotIn[T comparable](values ...T) func(T) bool](<#func-funcnotin>)
- [func In[T comparable](val T, slice []T) bool](<#func-in>)
- [func InRuntime(val any, slice any) bool](<#func-inruntime>)
- [func Index[T any](slice []T, fn func(v T) bool) int](<#func-index>)
- [func Insert[T any](slice []T, index int, value T) []T](<#func-insert>)
- [func Last[T any](slice []T) T](<#func-last>)
- [func Limit[T any](slice []T, limit int) []T](<#func-limit>)
- [func Map[T1 any, T2 any](slice []T1, fn func(v T1) T2) []T2](<#func-map>)
- [func MapIndexed[T1 any, T2 any](slice []T1, fn func(i int, v T1) T2) []T2](<#func-mapindexed>)
- [func Pop[T any](slice []T, index ...int) ([]T, T)](<#func-pop>)
- [func Range(from, to int) []int](<#func-range>)
- [func Unique[T1 any, T2 comparable](slice []T1, fn func(v T1) T2) []T1](<#func-unique>)


## func [All](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/all.go#L10>)

```go
func All[T any](slice []T, fn func(v T) bool) bool
```

All ensures that all values from a given slice satisfies a given condition.

Usage:

```
All([]int{1, 2, 3}, func(v int) bool { return v > 0 }) // true
```

## func [Any](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/any.go#L10>)

```go
func Any[T any](slice []T, fn func(v T) bool) bool
```

Any ensures that at least one value from a given slice satisfies a given condition.

Usage:

```
Any([]int{-1, 0, 1}, func(v int) bool { return v < 0 }) // true
```

## func [Cartesian](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/cartesian.go#L10>)

```go
func Cartesian[T any](slices ...[]T) (res [][]T)
```

Cartesian makes a product of two or more sets.

Usage:

```
Cartesian([]int{1, 2}, []int{3, 4}) // [[1 3] [1 4] [2 3] [2 4]]
```

## func [Chunks](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/chunks.go#L10>)

```go
func Chunks[T any](slice []T, size int) (chunks [][]T)
```

Chunks generates a chunks with a given size from a given slice.

Usage:

```
Chunks([]int{1, 2, 3, 4}, 2) // [][]int{ []int{1, 2}, []int{3, 4} }
```

## func [Filter](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/filter.go#L10>)

```go
func Filter[T any](slice []T, fn func(v T) bool) []T
```

Filter returns filtered slice according to the given function.

Usage:

```
Filter([]int{1, 2, 3}, func(v int) bool { return v < 3 }) // []int{1, 2}
```

## func [FuncIn](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/func.go#L13>)

```go
func FuncIn[T comparable](values ...T) func(T) bool
```

FuncIn returns a function that checks if the given value is in the given top\-level values slice. Works only for comparable types. Useful for filtering slices with slice.Filter.

Usage:

```
slice.Filter([]int{1, 2, 3, 3, 4, 5}, slice.FilterIn(1, 2, 3)) // []int{1, 2, 3, 3}
```

## func [FuncNotIn](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/func.go#L29>)

```go
func FuncNotIn[T comparable](values ...T) func(T) bool
```

FuncNotIn returns a function that checks if the given value is not in the given top\-level values slice. Works only for comparable types. Useful for filtering slices with slice.Filter.

Usage:

```
slice.Filter([]int{1, 2, 3, 3, 4, 5}, slice.FilterNotIn(1, 2, 3)) // []int{4, 5}
```

## func [In](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/in.go#L10>)

```go
func In[T comparable](val T, slice []T) bool
```

In returns true if the given value is in the given slice.

Usage:

```
In(1, []int{1, 2, 3}) // true
```

## func [InRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/in.go#L24>)

```go
func InRuntime(val any, slice any) bool
```

InRuntime is a runtime version of In.

## func [Index](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/index.go#L11>)

```go
func Index[T any](slice []T, fn func(v T) bool) int
```

Index finds element index according to the given function. If nothing found, returns \-1.

Usage:

```
Index([]int{1, 2, 3}, func(v int) bool { return v > 2 }) // 2
```

## func [Insert](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/insert.go#L10>)

```go
func Insert[T any](slice []T, index int, value T) []T
```

Insert injects a provided value into slice on the given index.

Usage:

```
Insert([]string{"b", "c"}, 0, "a") // []string{"a", "b", "c"}
```

## func [Last](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/last.go#L11>)

```go
func Last[T any](slice []T) T
```

Last takes a last element of a given slice. In that way, you don't need to mess with len\(slice\)\-1.

Usage:

```
Last([]string{"a", "b", "c"}) // "c"
```

## func [Limit](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/limit.go#L10>)

```go
func Limit[T any](slice []T, limit int) []T
```

Limit makes a slice subset if bigger than a given limit.

Usage:

```
Limit([]string{"a", "b", "c"}, 2) // []string{"a", "b"}
```

## func [Map](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/map.go#L10>)

```go
func Map[T1 any, T2 any](slice []T1, fn func(v T1) T2) []T2
```

Map returns a new slice with the results of applying the given function to each element in the given slice.

Usage:

```
Map([]string{"asd", "qwe"}, func(v string) int { return len(v) }) // []int{3, 3}
```

## func [MapIndexed](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/map.go#L23>)

```go
func MapIndexed[T1 any, T2 any](slice []T1, fn func(i int, v T1) T2) []T2
```

MapIndexed returns a new slice with the results of applying the given function to each element in the given slice. Difference from Map is that the function receives the index of the element as the first argument.

## func [Pop](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/pop.go#L12>)

```go
func Pop[T any](slice []T, index ...int) ([]T, T)
```

Pop takes an last element from a slice \(with deletion\), or with a given index.

Usage:

```
a := []int{1, 2, 3}
b := Pop(a)     // 3
fmt.println(a)  // []int{1, 2}
```

## func [Range](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/range.go#L10>)

```go
func Range(from, to int) []int
```

Range returns a new slice of integers in the given range \(from, to\).

Usage:

```
Range(1, 5) // []int{1, 2, 3, 4, 5}
```

## func [Unique](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/slice/unique.go#L12>)

```go
func Unique[T1 any, T2 comparable](slice []T1, fn func(v T1) T2) []T1
```

Unique returns a new slice with the unique slice values. Comparable value is defined by a given function.

Usage:

```
Unique([]int{1, 2, 2, 3}, func(v int) int { return v }) // []int{1, 2, 3}
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
