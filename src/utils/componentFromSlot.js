import type { ComponentFromSlot } from '../annotations';

const componentFromSlot: ComponentFromSlot = (options = {}) => {
  return Object.assign({
    name: 'ComponentFromSlot',
    render(h){
      const children = this.$slots.default; //children;
      if (children.length !== 1){
        throw new Error('ComponentFromSlot must be used with only 1 root element');
      }

      const slot = children[0];
      const tag = slot.tag;
      const data = Object.assign({}, this, slot.data);

      if (typeof tag !== 'string'){
        throw new Error('The root element of ComponentFromSlot must be a HTML element');
      }

      return h(tag, data, slot.children);
    }
  }, options);
};

export default componentFromSlot;
