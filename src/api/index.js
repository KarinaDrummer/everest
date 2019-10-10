import axios from 'axios'

const baseUrl = 'https://game.heroleague.ru/api/v1/games/na_everest_liyboi_tsenoi'

const errorHandler = (error) => {
  window.dispatchEvent(
    new ErrorEvent('apiHandlerError', {
      error: new Error(error),
      message: error.message,
    })
  )
}

export default {
  getGameInfo: async () => {
    try {
      const response = await axios.get(baseUrl)
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  startGame: async (gameUUID) => {
    try {
      const response = await axios.post(
        `${baseUrl}/start`,
        {
          current_game_id: gameUUID,
        },
      )
      console.log(response)
      return response.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },
}
