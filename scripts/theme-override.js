'use strict';

hexo.extend.filter.register('before_generate', function() {
  const themeConfig = hexo.theme && hexo.theme.config;

  if (!themeConfig) {
    return;
  }

  themeConfig.avatar = 'https://github.com/MadridLee.png';
  themeConfig.subNav = [
    { github: 'https://github.com/MadridLee' },
    { jianshu: 'https://www.jianshu.com/u/0fb1be47e89d' }
  ];
  themeConfig.aboutme = '你好，我是 MadridLee。<br>这里记录技术、产品与生活思考。<br>欢迎通过 GitHub 和简书交流。';
});
