<template>
  <div class="v-model-use">
    <model v-model="value"></model>
  </div>
</template>

<script>
import model from './v-model-componts'

export default {
  components: {model},
  data() {
    return {
      value: {name: '-1', value: 10}
    }
  },
  methods: {}
};
</script>
