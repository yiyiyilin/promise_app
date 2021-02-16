<template>
<div>
  <div style="" class="first">
    <a-row :gutter="12">
      <a-col :span="6">
        <a-card title="文章" :bordered="false">
            <router-link :to="{ name: 'Write' }" slot="extra"><a-icon type="plus" /></router-link>
          <p>1</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="评论" :bordered="false">
          <router-link :to="{ name: 'Comments' }" slot="extra">
            <a-icon type="unordered-list" />
          </router-link>
          <p>0</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="阅读量" :bordered="false">
          <a href="" slot="extra">
            <a-tooltip placement="top">
        <template slot="title">
          <span>文章阅读共19次</span>
        </template>
            <a-icon type="exclamation-circle" />
      </a-tooltip>
            </a>
          <p>19</p>
        </a-card>
      </a-col>
       <a-col :span="6">
        <a-card title="建立天数" :bordered="false">
          <a href="#" slot="extra">
            <a-tooltip placement="top">
        <template slot="title">
          <span>博客建立于2021-2-03 20:50</span>
        </template>
            <a-icon type="exclamation-circle" />
      </a-tooltip>
            </a>
          <p>27</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
    <div style="margin-top:16px">
    <a-row :gutter="18">
      <a-col :span="8">
       <dynamic-card />
      </a-col>
      <a-col :span="8">
       <shortthand-card />
      </a-col>
      <a-col :span="8">
        <opration-card />
      </a-col>
    </a-row>
    </div>
    </div>
</template>
<script>
import DynamicCard from '@/components/DynamicCard.vue';
import ShortthandCard from '@/components/shorthandCard.vue';
import OprationCard from '@/components/OprationCard.vue';

export default {
  components: {
    DynamicCard,
    ShortthandCard,
    OprationCard,
  },
};
</script>
<style lang="less">
@import url('~@/assets/css/card.less');
</style>
