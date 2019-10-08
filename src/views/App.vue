<template>
  <div>
    <start v-if="start" />
    <question v-else-if="question" />
    <reaction v-else-if="reaction" />
    <finish v-else-if="finish" />
    <error
      v-else
      code="418"
    />
  </div>
</template>

<script>
  import Start from '@/components/Start.vue'
  import Question from '@/components/Question.vue'
  import Reaction from '@/components/Reaction.vue'
  import Finish from '@/components/Finish.vue'
  import Error from './Error.vue'
  import store from '@/store'

  const { stages } = store.state

  export default {
    name: 'App',
    components: {
      Start,
      Question,
      Reaction,
      Finish,
      Error,
    },
    data: () => ({
    }),
    computed: {
      start: () => stages.start.isActive,
      question: () => stages.question.isActive,
      reaction: () => stages.reaction.isActive,
      finish: () => stages.finish.isActive,
    },
  }
</script>
