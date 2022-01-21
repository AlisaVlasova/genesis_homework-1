import Vue from "vue";
import Vuex from "vuex";

import feed from "./feed";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    feed,
    user,
  },
});
