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
