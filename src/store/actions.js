// const uuidv4 = require('uuid/v4')
import uuidv4 from 'uuid'
import state from './state'
import api from '@/api'

const { game } = state

export default {
  async getGameInfo ({ commit }) {
    commit('getGameInfo', await api.getGameInfo())
  },

  async getGameUUID ({ commit }) {
    commit('getGameUUID', uuidv4())
  },

  async startGame ({ commit }) {
    commit('startGame', await api.startGame())
  },

  async continueGame ({ commit }) {
    commit('continueGame', await api.continueGame(game.UUID))
  },

  async answerQuestion ({ commit }) {
    commit('answerQuestion', await api.answerQuestion())
  },
}
