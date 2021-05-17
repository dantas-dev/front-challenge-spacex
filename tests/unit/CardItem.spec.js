import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CardItem from "@/components/CardItem.vue";

describe("CardItem.vue", () => {
  it("Renders props when passed", () => {
    const mission_name = "Launche name";
    const mission_details = "Launche description";
    const mission_launch_date = new Date(10 / 10 / 2010);

    const wrapper = shallowMount(CardItem, {
      propsData: { mission_name, mission_details, mission_launch_date },
    });
    expect(wrapper.text()).to.include(mission_name);
  });
});
