import * as Cookies from 'js-cookie'

export default {
  getGameInfo (state, payload) {
    const data = payload.attributes

    state.game = {
      ...state.game,
      title: data.name,
      description: data.description,
      image: data.image,
    }
  },

  getGameUUID (state, payload) {
    state.game.UUID = payload
  },

  startGame (state, payload) {
    state.game.stage = 'question'
  },

  getPlayerStats (state, payload) {
    // state.character.features.push()
    state.player.stats = payload
  },
}
