// 全局注册Container
// https://element.eleme.cn/#/zh-CN/component/container
import Container from './src/main';

/* istanbul ignore next */
Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};

export default Container;
