<template>
     <a-layout id="components-layout-demo-top" class="layout">
      <div class="header-animat">
           <a-layout-header style="padding:0px">
             <div class="top-nav-header-index dark">
               <div class="header-index-wide">
                 <!-- 标题和导航放在一起就不用担心浏览器缩小时，文字换行 -->
                 <div class="header-index-left">
                   <div class="logo top-nav-header">
                     <h2>hhh Dashboard</h2>
                   </div>
                <main-header :key='key'/>
                 </div>
                 <div class="user-wrapper header-index-right">
                   <tool-tip/>
                 </div>
               </div>
             </div>
       </a-layout-header>
      </div>
   <a-layout-content style="height: 100%; margin: 24px 24px 0px; padding-top: 0px;">
      <div style="margin:-24px -24px 0px">
     <page-header/>
      <div :style="{ background: 'none', padding: '24px 164px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </div>
    </a-layout-content>
    </a-layout>
</template>

<script>
import ToolTip from '@/components/ToolTip.vue';
import PageHeader from '@/components/PageHeader.vue';
import MainHeader from './components/MainHeader.vue';

export default {
  mounted() {
    console.log(this.$route);
  },
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
  name: 'app',
  components: {
    MainHeader,
    ToolTip,
    PageHeader,
  },
};
</script>

<style lang="less">
.header-animat {
    position: relative;
    z-index: 999;
    .top-nav-header-index {
    // -webkit-box-shadow: 0 1px 4px rgb(0,21,41,8%);
    // box-shadow: 0 1px 4px rgb(0,21,41,8%);
    position: relative;
    .header-index-wide{
      max-width: 1200px;
    margin: auto;
    padding-left: 0;
    // display: -webkit-box;
    // display: -ms-flexbox;
    display: flex;
    height: 64px;
    .header-index-left{
      -webkit-box-flex: 0;
    -ms-flex: 0 1 1000px;
    flex: 0 1 1000px;
    // display: -webkit-box;
    // display: -ms-flexbox;
    display: flex;
    .top-nav-header{
      -webkit-box-flex: 0;
    // -ms-flex: 0 0 165px;
    flex: 0 0 165px;
    width: 165px;
    height: 64px;
    position: relative;
    line-height: 64px;
    // -webkit-transition: all .3s;
    transition: all .3s;
    transition: all .3s;
    overflow: hidden;
    h2{
      color: #fff;
    }
    }
    }
    .header-index-right{
    -webkit-box-flex: 0;
    // -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    // -ms-flex-item-align: end;
    align-items: flex-end;
    align-self: flex-end;
    height: 64px;
    overflow: hidden;
    width: 200px;
    }
    }
}
}
</style>
