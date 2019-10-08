<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'layout',
};
</script>

<style lang='sass'>
#app, #app:after, #app::after
  position: fixed
  width: 100%
  height: 100%

#app
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background: url(/img/bg.jpg) 100% 100% no-repeat
  background-size: cover
  &:after, &::after
    z-index: -1
    display: block
    content: ""
    background-color: rgba(0, 0, 0, 0.5)
</style>
