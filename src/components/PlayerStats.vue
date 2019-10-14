<template>
  <ul
    class="
      player-stats
      d-flex
      flex-wrap
    "
  >
    <li
      v-for="stat in stats"
      :key="stat.id"
      class="
        d-flex
        justify-center
        pa-2
      "
    >
      <img
        :src="stat.icon"
        class="mr-1"
      >
      <span
        v-text="stat.name + `${intro ? '' : ': ' + stat.value}`"
      />
      <sup
        v-text="reaction ? stat.change : null"
      />
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'PlayerStats',
    computed: {
      ...mapState({
        stats: state => state.player.stats,
        stage: state => state.game.stage,
      }),
      intro: vm => vm.stage === 'intro',
      reaction: vm => vm.stage === 'reaction',
    },
  }
</script>

<style lang="sass">
  .player-stats
    text-transform: uppercase
    list-style-type: none

    img
      width: 20px

  .player-stats-headline
    color: rgba(255, 255, 255, 0.7)
</style>
