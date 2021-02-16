<template>
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta
        :description="item.description"
      >
        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
      </a-list-item-meta>
      <div>promise</div>
    </a-list-item>
  </a-list>
</template>
<script>
const data = [
  {
    title: '用户登录',
    description: '1天前',
  },
  {
    title: '用户登录',
    description: '1天前',
  },
  {
    title: '用户登录',
    description: '1天前',
  },
  {
    title: '用户登录',
    description: '1天前',
  },
];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style></style>
