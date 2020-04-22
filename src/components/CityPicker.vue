<template>
  <mt-popup v-model="visible" position="bottom" class="mint-picker">  
    <mt-picker
      :slots="myAddressSlots"
      @change="onChange"
      :visible-item-count="visibleItemCount"
      ref="picker"
      show-toolbar>

      <span class="mint-datetime-action mint-datetime-cancel lq-picker-cancel"  @click="visible = false;$emit('cancel')">{{ cancelText }}</span>
      <span class="mint-datetime-action mint-datetime-confirm lq-picker-confirm" @click="confirm">{{ confirmText }}</span>
    </mt-picker>
  </mt-popup>
</template>

<script>
import {Popup, Picker} from 'mint-ui';
import 'mint-ui/lib/style.css';
import myaddress from "../data/pca.json";


export default {
  components: {
    Popup,
    Picker
  },
  data() {
    return {
      visible: false,
      currentValue: null,
      myAddressSlots: [
        {
          flex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "left"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: Object.keys(myaddress["北京市"]),
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: myaddress["北京市"]["市辖区"],
          className: "slot5",
          textAlign: "right"
        }
      ]
    };
  },
  props: {
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    visibleItemCount: {
      type: Number,
      default: 7
    },
    value: null
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit("confirm", this.currentValue);
    },
    onChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); //  Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); //  区/县数据就是一个数组
      }
      this.currentValue = picker.getValues();
    },

    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  }
};
</script>

<style>
.mint-picker {
  width: 100%;
}
</style>
