import {mount, createLocalVue} from '@vue/test-utils';
import App from '@/App.vue';

import VueRouter from 'vue-router';
import routes from '@/routes.js';

import Missions from '@/pages/Missions';
import Mission from '@/pages/Mission';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('[APP] Rota: /, verifica o roteamento', async () => {
    const router = new VueRouter({routes});
    const wrapper = mount(App, {
      localVue,
      router,
      stubs: ['ApolloQuery'],
    });
    expect(wrapper.findComponent(Missions).exists()).toBe(true);
    expect(wrapper.findComponent(Mission).exists()).toBe(false);
  });

  it('[APP] Rota: /9D1B7E0, verifica o roteamento', async () => {
    const router = new VueRouter({routes});
    const wrapper = mount(App, {
      localVue,
      router,
      stubs: ['ApolloQuery'],
    });

    await router.push('/9D1B7E0');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Missions).exists()).toBe(false);
    expect(wrapper.findComponent(Mission).exists()).toBe(true);
  });
});
