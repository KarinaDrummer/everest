import Cookies from 'js-cookie'
import uuidv4 from 'uuid'

export default {
  getGameInfo (state, payload) {
    const gameInfo = payload.attributes

    state.game = {
      ...state.game,
      title: gameInfo.name,
      description: gameInfo.description,
      image: gameInfo.image,
    }
  },

  getGameUUID (state, payload) {
    state.game.UUID = payload
  },

  setGameUUID (state) {
    const newUUID = uuidv4()
    state.game.UUID = newUUID
    Cookies.set('gameUUID', newUUID, /* { expires: ? } */)
  },

  getPlayerStats (state, payload) {
    state.player.stats = payload.map((stat) => {
      const { value } = stat.attributes
      return {
        name: stat.attributes.name,
        icon: stat.attributes.icon,
        value: value || 0,
      }
    })
  },

  continueGame (state, payload) {
    const responseType = payload.meta.question.data.type
    const playerStats = payload.relationships.characteristics.data

    let stage,
      stageData

    switch (responseType) {
      case 'reactions':
        stage = 'reaction'
        break
      default:
        stage = 'question'
        stageData = payload.meta.question.data
        break
    }

    state.game = {
      ...state.game,
      stage,
      title: stageData.attributes.name,
      description: stageData.attributes.description,
      image: stageData.attributes.image,
      questionId: stageData.meta.index + 1,
      questionsAmount: stageData.meta.count,
    }

    state.player.stats = state.player.stats.map((stat, index) => ({
      ...stat,
      value: playerStats[index].meta.value,
    }))

    const answersData = stageData.relationships.answers.data
    state.game.answers = answersData.map(answer => ({
      id: answer.id,
      text: answer.attributes.description,
    }))
  },
}
