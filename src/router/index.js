import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/layout/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      hidden: false,
      icon: '',
      number: 0,
    },
    component: Home,
    redirect: { name: 'Index' },
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {
          title: '仪表盘',
          hidden: false,
          icon: '',
          number: 0,
        },
        component: () => import(/* webpackChunkName:"index" */'../views/page/Index.vue'),
      },
      {
        path: '/attachments',
        name: 'attachments',
        meta: {
          title: '附件',
          hidden: false,
          icon: '',
          number: 3,
        },
        component: () => import(/* webpackChunkName: "attachments" */'../views/page/Attachments.vue'),
      },
      {
        path: '/comments',
        name: 'Comments',
        meta: {
          title: '评论',
          hidden: false,
          icon: '',
          number: 4,
        },
        component: () => import(/* webpackChunkName: "comments" */'../views/page/Comments.vue'),
      },
    ],
  },
  {
    path: '/posts',
    name: 'Posts',
    meta: {
      title: '文章',
      hidden: false,
      icon: '',
      number: 1,
    },
    component: Home,
    children: [{
      path: 'list',
      name: 'List',
      meta: {
        title: '所有文章',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName:"list" */'../views/page/List.vue'),
    }, {
      path: 'write',
      name: 'Write',
      meta: {
        title: '写文章',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName:"write" */'../views/page/Write.vue'),
    }, {
      path: 'categories',
      name: 'Categories',
      meta: {
        title: '文章目录',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName:"categories" */'../views/page/Categories'),
    }, {
      path: 'tags',
      name: 'Tags',
      meta: {
        title: '标签',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName:"tags" */'../views/page/Tags'),
    }],
  },
  {
    path: '/page',
    name: 'Page',
    meta: {
      title: '页面',
      hidden: false,
      icon: '',
      number: 2,
    },
    component: Home,
    children: [{
      path: 'pagelist',
      name: 'PageList',
      meta: {
        title: '所有页面',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName:"list" */'../views/page/PageList.vue'),
    }, {
      path: 'addpage',
      name: 'AddPage',
      meta: {
        title: '新建页面',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName:"addpage" */'../views/page/AddPage.vue'),
    }],
  },
  {
    path: '/interface',
    name: 'Interface',
    meta: {
      title: '外观',
      hidden: false,
      icon: '',
      number: 5,
    },
    component: Home,
    children: [{
      path: 'themes',
      name: 'Themes',
      meta: {
        title: '主题',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName: "themes" */'../views/page/Themes.vue'),
    }, {
      path: 'menus',
      name: 'Menus',
      meta: {
        title: '菜单',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName: "menus" */'../views/page/Menus.vue'),
    }],
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      title: '用户',
      hidden: false,
      icon: '',
      number: 6,
    },
    component: Home,
    children: [{
      path: 'profile',
      name: 'Profile',
      meta: {
        title: '个人资料',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName: "profile" */'../views/page/Profile.vue'),
    }],
  },
  {
    path: '/system',
    name: 'System',
    meta: {
      title: '系统',
      hidden: false,
      icon: '',
      number: 7,
    },
    component: Home,
    children: [{
      path: 'options',
      name: 'Options',
      meta: {
        title: '博客设置',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName: "options" */ '../views/page/Options.vue'),
    }, {
      path: 'tools',
      name: 'Tools',
      meta: {
        title: '小工具',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName: "tools" */ '../views/page/Tools.vue'),
    }, {
      path: 'about',
      name: 'About',
      meta: {
        title: '关于',
        hidden: false,
        icon: '',
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/page/About.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
      icon: '',
      number: 8,
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/layout/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 记住这里要做登录权限
  // if (to.path !== '/login') {}
  for (let i = 0; i < routes.length; i += 1) {
    // 去掉路由数组首页这一项，但是留下首页里的子路由
    if (routes[i].path === '/') {
      const arr = routes[i].children;
      routes.splice(i, 1);
      arr.forEach((item) => {
        routes.push(item);
      });
    }
  }
  // 按照路由里的number属性排序
  routes.sort((a, b) => a.meta.number - b.meta.number);
  store.dispatch('changeMenuRouter', routes);
  next();
});

export default router;
