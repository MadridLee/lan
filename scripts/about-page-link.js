'use strict';

function normalizeRoot(root) {
  if (!root) return '/';
  return root.endsWith('/') ? root : `${root}/`;
}

hexo.extend.filter.register('after_render:html', function(html) {
  if (!html || typeof html !== 'string') {
    return html;
  }

  const root = normalizeRoot(hexo.config.root);
  const aboutUrl = `${root}about/`;

  const smartMenuRegex = /<nav class="header-smart-menu">[\s\S]*?<\/nav>/;
  const aboutMenuHtml = `<nav class="header-smart-menu about-only"><a class="about-page-link" href="${aboutUrl}">关于我</a></nav>`;

  let output = html.replace(smartMenuRegex, aboutMenuHtml);

  const styleBlock = '<style>.header-smart-menu.about-only{display:flex;justify-content:center;align-items:center;text-align:center}.header-smart-menu.about-only .about-page-link{display:inline-block}.header-smart-menu.about-only .about-page-link:after{content:""!important}</style>';

  if (output.includes('</head>')) {
    output = output.replace('</head>', `${styleBlock}</head>`);
  }

  return output;
});
