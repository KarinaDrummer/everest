<template>
  <v-app>
    <router-view class="app-wrapper" />
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <v-btn
        color="pink"
        text
        @click="snackbar = !snackbar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  export default {
    name: 'Layout',
    data: () => ({
      snackbar: false,
      snackbarText: '',
    }),
    mounted () {
      window.addEventListener('apiHandlerError', (event) => {
        this.showError(event.message)
      })
    },
    methods: {
      showError (message) {
        this.snackbarText = message
        this.snackbar = true
      },
    },
  }
</script>

<style lang='sass'>
html
  overflow-y: auto

#app, #app:after, #app::after
  position: fixed
  width: 100%
  height: 100%

#app
  display: flex
  background: url(/img/bg.jpg) 100% 100% no-repeat
  background-size: cover

  &:after, &::after
    z-index: -1
    display: block
    content: ""
    background-color: rgba(0, 0, 0, 0.5)

.app-wrapper
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  .v-card__text a
    color: #fdff8c
    text-decoration: none
</style>
