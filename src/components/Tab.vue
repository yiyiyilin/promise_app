<template>
<div class="tab">
  <a-tabs type="card" @change="callback">
    <a-tab-pane key="1" tab="最近文章">
        <List />
    </a-tab-pane>
    <a-tab-pane key="2" tab="最近评论">
       <comment-tab />
    </a-tab-pane>
  </a-tabs>
  </div>
</template>
<script>
import List from '@/components/List.vue';
import CommentTab from '@/components/CommentTab.vue';

export default {
  components: {
    List,
    CommentTab,
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
@import url('~@/assets/css/tab.less');
</style>
