'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e9624b3e98b9110dd6e69085b4299982",
"/": "e9624b3e98b9110dd6e69085b4299982",
"CNAME": "fdd89c8da3f3103e96f3667f634e3fd6",
"main.dart.js": "ed78f15f578a5896773852e15ef41c1e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f809e4de1f7a35f0a2852c156149870",
".git/ORIG_HEAD": "b5207091ff7a0cb5aa12788612e12ad0",
".git/config": "e95a52de7e3ab5031d55add708b22ddd",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/7edef9b3dbb892a40ffb4dc6a0e6951808e031": "9948739502bb4aed446eaf2d37a9ab9c",
".git/objects/69/74e5daf33c9f820066a9ebe40c4f3974096a42": "767e6eed94ea32efc3af429b5fba2658",
".git/objects/05/fafc1759d3638b20b85fbe26ed0db0c749cca8": "0482b65225110cbfca6747ef0ace1d33",
".git/objects/9c/431a666037c7b6ee5adfbcc0c06956e0f5ef84": "77cfdf5de4f55b166823280ea63188e2",
".git/objects/a3/f517e40e58fb5ce296607ab3eaf952cd9dd556": "aeb3c0082a6c5165a5a82f9f722d7e3f",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/d9/c303f8ceb83849fe919796e11183cbe1e6c145": "ddf652115b616283cd8d5ad4a81cb7a6",
".git/objects/d7/762bfe1c8ef009c875f9d45d6d906054ba3b22": "685cdc0efe9759d6057bc65cdaac334c",
".git/objects/b3/9c0589fac0ff19d1e7a825be14ba2aa74915e9": "1e4e550d7a3c52d18ea9282b9a795eb1",
".git/objects/d1/7af0c550d6da8da31db6546347f4f033f8d562": "6627dedac3fd98c0cac1db9ab378add9",
".git/objects/ae/edcd7c4bfd84f5532383966c9fb4755341cdab": "fdc8e9132ec5be067709db7224ed47e5",
".git/objects/f2/182ec5907fd241746ce7d42b6a217fab17670f": "be717cc3884e55fe80f882aa648cc86a",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ec/dffe79010b5ebe89f8708acb616e0f2a3f43d5": "ae47bbd616c1bf34464fdeda90e43384",
".git/objects/20/393f539ccc057f93df7f044b9e3b22ffce39ca": "2dea2eefc8cb1f31795330137bd169f3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/7c/849c43ec80a76bf43ee718c27e353965a48eb8": "70ef75b8a8f5212210b469621cd702df",
".git/objects/89/ac050b0c11d6c522731751def37864df637e9d": "c9c43066b9970d8b969e1666db699261",
".git/objects/28/5f0bd1be28f6dc03c96dc2c7a7c24c47ad644c": "fa92fc63c29c3c2584cd6b9fb16c4105",
".git/objects/8f/6dc97120264113418956f638ff713c9888a909": "1ef7ccf77ddc7e3947a137502711c12b",
".git/objects/8a/344e4249f6f6aa5c2c5d0e12e00bf86354927f": "ca9479697e5958b6247b070e3be33332",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d1eea232e08fd6fd30165716c1377423387b98": "9d0d11add26cf5f11ae7d7fe69c84ddf",
".git/objects/75/7050f4f3a6c63098af953603958e3dc64bc0d6": "4be39f72cb9a9bb89c64a47daba5a306",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/3598df41fceeffe14d9e3138397ec2999da447": "7feade14ab9247302aa2d3d0f6808ede",
".git/objects/3a/faafaae6ebd27182fcae77a9ab77f806d1eb80": "16d9ed34b8dd9d9662b796ef0a2f5492",
".git/objects/3f/fcd8c60fcccf64701aeedf6c2e42b4fbadc934": "2f73a0684fc5e465035f9491e323533f",
".git/objects/3f/fac1ffe69bf249855ff45028ba4351ead7a5c9": "5fd66ed48df6460c9468fcd61a03005d",
".git/objects/6c/41aab2b8a51f7fc60b554231949f1352cb1b1f": "24099b04ca45fc2f1688b329268a7f4c",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/63/c623c9405efca4779126ba3d93d280bd6ae73b": "25bf8971cea916338995f3b62eabbc3d",
".git/objects/64/43560da47fc881d1dbd1b10ac2f9a4f0e2c58a": "ca1fcbb18817843c5c7ae4f9c50b43a5",
".git/objects/d4/edf1a8dead6f618efe5bb6adac7817fa0f2396": "489ca234062478e756325bb0e720198b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f4d4c747ec6d27e3b7b37f10b9a452ed841546": "869c2aeb40a6bd3e831d56a269b2b56d",
".git/objects/a8/201f7f2da513cb1588e875c37a3619c10535b0": "e3137bedb9d8816d7750a40dc07b4947",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d53fcd182fd3250ae78b2e98b98e981f38a281": "f3b2bf72713d07202f12cb99414a8867",
".git/objects/41/c64543b537eb7761c189f2b2a46fbf905c2cd3": "f37936e34e0b631a4daba0c12dbc0387",
".git/objects/77/58a646c0f399f538a514445a6b8990d3bcb5f3": "100af2b83e5e063117fcdc806fcf1ec1",
".git/objects/1d/0512473ecb9c2fe1c6f249bff1c5dd64491397": "12126e54873405182efdbe7c7ffcda5e",
".git/objects/2e/30b078997725413a4879fbf10909ef68838f10": "a1e7a8712d425d89578c3b06ad3a30f1",
".git/objects/47/0dfda813f7123e043275cf35880648de31eb0a": "4435c8be9b3ce0bd7026c9dc8320b924",
".git/objects/78/1b2a6208b3f534f5a46f3f1b7e42635c1b5857": "c83f69db067e29d083d6514b273f1eab",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/22/84dcc7e0bf924111054447fd08b1d97f006404": "1ad595a35e9f6fc7ef926b1819dbcc3c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6bee690984cb4eeaad93c45548cacc2e",
".git/logs/refs/heads/master": "6bee690984cb4eeaad93c45548cacc2e",
".git/logs/refs/remotes/origin/master": "623fffa6c0f75a4ab74cc3698630a28b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "a4ad1985bb45ad103d1e2256827f6c4d",
".git/refs/remotes/origin/master": "a4ad1985bb45ad103d1e2256827f6c4d",
".git/index": "09f38f07ceac396c8ffe12ca314e0704",
".git/COMMIT_EDITMSG": "41c4ecdfaf2ca38795a35b51fc743864",
".git/FETCH_HEAD": "dd6201adb309a03a80f05a4a5b9f6942",
"assets/images/green_landscape.jpg": "5722c68399e2a637201da17f744b897e",
"assets/AssetManifest.json": "0d653be97fa783a890e7e094f57a7f2a",
"assets/NOTICES": "ee46c3b5c9f21ead637e489c91bfd715",
"assets/FontManifest.json": "96446cc66cdff690406f833397de250f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/rocksalt.ttf": "1af0b153d5633ca641badc9e7dfe8245",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
