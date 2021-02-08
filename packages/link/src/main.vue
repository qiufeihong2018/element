<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
  >

    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

    <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>
  </a>
</template>

<script>

export default {
  name: 'ElLink',

  props: {
  //类型：primary、success、warning、danger、info
    type: {
      type: String,
      default: 'default'
    },
   // 有无下划线
    underline: {
      type: Boolean,
      default: true
    },
    //是否禁用
    disabled: Boolean,
    //跳转地址
    href: String,
    //图标
    icon: String
  },

  methods: {
  //点击链接
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
};
</script>
