// @flow
import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';
import type { WithStyle } from '../annotations';

const withStyle: WithStyle = (styles, ctor) => {
  return createHOC(ctor, {
    name: wrapName('withStyle', ctor),
  }, {
    style: styles,
  });
};

export default courier(2, withStyle);
