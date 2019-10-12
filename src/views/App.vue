<template>
  <div>
    <component :is="stage" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Greeting from '@/components/Greeting.vue'
  import Question from '@/components/Question.vue'
  import Reaction from '@/components/Reaction.vue'
  import Finish from '@/components/Finish.vue'

  export default {
    name: 'App',
    components: {
      Greeting,
      Question,
      Reaction,
      Finish,
    },
    data: () => ({
    }),
    computed: mapState({
      stage: state => state.game.stage,
    }),
    created () {
      this.getCurrentStage()
    },
    methods: {
      ...mapActions([
        'getCurrentStage',
      ]),
    },
  }
</script>

<style lang="sass">
  .theme--dark.v-card
    background-color: #282828

  .v-card
    min-height: 400px

    .image-wrapper
      min-height: 200px

    .v-image
      border-radius: 4px

  .v-card__text
    line-height: 1.5
    color: #ffffff !important

  .v-card__text a
    color: #fdff8c
    text-decoration: none
</style>
