<template>
  <div>
    <Start v-if="start" />
    <Question v-else-if="question" />
    <Answer v-else-if="answer" />
    <Finish v-else-if="finish" />
    <Error v-else code="418" />
  </div>
</template>

<script>
import Start from '@/components/Start.vue';
import Question from '@/components/Question.vue';
import Answer from '@/components/Answer.vue';
import Finish from '@/components/Finish.vue';
import Error from './Error.vue';
import store from '@/store';

const { stages } = store.state;

export default {
  name: 'app',
  components: {
    Start,
    Question,
    Answer,
    Finish,
    Error,
  },
  data: () => ({
  }),
  computed: {
    start: () => stages.current === 'start',
    question: () => stages.current === 'question',
    answer: () => stages.current === 'answer',
    finish: () => stages.current === 'finish',
  },
};
</script>

<style lang="sass">
.error-message
  padding: 24px
  border-radius: 4px
  background: rgba(0, 0, 0, 0.64)
  color: #ffffff
  font-size: 32px
</style>
