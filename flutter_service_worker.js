'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "481cd8f4b923b360a0630c72d2825e5d",
"version.json": "15894a873028de623f91fd21ea9b45f1",
"index.html": "e3bb84486ba81dfac08e562f3738c4a0",
"/": "e3bb84486ba81dfac08e562f3738c4a0",
"main.dart.js": "d7b773bbfe26ad0f03663a70781944fc",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "d370c1d1481b7d1e00f52de5953852b1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "333abe4d60a0dd52a29099c764a35abb",
"assets/AssetManifest.json": "bd45751b6013c7c81ce20d1f4ae52969",
"assets/NOTICES": "14bfdccef9c6bfbe8587fbe5843804bd",
"assets/FontManifest.json": "3fc10cad011aa63342fc183aa9a24db7",
"assets/AssetManifest.bin.json": "e9e794f3057763303f478900035bd76e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/pay_platform_interface/pubspec.yaml": "576a151a92ea9fc3da773ad9e9b4864b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/moyasar/assets/images/visa.png": "b5b468913fc30cad4635fed4de9544ab",
"assets/packages/moyasar/assets/images/amex.png": "31520ab000dea0aaf6f5f000a6a0ee09",
"assets/packages/moyasar/assets/images/mastercard.png": "c376b0b9c33c308e330f0edd789a2fe2",
"assets/packages/moyasar/assets/images/mada.png": "95ce9fd8a741b34cd1a9db1452c8f049",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e83dc0e937cb269d9b83efb4b8b2fd62",
"assets/fonts/poppins_light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/poppins_medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/poppins_bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/poppins_regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/janna_lt_regular.ttf": "378ee291669883b443cc8036d148b4fe",
"assets/fonts/poppins_thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/MaterialIcons-Regular.otf": "fdf82f9bd894abe93a6350f1565af5d3",
"assets/fonts/calibry.ttf": "18a559d5b41f966a214f3f9f8a35a08f",
"assets/fonts/janna_lt_bold.ttf": "0655ac2529565b93080fef53a0e85ffe",
"assets/assets/svg/intro_2.svg": "1e34219f6a4e0b5f826e7c4725592c5e",
"assets/assets/svg/illustration_delete.svg": "a1e7ba68b0cab0097c9ae5914bd0e34a",
"assets/assets/svg/create_icon.svg": "a7ee593a234b41704cf9197694b9078f",
"assets/assets/svg/inquiry.svg": "112d41bb368ee0b5ece945f8d23d2abb",
"assets/assets/svg/password_changed_ill.svg": "b169992a32b4e36b35c4f12f46cdabcc",
"assets/assets/svg/republish.svg": "14789bceec2794ea9170be7795fe41cc",
"assets/assets/svg/price_tag.svg": "ba27887aa9731a1b0f8a6a55bfb6e0a0",
"assets/assets/svg/intro_3.svg": "2b29018be924ee05a80ec3280aa9aea6",
"assets/assets/svg/intro_1.svg": "111cbf1d88a9572385b0ba9dbcd27009",
"assets/assets/svg/favourite_filled.svg": "b2ac3c904b43485a5ef846823f85d6cc",
"assets/assets/svg/eng.svg": "6dcadf6916764560c2f1fec586e2c1de",
"assets/assets/svg/illustration_success.svg": "7218df0007f4e7a5475b0b2fc2817035",
"assets/assets/svg/terms_conditions.svg": "3611772051038e31244ae7da3339a7e1",
"assets/assets/svg/deactivate.svg": "1e1544b6af2f6889b551ab6fb6dacecf",
"assets/assets/svg/search_icon.svg": "5a72c52163bbe229b187020660387338",
"assets/assets/svg/person.svg": "14200c83d615ce1b9dee720648ad3a44",
"assets/assets/svg/login_bg.png": "22c8c8d4af0468f2f3a7e3ea2ba831a5",
"assets/assets/svg/img_add.svg": "79d5b2da1ffc40e6db5a9291162f83c5",
"assets/assets/svg/logout.svg": "09ece4d94508f21e9253c7f513c6a164",
"assets/assets/svg/year.svg": "d142e72bd4f1729f97d06500a6caac62",
"assets/assets/svg/sorting.svg": "2b876166da31e935a979b224f369c629",
"assets/assets/svg/wrong_icon.svg": "14e5e09ff7245fb85912982440fd550b",
"assets/assets/svg/verified.svg": "1fadcaf582b3beedf61eb8516f98d170",
"assets/assets/svg/home_icon.svg": "44b1227fa552deb8a040e2aa591e9c24",
"assets/assets/svg/favourite_unfilled.svg": "f626113b8aa63d7f40fe1182d3ee80f6",
"assets/assets/svg/twitter_outline.svg": "36922e67ec2f3b8fc9cbd8761eb1709e",
"assets/assets/svg/address.svg": "d82c02aedd026a8177155ecf198278f9",
"assets/assets/svg/lock.svg": "1ac933aa2320c1506ae738021a89ba37",
"assets/assets/svg/instagram.svg": "785898b03d765b0d8853ecc40166928d",
"assets/assets/svg/outline_whatsapp.svg": "9893f5386420f8cb947e4af3e11138c2",
"assets/assets/svg/promote_icon.svg": "c4d3066bbbf5319273e2a58081b12658",
"assets/assets/svg/msg.svg": "26755130301009cacba4d7c7ecbae1f0",
"assets/assets/svg/time.svg": "ce04cabf69acabc1c24f37f7eb3b61a3",
"assets/assets/svg/login_bg.svg": "2acbed27cb83b25fdaf6c95b51ca4027",
"assets/assets/svg/advertise.svg": "805a6c4e17bfc9be948860a375e3b808",
"assets/assets/svg/star_filled.svg": "26610b706f3a1f79ebb1068d282c5124",
"assets/assets/svg/unlimited.svg": "73045508ef46aa5cfcc5e5f6b05cf4b1",
"assets/assets/svg/gear2.svg": "86c9b50c79f2ae9bd5fd7a8b2baa96a8",
"assets/assets/svg/refund.svg": "7609fb8f21fbfcf62fc50c8f0a2ca0f7",
"assets/assets/svg/illustration_signout.svg": "b7cc99773233b8f208859b1e95e4fba5",
"assets/assets/svg/ae.svg": "71ffb9fce1b9eb21923792e5460c8934",
"assets/assets/svg/arrow_right.svg": "c097493d90af13ebc61359c7be3f42a0",
"assets/assets/svg/more_icon.svg": "91b63786ae1f15d2af5a9692aee72da0",
"assets/assets/svg/category.svg": "e8e3db88254387f758541aee02058fa9",
"assets/assets/svg/email.svg": "6e07b7f8e1bad3579c04b0dcae97e0c3",
"assets/assets/svg/info.svg": "24b2699a6a3549db459b3380eebc6e90",
"assets/assets/svg/ads.svg": "beccb7b3e2275c186997c5dd6f6d0923",
"assets/assets/svg/gear.svg": "9b04095b42db247151cadfe93dc758a1",
"assets/assets/svg/expired.svg": "8d3e71ce1b54b261bb7ab6e853d75b24",
"assets/assets/svg/subject.svg": "4401cb61c24e99df3c1b2affde1829b3",
"assets/assets/svg/bulk_img.svg": "01f9a7f8ba461cd0f19c381a7ef35c31",
"assets/assets/svg/message.svg": "31497d88e759b5583a8352b4b4a3eb41",
"assets/assets/svg/crown.svg": "275d1d572aa72554d7383d87725d3a2a",
"assets/assets/svg/facebook.svg": "0138ffa6ca5790de3f86c535adcfcbf6",
"assets/assets/svg/verified_filled.svg": "3870988370f66f5edaf82b884533bbf2",
"assets/assets/svg/rocket_icon.svg": "f9e41b60372ba2af2af2a61f43aaeb3a",
"assets/assets/svg/whatsapp.svg": "1cae972add4a22fbfde7fc52ba4e62f9",
"assets/assets/svg/repost.svg": "915f6ad68ce46dd9c2d6209a69f96ab9",
"assets/assets/svg/star.svg": "662de4e7edf9229fec46ed47aaa25db4",
"assets/assets/svg/crown_unfilled.svg": "3c4d035ba1e92a9f1b177ceb756c1641",
"assets/assets/svg/contact_us.svg": "f10b72075a1627b9aad03943b5950a63",
"assets/assets/svg/youtube.svg": "15f391b6dd0915e58d46d2e059ed7323",
"assets/assets/svg/no_ads.svg": "c89620d4a528bdecf58b1ce8267f8209",
"assets/assets/svg/hide_eye.svg": "d58605a282b54b45116ba067bec046ae",
"assets/assets/svg/delete.svg": "3348257de2bcf1f0a52e87e867c70fd7",
"assets/assets/svg/phone.svg": "057d6da0d6987710c3ae07ff7dc8a63d",
"assets/assets/svg/promotion_box.svg": "c6dd51da435f1552dc124a8392bad64f",
"assets/assets/svg/eye.svg": "800b993d3c4807568d59df809c3138ae",
"assets/assets/svg/location.svg": "eed0823b6360971a335d123e706a3207",
"assets/assets/svg/share.svg": "df3c667aa1b6ef478f5b1573389d6047",
"assets/assets/svg/privacy_policy.svg": "c612984b44d1b67e8f0ae1f8bd4d23c9",
"assets/assets/svg/linkedin.svg": "9d7afce7b1ea04fadeb556b43fb53741",
"assets/assets/svg/twitter.svg": "52614d019e800a6c6e9cd577a2ee9c8b",
"assets/assets/svg/filter.svg": "e255d24959ef78468200eea0e3d2f276",
"assets/assets/svg/profile_circle.svg": "f92137299be8e24d07baa95af55f5225",
"assets/assets/svg/illustration_payment.svg": "2f857bc889237ec03daf39e4ad44299b",
"assets/assets/svg/report_flag.svg": "aa95d61b041545e84860738025415d4f",
"assets/assets/svg/illustration_promote.svg": "f7d1038d464ddbb0737e5b319ee2ff46",
"assets/assets/svg/date.svg": "1c5fd29a1312d427761998f4fd78eb6f",
"assets/assets/svg/rocket.svg": "cbb17f5bf6dc88d87af530df78ba1e67",
"assets/assets/svg/illustration_login.svg": "052490895fa751eb6caa5bca39ebed52",
"assets/assets/svg/contact_only.svg": "bbfd6e43b7e94cac0ab1eaaf2af71ac0",
"assets/assets/images/banner_bg.png": "4384ea4970540c85a297a226fe0bb13f",
"assets/assets/images/logo.png": "51021ff079b26029641b05f6fe6d9f91",
"assets/assets/images/equipment_img.png": "f32e518632eb6687afc1e8cfc673f870",
"assets/assets/images/user_pic.png": "f8e1658665fa86d1bebb11f6385e459c",
"assets/assets/images/equipment_img2.png": "9fc90cfb29147f0458c54005ca02c345",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
