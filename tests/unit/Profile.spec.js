// import Vue from 'vue';
// import Vuetify from 'vuetify';
// import { shallowMount } from '@vue/test-utils';
// import sinon from 'sinon';
// import Profile from '@/views/Profile.vue';

// Vue.use(Vuetify);

// describe('Profile', () => {
//   const $route = {
//     path: '/profile/1'
//   }
//   let vuetify;
//   const factory = (values = {}) => {
//     return shallowMount(Profile, {
//       data () {
//         return {
//           ...values
//         }
//       },
//       vuetify,
//       $route,
//     })
//   }

//   beforeEach(() => {
//     vuetify = new Vuetify();
//   });

//   it("renders component", async () => {
//     const wrapper = factory();

//     expect(wrapper.exists()).toBe(true);
//   });
//   // it('calling getFeedData fn on mounting', () => {
//   //   const getFeedData = sinon.stub();
//   //   const { mounted } = Profile;
//   //   const sampleComponent = {
//   //       mounted,
//   //       getFeedData
//   //   };

//   //   sampleComponent.mounted();

//   //   expect(getFeedData.called).toBe(true);
//   // });
//   // it("shows loader while pending", async () => {
//   //   const wrapper = factory();

//   //   await wrapper.setData({ isLoading: true, isError: false });

//   //   expect(wrapper.findComponent('[data-test="profile-loader"]').exists()).toBe(true);
//   // });
//   // it("hides loader when ready", async () => {
//   //   const wrapper = factory();

//   //   await wrapper.setData({ isLoading: false, isError: false });

//   //   expect(wrapper.findComponent('[data-test="profile-loader"]').exists()).toBe(false);
//   // });
//   // it("shows error on request failure", async () => {
//   //   const wrapper = factory();

//   //   await wrapper.setData({ isLoading: false, isError: true });

//   //   expect(wrapper.findComponent('[data-test="profile-error"]').exists()).toBe(true);
//   // });
//   // it("hides error on request success", async () => {
//   //   const wrapper = factory();

//   //   await wrapper.setData({ isLoading: false, isError: false });

//   //   expect(wrapper.findComponent('[data-test="profile-error"]').exists()).toBe(false);
//   // });
//   // it("shows content on request success", async () => {
//   //   const wrapper = factory();

//   //   await wrapper.setData({ isLoading: false, isError: false });

//   //   expect(wrapper.findComponent('[data-test="profile-content"]').exists()).toBe(true);
//   // });
// });
