
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Gebruik `workbox.routing.registerRoute()`...
workbox.routing.registerRoute(
  capture: new RegExp('/*'),
  handler: new workbox.strateies.NetworkFirst({
  cacheName: 'EEN_CACHE_KEY'
})
);

