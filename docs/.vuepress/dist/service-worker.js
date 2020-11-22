/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "402e3998da5b9650101a940ab5941038"
  },
  {
    "url": "assets/css/0.styles.d580cbbe.css",
    "revision": "b680a460f6bf103ed818de6bdce1c825"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ef7c7db5.js",
    "revision": "80223f4ce57175f812134bdbbc6860d6"
  },
  {
    "url": "assets/js/11.6838246f.js",
    "revision": "8bc0298fca6ee53b9f3822722fd05673"
  },
  {
    "url": "assets/js/12.90d70bb1.js",
    "revision": "d6d744bfe6cf9cd881158ada88027975"
  },
  {
    "url": "assets/js/13.6951a2ca.js",
    "revision": "686e8437c8ee959aea5765b7adebd488"
  },
  {
    "url": "assets/js/14.5ff8b05e.js",
    "revision": "847d0f885caecc1854bfb8224095228c"
  },
  {
    "url": "assets/js/15.20282237.js",
    "revision": "5034e75d41e887b95032bb551f59519f"
  },
  {
    "url": "assets/js/16.0745c207.js",
    "revision": "8788f20abf2de2b43eac71d2bddda737"
  },
  {
    "url": "assets/js/17.f217547b.js",
    "revision": "ce170c68bdd66380d2607c7387868c00"
  },
  {
    "url": "assets/js/18.ba474029.js",
    "revision": "6c71b4e4098ccc63ab56dfb6160923d8"
  },
  {
    "url": "assets/js/19.86d0ba09.js",
    "revision": "3f403cb532e9ca4396a61fe06afe2030"
  },
  {
    "url": "assets/js/2.a26de94c.js",
    "revision": "0a9638449bc6248cf6aace435076c295"
  },
  {
    "url": "assets/js/20.7a746246.js",
    "revision": "9b0103c976bb1e56061677b1c1e31cf2"
  },
  {
    "url": "assets/js/21.a156722c.js",
    "revision": "5a45a28791487afc4e80d129cafb5893"
  },
  {
    "url": "assets/js/22.9c805734.js",
    "revision": "47d26d95cd207b8f602374fd6b3c822d"
  },
  {
    "url": "assets/js/3.7e41ed3e.js",
    "revision": "6fc2575d7f66187c4e412fdc8e1917ce"
  },
  {
    "url": "assets/js/4.71dd6602.js",
    "revision": "53e31b2469cc4124e13cc44eca84c8e8"
  },
  {
    "url": "assets/js/5.230e4ea0.js",
    "revision": "b34b0b88c90221dcc6900d67c1947a2d"
  },
  {
    "url": "assets/js/6.1e12c703.js",
    "revision": "c0d1ef0efcdacb178b3c03ad4911c7ea"
  },
  {
    "url": "assets/js/7.adee70f0.js",
    "revision": "f87280894e5d8907631484a2765cdf0e"
  },
  {
    "url": "assets/js/8.7ac684c9.js",
    "revision": "f7fa8d7435ab2e95154713452e76017e"
  },
  {
    "url": "assets/js/9.b11470bc.js",
    "revision": "0b40b8f90a14ffbf33f3255fde911f43"
  },
  {
    "url": "assets/js/app.18958db3.js",
    "revision": "35c6c495dde94ff1ad134588a51ba9f1"
  },
  {
    "url": "exercises/index.html",
    "revision": "3cdc96c19b9da898175ee3542209ef53"
  },
  {
    "url": "icons/1024x1024.png",
    "revision": "6e3fad6fc7892bdba4aedf62f7e2d6f2"
  },
  {
    "url": "icons/120x120.png",
    "revision": "ad0c3bbcdd3ee01099c1cc8b0af21a5f"
  },
  {
    "url": "icons/1240x600.png",
    "revision": "33fa8ca5424cf8e04332ee091798e519"
  },
  {
    "url": "icons/144x144.png",
    "revision": "e5acd2b90a7f685cff001953d89d5cc6"
  },
  {
    "url": "icons/150x150.png",
    "revision": "2f2abcc381c7cd763f80e20680625ca9"
  },
  {
    "url": "icons/152x152.png",
    "revision": "6edc80089ded0c472eb8ab4664fd4186"
  },
  {
    "url": "icons/180x180.png",
    "revision": "a42de2e9ca7c29e36f94796229bc6da3"
  },
  {
    "url": "icons/192x192.png",
    "revision": "5cec36cbb92ded08240dd9ac8d97acb0"
  },
  {
    "url": "icons/24x24.png",
    "revision": "6c03ae4f75b027e3fb7c09b5481ffece"
  },
  {
    "url": "icons/300x300.png",
    "revision": "97295b54603fe82e43379c97ae06f2d8"
  },
  {
    "url": "icons/32x32.png",
    "revision": "739104a2c0890f11c70feaebd9269e94"
  },
  {
    "url": "icons/36x36.png",
    "revision": "7179796ad093dfddf12e60a09fba8790"
  },
  {
    "url": "icons/44x44.png",
    "revision": "0395b6b527be499d0e4225ba3b610075"
  },
  {
    "url": "icons/48x48.png",
    "revision": "67544a2fdbe1d01036598d3cb0b273b8"
  },
  {
    "url": "icons/50x50.png",
    "revision": "dca62f49fe925fbca581901fcb26fd82"
  },
  {
    "url": "icons/620x300.png",
    "revision": "e9fee51fe07c3127a25d1a8cc6e2baf8"
  },
  {
    "url": "icons/72x72.png",
    "revision": "02231deb59f85f589b824bbbb5da3649"
  },
  {
    "url": "icons/76x76.png",
    "revision": "09f3d9ea9d6c555a81670062e8727e94"
  },
  {
    "url": "icons/88x88.png",
    "revision": "577310ab77febc51581b3c07c44d44c4"
  },
  {
    "url": "icons/96x96.png",
    "revision": "95eb8b96c167213b5ba3cbcaebd98e2e"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "6edc80089ded0c472eb8ab4664fd4186"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "e5acd2b90a7f685cff001953d89d5cc6"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "6a504639a28dc57d37009758f6ebaafc"
  },
  {
    "url": "index.html",
    "revision": "b825c90fe0ce4c8d7ca45ad2acf083e2"
  },
  {
    "url": "lessons/1-se-presenter.html",
    "revision": "50991a6950c40ee2403659c9e0c7b4ce"
  },
  {
    "url": "lessons/10-les-emotions.html",
    "revision": "0c952443b9b2ce11c52fae0a067b1be3"
  },
  {
    "url": "lessons/11-demander-de-l-aide.html",
    "revision": "386f16a9daadcf616d81ad4da77dac8f"
  },
  {
    "url": "lessons/12-a-ty-et-co-u-ciebie-mieux-comprendre.html",
    "revision": "35b4100e62528515a116cb3a2e53c779"
  },
  {
    "url": "lessons/2-merci-et-de-rien.html",
    "revision": "332f53d4f73e853f2f1496f042670c17"
  },
  {
    "url": "lessons/3-saluer.html",
    "revision": "bbc9ee729f04221384f5a78e33a07bf4"
  },
  {
    "url": "lessons/4-parles-tu-francais.html",
    "revision": "05ab0358643ba18301ef76a75666d313"
  },
  {
    "url": "lessons/5-s-excuser.html",
    "revision": "9ef3a3df0885b63715d31b23c7628d4f"
  },
  {
    "url": "lessons/6-les-nombres-de-0-a-10.html",
    "revision": "5d3ba5fd8ff78c4336338fe212b2b485"
  },
  {
    "url": "lessons/7-les-nombres-de-11-a-100.html",
    "revision": "bc66cc1e3b2f267f4667599c6d8aa6b3"
  },
  {
    "url": "lessons/8-combien.html",
    "revision": "7cb99f28deced82c4ea9da6ef8ad6736"
  },
  {
    "url": "lessons/9-top-25-des-verbes.html",
    "revision": "5a8f0fefad8e890128c38e9bace3046c"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "screenshots/desktop.png",
    "revision": "d431c6eb5dd95e3e9835560ce31df80e"
  },
  {
    "url": "screenshots/mobile.png",
    "revision": "f43fb6d444dbd45bcaf14c2f48192e47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
