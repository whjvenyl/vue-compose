import type { Pipe, Compose } from '../annotations';

export const pipe: Pipe = (...args) => (Component) => args.reduce((result, fn) => fn(result), Component);

export const compose: Compose = (...args) => pipe.apply(null, args.reverse());
