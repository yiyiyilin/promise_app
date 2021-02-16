<template>
  <a-empty :image="simpleImage" description="暂无数据"/>
</template>
<script>
import { Empty } from 'ant-design-vue';

export default {
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
};
</script>
