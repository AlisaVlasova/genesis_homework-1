export default {
  state: {
    userFeed: null,
    userInfo: null,
  },
  getters: {
    getUserFeed(state) {
      return state.userFeed;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    setUserFeed(state, value) {
      state.userFeed = value;
    },
    setUserInfo(state, value) {
      state.userInfo = value;
    },
  },
};
