import api from '@/api'

export default {
  async setStage ({ dispatch, commit, state }) {
    commit('getGameUUID')

    state.game.UUID
      ? await dispatch('continueGame')
      : await dispatch('showIntro')
  },

  async getPlayerStats ({ commit }, data) {
    commit('getPlayerStats', data || await api.getGameInfo())
  },

  async showIntro ({ dispatch, commit }) {
    const data = await api.getGameInfo()
    commit('showIntro', data)
    await dispatch('getPlayerStats', data)
  },

  async startNewGame ({ dispatch, commit, state }) {
    commit('setGameUUID')
    const data = await api.startNewGame(state.game.UUID)
    commit('continueGame', data)
    await dispatch('getPlayerStats', data)
  },

  async continueGame ({ dispatch, commit, state }) {
    const data = await api.continueGame(state.game.UUID)
    commit('continueGame', data)
    await dispatch('getPlayerStats', data)
  },

  async answerQuestion ({ dispatch, commit, state }, answerID) {
    const data = await api.answerQuestion(
      state.game.UUID,
      state.game.question.id,
      answerID
    )
    await dispatch('continueGame', data)
  },

  async getNextQuestion ({ commit }) {
    commit('getNextQuestion')
  },

  async getFinalScore ({ commit }) {
    commit('getFinalScore')
  },
}
