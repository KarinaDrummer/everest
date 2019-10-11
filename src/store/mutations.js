import Cookies from 'js-cookie'
import uuidv4 from 'uuid'
import initialState from './state'

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
      console.log(stat.meta)
      return {
        name: stat.attributes.name,
        icon: stat.attributes.icon,
        value: 0,
      }
    })
  },

  startNewGame (state, payload) {
    state.player = initialState.player
    state.game = initialState.game
    state.stage = 'greeting'
  },

  continueGame (state, payload) {
    const Game = state.game
    const Player = state.player
    const PlayerStats = payload.relationships.characteristics.data

    const isFinished = payload.attributes.finished
    const haveQuestion = 'question' in payload.meta
    const haveReaction = 'reaction' in payload.meta

    let stage

    if (isFinished) {
      Game.finished = true
      stage = 'reaction'
      const stageData = payload.meta.ending.data

      Game.finish = {
        ...Game.finish,
        title: stageData.attributes.name,
        description: stageData.attributes.description,
        image: stageData.attributes.image,
      }
    }

    if (haveQuestion) {
      stage = 'question'
      const stageData = payload.meta.question.data

      Game.question = {
        ...Game.question,
        title: stageData.attributes.name,
        description: stageData.attributes.description,
        image: stageData.attributes.image,
        id: stageData.meta.index + 1,
        of: stageData.meta.count,
      }

      const answersData = stageData.relationships.answers.data
      Game.question.answers = answersData.map(answer => ({
        id: answer.id,
        text: answer.attributes.description,
      }))
    }

    if (haveReaction) {
      stage = 'reaction'
      const stageData = payload.meta.reaction.data

      Game.reaction = {
        ...Game.reaction,
        title: stageData.attributes.name,
        description: stageData.attributes.description,
        image: stageData.attributes.image,
      }
    }

    Player.stats = Player.stats.map((stat, index) => ({
      ...stat,
      value: PlayerStats[index].meta.value,
    }))

    Game.stage = stage
  },

  getNextQuestion (state) {
    state.game.stage = 'question'
  },

  getFinalScore (state) {
    state.game.stage = 'finish'
  },
}
