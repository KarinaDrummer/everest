<template>
  <v-card width="500px">
    <v-card-title
      class="
        display-1
        d-flex
        justify-center
      "
      v-text="title"
    />

    <v-card-text
      class="
        subtitle-1
        text-center
        font-weight-light
      "
      v-html="description"
    />

    <p
      class="
        player-stats-headline
        body-1
        text-center
        font-weight-light
      "
      v-text="'Основные показатели, по которым начисляем баллы:'"
    />
    <player-stats
      class="
        font-weight-bold
        justify-space-around
        pa-0
        mb-2
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
        v-text="'Поехали'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import PlayerStats from './PlayerStats.vue'

  export default {
    name: 'Greeting',
    components: {
      PlayerStats,
    },
    computed: {
      ...mapState({
        title: s => s.game.title,
        description: s => s.game.description,
        image: s => s.game.image,
      }),
    },
    methods: {
      ...mapActions([
        'startNewGame',
      ]),
    },
  }
</script>
