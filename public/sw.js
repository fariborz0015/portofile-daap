if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>a(e,n),r={module:{uri:n},exports:t,require:f};s[n]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-fb87826f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"434af078512000203212119bf342c673"},{url:"/_next/static/aoJ3S7RglrdhKOSu1T6p1/_buildManifest.js",revision:"1afbba0f7c7fd2345699ae93f47c7ca2"},{url:"/_next/static/aoJ3S7RglrdhKOSu1T6p1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/169-18e9e34e72434559.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/185.7e14ceae84f63112.js",revision:"7e14ceae84f63112"},{url:"/_next/static/chunks/343.f9620aadcc55e0a9.js",revision:"f9620aadcc55e0a9"},{url:"/_next/static/chunks/391.725d0722c5249276.js",revision:"725d0722c5249276"},{url:"/_next/static/chunks/422.5f57b57691bb2475.js",revision:"5f57b57691bb2475"},{url:"/_next/static/chunks/607.31e60c55c7eec06e.js",revision:"31e60c55c7eec06e"},{url:"/_next/static/chunks/739.093e05aaae2d0688.js",revision:"093e05aaae2d0688"},{url:"/_next/static/chunks/811.9db2503ea458bf46.js",revision:"9db2503ea458bf46"},{url:"/_next/static/chunks/878.4d886de4fd316b37.js",revision:"4d886de4fd316b37"},{url:"/_next/static/chunks/883.5f9d0fc56aa8026c.js",revision:"5f9d0fc56aa8026c"},{url:"/_next/static/chunks/884.80e86517859debf6.js",revision:"80e86517859debf6"},{url:"/_next/static/chunks/ea88be26.375858f3cf93f50c.js",revision:"375858f3cf93f50c"},{url:"/_next/static/chunks/fd9d1056-03246f8a6f3617cd.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/framework-eb1d667842c371f8.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/main-6f976e23f8b68453.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/main-app-7d36503dccfe7ce3.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/pages/_app-391e904f945ffc84.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/pages/index-bd7276a6ab4dc567.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/pages/sitemap.xml-439ebcae93b2b159.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1bf0fb60d9a1e572.js",revision:"aoJ3S7RglrdhKOSu1T6p1"},{url:"/_next/static/css/16bbd1c1cfdbbb80.css",revision:"16bbd1c1cfdbbb80"},{url:"/_next/static/css/cc3082f6250de607.css",revision:"cc3082f6250de607"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/238dc9b2aebffcdc-s.woff2",revision:"8279fd9817c27d5a8b171a2a29ebc263"},{url:"/_next/static/media/26bc5ebe4d8cbdc3-s.woff2",revision:"a4c4ca1ace2f3b6d90bc53b937879428"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/3f9466fc53690ba7-s.woff2",revision:"173212bc7f69965527b29df7419d615c"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/5668212c44dae724-s.p.woff2",revision:"7a5dc5521ecc3a1036a84181e7db89aa"},{url:"/_next/static/media/6245472ced48d3be-s.p.woff2",revision:"335da181ffc3c425a4abf0e8fc0f1e42"},{url:"/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/94575ae3783e7c88-s.woff2",revision:"a56bc9adab4ad49a6e6d19f72ac23bc0"},{url:"/_next/static/media/9e82d62334b205f4-s.p.woff2",revision:"1c2ea932e7620e3a752301d0e54d3d91"},{url:"/_next/static/media/aa712ccda4c2649d-s.woff2",revision:"2feef5c01930985baec2757ffc4e3455"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/dfa2ccbeca9e77a8-s.woff2",revision:"4d88c8f550833714f8721257780b9000"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/f7099cae2a5aa83f-s.woff2",revision:"8717ab2d20ae5ec51c6ac277e0331511"},{url:"/_next/static/media/f7fcd5c3ce82c8ce-s.woff2",revision:"cc10375dff54517210122862e85c0271"},{url:"/assets/cv/fariborz-shalghooni-front-end.pdf",revision:"3596d4046c711f2d1e26f5af82ad1364"},{url:"/assets/fonts/strasua.ttf",revision:"7786ce3f53a9fdfcb5e5017f4db0eafe"},{url:"/assets/images/avatar.jpg",revision:"d1dda023e83469131390ef545dba517a"},{url:"/assets/images/coffee.png",revision:"7fccdfba61b30b4cfa0aaf0d48fcc0b2"},{url:"/assets/images/companies/balaban.jpg",revision:"5e735e2eac998dd950c49526fbc52a75"},{url:"/assets/images/companies/exmodule.png",revision:"d2009624826cca1c38829cea8746f489"},{url:"/assets/images/companies/mihanservice.png",revision:"b15d95107240182c15e77962a3f8dcb3"},{url:"/assets/images/companies/rootip.png",revision:"479eac609d9da54539b2bbfb7e55c33b"},{url:"/assets/images/companies/silverage.png",revision:"22dfaa7d0fb09ba3950d79b815bf3e69"},{url:"/assets/images/companies/taksa.png",revision:"63c2c545eb614e3024a3009ab6e1a807"},{url:"/assets/images/companies/vetone.png",revision:"786e7167025474430a048d2acf89ce3c"},{url:"/assets/images/fazanavard.svg",revision:"6c3b4f3f89b981e57a0e980d06ba8e85"},{url:"/assets/images/logo.svg",revision:"34c8cd4284ef5f643814da50e10b776b"},{url:"/assets/images/moons.webp",revision:"62a83e0b547c801bc4671816744e3f18"},{url:"/assets/images/planet.svg",revision:"d2829316fb740777967f1e49421b1ba6"},{url:"/avatar.jpg",revision:"d1dda023e83469131390ef545dba517a"},{url:"/cover1.png",revision:"8465033e702cc442efe9fe5f6813b526"},{url:"/favicon.ico",revision:"50df6873dc4bd549ab73608e97f2ce08"},{url:"/favicon.png",revision:"d32fc7274bac3b7d165bb217a19362f4"},{url:"/google4ad5d7cc2ddb1b43.html",revision:"1689686643a9e9df9f5144c6f39a7e0b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));