import { courier } from 'vue-hoc';
import mapProps from './mapProps';
import { wrapName } from '../mutators/setName';

const defaultProps = (defaults, ctor) => {
  const hoc = mapProps((props) => {
    const result = Object.assign({}, props);
    Object.keys(defaults).forEach(key => {
      if (result[key] === undefined){
        result[key] = defaults[key];
      }
    });
    return result;
  }, ctor);
  hoc.name = wrapName('defaultProps', ctor);
  return hoc;
};

export default courier(2, defaultProps);
