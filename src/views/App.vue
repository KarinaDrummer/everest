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
    .v-card__text
      line-height: 1.5
      color: #ffffff !important

    .v-image
      border-radius: 4px
</style>
