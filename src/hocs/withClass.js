// @flow
import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';
import type { WithClass } from '../annotations';

const withClass: WithClass = (classes, ctor) => {
  return createHOC(ctor, {
    name: wrapName('withClass', ctor),
  }, {
    class: classes,
  });
};

export default courier(2, withClass);
