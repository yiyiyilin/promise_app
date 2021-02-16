import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuRouter: [],
  },
  mutations: {
    changeMenuRouter(state, routes) {
      state.menuRouter = routes;
    },
  },
  actions: {
    changeMenuRouter(context, routes) {
      context.commit('changeMenuRouter', routes);
    },
  },
  modules: {

  },
});
