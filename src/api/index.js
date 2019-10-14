import axios from 'axios'

const apiRoot = process.env.VUE_APP_API_ROOT
const gameCode = 'na_everest_liyboi_tsenoi'
const baseURL = apiRoot + gameCode

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
      const response = await axios.get(baseURL)
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  startNewGame: async (gameUUID) => {
    try {
      const response = await axios.post(
        `${baseURL}/start`,
        { current_game_id: gameUUID },
      )
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  continueGame: async (gameUUID) => {
    try {
      const response = await axios.get(
        `${baseURL}/current?current_game_id=${gameUUID}`
      )
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  answerQuestion: async (gameUUID, questionId, answerId) => {
    try {
      const response = await axios.post(
        `${baseURL}/answer`,
        {
          current_game_id: gameUUID,
          question_id: questionId,
          answer_id: answerId,
        },
      )
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },
}
