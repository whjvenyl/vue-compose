// @flow
import { courier } from 'vue-hoc';
import withHandlers from './withHandlers';
import { wrapName } from '../mutators/setName';
import type { WithPassive } from '../annotations';

const withPassive: WithPassive = (passives, ctor) => {
  const handlers = {};
  Object.keys(passives).forEach(key => {
    handlers[key] = function (...args) {
      passives[key].apply(this, args);
      this.$emit.apply(this, [key].concat(args));
    };
  });

  const hoc = withHandlers(handlers, ctor);
  hoc.name = wrapName('withPassive', ctor);

  return hoc;
};

export default courier(2, withPassive);
