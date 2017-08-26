// @flow
export default (ctor: any): Array<Object> => {
  let mixins;
  if (ctor.options){
    if (!ctor.options.mixins){
      ctor.options.mixins = mixins = [];
    }else{
      mixins = ctor.options.mixins;
    }
  }else{
    if (!ctor.mixins){
      ctor.mixins = mixins = [];
    }else{
      mixins = ctor.mixins;
    }
  }
  return mixins;
};
