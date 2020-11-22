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
    "revision": "0de7ef27c04aaee9173a0f08265646ec"
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
    "url": "assets/js/11.4067742c.js",
    "revision": "e3b191a9b83ce9945b99eaf56abf4198"
  },
  {
    "url": "assets/js/12.6885041e.js",
    "revision": "02f58b510ee69c071719622663620fd0"
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
    "url": "assets/js/app.212f27f1.js",
    "revision": "af266e40ed4d6606c81a4ffc98934f33"
  },
  {
    "url": "exercises/index.html",
    "revision": "d1a1f60ab1d3267fd62ae8c548351469"
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
    "revision": "bf790150d96377064c7ddd6d605a6cec"
  },
  {
    "url": "lessons/1-se-presenter.html",
    "revision": "63607e7eaabdb3d2c57969fefadf58fc"
  },
  {
    "url": "lessons/10-les-emotions.html",
    "revision": "cb524f61dac616d58f94c1654b788ecc"
  },
  {
    "url": "lessons/11-demander-de-l-aide.html",
    "revision": "e114dfda6163e25e4493208c23422a19"
  },
  {
    "url": "lessons/12-a-ty-et-co-u-ciebie-mieux-comprendre.html",
    "revision": "c6af09273f75e6f24addf4a01026c4ef"
  },
  {
    "url": "lessons/2-merci-et-de-rien.html",
    "revision": "735f45195843ddcf5d768cca7049723d"
  },
  {
    "url": "lessons/3-saluer.html",
    "revision": "ba5122e220674585ab588e38513019be"
  },
  {
    "url": "lessons/4-parles-tu-francais.html",
    "revision": "323cd59e9d8c1bb938414831b6720e52"
  },
  {
    "url": "lessons/5-s-excuser.html",
    "revision": "813172e6530c01e17e554c118447c1b1"
  },
  {
    "url": "lessons/6-les-nombres-de-0-a-10.html",
    "revision": "f5049f8c75ff92d7e444c7e03799921c"
  },
  {
    "url": "lessons/7-les-nombres-de-11-a-100.html",
    "revision": "ae6279565bd6bd6c89dab1af2c59657f"
  },
  {
    "url": "lessons/8-combien.html",
    "revision": "5aab3b82a1c66f22e3aaa7bdb3f9ae25"
  },
  {
    "url": "lessons/9-top-25-des-verbes.html",
    "revision": "4401332195c31f1b6c2626fa20418c10"
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
