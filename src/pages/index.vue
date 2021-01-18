<template>
  <div class="hello">
    <div style="text-align: center;font-size: 20px;margin:30px">Vue代码示例</div>
    <CellGroup>
      <Cell v-for="item in routerMap" :title="item.path" :label="item.meta.description" :to="item.path"/>
    </CellGroup>
  </div>
</template>

<script>
import router from "../router"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      routerMap: router.filter(value => {
        return value.meta.description != null
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
