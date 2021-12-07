import {shallowMount} from '@vue/test-utils';
import MissionCard from '@/components/MissionCard.vue';

const mockMission = {
  'description': 'Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft. The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA extended the Phase 1 contracts by ordering an additional three resupply flights from SpaceX and one from Orbital Sciences. After additional extensions late in 2015, SpaceX is currently scheduled to have a total of 20 missions and Orbital 10. SpaceX began flying resupply missions in 2012, using Dragon cargo spacecraft launched on Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air Force Station, Cape Canaveral, Florida. Orbital Sciences began deliveries in 2013 using Cygnus spacecraft launched on the Antares rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport (MARS), Wallops Island, Virginia. A second phase of contracts (known as CRS2) were solicited and proposed in 2014. They were awarded in January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX, for cargo transport flights beginning in 2019 and expected to last through 2024.',
  'id': 'EE86F74',
  'manufacturers': [
    'SpaceX',
  ],
  'name': 'Commercial Resupply Services',
  'twitter': 'https://twitter.com/SpaceX',
  'website': 'https://www.spacex.com/',
  'wikipedia': 'https://en.wikipedia.org/wiki/Commercial_Resupply_Services#SpaceX',
  'payloads': [
    {
      'id': 'Dragon Qualification Unit',
      'manufacturer': 'SpaceX',
      'payload_type': 'Dragon Boilerplate',
      'reused': false,
      'payload_mass_lbs': null,
      'payload_mass_kg': null,
      'nationality': 'United States',
    },
    {
      'id': 'COTS Demo Flight 1',
      'manufacturer': 'SpaceX',
      'payload_type': 'Dragon 1.0',
      'reused': false,
      'payload_mass_lbs': null,
      'payload_mass_kg': null,
      'nationality': 'United States',
    },
    {
      'id': 'COTS Demo Flight 2',
      'manufacturer': 'SpaceX',
      'payload_type': 'Dragon 1.0',
      'reused': false,
      'payload_mass_lbs': 1157,
      'payload_mass_kg': 525,
      'nationality': 'United States',
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
};

describe('MissionCard.vue', () => {
  it('[CARD DE MISSÃO] Dados: MISSÃO null, deve existir o erro na tela', () => {
    const wrapper = shallowMount(MissionCard, {
      propsData: {mission: null},
      stubs: ['router-link'],
    });
    expect(wrapper.find('.js-erro').exists()).toBe(true);
  });

  it('[CARD DE MISSÃO] Dados: MISSÃO nula, verifica o render do CARD', () => {
    const wrapper = shallowMount(MissionCard, {
      propsData: {mission: null},
      stubs: ['router-link'],
    });
    expect(wrapper.findComponent(MissionCard).exists()).toBe(true);
  });

  it('[CARD DE MISSÃO] Dados: MISSÃO válida, verifica o render do CARD', () => {
    const wrapper = shallowMount(MissionCard, {
      propsData: {mission: mockMission},
      stubs: ['router-link'],
    });
    expect(wrapper.findComponent(MissionCard).exists()).toBe(true);
  });

  it(
      '[CARD DE MISSÃO] Dados: MISSÃO válida, verifica o (NAME) na tela ',
      () => {
        const wrapper = shallowMount(MissionCard, {
          propsData: {
            mission: mockMission,
          },
          stubs: ['router-link'],
        });
        expect(wrapper.find('.js-erro').exists()).toBe(false);
        expect(wrapper.find('.card-title').exists()).toBe(true);
        expect(wrapper.find('.card-title').text()).toBe(mockMission.name);
      },
  );

  it(
      '[CARD DE MISSÃO] Dados: MISSÃO válida, verifica a (DESCRIPTION) na tela',
      () => {
        const wrapper = shallowMount(MissionCard, {
          propsData: {
            mission: mockMission,
          },
          stubs: ['router-link'],
        });
        expect(wrapper.find('.js-erro').exists()).toBe(false);
        expect(wrapper.find('.js-description').exists()).toBe(true);
      },
  );

  it(
      '[CARD DE MISSÃO] Dados: MISSÃO válida, verifica o (LINK) na tela',
      () => {
        const wrapper = shallowMount(MissionCard, {
          propsData: {
            mission: mockMission,
          },
          stubs: ['router-link'],
        });
        expect(wrapper.find('.js-erro').exists()).toBe(false);
        expect(wrapper.find('.js-link-ref').exists()).toBe(true);
      },
  );

  test(
      '[CARD DE MISSÃO] Dados: MISSÃO válida, testa o click no LINK',
      async () => {
        const wrapper = shallowMount(MissionCard, {
          propsData: {mission: mockMission},
          stubs: ['router-link'],
        });
        await wrapper.find('.js-link-ref').trigger('click');
      },
  );
});

