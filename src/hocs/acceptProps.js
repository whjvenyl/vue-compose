// @flow
import { createHOC, courier } from 'vue-hoc';
import type { AcceptProps } from '../annotations';

const acceptProps: AcceptProps = (props, ctor) => {
  if (typeof props === 'string'){
    props = [props];
  }
  return createHOC(ctor, {
    props: props
  });
};

export default courier(2, acceptProps);
