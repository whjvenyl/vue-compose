// @flow
import { courier } from 'vue-hoc';
import type { WithMethods } from '../annotations';
import getMixins from '../utils/getMixins';

const withMethods: WithMethods = (methods, ctor) => {
  const mixins = getMixins(ctor);
  mixins.push({
    methods,
  });
  return ctor;
};

export default courier(2, withMethods);
