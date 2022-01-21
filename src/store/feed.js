export default {
  state: {
    trendingFeed: null,

    currentPage: 1,
    totalPages: null,
    pageSize: 10,
  },
  getters: {
    getTrendingFeed(state) {
      return state.trendingFeed;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getTotalPages(state) {
      return state.totalPages;
    },
    getPageSize(state) {
      return state.pageSize;
    },
    getSlicedFeed(state) {
      return (
        state.trendingFeed &&
        state.trendingFeed.slice(
          (state.currentPage - 1) * state.pageSize,
          (state.currentPage - 1) * state.pageSize + state.pageSize
        )
      );
    },
  },
  mutations: {
    setTrendingFeed(state, value) {
      state.trendingFeed = value;
    },
    setCurrentPage(state, value) {
      state.currentPage = value;
    },
    setSlicedFeed(state, value) {
      state.slicedFeed = value;
    },
  },
  actions: {
    updatePage(context, value) {
      context.commit("setCurrentPage", value);
    },
    setTrendingFeed(context, value) {
      context.commit("setTrendingFeed", value);
    },
  },
};
