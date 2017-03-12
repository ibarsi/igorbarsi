self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('igorbarsi-static').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/css/normalize.css',
                '/css/main.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestUrl = new URL(event.request.url);

    // Is this a request for a font?
    if (requestUrl.host === 'fonts.gstatic.com') {
        event.respondWith(
            caches.open('igorbarsi-fonts')
                .then(function (cache) {
                    return cache.match(event.request).then(function (match) {
                        if (match) {
                            console.log('[*] Serving cached font: ' + event.request.url);

                            return match;
                        }

                        return fetch(event.request).then(function (response) {
                            cache.put(event.request, response.clone());
                            console.log('[*] Adding font to cache: ' + event.request.url);

                            return response;
                        });
                    });
                })
        );
    }
    else {
        // It's not a font, handle the request normally
        // as we were doing before
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    if (response) {
                        console.log('[*] Serving cached: ' + event.request.url);

                        return response;
                    }

                    console.log('[*] Fetching: ' + event.request.url);

                    return fetch(event.request);
                }
            )
        );
    }
});
