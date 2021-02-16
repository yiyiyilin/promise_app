<template>
  <div style="margin-left:17px">
    <a-card title="速记" :bordered="false" style="width: 368px">
      <p>
          <opration-list />
      </p>
    </a-card>
  </div>
</template>
<script>
import OprationList from '@/components/OprationList.vue';

export default {
  components: {
    OprationList,
  },
};
</script>
