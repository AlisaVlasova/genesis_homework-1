<template>
  <v-container class="post-list">
    <ul class="post-list__list">
      <li
        class="post-list__item"
        v-for="post of getSlicedFeed"
        :key="post.id"
        :id="post.id"
      >
        <post-item :post="post" />
      </li>
    </ul>

    <v-pagination
      class="post-list__pagination"
      v-model="page"
      @input="(event) => setCurrentPage(event)"
      :length="pagesCount"
      color="rgba(22, 24, 35, 0.75)"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import { PostItem } from "tiktuk-post";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapGetters([
      "getTrendingFeed",
      "getSlicedFeed",
      "getPageSize",
      "getCurrentPage",
    ]),
    pagesCount() {
      return Math.ceil(this.getTrendingFeed.length / this.getPageSize);
    },
  },
  methods: {
    ...mapMutations(["setCurrentPage"]),
  },
};
</script>

<style scoped lang="scss">
.post-list {
  padding: 0 24px;

  &__pagination {
    margin-top: 24px;
  }
}
</style>
