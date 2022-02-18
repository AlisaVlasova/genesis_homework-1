<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="post of getUserFeed" :key="post.id" cols="12" md="4">
          <v-item>
            <profile-post-item :post="post" />
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapGetters } from "vuex";

import { ProfilePostItem } from "tiktuk-post";

export default {
  name: "ProfilePostList",
  components: {
    ProfilePostItem,
  },
  computed: {
    ...mapGetters(["getUserFeed"]),
  },
};
</script>

<style lang="scss" scoped></style>
