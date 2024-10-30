'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f4526d778fd90551afe6d96607fadb84",
"assets/AssetManifest.bin.json": "1464c5e72e4f8653aa321af572afb13c",
"assets/AssetManifest.json": "1fb709f3615b5f3620b1923b7ee22f05",
"assets/assets/files/Flutter_developer.pdf": "380c5c69eeec47465f68bfcb2af61eb6",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/images/animeWallpaper1.png": "f3b5b4951277b3e568ace65e2a95d4a0",
"assets/assets/images/animeWallpaper2.png": "5bd8d4c4dd09354421b102d57cd6d71a",
"assets/assets/images/animeWallpaper3.png": "98b08033057cebb6f512b69e2003a75f",
"assets/assets/images/animeWallpaper4.png": "c6d5d0ce6073fb1d0da772651201d641",
"assets/assets/images/animeWallpaper_logo.png": "d0213a4765e6b81ad4b932933c364975",
"assets/assets/images/api.svg": "e188215ca7f1440c17c2443e9e1b451a",
"assets/assets/images/assistant.png": "303867ff7f8cd289cacf74a068262363",
"assets/assets/images/background_name.svg": "249fcf7b23b2213be20509b5e636fc94",
"assets/assets/images/behance.svg": "b3964f5576a4b7ea7924385aac823262",
"assets/assets/images/bot.png": "a53083ff42e4f02582cbe8043ca856a9",
"assets/assets/images/cloud-api.png": "2a3a325b6ed5a288ddba7dfde8219344",
"assets/assets/images/cutpng.png": "5f96dca50bb8436b6cf7561fe9da2e61",
"assets/assets/images/cutsvg.svg": "29331c940c6d29f879d2d98b204da2c8",
"assets/assets/images/database.svg": "f903e7d20f838f1b25147f89f1faec21",
"assets/assets/images/downlaod.svg": "62f6b4cdf33169a60141b1d8ff66b7f1",
"assets/assets/images/drawer.svg": "44666f9c0fc7420f361bc070b0572862",
"assets/assets/images/dribble.svg": "11a2677a766df7451e898d63aaf55791",
"assets/assets/images/ecommerce.png": "0836b16b1bbaa8257881e96a0090dc5e",
"assets/assets/images/eram.png": "4c0463415269c7f7c17ac74e59a82ecb",
"assets/assets/images/farm.png": "63ab5259199ac7d4c69b4cdf6e9cd3b3",
"assets/assets/images/figma.svg": "97755749866184e93275305742191094",
"assets/assets/images/Firebase.svg": "69e5c0e9f6658b7236f74f900f9cd3db",
"assets/assets/images/flutter.svg": "9f925a19d0842ad0d1d53c2d46b17a00",
"assets/assets/images/flutter2.svg": "59d4095e142e9c53d4c5ff004ec4e717",
"assets/assets/images/flutter3.svg": "7c8ff38a9fffd4883bd09b62b1977167",
"assets/assets/images/flutterLogo.svg": "f810ecd5efa6b2f7a3db1468d159aff8",
"assets/assets/images/github.svg": "8a8745173f22e1776da8674fa434ca04",
"assets/assets/images/google_maps_old.svg": "8f4219f30b9745a077523b82abdc1912",
"assets/assets/images/instagram.svg": "37fb40554545b135b0cdd0c65f8bbe23",
"assets/assets/images/linkedin.svg": "a502015ddbc10eecc399085e25d49fdd",
"assets/assets/images/mail.svg": "463aacd4eec6266d7ecad6db5b69e2c2",
"assets/assets/images/mobile-application.png": "3b9908d7478663ec95056d838e5bc8a2",
"assets/assets/images/mysql_logo.svg": "1364910401b0aae2a8b077e22eb7e9f3",
"assets/assets/images/notifications.svg": "519e99852c353f440581d375aa4dcf11",
"assets/assets/images/ojrah.png": "7c28586f1525745461bf5b788b4f6ce2",
"assets/assets/images/osama2.JPG": "e0c3b41d871cda0ef640c61bc8b8d89a",
"assets/assets/images/osama3.JPG": "54867750c3f0fa8b9109c39f8d9ff7de",
"assets/assets/images/osamasvg.svg": "affaba0fe137f25efc635b32b61d3e1f",
"assets/assets/images/osma1.png": "42e744902ce67f95a742223db0cc1883",
"assets/assets/images/phone.svg": "1f3178f1e5a93b2da80635af5e9432ae",
"assets/assets/images/php_logo.svg": "4d6d8e8bd19f7df7f745fd5b5763c198",
"assets/assets/images/php_server.svg": "c218a7f9beca5eb39328d4f783c283b1",
"assets/assets/images/programmer.png": "e4b32f8b3510badabc9dde50fcf09940",
"assets/assets/images/programming.svg": "225370ab08fe77e9bd26f26d21683587",
"assets/assets/images/Rectangle.png": "6b231bbe42ac968a075862dd45a4e856",
"assets/assets/images/responsive.svg": "182b300d5c811f29307958b1584b6f78",
"assets/assets/images/rest_api.svg": "a31930ed85ca5f466d70ed8f77ca38ce",
"assets/assets/images/school.png": "5ba063745e22bdf973fdc2a71ceae8ac",
"assets/assets/images/smartphone.png": "c42bd13ffb203e062cef4f035d68ae0c",
"assets/assets/images/sql.svg": "6074d3fcf527f58d1677c0ee81666ee1",
"assets/assets/images/system-monitoring.png": "1a22d5d961dce1d74d6c183559097ae6",
"assets/assets/images/translation.svg": "00de5e2f74865e067cc1e2877b7a1f0a",
"assets/assets/images/wasteIspector.png": "e7ecab8a0c9ae38d76fa94054a0cca9e",
"assets/assets/images/web-design.png": "439b22f2deb87c3100044ae84e1b73ba",
"assets/assets/images/web-developer.png": "ced1ddeffc89207deee500cd0fce8881",
"assets/assets/images/xd.svg": "da9ededf07c4234143ab16e6763ef0dc",
"assets/FontManifest.json": "00beca3004f7edf9f925ec45f3bc46a6",
"assets/fonts/MaterialIcons-Regular.otf": "0c4a456ef1becca7bba3d195197670a8",
"assets/NOTICES": "d1abc6489660d1bd13ae383450764445",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "243016b8b7270acb33192543f075d43c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b4310b10f0584d157cb3ada291e99efb",
"icons/Icon-192.png": "fc8b0bd32f782f654b24408481cbd3b2",
"icons/Icon-512.png": "e0226e2a9197926b37fa836ab07caf20",
"icons/Icon-maskable-192.png": "fc8b0bd32f782f654b24408481cbd3b2",
"icons/Icon-maskable-512.png": "e0226e2a9197926b37fa836ab07caf20",
"index.html": "328140939ff09e4133cd5f8f9d1027b2",
"/": "328140939ff09e4133cd5f8f9d1027b2",
"main.dart.js": "041d5c860ea884a9e33471fa1a6d8b73",
"manifest.json": "9d2f64abe67ddf51f41de96731ff6377",
"version.json": "7ba965387ce75644931901274ab48b35"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
