import api from '@/api'

export default {
  async getGameDescription ({ commit }) {
    commit('getGameDescription', await api.getGameDescription())
  },

  async startGame ({ commit }) {
    commit('startGame', await api.startGame())
  },
}
