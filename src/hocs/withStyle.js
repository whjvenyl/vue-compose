
import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';

const withStyle = (styles, ctor) => {
  return createHOC(ctor, {
    name: wrapName('withStyle', ctor),
  }, {
    style: styles,
  });
};

export default courier(2, withStyle);
