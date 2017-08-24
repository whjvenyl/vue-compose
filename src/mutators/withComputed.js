// @flow
import { courier } from 'vue-hoc';
import type { WithComputed } from '../annotations';

const withComputed: WithComputed = (computed, ctor) => {
  if (!ctor.mixins){
    ctor.mixins = [];
  }
  ctor.mixins.push({
    computed,
  });
  return ctor;
};

export default courier(2, withComputed);
