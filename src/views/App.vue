<template>
  <div>
    <component :is="stage" />
  </div>
</template>

<script>
  import Start from '@/components/Start.vue'
  import Question from '@/components/Question.vue'
  import Reaction from '@/components/Reaction.vue'
  import Finish from '@/components/Finish.vue'
  import Error from './Error.vue'

  export default {
    name: 'App',
    components: {
      Start,
      Question,
      Reaction,
      Finish,
      Error,
    },
    data: () => ({
    }),
    computed: {
      stage: vm => vm.$store.state.game.stage,
    },
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
