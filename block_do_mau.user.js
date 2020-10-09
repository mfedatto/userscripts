// ==UserScript==
// @name        Block do Mau
// @namespace   https://github.com/mfedatto/userscripts/block_do_mau.user.js
// @version     1.1.0a
// @date        2020-10-09
// @author      Maurício Fedatto
/*// @description Youtube Downloader: all in one script to get Vimeo, Facebook, Dailymotion videos for free*/
// @icon        https://www.iconfinder.com/icons/33774/download/png/128
// @icon64      https://www.iconfinder.com/icons/33774/download/png/128
// @homepage    https://github.com/mfedatto/userscripts
// @updateURL   https://github.com/mfedatto/userscripts/raw/main/block_do_mau.user.js
// @downloadURL https://github.com/mfedatto/userscripts/raw/main/block_do_mau.user.js
// @include     https://www.globo.com/*
// @include     https://www.uol.com.br/*
// @run-at      document-end
// @grant       none
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

new (function() {
  const forbiddenIframeKeywordsList = [
    'google_ads_iframe_'
  ];
  const forbiddenLinkKeywordsList = [
    '/futebol/',
    '/blog-do-pvc/',
    '/famosos/',
    '/celebridades/',
    '/programas/',
    '/novelas/',
    '/quem-news/',
    '//revistaquem.',
    '/moda/',
    '/telinha/',
    '/cartola-fc/',
    '/futebol-no-japao/',
    '//cartolafc.',
    '/musa/',
    '/ela/gente/',
    '/tv-e-lazer/',
    '//globoplay.',
    '//globosatplay.',
    '//casavogue.',
    '//kogut.',
    '//gq.',
    '//vogue.',
    '//extra.',
    '//revistamonet.',
    '/esporte/futebol-muleke',
    '//oglobo.globo.com/esportes/',
    '//tvefamosos.',
    '//ninalemos.',
    '//soltos.',
    '/brasil-mundial-fc/',
    '/pop-arte/',
    '/chico-barney/',
    '/fefito/',
    '//play.uol.com.br/',
    '/criador-de-sites/',
    '/ooops/',
    '/mauricio-stycer/',
    '/leonardo-sakamoto/'
  ];
  
  $('a').each((iLink, eLink) => {
    const href = $(eLink).attr('href');
    
    if (href !== undefined) {
      $(forbiddenLinkKeywordsList).each((iForbiddenKeyword, eForbiddenKeyword) => {
        if (href.toLowerCase().indexOf(eForbiddenKeyword) > -1) {
          $(eLink).css('visibility', 'hidden');
        }
      });
    }
  });
  
  $('iframe').each((iIframe, eIframe) => {
    const id = $(eIframe).attr('id');
    
    if (id !== undefined) {
      $(forbiddenIframeKeywordsList).each((iForbiddenKeyword, eForbiddenKeyword) => {
        if (id.toLowerCase().indexOf(eForbiddenKeyword) > -1) {
          $(eIframe).css('visibility', 'hidden');
        }
      });
    }
  });
})();
