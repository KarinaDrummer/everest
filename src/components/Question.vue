<template>
  <v-card width="500px">
    <v-card-title
      class="
        display-1
      "
      v-text="title"
    />

    <player-stats
      values
      class="
        justify-start
        pl-3
      "
    />

    <v-card-text
      class="
        subtitle-1
        text-center
        font-weight-light
      "
      v-html="description"
    />

    <div
      class="
        image-wrapper
        d-flex
        justify-center
      "
    >
      <v-img
        :src="image"
        lazy-src="/img/web_loader_dribble.gif"
        max-width="476"
        max-height="300"
      />
    </div>

    <v-card-actions
      class="
        d-flex
        flex-column
        pa-3
      "
    >
      <button
        v-for="answer in answers"
        :key="answer.id"
        v-ripple
        block
        color="brown"
        class="
          my-1
          pa-2
          multiline-button
          v-btn--contained
        "
        @click="answerQuestion(answer.id)"
      >
        {{ answer.text }}
      </button>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import PlayerStats from './PlayerStats.vue'

  export default {
    name: 'Question',
    components: {
      PlayerStats,
    },
    computed: {
      ...mapState({
        stage: s => s.game.question,
      }),
      title: vm => `${vm.stage.id}/${vm.stage.of}`,
      description: vm => vm.stage.description,
      image: vm => vm.stage.image,
      answers: vm => vm.stage.answers,
    },
    methods: {
      ...mapActions([
        'answerQuestion',
      ]),
    },
  }
</script>

<style lang="sass" scoped>
  .v-card__actions
    .v-btn
      text-transform: none
      font-weight: 300

    .v-btn.v-btn + .v-btn
      margin: 0

  .multiline-button
    width: 100%
    border-radius: 4px
    outline: none
    background-color: #464650
</style>
