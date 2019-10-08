export default {
  getGameDescription (state, payload) {
    console.log(payload)
    const attrs = payload.attributes

    state.attributes = {
      title: attrs.name,
      description: attrs.description,
      image: attrs.image,
    }

    // state.character.features.push()
  },

  startGame (state) {

  },
}
