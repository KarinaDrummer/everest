import axios from 'axios'

const baseURL = process.env.VUE_APP_API_ROOT

const errorHandler = (error) => {
  window.dispatchEvent(
    new ErrorEvent('apiHandlerError', {
      error: new Error(error),
      message: error.message,
    })
  )
}

export default {
  getGameInfo: async (gameCode) => {
    try {
      const response = await axios.get(baseURL + gameCode)
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  startNewGame: async (gameCode, gameUUID) => {
    try {
      const response = await axios.post(
        `${baseURL + gameCode}/start`,
        { current_game_id: gameUUID },
      )
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  continueGame: async (gameCode, gameUUID) => {
    try {
      const response = await axios.get(
        `${baseURL + gameCode}/current?current_game_id=${gameUUID}`
      )
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },

  answerQuestion: async (gameCode, gameUUID, questionID, answerID) => {
    try {
      const response = await axios.post(
        `${baseURL + gameCode}/answer`,
        {
          current_game_id: gameUUID,
          question_id: questionID,
          answer_id: answerID,
        },
      )
      return response.data.data
    } catch (error) {
      errorHandler(error)
      throw new Error(error)
    }
  },
}
