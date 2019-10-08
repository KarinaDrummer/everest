<template>
  <v-card>
    <v-card-text
      v-text="'Текст реакции'"
    />
    <v-card-actions>
      <v-btn
        block
        color="primary"
        v-text="'Дальше'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Answer',
  }
</script>
