'use strict';

// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// The getCurrentPosition function is probably going to throw an error, but that
// is fine. As long as you can use it as a promise.

