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

  async startGame ({ commit, state }) {
    commit('continueGame', await api.startGame(state.game.UUID))
  },

  async answerQuestion ({ commit, state }, answerId) {
    commit('answerQuestion', await api.answerQuestion(
      state.game.UUID,
      state.game.questionId,
      answerId
    ))
  },
}
