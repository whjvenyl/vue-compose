// @flow
import { courier } from 'vue-hoc';
import mapProps from './mapProps';
import type { DefaultProps } from '../annotations';

const defaultProps: DefaultProps = (defaults, ctor) => {
  return mapProps((props) => {
    const result = Object.assign({}, props);
    Object.keys(defaults).forEach(key => {
      if (result[key] === undefined){
        result[key] = defaults[key];
      }
    });
    return result;
  }, ctor);
};

export default courier(2, defaultProps);
