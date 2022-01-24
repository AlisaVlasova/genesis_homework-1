import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import sinon from "sinon";
import Home from "@/views/Home.vue";

Vue.use(Vuetify);

describe("Home", () => {
  let vuetify;
  const factory = (values = {}) => {
    return shallowMount(Home, {
      data() {
        return {
          ...values,
        };
      },
      vuetify,
    });
  };

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders page", async () => {
    const wrapper = factory();

    expect(wrapper.exists()).toBe(true);
  });
  it("calling getFeedData fn on mounting", () => {
    const getFeedData = sinon.stub();
    const { mounted } = Home;
    const sampleComponent = {
      mounted,
      getFeedData,
    };

    sampleComponent.mounted();

    expect(getFeedData.called).toBe(true);
  });
  it("renders loader while pending", async () => {
    const wrapper = factory({ isLoading: true, isError: false });

    expect(wrapper.findComponent('[data-test="home-loader"]').exists()).toBe(
      true
    );
  });
  it("hides loader when ready", async () => {
    const wrapper = factory({ isLoading: false, isError: false });

    expect(wrapper.findComponent('[data-test="home-loader"]').exists()).toBe(
      false
    );
  });
  it("renders error on request failure", async () => {
    const wrapper = factory({ isLoading: false, isError: true });

    expect(wrapper.findComponent('[data-test="home-error"]').exists()).toBe(
      true
    );
  });
  it("hides error on request success", async () => {
    const wrapper = factory({ isLoading: false, isError: false });

    expect(wrapper.findComponent('[data-test="home-error"]').exists()).toBe(
      false
    );
  });
  it("renders content on request success", async () => {
    const wrapper = factory({ isLoading: false, isError: false });

    expect(wrapper.findComponent('[data-test="home-list"]').exists()).toBe(
      true
    );
  });
});
