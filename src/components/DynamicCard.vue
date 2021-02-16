<template>
  <div>
    <a-card
      style="width:100%"
      title="新动态"
    >
    <Tab />
    </a-card>
  </div>
</template>

<script>
import Tab from '@/components/Tab.vue';

export default {
  components: {
    Tab,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
@import url('~@/assets/css/dynamic.less');
</style>
