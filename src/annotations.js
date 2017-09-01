// @flow
type Component = any;

// Overwrites all props with a new props object
export type MapProps = (
  mapper: (props : Object) => Object,
  ctor: Component
) => Component;

// Overwrites specific props, withProps is merged with original props
// Can be a plan object, and object of functions, or a function that returns an object
// Uses computed properties to cache the value instead of recalculating on every render
export type WithProps = (
  mapper: (props : Object) => Object | {
    [propName: string]: Object | Function,
  },
  ctor: Component
) => Component;

// Sets default props (if not already set)
export type DefaultProps = (
  defaults: Object,
  ctor: Component
) => Component;

// Adds additional props to the component's incoming props.
export type AcceptProps = (
  props: Object | Array<string>,
  ctor: Component
) => Component;

// Adds event listeners to the component
// each listener is added to the component as a method
export type WithHandlers = (
  handlers: {
    [handlerName: string]: (...args: Array<any>) => any
  },
  ctor: Component
) => Component;

// Adds event listeners but allows them to bubble up
export type WithPassive = (
  handlers: {
    [handlerName: string]: (...args: Array<any>) => any
  },
) => Component;

// Adds hooks to the component i.e. created, mounted
export type WithHooks = (
  hooks: {
    [hookName: string]: Function,
  },
  ctor: Component
) => Component;

// Adds classes to the component
type StyleObj = {
  [key: string]: any,
} | Array<any> | void;
export type WithClass = (
  classes: StyleObj | (props: Object) => StyleObj,
  ctor: Component
) => Component;

// Adds styles to the component
export type WithStyle = (
  styles: StyleObj | (props: Object) => StyleObj,
  ctor: Component
) => Component;

// Adds some stateful properties to the component
// The listener is the event name that triggers an update
// The handler is a method that handles the update. Defaults to ((v) => this.foo = v)
// initialValue is the initialValue. If a function, it will be evaluated.
export type WithData = (
  data: {
    [name: string]: {
      prop?: string,
      listener?: string,
      handler?: (...args: any) => any,
      initialValue?: any | (props: Object) => any,
    }
  },
  ctor: Component
) => Component;

// Mutates a component with computed properties
export type WithComputed = (
  computed: {
    [name: string]: Function
  },
  ctor: Component
) => Component;

// Mutates a component with methods
export type WithMethods = (
  methods: {
    [name: string]: Function
  },
  ctor: Component
) => Component;

export type SetName = (
  name: string,
  ctor: Component
) => Component;

// Utilities
export type ComponentFromProp = (
  propName: string | Component,
) => Component;

export type ComponentFromSlot = (
  componentOptions?: Object
) => Component;

export type Compose = (
  ...hocCreators: Array<Function>
) => (ctor: Component) => Component;

export type Pipe = (
  ...hocCreators: Array<Function>
) => (ctor: Component) => Component;
