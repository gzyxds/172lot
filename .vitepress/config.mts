import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue @mdit-vue/shared @types/node busuanzi.pure.js canvas-confetti less medium-zoom sass vitepress-plugin-comment-with-giscus xgplayer

import { devDependencies } from '../../package.json' // 导入package.json

import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

export default defineConfig({      // 配置
  lang: 'zh-CN', // 语言
  title: "172号卡分销系统官网_手机流量卡分销管理平台", // 标题
  keywords: "172号卡,流量卡,物联卡,电信,移动,联通,广电,在线申请,办理,分销,代理,合伙人,流量卡业务,丰厚收益", // 关键词
  description: "172号卡官网！我们提供最新的电信、移动、联通和广电流量卡及物联卡的在线申请和办理服务。加入我们的分销管理平台，成为代理合伙人，轻松管理您的流量卡业务，获取丰厚收益。", // 描述
 
  // #region fav
     head: [   //favicon图标
       ['link', { rel: 'icon', href: '/imges/logo.png' }],
     ],

  
  // #endregion fav
  

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:false, //开启纯净链接无html

  //启用深色模式
  appearance: 'light',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: false,

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    // 开启图片懒加载
    image: {
      lazyLoading: false
    },
    
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      },


      md.use(groupIconMdPlugin) //代码组图标

    }

  },

  vite: { 
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          ts: localIconLoader(import.meta.url, '../public/svg/typescript.svg'), //本地ts图标导入
          md: localIconLoader(import.meta.url, '../public/svg/md.svg'), //markdown图标
          css: localIconLoader(import.meta.url, '../public/svg/css.svg'), //css图标
          js: 'logos:javascript', //js图标
        },
      })
    ],
  },

  lastUpdated: false, //此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释

  //主题配置
  themeConfig: {
    //左上角logo
    logo: '/imges/logo.png',
    siteTitle: '172号卡官网', //显示标题
  

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //编辑本页
    editLink: {
      pattern: 'https://github.com/gzyxds/172lot/blob/main/docs/:path', // 改成自己的仓库
      text: '编辑本页'
    },

    //上次更新时间
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'full', // 可选值full、long、medium、short
        timeStyle: 'full' // 可选值full、long、medium、short
      },
    },

    //导航栏开始
    nav: [
      { text: '🏚172号卡', link: '/' },
      {
        text: '📝公司简介',
        items: [
          {
            // 分组标题1
            text: '🏢 关于我们',
            items: [
              { text: '📝 公司介绍', link: '/about/index' },
            ],
          },
          {
            // 分组标题2
            text: '📚 知识库',
            items: [
              { text: '🚀 发货时效', link: '/172/st' },
              { text: '💰 结算规则', link: '/172/sr' },
              { text: '🎤 直播话术', link: '/172/lls' },
              { text: '🔍 专业术语', link: '/172/pt' },
              { text: '🔝 提高下单', link: '/172/io' },
              { text: '🔄 激活问题', link: '/172/ai' },
              { text: '🔄 提高激活', link: '/172/ia' },
              { text: '🔙 撤单方法', link: '/172/oac' },
            ],
          },
          {
            // 分组标题3
            text: '📚 常见问题',
            items: [
              { text: '🔍 使用教程', link: '/markdown' },
              { text: '👨‍👦‍👦 注册指南', link: '/172/team' },
              { text: '🧩 常见问题', link: '/172/assets' },
              { text: '🎨 佣金说明', link: '/172/style' },
             ],
          },
        ],
      },
     
      {
        text: '👥 代理加盟',
        items: [
          { text: '👤 个人注册', link: 'https://haoka.lot-ml.com/plugreg.html?agentid=90925' },
          { text: '🏢 企业注册', link: 'https://haoka.lot-ml.com/plugreg.html?agentid=90925' },
          { text: '🔐 登入系统', link: 'https://haoka.lot-ml.com/login.html' },
        ],
      },
      // { text: `vitepress ${ devDependencies.vitepress.replace('^','') }`, link: 'https://vitepress.dev/zh/', noIcon: false },
      {
        text: '🎨产品服务',
        items: [
          { text: '🏢 172号卡', link: 'https://172.lot-ml.com/ProductEn/Index/1a654e0b341cadd2' },
          { text: '📶 流量卡', link: 'https://172.lot-ml.com/ProductEn/Index/1a654e0b341cadd2' },
          { text: '🌐 网址导航', link: '/nav/mao' },
          { text: '🔍 订单查询', link: 'https://haokawx.lot-ml.com/Search/Index' },
          { text: '💁 官方客服', link: 'https://syx0xk.qiyukf.com/client?k=1bba63d184c3fecce3532aacae755c47&wp=1&robotShuntSwitch=0' },
          { text: '🧙‍♂️ 卡博士', link: 'https://172.lot-ml.com/ProductEn/Index/1a654e0b341cadd2' },
          { text: '🔍 一证通查', link: 'https://getsimnum.caict.ac.cn/' }
        ],
      },
      {
        text: '🛠️服务中心',
        items: [
          { text: '🔍 常见问题', link: '/lot' },
          { text: '💁 客户支持', link: '/172/faq' },
          { text: '📞 联系我们', link: '/172/contact' },
        ],
      },
      {text: '🔔 最新消息', link: '/lot/log.md'},
    ],
