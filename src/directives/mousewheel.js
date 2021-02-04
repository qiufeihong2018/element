// github地址 https://github.com/basilfx/normalize-wheel 
// 作用：：跨多个浏览器的鼠标滚轮规范化。是从facebook[Fixed Data Table](https://github.com/facebookarchive/fixed-data-table)代码中抽取的
import normalizeWheel from 'normalize-wheel';

// 判断是否是firefox
const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
// 火狐滚轮事件与其他浏览器不同，参见张鑫旭[JS滚轮事件(mousewheel/DOMMouseScroll)了解](https://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/#comments)
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function(event) {
      const normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

export default {
  bind(el, binding) {
    mousewheel(el, binding.value);
  }
};
