## Change Log

## 0.2.0
- Methods are no longer traditionally curried. They now return a method that accepts a component.
  i.e. `withProps({}, c)` must now be called as `withProps({})(c)`.
- If a required prop is provided by `defaultProps({})` or `withProps({})`, the required flag will be disabled from that hoc onwards.
