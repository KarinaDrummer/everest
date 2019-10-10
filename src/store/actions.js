// const uuidv4 = require('uuid/v4')
import uuidv4 from 'uuid'
import api from '@/api'

export default {
  async getGameInfo ({ commit }) {
    commit('getGameInfo', await api.getGameInfo())
    commit('getGameUUID', uuidv4())
  },

  async startGame ({ commit, state }) {
    commit('startGame', await api.startGame(state.game.UUID))
  },

  async answerQuestion ({ commit }) {
    commit('answerQuestion', await api.answerQuestion())
  },
}
