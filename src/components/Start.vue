<template>
  <v-card class="start">
    <v-card-title>На Эверест любой ценой!</v-card-title>
    <v-card-text
      v-text="'Текст с сервера'"
    />
    <v-card-actions>
      <v-btn
        block
        color="error"
        text
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
  }
</script>

<style lang="sass">
  .v-card
    width: 498px

    .v-card__title
      display: flex
      justify-content: center

    .v-card__text
      text-align: center

    .v-card__actions
      display: flex
      flex-direction: column
</style>
