// @flow
import { createHOC, courier } from 'vue-hoc';
import mapProps from './mapProps';
import { wrapName } from '../mutators/setName';
import type { WithProps } from '../annotations';

const withPropsFn = (ctor, mapper) => {
  return  mapProps(function (props) {
    const mapped = mapper.call(this, props);
    return Object.assign({}, props, mapped);
  }, ctor);
};

const withComputedProps = (ctor, keys, allProps) => {
  const computed = {};
  const props = {};
  keys.forEach(key => {
    let value = allProps[key];
    if (typeof value === 'function'){
      const computedName = `computed_${key}`;
      computed[computedName] = value;
      value = function(){
        return this[computedName];
      };
    }
    props[key] = value;
  });
  return createHOC(ctor, { computed }, { props });
};

const withStaticProps = (ctor, props) => {
  return createHOC(ctor, null, { props });
};

const getHoc = (mapper, ctor) => {
  if (typeof mapper === 'function'){
    return withPropsFn(ctor, mapper);
  }
  const keys = Object.keys(mapper);
  if (keys.some(key => typeof mapper[key] === 'function')){
    return withComputedProps(ctor, keys, mapper);
  }
  return withStaticProps(ctor, mapper);
};

const withProps: WithProps = (mapper, ctor) => {
  const hoc = getHoc(mapper, ctor);
  hoc.name = wrapName('withProps', ctor);
  return hoc;
};

export default courier(2, withProps);
