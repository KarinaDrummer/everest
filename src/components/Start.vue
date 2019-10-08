<template>
  <v-card>
    <v-card-title
      v-text="'Заголовок с сервера'"
    />
    <v-card-text
      v-text="'Текст с сервера'"
    />
    <v-card-actions>
      <v-btn
        block
        color="error"
        v-text="'Поехали'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Start',
    components: {
    },
    methods: {
      start: () => {

      },
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

    .v-card__actions
      display: flex
      flex-direction: column
</style>
