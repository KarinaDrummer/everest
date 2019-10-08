<template>
  <div>
    <div class="error-screen">
      <div
        class="code"
        v-text="code"
      />
      <div
        class="message"
        v-text="errorMessage"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Error',
    props: {
      code: {
        type: String,
        default: '404',
      },
      message: {
        type: String,
        default: 'Not found',
      },
    },
    computed: {
      errorMessage: (vm) => {
        switch (vm.errorCode) {
          case '418':
            return 'Programmer\'s DNA error'
          case '000':
            return 'Undefined error'
          default:
            return vm.message
        }
      },
    },
  }
</script>

<style lang="sass">
.error-screen
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  width: 100%
  background-color: #222426
  color: #ffffff
  font-family: 'Nunito', sans-serif
  .code
    border-right-color: initial
    border-right: 2px solid
    font-size: 26px
    padding: 0 15px 0 15px
    text-align: center
  .message
    padding: 10px
    font-size: 18px
    font-weight: 300
    text-align: center
</style>
