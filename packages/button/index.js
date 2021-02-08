// 注册button 
// https://element.eleme.cn/#/zh-CN/component/button
import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
