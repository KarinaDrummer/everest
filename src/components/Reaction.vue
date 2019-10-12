<template>
  <v-card width="500px">
    <player-stats
      values
      class="
        font-weight-light
        flex-column
        justify-start
        pa-3
      "
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
        lazy-src="/img/web_loader.gif"
        max-width="476"
        max-height="300"
      />
    </div>

    <v-card-text
      class="
        subtitle-1
        text-center
        font-weight-light
      "
      v-html="description"
    />

    <v-card-actions
      class="
        d-flex
        flex-column
        pa-3
      "
    >
      <v-btn
        v-if="gameIsFinished"
        block
        color="pink"
        @click="getFinalScore"
        v-text="'Узнать результат'"
      />
      <v-btn
        v-else
        block
        color="pink"
        @click="getNextQuestion"
        v-text="'Дальше'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import PlayerStats from './PlayerStats.vue'

  export default {
    name: 'Reaction',
    components: {
      PlayerStats,
    },
    computed: {
      ...mapState({
        stage: s => s.game.reaction,
        gameIsFinished: s => s.game.finished,
      }),
      title: vm => `${vm.stage.id}/${vm.stage.of}`,
      description: vm => vm.stage.description,
      image: vm => vm.stage.image,
      answers: vm => vm.stage.answers,
    },
    methods: {
      ...mapActions([
        'getNextQuestion',
        'getFinalScore',
      ]),
    },
  }
</script>
