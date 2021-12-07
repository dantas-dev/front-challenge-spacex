import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const api = "https://api.spacex.land/graphql/"

const SET_INDEX = "SET_INDEX";
const SET_TAB = "SET_TAB";
const SET_CARDS = "SET_CARDS";

const moduleInfo = {
  state: {
    index: null,
    tab: 0,
    cards: [],
  },
  getters: {
    index: (state) => {
      return state.index;
    },
    tab: (state) => {
      return state.tab;
    },
  },
  mutations: {
    [SET_INDEX](state, index) {
      state.index = index;
    },
    [SET_TAB](state, tab) {
      state.tab = tab;
    },
    [SET_CARDS](state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    async fetchCard({
      commit,
    }) {
      try {
        var result = await axios({
          method: "POST",
          url: api,
          data: {
            query: `
              query {
                launchesPast(limit: 10) {
                  id
                  mission_name
                  launch_date_local
                  details
                  launch_site {
                    site_name_long
                  }
                  links {
                    video_link
                    flickr_images
                  },
                }
              }
          `
          }
        });
        commit('SET_CARDS', result.data.data.launchesPast);
      } catch (error) {
        alert("Algo deu errado! tente mais tarde.")
      }
    }
  }
}

const store = new Vuex.Store({
  modules: {
    modinfo: moduleInfo,
  },
});

export default store;