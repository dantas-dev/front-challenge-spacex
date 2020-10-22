import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Launches from '@/components/Launches.vue'
const localVue = createLocalVue()

test('displayed last launches correctly with query data', () => {
  const wrapper = shallowMount(Launches, { localVue })
  wrapper.setData({
    launches: [
      {
        mission_name: "Starlink-13 (v1.0)",
        launch_date_local: "2020-10-18T08:25:00-04:00",
        links: {
          article_link: null,
          video_link: "https://youtu.be/UM8CDDAmp98",
          flickr_images: [
            "https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg",
            "https://live.staticflickr.com/65535/50501674637_f16f528728_o.jpg",
            "https://live.staticflickr.com/65535/50501515611_2a3753bed1_o.jpg",
            "https://live.staticflickr.com/65535/50501674632_0d5276b1b5_o.jpg"
          ]
        },
        details: "This mission will launch the thirteenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the fourteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS."
      },
    ],
  })
  expect(wrapper.element).toMatchSnapshot()
})

test('renders correctly when loading last launches', () => {
  const wrapper = mount(Launches, {
    mocks: {
      $apollo: {
        queries: {
          launches: {
            loading: true,
          },
        },
      },
    },
  })

  expect(wrapper.element).toMatchSnapshot();
})
