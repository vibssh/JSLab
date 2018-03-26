//Service Worker File

var cacheName = 'PWA-v.01';
var filesToCache = [
  '/',
  '/index.html',
  '/css/app.css',
  '/css/materialize.min.css',
  '/fonts',
  '/js/jquery-2.2.4.min.js',
  '/js/materialize.min.js', 
  '/js/app.js'
];

/* 1.  Install SW */
self.addEventListener('install', function(e){
  cacheName = cacheName + 1;
  e.waitUntil(    
    caches.open(cacheName).then(function(cache){
      console.info('[SW] Caching App Shell');
      return cache.addAll(filesToCache);
    })
  );
});

/* 2. Activate SW  */
self.addEventListener('activate', function(e){
  console.info('[SW] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(key !== cacheName){
          console.info('[SW] Removing old cache', key);
          return caches.delete(key);
        }
      }))
    })
  );
  return self.clients.claim();
});

/* 3. Fetch SW */
self.addEventListener('fetch', function(e){
  console.info('[SW] Fetching', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );


});