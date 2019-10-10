<template>
  <ul
    class="
      player-stats
      d-flex
      flex-wrap
      justify-space-around
      pa-0
      mb-2
    "
  >
    <li
      v-for="stat in stats"
      :key="stat.id"
      class="
        d-flex
        justify-center
        font-weight-bold
        pa-2
      "
    >
      <img
        :src="stat.icon"
        class="mr-1"
      >
      {{ stat.name }}
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'PlayerStats',
    computed: mapState({
      stats: state => state.player.stats,
    }),
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
