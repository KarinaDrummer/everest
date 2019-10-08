<template>
  <v-card>
    <v-card-title
      v-text="title"
    />
    <v-card-text
      v-html="description"
    />
    <div class="image-wrapper">
      <v-img
        :src="image"
        lazy-src="/img/web_loader_dribble.gif"
        aspect-ratio="1"
        max-width="466"
        max-height="300"
      />
    </div>
    <v-card-actions>
      <v-btn
        block
        color="error"
        @click="startGame"
        v-text="'Поехали'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Start',
    components: {
    },
    computed: mapState({
      title: state => state.attributes.title,
      description: state => state.attributes.description,
      image: state => state.attributes.image,
    }),
    mounted () {
      this.getGameDescription()
    },
    methods: mapActions([
      'getGameDescription',
      'startGame',
    ]),
  }
</script>

<style lang="sass">
  .v-card
    width: 498px
    padding: 8px

    .v-card__title
      display: flex
      justify-content: center

    .v-card__text
      text-align: center

    .image-wrapper
      display: flex
      justify-content: center
      padding: 8px

    .v-image
      border-radius: 4px

    .v-card__actions
      display: flex
      flex-direction: column
</style>
