<template>
  <div
    class="
      image-wrapper
      d-flex
      justify-center
    "
  >
    <v-img
      :src="src"
      max-width="476"
      max-height="500"
    >
      <template v-slot:placeholder>
        <v-row
          class="
            fill-height
            ma-0
            align-center
            justify-center
          "
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
  export default {
    name: 'LazyImage',
    props: {
      src: {
        type: String,
        default: '',
      },
    },
  }
</script>
