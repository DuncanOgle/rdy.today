// This is the service worker with the Cache-first network

const CACHE = 'pwabuilder-precache';
const precacheFiles = [
    /* Add an array of files to precache for your app */
    'index.js',
    'index.css'
];

function precache() {
    return caches.open(CACHE).then(cache => cache.addAll(precacheFiles));
}

function fromCache(request) {
    // we pull files from the cache first thing so we can show them fast
    return caches.open(CACHE).then(cache => cache.match(request).then(matching => matching || Promise.reject('no-match')));
}

function update(request) {
    // this is where we call the server to get the newest version of the
    // file to use the next time we show view
    return caches.open(CACHE).then(cache => fetch(request).then(response => cache.put(request, response)));
}

function fromServer(request) {
    // this is the fallback if it is not in the cache to go to the server and get it
    return fetch(request).then(response => response);
}

// Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', (evt) => {
    console.log('[PWA Builder] The service worker is being installed.');
    evt.waitUntil(precache().then(() => {
        console.log('[PWA Builder] Skip waiting on install');
        return self.skipWaiting();
    }));
});

// allow sw to control of current page
self.addEventListener('activate', () => {
    console.log('[PWA Builder] Claiming clients for current page');
    return self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log(`[PWA Builder] The service worker is serving the asset.${evt.request.url}`);
    evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
    evt.waitUntil(update(evt.request));
});
