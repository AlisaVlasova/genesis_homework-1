<template>
  <v-container class="profile">
    <div v-if="!isLoading" data-test="profile-content">
      <div class="profile__info" v-if="getUserInfo">
        <v-avatar class="profile__avatar" width="100px" height="100px">
          <img
            :src="getUserInfo.user.avatarLarger"
            :alt="getUserInfo.user.nickname"
            data-test="profile-avatar"
          />
        </v-avatar>
        <p class="profile__name" data-test="profile-nickname">
          {{ getUserInfo.user.nickname }}
        </p>
        <v-row class="profile__stats">
          <v-col class="profile__stats-item" data-test="profile-followers">
            {{ getUserInfo.stats.followerCount }}
            <p>Подписчики</p>
          </v-col>
          <v-col class="profile__stats-item" data-test="profile-followings">
            {{ getUserInfo.stats.followingCount }}
            <p>Подписки</p>
          </v-col>
          <v-col class="profile__stats-item" data-test="profile-hearts">
            {{ getUserInfo.stats.heartCount }}
            <p>Лайки</p>
          </v-col>
        </v-row>
      </div>
      <profile-post-list />
    </div>

    <v-progress-circular
      class="profile__loader"
      data-test="profile-loader"
      indeterminate
      v-if="isLoading"
    ></v-progress-circular>

    <p
      class="profile__error"
      v-if="!isLoading && isError"
      data-test="profile-error"
    >
      Something went wrong :(<br />
      Please try again later
    </p>
  </v-container>
</template>

<script>
import ProfilePostList from "@/components/ProfilePostList";

import { mapGetters, mapMutations } from "vuex";
import { getUserInfoData } from "@/api/getUserInfoData.js";
import { getUserFeedData } from "@/api/getUserFeedData.js";

export default {
  name: "Profile",
  components: {
    ProfilePostList,
  },
  data: () => ({
    isLoading: false,
    isError: false,
  }),
  computed: {
    ...mapGetters(["getUserInfo", "getUserFeed"]),
  },
  methods: {
    ...mapMutations(["setUserInfo", "setUserFeed"]),
    async getFeedData() {
      this.isLoading = true;
      this.isError = false;

      try {
        const userInfo = await getUserInfoData(this.$route.params.id);
        const userFeed = await getUserFeedData(this.$route.params.id);

        this.setUserInfo(userInfo);
        this.setUserFeed(userFeed);
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getFeedData();
  },
};
</script>

<style lang="scss" scoped>
.profile {
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 24px;
  }

  &__avatar {
    margin-bottom: 12px;
  }

  &__name {
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
  }

  &__stats {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      width: fit-content;
    }
  }

  &__stats-item {
    display: flex;

    padding: 6px 12px;

    font-size: 18px;
    font-weight: bold;

    p {
      margin: 0 0 0 6px;

      font-size: 16px;
      font-weight: normal;
    }
  }

  &__loader,
  &__error {
    position: absolute;
    left: 50%;
    top: calc(50% - 56px);

    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
      top: calc(50% - 64px);
    }
  }

  &__error {
    width: 100%;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 110%;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }
}
</style>
