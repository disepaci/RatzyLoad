# Ratzy-Load

Simple Lazy load for images wrote in plain javascript with the IntersectionObserver API.

## Usage

```
new RatzyLoad( [ callback ] , [ root ], [ options ])
```

### Options

- **Callback** `Function` Callback executed when a image is rendered.
- **root** `HTMLElement` `optional` *default viewport* scrolleable element.
- **options** `IntersectionObserverInit` `optional` options for IntersectionObserver object.
	- **root** `HTMLElement` || `Null`
	- **rootMargin** `string` must by `px` or `%`
	- **threshold** `number`


## Methods

- **addObserver([ handler ])**
