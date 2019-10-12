import Cookies from 'js-cookie'
import uuidv4 from 'uuid'

export default {
  getGameInfo (state, payload) {
    const gameInfo = payload.attributes

    state.game = {
      ...state.game,
      stage: 'greeting',
      title: gameInfo.name,
      description: gameInfo.description,
      image: gameInfo.image,
    }
  },

  getGameUUID (state, payload) {
    state.game.UUID = payload
  },

  setGameUUID (state) {
    Cookies.remove('gameUUID')

    const lifetimeMinutes = 5
    const expires = new Date()
    expires.setTime(
      Date.now() + (lifetimeMinutes * 60 * 1000)
    )

    const newUUID = uuidv4()
    state.game.UUID = newUUID
    Cookies.set('gameUUID', newUUID, { expires })
  },

  getPlayerStats (state, payload) {
    state.player.stats = payload.map((stat) => {
      const attrs = stat.attributes
      const value = 'value' in stat.meta ? stat.meta.value : 0

      return {
        name: attrs.name,
        icon: attrs.icon,
        value,
      }
    })
  },

  startNewGame (state, payload) {
    const gameInfo = payload.attributes

    state.player = {
      stats: [],
    }

    state.game.greeting = {
      title: gameInfo.name,
      description: gameInfo.description,
      image: gameInfo.image,
    }

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
    } else {
      Game.finished = false
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
