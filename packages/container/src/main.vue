<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'ElContainer',

    componentName: 'ElContainer',
// 只提供一个参数方向
    props: {
      direction: String
    },

    computed: {
      isVertical() {
   //   判断是横向还是竖向
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        //header和footer是横向的，其他都是竖向
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'el-header' || tag === 'el-footer';
          })
          : false;
      }
    }
  };
</script>
