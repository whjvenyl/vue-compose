// @flow
import { courier } from 'vue-hoc';
import type { SetName } from '../annotations';

const setName: SetName = (name, ctor) => {
  const target = typeof ctor === 'function' ?
    ctor.options :
    ctor;

  target.name = name;

  return ctor;
};

export const getName = (ctor: any) => {
  const target = typeof ctor === 'function' ?
    ctor.options :
    ctor;

  return target.name || '';
};

export const wrapName = (name: string, ctor: any) => {
  const cname = getName(ctor) || 'Anonymous';
  return `${name}-${cname}`;
};

export default courier(2, setName);
