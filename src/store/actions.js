import Cookies from 'js-cookie'
import api from '@/api'

export default {
  async getCurrentStage ({ commit, state }) {
    const savedUUID = Cookies.get('gameUUID')

    if (savedUUID) {
      commit('getGameUUID', savedUUID)

      const gameInfo = await api.continueGame(savedUUID)
      commit('continueGame', gameInfo)
      commit('getPlayerStats', gameInfo.relationships.characteristics.data)
    } else {
      commit('setGameUUID')

      const gameInfo = await api.getGameInfo()
      commit('getGameInfo', gameInfo)
      commit('getPlayerStats', gameInfo.relationships.characteristics.data)
    }
  },

  async startNewGame ({ commit, state }) {
    Cookies.remove('gameUUID')
    commit('setGameUUID')
    commit('startNewGame', await api.startNewGame(state.game.UUID))
  },

  async continueGame ({ commit, state }) {
    commit('continueGame', await api.continueGame(state.game.UUID))
  },

  async answerQuestion ({ commit, state }, answerId) {
    commit('continueGame', await api.answerQuestion(
      state.game.UUID,
      state.game.question.id,
      answerId
    ))
  },

  async getNextQuestion ({ commit }) {
    commit('getNextQuestion')
  },

  async getFinalScore ({ commit }) {
    commit('getFinalScore')
  },
}
