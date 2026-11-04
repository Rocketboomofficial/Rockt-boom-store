const CACHE='rocket-boom-store-v12-store-icon-motion';
const CORE=[
 './','./index.html','./manifest.webmanifest','./service-worker.js',
 './assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png',
 './assets/rocket-boom-game-logo.png','./assets/shayan-ai-logo.png',
 './assets/shayan-ai-1.jpg','./assets/shayan-ai-2.jpg','./assets/shayan-ai-3.jpg','./assets/shayan-ai-4.jpg'
];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>{
  if(cached)return cached;
  return fetch(event.request).then(response=>{
   if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
   return response;
  }).catch(()=>caches.match('./index.html'));
 }));
});
