<template>
  <v-card width="500px">
    <player-stats
      values
      class="
        justify-start
        pl-3
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
        lazy-src="/img/web_loader_dribble.gif"
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
        block
        color="pink"
        @click="startNewGame"
        v-text="'Сыграть ещё раз'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import PlayerStats from './PlayerStats.vue'

  export default {
    name: 'Finish',
    components: {
      PlayerStats,
    },
    computed: {
      ...mapState({
        stage: s => s.game.finish,
      }),
      title: vm => vm.stage.title,
      description: vm => vm.stage.description,
      image: vm => vm.stage.image,
    },
    methods: {
      ...mapActions([
        'startNewGame',
      ]),
    },
  }
</script>
