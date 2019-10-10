import * as Cookies from 'js-cookie'

export default {
  getGameInfo (state, payload) {
    const gameInfo = payload.attributes
    const playerInfo =
      Object.values(payload.relationships.characteristics.data)

    state.game = {
      ...state.game,
      title: gameInfo.name,
      description: gameInfo.description,
      image: gameInfo.image,
    }

    state.player.stats = playerInfo.map(stat => ({
      name: stat.attributes.name,
      icon: stat.attributes.icon,
    }))
  },

  getGameUUID (state, payload) {
    state.game.UUID = payload
  },

  startGame (state, payload) {
    state.game.stage = 'question'

    // state
  },
}
