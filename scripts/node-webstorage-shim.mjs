// Node 25 exposes a `localStorage` global, but with no `--localstorage-file`
// path it is an inert object without `getItem`/`setItem`. @vue/devtools-kit
// treats `typeof localStorage !== 'undefined'` as "we are in a browser" and
// calls `localStorage.getItem(...)`, which crashes every SSR request with
// "localStorage.getItem is not a function".
//
// Removing the broken globals restores the pre-Node-25 server environment.
// Delete this file (and the --import flags in package.json) once the project
// runs on Node 22/24 LTS, or once devtools-kit guards the call itself.
//
// Detect the placeholder with `instanceof Storage`: reading any property of it
// (e.g. `.getItem`) makes Node print "--localstorage-file was provided without
// a valid path", which Nuxt then logs as an ERROR.
const storage = globalThis.localStorage;
const isRealStorage =
    typeof Storage === 'function' && storage instanceof Storage;

if (storage && !isRealStorage) {
    delete globalThis.localStorage;
    delete globalThis.sessionStorage;
}
