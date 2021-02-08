<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'ElButton',

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
    //类型:primary/success/warning/danger/info/text
      type: {
        type: String,
        default: 'default'
      },
     // 尺寸:mini/small/medium
      size: String,
     // 图标类型
     icon: {
        type: String,
        default: ''
      },
//      原生button上的属性：button/submit/reset
      nativeType: {
        type: String,
        default: 'button'
      },
      //是否加载
      loading: Boolean,
      //是否禁用
      disabled: Boolean,
      //是否朴素
      plain: Boolean,
      //是否默认聚焦
      autofocus: Boolean,
      //是否圆角
      round: Boolean,
      //是否圆形
      circle: Boolean
    },

    computed: {
      _elFormItemSize() {
      //父表单项的尺寸
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
      //本身的尺寸、父表单项的尺寸和全局element的尺寸
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      buttonDisabled() {
      //本身是否禁用和父表单是否禁用
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    methods: {
    //点击事件
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
