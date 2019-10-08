<template>
  <v-card>
    <v-card-title>Finish</v-card-title>
    <v-card-text
      v-text="'Текст результата'"
    />
    <v-card-actions>
      <v-btn
        text
        v-text="'Сыграть ещё раз'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Finish',
  }
</script>
