self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open('trade-bot-cache').then(function(cache) {
            return cache.addAll([
                'index.html',
                'manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
