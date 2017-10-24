import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';

const withHandlers = (handlers, ctor) => {
  const listeners = {};
  const methods = {};

  Object.keys(handlers).forEach(key => {
    const methodName = `handle${key.charAt(0).toUpperCase()}${key.substr(1)}`;
    methods[methodName] = handlers[key];
    listeners[key] = function () {
      return this[methodName].apply(this, arguments);
    };
  });

  return createHOC(ctor, {
    name: wrapName('withHandlers', ctor),
    methods,
  }, {
    listeners,
  });
};

export default courier(2, withHandlers);
