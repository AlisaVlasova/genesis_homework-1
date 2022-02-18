export const getters = {
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
};
