/*
* iview Select 设置可多选时，v-model的变量对应的是数组，但是该数组的元素不能是对象形式，只能是数字或字符串等类型；
*/
export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: ""
    },
    idKey: {
      type: String,
      default: "id"
    }
  },
  name: "select-object-Array",
  render(h) {
    const uid = this.idKey || "id";
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self;
        return vnode;
      });
    const optionGroup = slots
      .filter(
        slot =>
          slot.componentOptions && slot.componentOptions.tag === "OptionGroup"
      )
      .map(slot => slot.componentOptions.children)
      .flat();
    const optionNoneGroup = slots.filter(
      slot => slot.componentOptions && slot.componentOptions.tag === "Option"
    );
    const allOldOptions = this.allOldOptions || [];
    const allOptions = optionGroup
      .concat(optionNoneGroup)
      .map(child => child.data.attrs.data)
      .filter(Boolean);
    const allOptionIds = allOptions.map(option => option[uid]).filter(Boolean);
    this.allOldOptions =
      allOptions.push(
        ...allOldOptions.filter(option => !allOptionIds.includes(option.id))
      ) && allOptions;
// 特殊情况处理
    const isArrayFlag = Array.isArray(this.value);
    let ArrayContainsObject = isArrayFlag
      ? this.value.some(
        v => Object.prototype.toString.apply(v) === "[object Object]"
      )
      : false;
    let props = {
      ...this.$props,
      ...this.$attrs,
      value: ArrayContainsObject ? this.value.map(v => v[uid]) : this.value // 关键 支持字符串或数字
    };
    const isMultiple =
      ["", true].includes(this.$attrs.multiple) || !!this.$attrs.multiple;
    /*
    * 如果v-model传入值不是数组，但组件已被设置成多选的话
    */
    if (isMultiple && !isArrayFlag) {
      let values = [this.value];
      ArrayContainsObject = isArrayFlag
        ? values.some(
          v => Object.prototype.toString.apply(v) === "[object Object]"
        )
        : false;
      props = {
        ...this.$props,
        ...this.$attrs,
        value: ArrayContainsObject ? values.map(v => v[uid]) : values // 关键 支持字符串或数字
      };
    }
    /*
    * 如果v-model传入值为数组，则无论是否设置多选，都强制设置成多选
    */
    if (isArrayFlag) {
      this.$attrs.multiple = props.multiple = true;
    }

    const listeners = Object.fromEntries(
      Object.entries(this.$listeners).filter(
        e => !["input", "on-change", "on-open-change"].includes(e[0])
      )
    );
    return h(
      "Select",
      {
        on: {
          ...listeners,
          "on-change": params => {
            if (Array.isArray(params) && params.length) {
              let res = [];
              if (
                Object.prototype.toString.apply(params[0]) === "[object Object]"
              ) {
                res = ArrayContainsObject
                  ? params
                    .map(param =>
                      allOptions.find(v => v[uid] === param.value)
                    )
                    .filter(Boolean)
                  : params.map(param => param.value);
              } else {
                res = ArrayContainsObject
                  ? params
                    .map(param => allOptions.find(v => v[uid] === param))
                    .filter(Boolean)
                  : params;
              }
              this.$emit("on-change", res);
              this.$emit("input", res);
            } else {
              this.$emit("on-change", params);
              this.$emit("input", params);
            }
          },
          input: params => {
            let res = Array.isArray(params)
              ? params
                .map(param => allOptions.find(v => v[uid] === param))
                .filter(Boolean)
              : params;
            if (Array.isArray(params) && params.length) {
              this.$emit("input", res);
              this.$emit("on-change", res);
            } else {
              this.$emit("input", res);
              this.$emit("on-change", res);
            }
          },
          "on-open-change": params => {
            this.$emit("on-open-change", params);
          }
        },
        props,
// 透传 scopedSlots
        scopedSlots: this.$scopedSlots
// attrs: this.$attrs
      },
      slots
    );
  }
};
