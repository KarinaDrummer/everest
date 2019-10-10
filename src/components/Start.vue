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
      title: state => state.game.title,
      description: state => state.game.description,
      image: state => state.game.image,
    }),
    mounted () {
      this.getGameInfo()
    },
    methods: mapActions([
      'getGameInfo',
      'startGame',
    ]),
  }
</script>
