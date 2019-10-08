<template>
  <v-card>
    <v-card-title>Question</v-card-title>
    <v-card-text
      v-text="'Текст вопроса'"
    />
    <v-card-actions>
      <v-btn
        text
        v-text="'Ответ'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Question',
  }
</script>
