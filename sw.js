const CACHE_NAME = 'denia-app-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install and Cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files for offline use');
      return cache.addAll(ASSETS);
    })
  );
});

// Serve files from Cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
