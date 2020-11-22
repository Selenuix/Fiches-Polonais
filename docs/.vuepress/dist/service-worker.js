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
    "revision": "9f4ef457fc2a7ea454f2c03804df9e0d"
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
    "url": "assets/js/app.8ffa4d2a.js",
    "revision": "a05d80f6f0a8291af5c4a91f48041648"
  },
  {
    "url": "exercises/index.html",
    "revision": "b4c6cda896b539c269556240f63e25ad"
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
    "revision": "dc6a9bce56ebb5db5c22c7d2e235edc4"
  },
  {
    "url": "lessons/1-se-presenter.html",
    "revision": "c91e3268d039368e31e7a8e8ba801c90"
  },
  {
    "url": "lessons/10-les-emotions.html",
    "revision": "3e2ccea006d1b49f213e0138fa9599c1"
  },
  {
    "url": "lessons/11-demander-de-l-aide.html",
    "revision": "442045d901378961033d1dd2d0d57977"
  },
  {
    "url": "lessons/12-a-ty-et-co-u-ciebie-mieux-comprendre.html",
    "revision": "48bdc60d8964c1b4ebf436bf8a0d4187"
  },
  {
    "url": "lessons/2-merci-et-de-rien.html",
    "revision": "574a6ee92faab71b5042c1907eb4ca65"
  },
  {
    "url": "lessons/3-saluer.html",
    "revision": "1c8eb2aade4d988ac215a4c79af69cc1"
  },
  {
    "url": "lessons/4-parles-tu-francais.html",
    "revision": "e0b74dd42286bdf2f61c9274c0262bd7"
  },
  {
    "url": "lessons/5-s-excuser.html",
    "revision": "b0717b4dca2137dcd503f336f0f8bf7f"
  },
  {
    "url": "lessons/6-les-nombres-de-0-a-10.html",
    "revision": "27c2a2f1169818bdafdc79c883425496"
  },
  {
    "url": "lessons/7-les-nombres-de-11-a-100.html",
    "revision": "e996cbbf711abd3168f08c3277db38c1"
  },
  {
    "url": "lessons/8-combien.html",
    "revision": "1e7596c5aca116454125e87eba4de924"
  },
  {
    "url": "lessons/9-top-25-des-verbes.html",
    "revision": "02ea1652358fce625956ac3f092def24"
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
