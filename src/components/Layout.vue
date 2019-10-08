<template>
  <v-app>
    <router-view class="app-wrapper" />
  </v-app>
</template>

<script>
  export default {
    name: 'Layout',
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
    background-color: rgba(0, 0, 0, 0.2)

.app-wrapper
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
</style>
