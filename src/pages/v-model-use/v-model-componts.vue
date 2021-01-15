<template>
  <div class="v-model-use" @click="add">
    {{value.value}}
  </div>
</template>

<script>
export default {
  props: {
    value: Object
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    add() {
      this.$emit('change', {name: '-'+ this.value.value, value: this.value.value+1})
    }
  }
};
</script>