//导航栏结束


    //侧边栏
    sidebar: {
      '/about/': [
        {
          text: '&#128216; 公司介绍',
          collapsed: false,  
          items: [
            { text: '🏢 公司简介', link: '/about/index' },
            { text: '🌐 行业背景', link: '/about/fcc' },
            { text: '🚀 发展趋势', link: '/about/pc' },
            { text: '🔍 竞争格局', link: '/about/prc' },
            { text: '🎁 免费领卡', link: '/about/collect' },
            { text: '📚 产品合集', link: '/about/dt' },
            { text: '📦 产品目录', link: '/about/cl' },
          ]
        },
        {
          text: '📝 知识库',
          collapsed: false,
          items: [
            { text: '🚀 发货时效', link: '/172/st' },
            { text: '💰 结算规则', link: '/172/sr' },
            { text: '🎤 直播话术', link: '/172/lls' },
            { text: '🔍 专业术语', link: '/172/pt' },
            { text: '🔝 提高下单', link: '/172/io' },
            { text: '🔄 激活问题', link: '/172/ai' },
            { text: '🔄 提高激活', link: '/172/ia' },
            { text: '🔙 撤单方法', link: '/172/oac' },
            { text: '💡 注意事项', link: '/172/zysx' },
          ],
        },
        {
          text: '&#128640; 用户指南',
          collapsed: false,
          items: [
            { text: '💬 问题解答', link: '/172/reply' },
            { text: '🤔 代理答疑', link: '/172/answer' },
           ],
        },
        {
          text: '&#127760; 快捷导航',
          collapsed: false,
          items: [
            { text: '🎁 免费领卡', link: 'https://vuepress.yiov.top/' },
            { text: '🔑 注册登入', link: 'https://yiov.top/' },
            { text: '📱 小程序', link: 'https://yingyayi.com/' },
            { text: '📲 APP下载', link: 'https://yingyayi.com/' },
          ],
        },
        {
          text: '&#128587;‍♂️ 常见问题',
          collapsed: false,
          items: [
            { text: '🔍 使用教程', link: '/lot/' },
            { text: '📝 注册指南', link: '/lot/register' },
            { text: '❓ 常见问题', link: '/lot/faq' },
            { text: '💰 佣金说明', link: '/lot/commission' }
          ]
        },
        {
          text: '&#127970; 平台介绍',
          collapsed: false,
          items: [
            { text: '🚀 平台优势', link: '/lot/advantages' },
            { text: '🤝 合作模式', link: '/lot/cooperation' },
            { text: '👀 成功案例', link: '/lot/cases' }
          ]
        }
      ],
      '/lot/': [
        {
          text: 'FAQ &#128587;‍♂️',
          collapsed: false,
          items: [
            { text: '🔍 使用教程', link: '/lot/' },
            { text: '📝 注册指南', link: '/lot/register' },
            { text: '❓ 常见问题', link: '/lot/faq' },
            { text: '💰 佣金说明', link: '/lot/commission' }
          ]
        },
        {
          text: '平台介绍 &#127970;',
          collapsed: false,
          items: [
            { text: '🚀 平台优势', link: '/lot/advantages' },
            { text: '🤝 合作模式', link: '/lot/cooperation' },
            { text: '👀 成功案例', link: '/lot/cases' }
          ]
        }
      ],
      '/172/': [
        {
          text: '&#128218; 172号卡',
          collapsed: false,
          items: [
            { text: '🏠 首页', link: '/172/' },
            { text: '📊 产品介绍', link: '/172/product' },
            { text: '💼 代理加盟', link: '/172/agent' },
            { text: '🔧 使用指南', link: '/172/guide' },
            { text: '❓ 常见问题', link: '/172/fqa' },
            { text: '📞 联系我们', link: '/172/contact' },
            { text: '🧙‍♂️ 小知识', link: '/172/tk' }
          ]
        },
        {
          text: '📚 知识库',
          collapsed: false,
          items: [
            { text: '🚀 发货时效', link: '/172/st' },
            { text: '💰 结算规则', link: '/172/sr' },
            { text: '🎤 直播话术', link: '/172/lls' },
            { text: '🔍 专业术语', link: '/172/pt' },
            { text: '🔝 提高下单', link: '/172/io' },
            { text: '🔄 激活问题', link: '/172/ai' },
            { text: '🔄 提高激活', link: '/172/ia' },
            { text: '🔙 撤单方法', link: '/172/oac' }
          ]
        },
        {
          text: '&#128221; 业务操作',
          collapsed: false,
          items: [
            { text: '🛒 下单流程', link: '/172/order' },
            { text: '💳 激活指南', link: '/172/activate' },
            { text: '🔄 套餐变更', link: '/172/change' },
            { text: '📊 账单查询', link: '/172/bill' },
            { text: '🔍 订单查询', link: '/172/query' }
          ]
        },
        {
          text: '&#128176; 财务相关',
          collapsed: false,
          items: [
            { text: '💰 佣金政策', link: '/172/commission' },
            { text: '🏦 结算规则', link: '/172/settlement' },
            { text: '💳 提现说明', link: '/172/withdraw' }
          ]
        }
      ]
    },




    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },


 
    // 忽略死链接
    ignoreDeadLinks: false,

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/vitepress-doc' },
      { icon: 'twitter', link: 'https://twitter.com/' },
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://weixin.qq.com/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
      }
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',




    //页脚
    footer: {
      message: 'Released under the 172号卡分销管理系统官网 License.',
      copyright: `Copyright © 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`,
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',


    //大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '当前页大纲'
    },


    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },
})
