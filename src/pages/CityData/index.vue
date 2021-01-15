<template>
  <div class="hello">
    <div style="text-align: center;font-size: 20px;margin:30px">Vue代码示例</div>
    <CellGroup>
      <Cell>
        <div @click="exportData">保持本地文件</div>
      </Cell>
    </CellGroup>
  </div>
</template>

<script>
import foreign_countryData from './foreignMetaCountryData'
import foreign_countryData_cn from './ManagerForeignMetaCountryData'
import china_country from './metaCountryData'
import zh_country from './metaCountryDataAll'
import csv from './readCSV'

var pinyin = require("pinyin");
let countryJSON = require('./country')
let chinaJSON = require('./ChinaCityList')

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      country: foreign_countryData.foreign_countryData,
      foreign_findContryDataByPid: foreign_countryData.foreign_findContryDataByPid,
      reginCountry: countryJSON.countries.country,
      china: china_country.mp_countryData,
      china_findContryDataByPid: china_country.mp_findContryDataByPid,
      reginSet: null,
      compareSet: null,
      zh_country_data: zh_country.mp_countryDataAll,
      zh_mp_findContryDataByPidAll: zh_country.mp_findContryDataByPidAll
    }
  },
  methods: {
    // 去掉区,市
    confirmEnding(str, target) {
      // 请把你的代码写在这里
      var start = str.length - target.length;
      var arr = str.substr(start, target.length);
      if (arr == target) {
        return true;
      }
      return false;
    },
    // 处理名字, 转换成拼音
    reduceName(value) {
      if (this.confirmEnding(value, "市") ||
        this.confirmEnding(value, "区")) {
        return value.substr(0, value.length - 1);
      }
      if (this.confirmEnding(value, "县")) {
        if (value.length <= 2) {
          return value
        } else {
          return value.substr(0, value.length - 1);
        }
      } else {
        return value
      }
    },
    // 获取转换后的名字
    cutName(value) {
      if (this.confirmEnding(value, "市") ||
        this.confirmEnding(value, "区") ||
        this.confirmEnding(value, "县")) {
        return value.substr(0, value.length - 1);
      } else {
        return value
      }
    },
    // 将china json 文件处理转换成平铺, key: 城市名称, value是拼音
    transform() {
      let map = new Map()
      chinaJSON.forEach(x => {
        map.set(x.name, x.name_en)
        if (x.city.length > 0) {
          x.city.forEach(y => {
            if (y.county.length > 0) {
              y.county.forEach(z => {
                map.set(z.name, z.name_en)
              })
            }
          })
        }
      })
      return map
    },
    firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    },
    // 保存本地文件
    exportData() {
      // console.log('ExportData ', this.china)
      let map = csv.readCSV()
      let list = []
      this.china.forEach(x => {
        let name = map[x.name]
        if (name == undefined) {
          name = pinyin(this.reduceName(x.name), {
            style: pinyin.STYLE_NORMAL, // 设置拼音风格
          }).join("")
          console.log('没有找到拼音的 => ', x.name, this.firstUpperCase(name))
          // name = pinyin(x.name)
          return
        }
        // {"id":"3_cn","name":"东城区","pId":"2_cn"}
        list.push(`{"name":\"${this.firstUpperCase(name)}\","pId":\"${x.pId}\","id":\"${x.id}\","aliase":\"${x.id}\"}`)
      })
      console.log('42', 'exportData=> list', list)
      //定义文件内容，类型必须为Blob 否则createObjectURL会报错
      let content = new Blob([list])

      //生成url对象
      let urlObject = window.URL || window.webkitURL || window
      let url = urlObject.createObjectURL(content)
      //生成<a></a>DOM元素
      let el = document.createElement('a')
      //链接赋值
      el.href = url
      el.download = "省份信息.txt"
      //必须点击否则不会下载
      el.click()
      //移除链接释放资源
      urlObject.revokeObjectURL(url)
    },
    getReginSet() {
      // console.log('31','getReginSet=> 原始数据', this.reginCountry)
      const set = new Set();
      this.reginCountry.forEach(x => {
        set.add(x.name_en)
      })
      return set
    },
    getCompareSet() {
      let regionJson = this.foreign_findContryDataByPid('');
      //所有的国家
      for (var i = 0; i < regionJson.length; i++) {
        regionJson[i]['city'] = this.foreign_findContryDataByPid(regionJson[i].id);
        // console.log('国家 ', regionJson[i].name, regionJson[i]['city'].length)
        for (var j = 0; j < regionJson[i]['city'].length; j++) {
          regionJson[i]['city'][j]['region'] = this.foreign_findContryDataByPid(regionJson[i]['city'][j].id);

        }
      }
      console.log('47', 'getCompareSet=> 要修改数据', regionJson.sort())
      const set = new Set();
      regionJson.forEach(x => {
        set.add(x.name)
      })
      return set
    },
    getChina() {
      let RegionJson = this.china_findContryDataByPid('0_cn');
      //所有的省
      for (var i = 0; i < RegionJson.length; i++) {
        RegionJson[i]['content'] = this.china_findContryDataByPid(RegionJson[i].id);
        for (var j = 0; j < RegionJson[i]['content'].length; j++) {
          // console.log('content: ', RegionJson[i]['content'][j].name)
          RegionJson[i]['content'][j]['content'] = this.china_findContryDataByPid(RegionJson[i]['content'][j].id);

          if (RegionJson[i]['content'][j]['content'] != null) {
            for (var z = 0; z < RegionJson[i]['content'][j].length; z++) {
              // console.log('content: ', RegionJson[i]['content'][j]['content'][z].name)
            }
          }
        }
      }

      return RegionJson
    },
    // 获取所有省的名字
    getProvinceName(list) {
      return list.map(x => {
        return x.name
      })
    },
    // 中文国家信息, 将省的pid全部换成china
    transformPid2china(names) {
      let count = 0
      this.zh_country_data.forEach(x => {
        if (names.indexOf(x.name) != -1 && x.pId == '0_cn') {
          count = count + 1
          console.log(count,' 省信息 ', x.name, x.pId, x.id)
          x.pId = "china"
        }
      })
      let list = []
      this.zh_country_data.forEach(x => {
        // {"id":"3_cn","name":"东城区","pId":"2_cn"}
        list.push(`{
        "id":\"${x.id}\",
        "name":\"${x.name}\",
        "pId":\"${x.pId}\"
        }`)
      })
      //定义文件内容，类型必须为Blob 否则createObjectURL会报错
      let content = new Blob([list])

      //生成url对象
      let urlObject = window.URL || window.webkitURL || window
      let url = urlObject.createObjectURL(content)
      //生成<a></a>DOM元素
      let el = document.createElement('a')
      //链接赋值
      el.href = url
      el.download = "中文省份信息.txt"
      //必须点击否则不会下载
      el.click()
      //移除链接释放资源
      urlObject.revokeObjectURL(url)
    },
    //中文 世界
    getWorld() {
      let RegionJson = this.zh_mp_findContryDataByPidAll('0_cn');
      //所有的省
      for (var i = 0; i < RegionJson.length; i++) {
        RegionJson[i]['content'] = this.zh_mp_findContryDataByPidAll(RegionJson[i].id);
        for (var j = 0; j < RegionJson[i]['content'].length; j++) {
          // console.log('content: ', RegionJson[i]['content'][j].name)
          RegionJson[i]['content'][j]['content'] = this.zh_mp_findContryDataByPidAll(RegionJson[i]['content'][j].id);

          if (RegionJson[i]['content'][j]['content'] != null) {
            for (var z = 0; z < RegionJson[i]['content'][j].length; z++) {
              // console.log('content: ', RegionJson[i]['content'][j]['content'][z].name)
            }
          }
        }
      }

      return RegionJson
    },
  },
  mounted() {
    // let regin = this.getReginSet()
    // let compare = this.getCompareSet()

    // 所有省的名字
    // let names = this.getProvinceName(this.getChina())
    // console.log('189', 'mounted=> names', names)
    // this.transformPid2china(names)

    // 中文国家数据展示
    // let json = this.getWorld()
    // console.log('248','mounted=> json ', json)

    // let chinaData = this.getChina()
    // console.log('146','mounted=> chinaData', chinaData)

    this.exportData()
    // let pinyin = this.transform()
    // console.log('107', 'mounted=> pinyin', pinyin)

    //差集
    // let diff = new Set([...regin].filter(x => !compare.has(x)));
    // let array = Array.from(diff).sort()
    // console.log('59','mounted=> diff', array.length)
    // array.forEach(x => console.log(x))

    // let diff2 = new Set([...compare].filter(x => !regin.has(x)));
    // let array2 = Array.from(diff2).sort()
    // console.log('59','mounted=> diff2',array2.length)
    // array2.forEach(x => console.log(x))
    // console.log('18','mounted=> r', r)
    // console.log('20','mounted=> foreign_countryData_cn', foreign_countryData_cn)
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
