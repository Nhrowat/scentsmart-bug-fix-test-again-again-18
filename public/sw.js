const CACHE_NAME = 'scentsmart-v1';
const STATIC_CACHE = 'scentsmart-static-v1';
const DYNAMIC_CACHE = 'scentsmart-dynamic-v1';

// Files to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/pages/Index.tsx',
  '/src/index.css',
  '/manifest.json',
  '/favicon.ico',
  '/placeholder.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE
            )
            .map(cacheName => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension requests
  if (event.request.url.includes('chrome-extension://')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          console.log('[SW] Serving from cache:', event.request.url);
          return response;
        }
        
        // Otherwise fetch from network and cache dynamic content
        return fetch(event.request)
          .then(fetchResponse => {
            // Don't cache if not a valid response
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }
            
            // Clone the response for caching
            const responseToCache = fetchResponse.clone();
            
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                console.log('[SW] Caching dynamic resource:', event.request.url);
                cache.put(event.request, responseToCache);
              });
            
            return fetchResponse;
          })
          .catch(() => {
            console.log('[SW] Network failed, serving offline page');
            // For HTML requests, return a basic offline page
            if (event.request.headers.get('accept').includes('text/html')) {
              return new Response(`
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>ScentSmart - Offline</title>
                    <style>
                      body { 
                        font-family: system-ui, sans-serif; 
                        text-align: center; 
                        padding: 2rem; 
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        min-height: 100vh;
                        margin: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                      .container { max-width: 400px; }
                      h1 { font-size: 2rem; margin-bottom: 1rem; }
                      p { font-size: 1.1rem; opacity: 0.9; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <h1>📱 You're Offline</h1>
                      <p>Don't worry! Your cached fragrances are still available when you return online.</p>
                      <p>Please check your internet connection and try again.</p>
                    </div>
                  </body>
                </html>
              `, {
                headers: { 'Content-Type': 'text/html' }
              });
            }
          });
      })
  );
});

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Sync any pending data when connection is restored
      console.log('[SW] Syncing data...')
    );
  }
});

// Push notification handling (for future features)
self.addEventListener('push', (event) => {
  console.log('[SW] Push received');
  const options = {
    body: event.data ? event.data.text() : 'New fragrances available!',
    icon: '/placeholder.svg',
    badge: '/favicon.ico',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('ScentSmart', options)
  );
});
