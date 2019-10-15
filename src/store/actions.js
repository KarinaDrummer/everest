import api from '@/api'

const getGameCode = state => state.route.path.substr(1)

export default {
  async setStage ({ dispatch, commit, state }) {
    commit('getGameUUID')

    state.game.UUID
      ? await dispatch('continueGame')
      : await dispatch('showIntro')
  },

  async getPlayerStats ({ commit, state }, data) {
    commit('getPlayerStats', data || await api.getGameInfo(getGameCode(state)))
  },

  async showIntro ({ dispatch, commit, state }) {
    const data = await api.getGameInfo(getGameCode(state))
    commit('showIntro', data)
    await dispatch('getPlayerStats', data)
  },

  async startNewGame ({ dispatch, commit, state }) {
    commit('setGameUUID')
    const data = await api.startNewGame(
      getGameCode(state),
      state.game.UUID
    )
    commit('continueGame', data)
    await dispatch('getPlayerStats', data)
  },

  async continueGame ({ dispatch, commit, state }) {
    const data = await api.continueGame(
      getGameCode(state),
      state.game.UUID
    )
    commit('continueGame', data)
    await dispatch('getPlayerStats', data)
  },

  async answerQuestion ({ dispatch, commit, state }, answerID) {
    const data = await api.answerQuestion(
      getGameCode(state),
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
