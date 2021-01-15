<template>
  <div class="hello">
    <p>
      Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
      console.log('30', data, 'get=> val', val)
      return val
      },
      set(newValue) {
      console.log('34',data, 'set=> newValue', newValue)
      if (val === newValue) {
      return
      }
      val = newValue
      }
      })

    </p>
  </div>
</template>

<script>
export default {
  name: 'bind',
  props: {
    msg: String
  },
  mounted() {
    let value = {sss: 111, ggg: 222}
    value.bbb = 76666
    console.log('32', 'mounted=> value', value)
    console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

    this.defineReactive(value, 'name', 'chen')
    let sss = value.name
    value.name = "song"
    value.name = "air"

    value.person = "123131"

    let value2 = {}
    this.defineReactive(value2, 'name', 'chen2')
    let sss2 = value2.name
    value2.name = "song2"
  },
  methods: {
    defineReactive(data, key, val) {
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
          console.log('30', data, 'get=> val', val)
          return val
        },
        set(newValue) {
          console.log('34', data, 'set=> newValue', newValue)
          if (val === newValue) {
            return
          }
          val = newValue
        }
      })
    },
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
