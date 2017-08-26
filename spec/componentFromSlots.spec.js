import test from 'ava';
import {mount} from 'vuenit';
import {
  componentFromSlot,
  withStyle,
  withProps,
  acceptProps,
  compose
} from 'vue-compose';

test('renders the first slot of the component', t => {
  const C = componentFromSlot();
  const vm = mount(C, {
    innerHTML: '<div id="inner_div">Hello world</div>'
  });

  t.is(vm.$html, '<div id="inner_div">Hello world</div>');
});

test('it can pass additional properties to the slot', t => {
  debugger; //eslint-disable-line
  const enhance = compose(
    withProps({
      width: 50,
    }),
    withStyle({
      width(){
        return `${this.width}%`;
      },
    }),
    acceptProps(['width']),
  );
  const C = componentFromSlot();
  const enhanced = enhance(C);
  const vm = mount(enhanced, {
    innerHTML: '<div id="inner_id">Hello world</div>'
  });

  t.is(vm.$html, '<div id="inner_id" style="width: 50%;">Hello world</div>');
});
