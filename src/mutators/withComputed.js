// @flow
import { courier } from 'vue-hoc';
import type { WithComputed } from '../annotations';
import getMixins from '../utils/getMixins';

const withComputed: WithComputed = (computed, ctor) => {
  const mixins = getMixins(ctor);
  mixins.push({
    computed,
  });
  return ctor;
};

export default courier(2, withComputed);
