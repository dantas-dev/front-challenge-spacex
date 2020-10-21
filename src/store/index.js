import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    missionExpanded: {},
    inTransition: true
  },
  mutations: {
    SET_MISSION_EXPANDED(state,payload){
      state.missionExpanded = payload
    },
    SET_TRANSITION (state, payload) {
      state.inTransition = payload
    },
  },
  actions: {
    changeMission (state, payload) {
      payload && payload.id !== state.state.missionExpanded.id ? state.commit('SET_MISSION_EXPANDED', payload) : state.commit('SET_MISSION_EXPANDED', {})
    },
  },
  getters: {
    transition: state => state.inTransition,
    missionExpanded: state => state.missionExpanded,
  }
})
