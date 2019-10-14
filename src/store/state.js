const placeholder = 'Connecting...'

export default {
  player: {
    stats: [],
  },

  game: {
    UUID: '',
    stage: '',
    isFinished: false,
    intro: {
      title: placeholder,
      description: placeholder,
      image: '',
    },
    question: {
      id: 0,
      of: 0,
      title: placeholder,
      description: placeholder,
      image: '',
      answers: [],
    },
    reaction: {
      title: placeholder,
      description: placeholder,
      image: '',
    },
    finish: {
      title: placeholder,
      description: placeholder,
      image: '',
    },
  },
}
