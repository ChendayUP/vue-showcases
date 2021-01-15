<template>
  <div class="hello">
    <div style="text-align: center;font-size: 20px;margin:30px">Vue代码示例</div>
    <CellGroup>
      <Cell title="Bind" label="defineProperty示例" to="/bind" />
      <Cell title="Page-next" label="翻页控件示例" to="/page-next" />
      <Cell title="Page-next-simple" label="简单化的翻页控件示例" to="/page-next-simple" />
      <Cell title="Read-City" label="世界国家地址信息处理,转换" to="/read-city" />
      <Cell title="V-Model" label="v-model使用示例" to="/v-model" />
    </CellGroup>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
