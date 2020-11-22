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
    "revision": "1b050a810a2fb82842566c3494a37467"
  },
  {
    "url": "assets/css/0.styles.e4ab4c77.css",
    "revision": "52e044460881a3f0256aed917c4696cb"
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
    "url": "assets/js/19.feb79b5e.js",
    "revision": "2d92bfce068d13d5b121b5e00a26ece1"
  },
  {
    "url": "assets/js/2.a26de94c.js",
    "revision": "0a9638449bc6248cf6aace435076c295"
  },
  {
    "url": "assets/js/20.ac5a4991.js",
    "revision": "99f7aa4cb6b5214e66051aed2a6da105"
  },
  {
    "url": "assets/js/21.30115da1.js",
    "revision": "6fd499b7002b531d2cff14e7e01c0ceb"
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
    "url": "assets/js/app.f3217fee.js",
    "revision": "695963c067e13f0ee5242131ba13d3aa"
  },
  {
    "url": "exercises/index.html",
    "revision": "c26e0d8feb89e32368da51cb6ed9e9fc"
  },
  {
    "url": "icons/144x144.png",
    "revision": "e5acd2b90a7f685cff001953d89d5cc6"
  },
  {
    "url": "icons/152x152.png",
    "revision": "6edc80089ded0c472eb8ab4664fd4186"
  },
  {
    "url": "index.html",
    "revision": "10462f030fa2f4fc828ca9903d7cc6fc"
  },
  {
    "url": "lessons/1-se-presenter.html",
    "revision": "a4c64c7a69d1c6e7febab1cfc303ea02"
  },
  {
    "url": "lessons/10-les-emotions.html",
    "revision": "a84748eb0d4916732b5ef24f206b1ada"
  },
  {
    "url": "lessons/11-demander-de-l-aide.html",
    "revision": "3a9ec91cfe8c5495ce00b6687637ac38"
  },
  {
    "url": "lessons/12-a-ty-et-co-u-ciebie-mieux-comprendre.html",
    "revision": "57b99b368173dc8a6fcbcb09f9ab8f14"
  },
  {
    "url": "lessons/2-merci-et-de-rien.html",
    "revision": "7470037312a2832d26493cbcbf130843"
  },
  {
    "url": "lessons/3-saluer.html",
    "revision": "688f45c147cab5fe0898499fd9034bb4"
  },
  {
    "url": "lessons/4-parles-tu-francais.html",
    "revision": "5d2e0eedf81241347df84e56404c8b3c"
  },
  {
    "url": "lessons/5-s-excuser.html",
    "revision": "a051af4085f416cadd28e946dea63538"
  },
  {
    "url": "lessons/6-les-nombres-de-0-a-10.html",
    "revision": "ba758bcc58ec7b71ff08e3c669924e38"
  },
  {
    "url": "lessons/7-les-nombres-de-11-a-100.html",
    "revision": "fb0a10d6a2352f085ebdf4c724849a83"
  },
  {
    "url": "lessons/8-combien.html",
    "revision": "0feca1c823f04aa704601386e94ea0fa"
  },
  {
    "url": "lessons/9-top-25-des-verbes.html",
    "revision": "399a31f6807c25210dec861915efdf0b"
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
