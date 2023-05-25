 Index

- [Variables](<#variables>)
- [type CachedFunc](<#type-cachedfunc>)
  - [func NewCachedFunc[T any](expire time.Duration, fn CachedFunc[T]) CachedFunc[T]](<#func-newcachedfunc>)
- [type PeriodicFunc](<#type-periodicfunc>)
  - [func NewPeriodicFunc[T any](ctx context.Context, interval time.Duration, fn PeriodicFunc[T]) PeriodicFunc[T]](<#func-newperiodicfunc>)
- [type PeriodicPool](<#type-periodicpool>)
  - [func NewPeriodicPool[T any](ctx context.Context) *PeriodicPool[T]](<#func-newperiodicpool>)
  - [func (p *PeriodicPool[T]) Get(key string) (T, error)](<#func-periodicpoolt-get>)
  - [func (p *PeriodicPool[T]) New(key string, interval time.Duration, fn PeriodicFunc[T])](<#func-periodicpoolt-new>)


## Variables

```go
var ErrPeriodicPoolMissingKey = errors.New("referenced key is missing")
```

## type [CachedFunc](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/cached.go#L8>)

Cached function type.

```go
type CachedFunc[T any] func() (T, error)
```

### func [NewCachedFunc](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/cached.go#L27>)

```go
func NewCachedFunc[T any](expire time.Duration, fn CachedFunc[T]) CachedFunc[T]
```

NewCachedFunc is a function wrapper with exprire duration setting. Consider it as a cached getter builder. As far as NewCachedFunc doesn't support functions with arguments \(it will require much more effort and complications\), you'll need to create cached getter for each argument set. At least, until the creation of more advanced cached builder.

Usage:

```
getter := NewCachedFunc(1 * time.Minute, func() (string, error) {
	time.Sleep(1 * time.Second) Imitate some work
	return "Function cached result"
})
log.Println(getter()) // Takes some time
log.Println(getter()) // Gets a value from cache
```

## type [PeriodicFunc](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/periodic.go#L8>)

```go
type PeriodicFunc[T any] func() (T, error)
```

### func [NewPeriodicFunc](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/periodic.go#L10>)

```go
func NewPeriodicFunc[T any](ctx context.Context, interval time.Duration, fn PeriodicFunc[T]) PeriodicFunc[T]
```

## type [PeriodicPool](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/periodicpool.go#L11-L14>)

```go
type PeriodicPool[T any] struct {
    Pool    map[string]PeriodicFunc[T]
    Context context.Context //nolint:containedctx
}
```

### func [NewPeriodicPool](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/periodicpool.go#L31>)

```go
func NewPeriodicPool[T any](ctx context.Context) *PeriodicPool[T]
```

### func \(\*PeriodicPool\[T\]\) [Get](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/periodicpool.go#L20>)

```go
func (p *PeriodicPool[T]) Get(key string) (T, error)
```

### func \(\*PeriodicPool\[T\]\) [New](<https://github.com/kyoto-framework/zen/blob/master/tmp/zen/cache/periodicpool.go#L16>)

```go
func (p *PeriodicPool[T]) New(key string, interval time.Duration, fn PeriodicFunc[T])
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)