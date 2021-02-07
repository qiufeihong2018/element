import { t } from 'element-ui/src/locale';

export default {
  methods: {
    t(...args) {
      把语法上的所有属性和方法绑定在this上
      return t.apply(this, args);
    }
  }
};
