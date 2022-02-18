import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ProfilePostList from "@/components/ProfilePostList.vue";

const localVue = createLocalVue();

localVue.use(Vuex);
Vue.use(Vuetify);

describe("ProfilePostList", () => {
  let getters;
  let store;
  let vuetify;
  const factory = (values = {}) => {
    return shallowMount(ProfilePostList, {
      data() {
        return {
          ...values,
        };
      },
      store,
      localVue,
      vuetify,
    });
  };

  beforeEach(() => {
    getters = {
      getUserFeed: () => ({
        statusCode: 0,
        itemList: [
          {
            id: "7031029610628320518",
            desc: "#oleg_sheff",
            createTime: 1637039152,
            video: {
              id: "7031029610628320518",
              height: 1024,
              width: 576,
              duration: 8,
              ratio: "720p",
              cover:
                "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6e94ebc0a81f48e884cc96c4d14b1bce?x-expires=1637078400&x-signature=G6CGm9GCyKc%2BVho3lA%2F28gS6Nyg%3D",
              originCover:
                "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0723d82a8fef493dae593393efb3d3be_1637039153?x-expires=1637078400&x-signature=mzalAEmkI6nISa7DVTKg3v%2FAIN8%3D",
              dynamicCover:
                "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/53656049821a4aca8b3630aa9f78de15_1637039154?x-expires=1637078400&x-signature=OxDtCPqgSDhaREx5pwBpKeVmy0U%3D",
              playAddr:
                "https://v39-eu.tiktokcdn.com/d1184227caf13ef1dc53685996e3c40f/6193dab1/video/tos/useast2a/tos-useast2a-pve-0068/8fd9ea2ab95040e79479942caad0ad6a/?a=1233&br=1748&bt=874&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111161020070101890362000305A3F8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZtOTg6ZmxxOTMzNzczM0ApOTRkZzVlZztpNzY8OTtkPGdhYWVzcjRnczVgLS1kMTZzczMwNDIyYzA1MV41MS42NjY6Yw%3D%3D&vl=&vr=%22",
              downloadAddr:
                "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/f527b7a93c154168a7bfa5272af59662/?a=1988&br=1618&bt=809&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&expire=1637078708&ft=wUyFfFGnkag3-I&l=2021111610050001018907420806051B9B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=amxqZ2g6ZjltOTMzNzczM0ApZztnOTw1M2VoNzMzOmU3N2cvYmAxcjRfbDZgLS1kMTZzc2FjMi4uYV8xX2I0YV81XzQ6Yw%3D%3D&signature=4b4e8d99bfdfbfa251c1d1525fa1aa5c&tk=7001503582143808518&vl=&vr=",
              shareCover: [
                "",
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/0723d82a8fef493dae593393efb3d3be_1637039153~tplv-tiktok-play.jpeg?x-expires=1637078400&x-signature=L2eiboZgYBMMtiu2MUUW5EVGxLk%3D",
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/0723d82a8fef493dae593393efb3d3be_1637039153~tplv-tiktokx-share-play.jpeg?x-expires=1637078400&x-signature=QtOiTU9SgFXP4pvZf%2Foj%2BQ4jres%3D",
              ],
              reflowCover:
                "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6e94ebc0a81f48e884cc96c4d14b1bce?x-expires=1637078400&x-signature=G6CGm9GCyKc%2BVho3lA%2F28gS6Nyg%3D",
              bitrate: 828461,
              encodedType: "normal",
              format: "mp4",
              videoQuality: "normal",
              encodeUserTag: "",
              codecType: "h264",
              definition: "720p",
            },
            author: {
              id: "6787631781866587141",
              uniqueId: "oleg_sheff",
              nickname: "Олег",
              avatarThumb:
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1727974373153eaef0f6f558bf217bc8~c5_100x100.jpeg?x-expires=1637143200&x-signature=9CiaTaf3MNXs8VJ4UbqKDhlCY8k%3D",
              avatarMedium:
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1727974373153eaef0f6f558bf217bc8~c5_720x720.jpeg?x-expires=1637143200&x-signature=4rHCslWH7Lu895CrcR5hujN4k8E%3D",
              avatarLarger:
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1727974373153eaef0f6f558bf217bc8~c5_1080x1080.jpeg?x-expires=1637143200&x-signature=Z3nYLmqSSF4HJkIwoDZmp6oOODs%3D",
              signature:
                "🔥 EXCLUSIVE 🔥\nпопугай ЖАКО 🦜\nзовут Жора 🤘\nРаботает за лайки ❤ и коменты 💬",
              verified: false,
              secUid:
                "MS4wLjABAAAAaKbDq-1WjuYX_DPwvnAyzgPF32lo95K-8MHSrr0HD_5nQ1L-yazTLD2acOEE1En6",
              secret: false,
              ftc: false,
              relation: 0,
              openFavorite: false,
              commentSetting: 0,
              duetSetting: 0,
              stitchSetting: 0,
              privateAccount: false,
            },
            music: {
              id: "7016773558680438786",
              title: "Доброго вечора - Where Are You From",
              playUrl:
                "https://sf58-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/dca16b7ed1f0415d9700b10c5a3b5439",
              coverThumb:
                "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/cdeb257c8bf44db692a1c8b0b88f6f5c~c5_100x100.jpeg",
              coverMedium:
                "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/cdeb257c8bf44db692a1c8b0b88f6f5c~c5_200x200.jpeg",
              coverLarge:
                "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/cdeb257c8bf44db692a1c8b0b88f6f5c~c5_720x720.jpeg",
              authorName: "PROBASS ∆ HARDI",
              original: false,
              duration: 60,
              album: "Доброго вечора - Where Are You From",
            },
            challenges: [
              {
                id: "1704101514523653",
                title: "oleg_sheff",
                desc: "",
                profileThumb: "",
                profileMedium: "",
                profileLarger: "",
                coverThumb: "",
                coverMedium: "",
                coverLarger: "",
                isCommerce: false,
              },
            ],
            stats: {
              diggCount: 6,
              shareCount: 0,
              commentCount: 0,
              playCount: 69,
            },
            duetInfo: {
              duetFromId: "0",
            },
            originalItem: false,
            officalItem: false,
            textExtra: [
              {
                awemeId: "",
                start: 0,
                end: 11,
                hashtagName: "oleg_sheff",
                hashtagId: "1704101514523653",
                type: 1,
                userId: "",
                isCommerce: false,
                userUniqueId: "",
                secUid: "",
                subType: 0,
              },
            ],
            secret: false,
            forFriend: false,
            digged: false,
            itemCommentStatus: 0,
            showNotPass: false,
            vl1: false,
            itemMute: false,
            effectStickers: [
              {
                name: "Газета TikTok Times",
                ID: "1176860",
              },
            ],
            authorStats: {
              followingCount: 305,
              followerCount: 62900,
              heartCount: 1100000,
              videoCount: 226,
              diggCount: 9426,
              heart: 1100000,
            },
            privateItem: false,
            duetEnabled: true,
            stitchEnabled: true,
            shareEnabled: true,
            isAd: false,
            duetDisplay: 0,
            stitchDisplay: 0,
          },
        ],
        cursor: "1633719196000",
        hasMore: true,
      }),
    };

    store = new Vuex.Store({
      getters,
    });
  });

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders page", () => {
    const wrapper = factory(ProfilePostList);

    expect(wrapper.exists()).toBe(true);
  });
});
