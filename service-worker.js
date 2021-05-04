
const cashName = "webCash"

//Use cache when called in index
self.addEventListener('install', (e) => {
    //console.log("Attempt to install")
    e.waitUntil(
      caches.open(cashName).then((cache) => cache.addAll([
        'index.html',
        'index.js',
        'styles.css',
        'lightblue.jpg',
        'lightgold.jpg'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    //console.log("Attempt to fetch")
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });