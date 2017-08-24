// @flow
import { createHOC, courier } from 'vue-hoc';
import type { WithClass } from '../annotations';

const withClass: WithClass = (classes, ctor) => {
  return createHOC(ctor, null, {
    class: classes,
  });
};

export default courier(2, withClass);
