// 这里的例子如：this.$refs['a']
// a组件自动聚焦
export default function(ref) {
  return {
    methods: {
//       自动聚焦
      focus() {
        this.$refs[ref].focus();
      }
    }
  };
};
