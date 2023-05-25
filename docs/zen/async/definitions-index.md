 Index

- [func Await[T any](f *Future[T]) (T, error)](<#func-await>)
- [func AwaitRuntime(f ImplementsAwaitRuntime) (any, error)](<#func-awaitruntime>)
- [func Map[T1 any, T2 any](slice []T1, fn func(v T1) T2) []T2](<#func-map>)
- [type Future](<#type-future>)
  - [func New[T any](fn func() (T, error)) *Future[T]](<#func-new>)
  - [func (f *Future[T]) Await() (T, error)](<#func-futuret-await>)
  - [func (f *Future[T]) AwaitRuntime() (any, error)](<#func-futuret-awaitruntime>)
  - [func (f *Future[T]) Catch(fn func(error)) *Future[T]](<#func-futuret-catch>)
  - [func (f *Future[T]) MarshalJSON() ([]byte, error)](<#func-futuret-marshaljson>)
  - [func (f *Future[T]) Then(fn func(T)) *Future[T]](<#func-futuret-then>)
  - [func (f *Future[T]) UnmarshalJSON(data []byte) error](<#func-futuret-unmarshaljson>)
- [type ImplementsAwaitRuntime](<#type-implementsawaitruntime>)


## func [Await](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/await.go#L13>)

```go
func Await[T any](f *Future[T]) (T, error)
```

Await for a future object results.

## func [AwaitRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/await.go#L20>)

```go
func AwaitRuntime(f ImplementsAwaitRuntime) (any, error)
```

AwaitRuntime is a runtime version of async.Await.

## func [Map](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/map.go#L17>)

```go
func Map[T1 any, T2 any](slice []T1, fn func(v T1) T2) []T2
```

Map returns a new slice with the results of applying the given function to each element in the given slice. Asynchronous version of slice.Map. Please note, it's not always faster\! Goroutines allocation have own cost.

Usage:

```
// Let's assume we have some workload in Workload function, which returns an integer.

results := async.Map([]string{"one", "two", "three"}, func(v string) int {
	return Workload(v)
})
```

## type [Future](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L28-L32>)

Future is an execution result of an asynchronous function that returns immediately, without locking execution thread. To lock execution and wait for result, use .Await\(\) method or async.Await\(\) function. As an alternative you can use a syntax similar to JavaScript Promise, using .Then\(\) and .Catch\(\) methods.

Usage:

```
// Let's assume we have a future object in "ftr" variable.
// We can lock execution and wait for a result with .Await()
res, err := ftr.Await()
// Or, we can use async.Await()
res, err := async.Await(ftr)
// Or, we can avoid locking execution and provide then/catch
// functions to handle execution results.
ftr.Then(func(val string) {
	println(val)
}).Catch(func(err error) {
	println(err.Error())
})
```

```go
type Future[T any] struct {
    // contains filtered or unexported fields
}
```

### func [New](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/async.go#L7>)

```go
func New[T any](fn func() (T, error)) *Future[T]
```

New runs a function in a goroutine and returns Future object for it.

### func \(\*Future\[T\]\) [Await](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L42>)

```go
func (f *Future[T]) Await() (T, error)
```

Await for a future object results.

Usage:

```
// Let's assume we have a future object in "ftr" variable.
res, err := ftr.Await()
```

### func \(\*Future\[T\]\) [AwaitRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L64>)

```go
func (f *Future[T]) AwaitRuntime() (any, error)
```

AwaitRuntime is a runtime version of .Await\(\)

Usage:

```
// Let's assume we have a future object in "ftr" variable.
// Result will be stored as "any" type, so you'll need to cast it.
res, err := ftr.AwaitRuntime()
```

### func \(\*Future\[T\]\) [Catch](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L101>)

```go
func (f *Future[T]) Catch(fn func(error)) *Future[T]
```

Catch accepts a function, that will be executed on future execution error.

Usage:

```
// Let's assume we have a future object of string in "ftr" variable.
ftr.Catch(func(err error) {
	println(err.Error())
})
```

### func \(\*Future\[T\]\) [MarshalJSON](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L115>)

```go
func (f *Future[T]) MarshalJSON() ([]byte, error)
```

MarshalJSON implements future marshalling.

### func \(\*Future\[T\]\) [Then](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L79>)

```go
func (f *Future[T]) Then(fn func(T)) *Future[T]
```

Then accepts a function, that will be executed on future work completion.

Usage:

```
// Let's assume we have a future object of string in "ftr" variable.
ftr.Then(func(v string) {
	println(v)
})
```

### func \(\*Future\[T\]\) [UnmarshalJSON](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/future.go#L127>)

```go
func (f *Future[T]) UnmarshalJSON(data []byte) error
```

UnmarshalJSON implements future unmarshalling.

## type [ImplementsAwaitRuntime](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/async/await.go#L6-L8>)

Interface for runtime await.

```go
type ImplementsAwaitRuntime interface {
    AwaitRuntime() (any, error)
}
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
