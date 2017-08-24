// @flow
import { createHOC, courier } from 'vue-hoc';
import type { WithData } from '../annotations';

const withData: WithData = (data, ctor) => {
  const keys = Object.keys(data);
  const listeners = {};

  const dataCreator = function () {
    const result = {};
    keys.forEach(key => {
      const config = data[key];
      const { initialValue } = config;
      if (Object.hasOwnProperty.call(config, 'initialValue')){
        if (typeof initialValue === 'function'){
          result[key] = initialValue.call(this, this.$props);
        }else{
          result[key] = initialValue;
        }
      }else{
        result[key] = undefined;
      }
    });
    return result;
  };

  const propsCreator = function(ownerProps) {
    const result = Object.assign({}, ownerProps);
    keys.forEach(key => {
      const propName = data[key].prop || key;
      result[propName] = this[key];
    });
    return result;
  };

  keys.forEach(key => {
    const listenerName = data[key].listener || key;

    listeners[listenerName] = data[key].handler || function(value){
      this[key] = value;
    };
  });

  const hoc = createHOC(ctor, {
    data: dataCreator,
  }, {
    listeners,
    props: propsCreator,
  });

  keys.forEach(key => {
    if (hoc.props[key]){
      delete hoc.props[key];
    }
  });

  return hoc;
};

export default courier(2, withData);
