// 注册icon https://element.eleme.cn/#/zh-CN/component/icon
import ElIcon from './src/icon.vue';

/* istanbul ignore next */
ElIcon.install = function(Vue) {
  Vue.component(ElIcon.name, ElIcon);
};

export default ElIcon;
