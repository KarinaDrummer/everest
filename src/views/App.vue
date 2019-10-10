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

  export default {
    name: 'App',
    components: {
      Greeting,
      Question,
      Reaction,
    },
    data: () => ({
    }),
    computed: mapState({
      stage: s => s.game.stage,
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
  .v-card
    .v-card__text
      line-height: 1.5
      color: #ffffff !important

    .v-image
      border-radius: 4px
</style>
