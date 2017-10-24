import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';

const acceptProps = (props, ctor) => {
  if (typeof props === 'string'){
    props = [props];
  }
  return createHOC(ctor, {
    props: props,
    name: wrapName('acceptProps', ctor),
  });
};

export default courier(2, acceptProps);
