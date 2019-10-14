import Cookies from 'js-cookie'
import uuidv4 from 'uuid'

const haveReaction = data => 'reaction' in data
const haveQuestion = data => 'question' in data

export default {
  getGameUUID (state) {
    state.game.UUID = Cookies.get('gameUUID')
  },

  setGameUUID (state) {
    Cookies.remove('gameUUID')

    const lifetimeMinutes = 1440
    const expires = new Date()
    expires.setTime(
      Date.now() + (lifetimeMinutes * 60 * 1000)
    )

    const newUUID = uuidv4()
    state.game.UUID = newUUID
    Cookies.set('gameUUID', newUUID, { expires })
  },

  getPlayerStats (state, payload) {
    const statsData = payload.relationships.characteristics.data
    const diffData = state.game.stage === 'reaction' &&
      payload.meta.reaction.data.relationships.diff

    state.player.stats = statsData.map((data, i) => {
      const stat = {
        name: data.attributes.name,
        icon: data.attributes.icon,
        value: 'value' in data.meta ? data.meta.value : 0,
      }

      if (diffData) {
        const { diff } = diffData.data[i].meta
        stat.change = diff < 0 ? diff.toString() : `+${diff}`
        stat.class = diff < 0 ? 'decrement' : 'increment'
      }

      return stat
    })
  },

  showIntro (state, payload) {
    const gameInfo = payload.attributes

    state.player = {
      stats: [],
    }

    state.game.intro = {
      title: gameInfo.name,
      description: gameInfo.description,
      image: gameInfo.image,
    }

    state.game.stage = 'intro'
  },

  continueGame (state, payload) {
    let stage

    if (payload.attributes.finished) {
      state.game.isFinished = true
      stage = 'reaction'

      const stageData = payload.meta.ending.data

      state.game.finish = {
        ...state.game.finish,
        title: stageData.attributes.name,
        description: stageData.attributes.description,
        image: stageData.attributes.image,
      }
    } else {
      state.game.isFinished = false
    }

    if (haveQuestion(payload.meta)) {
      stage = 'question'
      const stageData = payload.meta.question.data

      state.game.question = {
        ...state.game.question,
        title: stageData.attributes.name,
        description: stageData.attributes.description,
        image: stageData.attributes.image,
        id: stageData.meta.index + 1,
        of: stageData.meta.count,
      }

      const answersData = stageData.relationships.answers.data
      state.game.question.answers = answersData.map(answer => ({
        id: answer.id,
        text: answer.attributes.description,
      }))
    }

    if (haveReaction(payload.meta)) {
      stage = 'reaction'
      const stageData = payload.meta.reaction.data

      state.game.reaction = {
        ...state.game.reaction,
        title: stageData.attributes.name,
        description: stageData.attributes.description,
        image: stageData.attributes.image,
      }
    }

    state.game.stage = stage
  },

  getNextQuestion (state) {
    state.game.stage = 'question'
  },

  getFinalScore (state) {
    state.game.stage = 'finish'
  },
}
