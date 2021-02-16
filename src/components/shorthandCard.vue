<template>
  <div style="" id="shortthand">
    <a-card title="速记" :bordered="false" style="width: 400px">
      <p>
          <comment />
      </p>
    </a-card>
  </div>
</template>
<script>
import Comment from '@/components/Comment.vue';

export default {
  components: {
    Comment,
  },
};
</script>
<style lang="less">
#shortthand{
    .ant-card-body{
        padding: 24px 24px 0px;
    }
}
</style>
