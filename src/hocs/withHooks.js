// @flow
import { createHOC, courier } from 'vue-hoc';
import type { WithHooks } from '../annotations';

const withHooks: WithHooks = (hooks, ctor) => {
  const definiteHooks = {};
  Object.keys(hooks).forEach(key => {
    const value = hooks[key];
    if (typeof value === 'function'){
      definiteHooks[key] = value;
    }
  });
  return createHOC(ctor, definiteHooks);
};

export default courier(2, withHooks);
