<template>
  <div class="comment">
    <a-comment>
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="8" :value="value" @change="handleChange" placeholder="写点什么吧..."/>
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            发布
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
    //   comments:[],
      submitting: false,
      value: '',
      moment,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        // this.comments = [
        //   {
        //     author: 'Han Solo',
        //     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        //     content: this.value,
        //     datetime: moment().fromNow(),
        //   },
        //   ...this.comments,
        // ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
<style lang="less">
.comment{
    .ant-comment-avatar{
        margin-right: 0px;
    }
    .ant-comment-inner{
        padding: 0px;
    }
}
</style>
