// 这篇文章https://www.jianshu.com/p/8d25ff1c4652对mixin分析的不错

// getMigratingConfig方法可以提醒用户，当前api发生了变化，让用户及时做处理，避免不必要的损失
import { kebabCase } from 'element-ui/src/utils/util';
/**
 * 在浏览器控制台中显示迁移指南。
 *
 * 用法
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * 在你的组件中增加 getMigratingConfig 方法
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */

export default {
  mounted() {
//     生产环境退出
    if (process.env.NODE_ENV === 'production') return;
// 没有节点退出
    if (!this.$vnode) return;
//     获取用户组件中的props和events属性
//     例如：这里props是{
//  *        'allow-no-selection': 'allow-no-selection is removed.',
//  *        'selection-mode': 'selection-mode is removed.'
//  *      }
//     例子中的events是{
//  *        selectionchange: 'selectionchange is renamed to selection-change.'
//  *      }
    const { props = {}, events = {} } = this.getMigratingConfig();
    const { data, componentOptions } = this.$vnode;
// props是元素，在编译时转化为attrs，具体请见抽象语法树（https://www.jianshu.com/p/743166a8968c）
    const definedProps = data.attrs || {};
//     dom的所有事件监听器
    const definedEvents = componentOptions.listeners || {};
// 遍历所有props属性
    for (let propName in definedProps) {
      propName = kebabCase(propName); // compatible with camel case用驼峰式兼容
//       如果在getMigratingConfig方法中的props找到，那么提示用户
      if (props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`);
      }
    }
// 同上props
    for (let eventName in definedEvents) {
      eventName = kebabCase(eventName); // compatible with camel case用驼峰式兼容
      if (events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`);
      }
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
};
