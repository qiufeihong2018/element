// https://www.cnblogs.com/xxcanghai/p/6382607.html
// 这篇文章对于vue源码和element源码中的事件广播和触发分析不错
function broadcast(componentName, eventName, params) {
//   遍历所有子组件
  this.$children.forEach(child => {
    var name = child.$options.componentName;
// 查找指定的组件
    if (name === componentName) {
      触发组件中的方法
      child.$emit.apply(child, [eventName].concat(params));
    } else {
//       递归，找到指定组件
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
//     往上触发组件事件
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
//     往下广播事件
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
