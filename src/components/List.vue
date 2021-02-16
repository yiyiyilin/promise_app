<template>
<div id="list">
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta
        description=""
      >
        <a slot="title" href="">{{ item.title }}</a>
      </a-list-item-meta>
      <div>2021-2-4 11:20</div>
    </a-list-item>
  </a-list>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
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
<style lang="less">
#list{
 .ant-list{
    padding: 0px 20px;
}
}
</style>
