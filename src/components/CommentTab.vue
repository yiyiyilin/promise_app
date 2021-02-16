<template>
  <div id="comment-tab">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="文章">
          <empty />
      </a-tab-pane>
      <a-tab-pane key="2" tab="页面" force-render>
        <empty />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Empty from '@/components/Empty.vue';

export default {
  components: {
    Empty,
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
<style lang="less">
#comment-tab{
    padding: 0px 20px;
    .ant-tabs-bar{
        border-bottom: 1px solid #e8e8e8;
    }
.ant-tabs-nav-wrap{
    background: none ;
}
}

</style>
