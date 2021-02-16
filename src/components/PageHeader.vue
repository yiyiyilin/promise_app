<template>
<div class="pageheader">
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240);
           background:#fff;
           padding:20px 164px"
    title=""
    :breadcrumb="{ props: { routes } }"
    sub-title=""
  />
  </div>
</template>
<script>
export default {
  created() {
    this.changeBreadCrumb();
  },
  mounted() {
    console.log(this.routes);
  },
  data() {
    return {
      routes: [],
      defaultrouters: [],
    };
  },
  computed: {
    routers() {
      return this.$route.matched.map((item) => ({
        path: item.path,
        breadcrumbName: item.meta.title,
      }));
    },
  },
  methods: {
    changeBreadCrumb() {
      if (this.$route.matched[0].path !== '') {
        this.defaultrouters = [{
          path: '',
          breadcrumbName: '首页',
        }];
        this.routes = [...this.defaultrouters, ...this.routers];
      } else {
        this.routes = this.routers;
      }
    },
  },
  watch: {
    $route() {
      this.changeBreadCrumb();
    },
  },
};
</script>

<style lang="less">
.pageheader{
    width: 100%;
}
</style>
