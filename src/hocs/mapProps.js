// @flow
import { createHOC, courier } from 'vue-hoc';
import { wrapName } from '../mutators/setName';
import type { MapProps } from '../annotations';

const mapProps: MapProps = (mapper, ctor) => {
  const options = {
    computed: {
      mapProps(){
        return mapper.call(this, this.$props);
      }
    },
    name: wrapName('mapProps', ctor),
  };
  const renderWith = {
    props(){
      return this.mapProps;
    }
  };
  return createHOC(ctor, options, renderWith);
};

export default courier(2, mapProps);
