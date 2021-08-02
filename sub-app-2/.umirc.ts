import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
const { REACT_APP_ENV, NODE_ENV } = process.env;
const publicPath = NODE_ENV === 'production' ? '/publicPath' : '/';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    /** 首页 */
    { path: '/', component: '@/pages/index' },
    /** 表单页 */
    { path: '/form', component: '@/pages/Form/index' },
    /** 表格页 */
    { path: '/table', component: '@/pages/Table/index' },
  ],
  dynamicImport:{
    loading: '@/pages/index'
  },
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
  history: {
    type: 'hash',
  },
  webpack5: {},
  chainWebpack(memo) {
    memo.output.publicPath('auto'); // 请看上面注释
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "mf2", // 该名称必须与入口名称相匹配
        filename: 'remoteEntry.js',
        exposes: {
          "./Index": './src/pages/index', // 共享模块
        },
        remotes: { // 引用远程模块
          mf1: "mf1@//localhost:8001/remoteEntry.js"
        // mf1: "mf1@//xxxx.com/publicPath/remoteEntry.js"
        }
      }]);
  }
});
