import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';

const withClass = (classes, ctor) => {
  return createHOC(ctor, {
    name: wrapName('withClass', ctor),
  }, {
    class: classes,
  });
};

export default courier(2, withClass);
