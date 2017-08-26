import { createRenderFn } from 'vue-hoc';
import type { ComponentFromProp } from '../annotations';

const componentFromProp: ComponentFromProp = (
  propName: string | Object | Function
) => {
  return {
    name: 'ComponentFromProp',
    props: {
      [propName]: {
        type: [String, Object, Function],
        required: true
      }
    },
    render(h){
      const C = this[propName];
      return createRenderFn(C).call(this, h);
    }
  };
};

export default componentFromProp;
