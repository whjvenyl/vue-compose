// @flow
import { createHOC, courier } from 'vue-hoc';
import type { WithListeners } from '../annotations';

const withListeners: WithListeners = (listeners, ctor) => {
  return createHOC(ctor, null, {
    listeners,
  });
};

export default courier(2, withListeners);
