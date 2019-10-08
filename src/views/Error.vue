<template>
  <div class="error-screen">
    <div class="code" v-text="errorCode" />
    <div class="message">{{errorMessage}}</div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    code: String,
    message: String,
  },
  data: vm => ({
    errorCode: vm.code ? Number(vm.code) : 404,
  }),
  computed: {
    errorMessage: (vm) => {
      if (vm.message) {
        return vm.message;
      }
      switch (vm.errorCode) {
        case 404:
          return 'Not found';
        case 418:
          return 'Programmer\'s DNA error';
        default:
          return 'Undefined error';
      }
    },
  },
};
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
