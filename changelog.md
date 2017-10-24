## Change Log

## 0.2.0
- Methods are no longer traditionally curried. They now return a method that accepts a component.
  i.e. `withProps({}, c)` must now be called as `withProps({})(c)`.
