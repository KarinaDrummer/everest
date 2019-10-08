import axios from 'axios'

const baseUrl = 'https://game.heroleague.ru/api/v1/games/na_everest_liyboi_tsenoi'

export default {
  getGameDescription: async () => {
    try {
      const response = await axios.get(baseUrl)
      return response.data.data
    } catch (error) {
      return error
    }
  },

  startGame: async () => {
    try {
      const response = await axios.post(`${baseUrl}/start`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  },
}
