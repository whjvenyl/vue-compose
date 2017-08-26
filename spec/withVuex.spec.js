import test from 'ava';
import sinon from 'sinon';
import {mount, mockStore} from 'vuenit';
import {withVuex} from 'vue-compose';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

const C = {
  name: 'BaseComponent',
  props: ['userId', 'user'],
  methods: {
    triggerDispatch(){
      this.$emit('updateUser', true);
    }
  },
  template: '<div></div>'
};
mount(C);

test('passes state to the component', t => {
  const enhance = withVuex({
    state: mapState(['userId']),
  });
  const enhanced = enhance(C);
  const vm = mount(enhanced, {
    store: {
      userId: 4,
    },
  });

  const child = vm.$findOne(C);

  t.is(child.userId, 4);
});

test('passes getters to the component', t => {
  const enhance = withVuex({
    getters: mapGetters(['user']),
  });
  const enhanced = enhance(C);
  const vm = mount(enhanced, {
    store: {
      state: {
        users: [{id: 4}],
        userId: 4,
      },
      getters: {
        user(state){
          return state.users.find(u => u.id === state.userId);
        },
      },
    },
  });

  const child = vm.$findOne(C);

  t.is(child.user.id, 4);
});

test.failing('passes mutations to the component', t => {
  const spy = sinon.spy();
  const enhance = withVuex({
    mutations: mapMutations(['updateUser']),
  });
  const enhanced = enhance(C);
  const store = mockStore({
    mutations: {
      updateUser: spy,
    },
  });
  const vm = mount(enhanced, {
    install(Vue){
      Vue.prototype.$store = store;
    }
  });
  const child = vm.$findOne(C);

  child.triggerDispatch();

  t.true(spy.called);
});

test.failing('passes actions to the component', t => {
  const spy = sinon.spy();
  const enhance = withVuex({
    actions: mapActions(['updateUser']),
  });
  const enhanced = enhance(C);
  const store = mockStore({
    actions: {
      updateUser: spy,
    },
  });
  const vm = mount(enhanced, {
    install(Vue){
      Vue.prototype.$store = store;
    }
  });
  const child = vm.$findOne(C);

  child.triggerDispatch();

  t.true(spy.called);
});
