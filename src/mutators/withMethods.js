
import { courier } from 'vue-hoc';
import getMixins from '../utils/getMixins';

const withMethods = (methods, ctor) => {
  const mixins = getMixins(ctor);
  mixins.push({
    methods,
  });
  return ctor;
};

export default courier(2, withMethods);
