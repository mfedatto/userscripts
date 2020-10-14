// ==UserScript==
// @name        Block do Mau
// @namespace   https://github.com/mfedatto/userscripts/block_do_mau.user.js
// @version     1.1.20
// @date        2020-10-14
// @author      Maurício Fedatto
// @description Block do Mau: script do Maurício Fedatto para bloquear conteúdo indesejado
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
  const forbiddenLinkKeywordsList = [
    '/futebol/',
    '//esporte.ig.com.br/futebol/',
    '//gente.ig.com.br/celebridades/',
    '//gente.ig.com.br/tvenovela/',
    '/joaobidu/',
    '//desejoluxo.ig.com.br/',
    '//www.meiahora.com.br/celebridades-e-tv/',
    '//www.meiahora.com.br/esportes/',
    '//delas.ig.com.br/parceiros/joaobidu/',
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
    '/leonardo-sakamoto/',
    '/sob-pressao/',
    '//www.uol.com.br/splash/',
    '/horoscopo/',
    '/fofocas-famosos/'
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
  
  if (document.location.href.toLowerCase().indexOf('https://www.uol.com.br/') === 0) {
    const adsSelectors = [
      { selector: 'div.full.moduloBanner.banner', action: (selector) => $(selector).remove() },
      { selector: 'div.banner-1x1-hibrido-video-container.labeled.label-publicidade', action: (selector) => $(selector).css('visibility', 'hidden') },
      { selector: 'div.mod-hibrido-loterias.area-default', action: (selector) => $(selector).css('visibility', 'hidden') },
      { selector: 'div.mod-hibrido-dialogo.area-default.module', action: (selector) => $(selector).css('visibility', 'hidden') },
      { selector: 'div.topo-hibrido-meio', action: (selector) => $(selector).css('visibility', 'hidden') },
      { selector: 'div.full.moduloBanner.label-full-module', action: (selector) => $(selector).remove() },
      { selector: 'div.modulo-publicidade.moduloBanner.moduloSemBorda.modulo-300x250.labeled.label-publicidade', action: (selector) => $(selector).remove() },
      { selector: 'div.banner.banner-970x250.mod-horizontal-publicidade', action: (selector) => $(selector).remove() },
      { selector: 'div.labeled.label-produtos', action: (selector) => $(selector).remove() },
      { selector: 'div.webalert_container.webalert_show_confirmation_message.webalert_load_onscroll', action: (selector) => $(selector).remove() },
      { selector: 'div.mod-horizontal.shopping-produtos-uol', action: (selector) => $(selector).remove() },
      { selector: 'div.fc-ab-root', action: (selector) => { $(selector).remove(); $(document.body).css('overflow', 'auto') } }
    ];
    
    $(adsSelectors).each((iAdsSelector, eAdsSelector) => {
        if ($(eAdsSelector.selector).length > 0) {
          eAdsSelector.action(eAdsSelector.selector);
        }
      });
  }
  
  if (document.location.href.toLowerCase().indexOf('https://www.ig.com.br/') === 0) {
    window.setInterval(function() {console.log('block do mau');
      const adsSelectors = [
        { selector: 'div.fc-ab-root', action: (selector) => { $(selector).remove(); $(document.body).css('overflow', 'auto') } }
      ];

      $(adsSelectors).each((iAdsSelector, eAdsSelector) => {
          if ($(eAdsSelector.selector).length > 0) {
            eAdsSelector.action(eAdsSelector.selector);
          }
        });
      }, 1000);
  }
})();
