import { courier } from 'vue-hoc';
import getMixins from '../utils/getMixins';

const withComputed = (computed, ctor) => {
  const mixins = getMixins(ctor);
  mixins.push({
    computed,
  });
  return ctor;
};

export default courier(2, withComputed);
