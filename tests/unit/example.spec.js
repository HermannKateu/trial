import { mount } from '@vue/test-utils'
import TabButton from '@/components/TabButton.vue'

describe("Verify button", () => {
  it("button", () => {
    const wrapper = mount(TabButton);
    wrapper.find("button");
    expect(wrapper.find("button").text()).toBe("Button")
  })
});