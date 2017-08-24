// @flow
import { createHOC, courier } from 'vue-hoc';
import type { WithStyle } from '../annotations';

const withStyle: WithStyle = (styles, ctor) => {
  return createHOC(ctor, null, {
    style: styles,
  });
};

export default courier(2, withStyle);
