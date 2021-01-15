<template>
  <div class="hello">
    <div style="text-align: center;font-size: 20px;margin:30px">Select绑定Object</div>
    <Select v-model="model1" style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <select-object-array
        id-key="uid"
        v-model="modelData"
        filterable
        :loading="selectConfig.loading"
        :loading-text="selectConfig.loadingText"
        :not-found-text="selectConfig.notFoundText"
        placeholder="请点击此处"
        @on-open-change="handleOpenChange"
    >
      <Option
          v-for="opt in (list || modelData)"
          :key="opt.uid"
          :value="opt.uid"
          :data="opt"
      >{{opt.label}}</Option>
    </select-object-array>
    已选城市：
    <ul>
      <li v-for="(item, index) of modelData" :key="index">{{item.label}}</li>
<!--      <li>{{modelData.label}}</li>-->
    </ul>
  </div>
</template>

<script>
import selectObjectArray from "./components/selectObjectArray";
export default {
  name: 'HelloWorld',
  components: {
    selectObjectArray
  },
  props: {
    msg: String
  },
  watch:{
    'modelData'() {
      debugger
      console.log('44','modelData=> this.modelData ', this.modelData)
    }
  },
  data () {
    return {
      modelData: null,// [{ uid: 11, label: "西安" }, { uid: 12, label: "北京" }], // 回显的值
      list: null,
      selectConfig: {
        loading: false,
        loadingText: "正在查询中",
        notFoundText: ""
      },
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        }
      ],
      model1: ''
    }
  },
  methods: {
    handleOpenChange(bl) {
      // this.$Message.success('打开：', bl)
      this.selectConfig = {
        loading: true,
        loadingText: "正在查询",
        notFoundText: ""
      };
      let self = this;
      setTimeout(() => {
        self.list = [
          {uid: 11, label: "西安"},
          {uid: 12, label: "北京"},
          {uid: 13, label: "南京"},
          {uid: 14, label: "洛阳"},
          {uid: 15, label: "武昌"}
        ];
        console.log("---");
        self.selectConfig = {
          loading: false,
          loadingText: "",
          notFoundText: ""
        };
      }, 1000);
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
