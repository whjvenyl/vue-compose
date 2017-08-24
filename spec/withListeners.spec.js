import test from 'ava';
import sinon from 'sinon';
import {mount} from 'vuenit';
import {withListeners} from 'vue-compose';
const Component = {
  name: 'BaseComponent',
  template: '<div></div>'
};
mount(Component);

test('adds listeners to the component', t => {
  const spy = sinon.spy();
  const enhance = withListeners({
    customEvent: spy,
  });
  const enhanced = enhance(Component);
  const vm = mount(enhanced);

  vm.$find('BaseComponent').$emit('customEvent');

  t.true(spy.called);
});

test('prevents listeners bubbling up', t => {
  const spy = sinon.spy();
  const enhanced = withListeners({
    customEvent: () => {},
  }, Component);
  const vm = mount({
    template: '<enhanced @customEvent="triggerSpy"/>',
    methods: {
      triggerSpy: spy,
    },
    components: {enhanced},
  });

  vm.$find('BaseComponent').$emit('customEvent');

  t.false(spy.called);
});

test('can bubble events up', t => {
  const spy1 = sinon.spy();
  const spy2 = sinon.stub().callsFake(function () {
    this.$emit('customEvent');
  });
  const enhanced = withListeners({
    customEvent: spy2,
  }, Component);
  const vm = mount({
    template: '<enhanced @customEvent="triggerSpy"/>',
    methods: {
      triggerSpy: spy1,
    },
    components: {enhanced},
  });

  vm.$find('BaseComponent').$emit('customEvent');

  t.true(spy1.called);
  t.true(spy2.called);
});
