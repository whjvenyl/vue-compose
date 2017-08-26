// @flow
import { courier } from 'vue-hoc';
import acceptProps from './acceptProps';
import withProps from './withProps';
import withListeners from './withListeners';
import { pipe } from '../utils/compose';
import { wrapName } from '../mutators/setName';
import type { WithVuex } from '../annotations';

const withVuex: WithVuex = ({
  state,
  getters,
  mutations,
  actions,
}, ctor) => {
  const props = Object.assign({}, state, getters);
  const listeners = Object.assign({}, mutations, actions);
  const keys = Object.keys(props);

  const hoc = pipe(
    acceptProps(keys),
    withListeners(listeners),
    withProps(props),
  )(ctor);

  hoc.name = wrapName('withVuex', ctor);

  return hoc;
};

export default courier(2, withVuex);
