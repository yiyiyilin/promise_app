<template>
        <!-- white-space:normal 可以让中间的a-menu在浏览器宽度减小时，多出来的选项打点展示-->
        <a-menu
        :default-selected-keys="[$route.matched[1] ? $route.matched[1].name : '']"
        :default-open-keys="[$route.matched[0].name]"
        style="height:64px;-webkit-box-flex: 0;
               flex: 1 1 auto;
               white-space: normal;"
        mode="horizontal"
        theme="dark"
        @click="handleClick"
      >
      <template
      v-for="item in routeMenu"
      >
       <a-menu-item
         :key="item.name"
         v-if="item.children===undefined"
         >
         <router-link :to="{ name: item.name }">
          <a-icon type="mail" />
          {{ item.meta.title }}
         </router-link>
        </a-menu-item>
        <a-sub-menu
        :key="item.name"
        v-if="item.children"
        >
          <span slot="title"
            ><a-icon type="appstore" /><span>{{ item.meta.title }}</span></span
          >

          <a-menu-item
          v-for="c in item.children"
          :key="c.name"
          >
           <router-link :to="{ name: c.name }">
          {{ c.meta.title }}
          </router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
      </a-menu>
</template>
<script>

export default {
  mounted() {
    // console.log(this.$router, this.$route);
  },
  computed: {
    routeMenu() {
      return this.$store.state.menuRouter.filter((item) => {
        const obj = item;
        if (!item.meta.hidden) {
          if (item.children) {
            const { children } = obj;
            obj.children = children.filter((c) => !c.meta.hidden);
          }
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    handleClick() {
      // console.log('click ', e);
    },
  },
};
</script>
<style lang="less">
.menu-list {
  // width: 100%;
  background-color: #001529;
//   background-color: #f40;
  display: flex;
  height: 64px;
  .my-menu {
    width: 1400px;
    margin: auto;
    display: flex;
    height: 64px;
    .left-menu {
    }
    .right-menu{
        height: 64px;
        display: flex;
        // margin-left: 390px;
        width: 200px;
        flex: 0 0 auto;
       align-self: flex-end;
       height: 64px;
       overflow: hidden;
      width: 200px;
      -webkit-box-flex:0;
    }
    .title{
        flex: 0 0 200px;
        line-height: 64px;
        margin-right: 20px;
        h2{
        color: #fff;
        }
    }
  }
}
 .ant-menu-dark.ant-menu-horizontal > .ant-menu-item{
      height: 64px;
      line-height: 64px;
  }
  .ant-menu.ant-menu-vertical.ant-menu-sub.ant-menu-submenu-content{
      // margin-top: 5px;
  }
  .ant-menu-submenu.ant-menu-submenu-horizontal{
      height: 64px;
      line-height: 64px;
  }
</style>
