'use strict';

hexo.extend.filter.register('before_generate', function() {
  const themeConfig = hexo.theme && hexo.theme.config;

  if (!themeConfig) {
    return;
  }

  themeConfig.avatar = 'https://github.com/MadridLee.png';
  themeConfig.menu = {
    '主页': '/',
    '技术贴': '/tech/',
    '出去玩': '/travel/',
    '随手记': '/jottings/',
    '乱七八糟': '/misc/'
  };
  themeConfig.subNav = [
    { github: 'https://github.com/MadridLee' },
    { jianshu: 'https://www.jianshu.com/u/0fb1be47e89d' }
  ];
  themeConfig.open_in_new = {
    article: true,
    menu: false,
    subNav: true
  };
  themeConfig.smart_menu = {
    innerArchive: '所有文章',
    friends: false,
    aboutme: '关于我'
  };
  themeConfig.friends = {};
  themeConfig.github = false;
  themeConfig.aboutme = '你好，我是 MadridLee。<br>这里记录技术、产品与生活思考。<br>欢迎通过 GitHub 和简书交流。';
});
