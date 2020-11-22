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
    "revision": "9618258913f2f9782cac49d12f8e1218"
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
    "url": "assets/js/10.a6424268.js",
    "revision": "88d9fc9a325a1c6a305c87633a4e5a5c"
  },
  {
    "url": "assets/js/11.b7acde9c.js",
    "revision": "4ec794780241cf87b840f4ac8c62014f"
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
    "url": "assets/js/14.ed3133bc.js",
    "revision": "c94038ee037bedf5b5c9e28520f06f52"
  },
  {
    "url": "assets/js/15.7df29b26.js",
    "revision": "4b25fef33e87251114b4af41128f4098"
  },
  {
    "url": "assets/js/16.44e02c61.js",
    "revision": "4081cd8a9941544321d0eccc0c995658"
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
    "url": "assets/js/app.e3f3b411.js",
    "revision": "6b35266243c5f5d8682f1fb5833dd36b"
  },
  {
    "url": "exercises/index.html",
    "revision": "160135292965042f4e474d6c6af620ce"
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
    "revision": "3e6728990886225ed1db7d1da76d005a"
  },
  {
    "url": "lessons/1-se-presenter.html",
    "revision": "a22bd15bea5d74e9e74fdde5d1fb7855"
  },
  {
    "url": "lessons/10-les-emotions.html",
    "revision": "d8fb89c764e86b64d4e58ce2b74a6534"
  },
  {
    "url": "lessons/11-demander-de-l-aide.html",
    "revision": "917d04860e210aed03332404f6832641"
  },
  {
    "url": "lessons/12-a-ty-et-co-u-ciebie-mieux-comprendre.html",
    "revision": "66882afff0b695ad83dad9595040c23f"
  },
  {
    "url": "lessons/2-merci-et-de-rien.html",
    "revision": "0f85ec1b3d7edd8af489e7351b196908"
  },
  {
    "url": "lessons/3-saluer.html",
    "revision": "c1cb5e79159f1932ad9411f801a20f0f"
  },
  {
    "url": "lessons/4-parles-tu-francais.html",
    "revision": "b9628e8637828b848ec8434e4e6cf361"
  },
  {
    "url": "lessons/5-s-excuser.html",
    "revision": "00c62e5b443525b068227cec2c52efe9"
  },
  {
    "url": "lessons/6-les-nombres-de-0-a-10.html",
    "revision": "85087c03db5fa5e23dcb6ae513a37f7f"
  },
  {
    "url": "lessons/7-les-nombres-de-11-a-100.html",
    "revision": "d0226c4c84442af01c06b057d3b84350"
  },
  {
    "url": "lessons/8-combien.html",
    "revision": "e99242d8f9e7cff1a1f21b4730df56c3"
  },
  {
    "url": "lessons/9-top-25-des-verbes.html",
    "revision": "7514cd3b0eb29bee28bd6f0b41ff5457"
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
