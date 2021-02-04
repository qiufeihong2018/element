import { once, on } from 'element-ui/src/utils/dom';
// 中文名叫重复点击，为了避免短时间内重复点击，在每个按钮上绑定清除点击事件，当两次点击小于100ms时，清除点击。类似于防抖

// 这里有一篇解析这个自定义工具的博文：https://blog.csdn.net/weixin_34220623/article/details/87945747
export default {
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    const handler = () => vnode.context[binding.expression].apply();
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};
