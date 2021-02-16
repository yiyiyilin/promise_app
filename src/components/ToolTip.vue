<template>
  <div id="components-a-tooltip-demo-placement">
    <div style="clear:both ; whiteSpace:nowrap;display:flex">
          <a-tooltip placement="bottom">
        <template slot="title">
          <span>点击跳转到首页</span>
        </template>
        <a-icon type="link" style="color:#fff" class="icon"/>
      </a-tooltip>
          <a-tooltip placement="bottom">
        <template slot="title">
          <span>后台布局设置</span>
        </template>
        <a-icon type="setting" style="color:#fff" class="icon"/>
      </a-tooltip>
      <a-popover v-model="visible" title="Title" trigger="click">
    <a slot="content" @click="hide">Close</a>
    <a-icon type="bell" style="color:#fff" class="icon"/>
  </a-popover>

    <div id="components-dropdown-demo-placement">
    <a-dropdown placement="bottomLeft">
        <div class="icon avatar">
        <a-avatar size="small" icon="user" />
  </div>

        <a-menu slot="overlay">
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href=""
              ><a-icon type="user" style="margin-right:10px"/>个人资料</a
            >
          </a-menu-item>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href=""
              ><a-icon type="logout" style="margin-right:10px"/>退出登录</a
            >
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      console.log(111);
      this.visible = false;
    },
  },
};
</script>
<style scoped>
#components-a-tooltip-demo-placement{
    line-height: 64px;
}
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
.icon{
    display: inline-block;
    width: 50px;
    height: 64px;
    line-height: 64px;
    text-align: center;
}
.icon:hover{
    background:hsla(0,0%,100%,.16);
    cursor: pointer;
}
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-dropdown-menu-item{
    padding-right: 40px;
}
</style>
