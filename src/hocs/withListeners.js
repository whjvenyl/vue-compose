// @flow
import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';
import type { WithListeners } from '../annotations';

const withListeners: WithListeners = (listeners, ctor) => {
  return createHOC(ctor, {
    name: wrapName('withListeners', ctor),
  }, {
    listeners,
  });
};

export default courier(2, withListeners);
