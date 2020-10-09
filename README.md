# Local Storage Pro
A Web storage spec compliant cross browser local storage library.

![NPM](https://img.shields.io/npm/l/local-storage-pro)
[![npm version](https://badge.fury.io/js/local-storage-pro.svg)](https://badge.fury.io/js/local-storage-pro)
![npm bundle size](https://img.shields.io/bundlephobia/min/local-storage-pro)
![npm](https://img.shields.io/npm/dy/local-storage-pro)

This library simply wraps `window.localStorage` api and provide in-memory fallback if `localStorage` is not available for some reason. There are other libraries such as [localForage](https://github.com/localForage/localForage) and [store.js](https://github.com/marcuswestin/store.js) to persist data in whatever it takes mind but this library is not that kind. It simply use `localStorage`, extend its functionality and fallback to in-memory way at worst case.

API of this library is same as the api of `window.localStorage` as specified in [w3.org/TR/webstorage/][f5759939].

  [f5759939]: https://www.w3.org/TR/webstorage/ "Local Storage Specification"

## Install
```sh
npm i local-storage-pro
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:

```js
const store = require('local-storage-pro')
```

or via script tag:

```html
<script src="https://unpkg.com/local-storage-pro@1/dist/local-storage-pro.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use
Simply require and initiate the object:
```js
store.setItem('name', 'Murat')
```
`localStorage` and `memory` are the two drivers that this library use for storing data. `localStorage` prior to the `memory` if browser supports `localStorage`. `memory` always available.

## API
### Basic Functionality
```js
store.setItem(key, value)

store.getItem(key)

store.removeItem(key)

store.clear()

store.key(index)

store.length
```

### Error Handling
The library has a simple event emitter integrated. Errors can be catched by listening the `error` event:
```js
store.on('error', function(err, debug) {
  // err is the js native error object
  // debug is also a native error object but raised by the driver
})
```

## Extra Functionality
### An Optional `driver` Argument
All methods accept an optional `driver` argument. The developer may specify `memory` in cases which key-value pair may be persisted for a short time. Default is `localStorage` if supported by the browser.
```js
.setItem(key, value, driver)

.getItem(key, driver)

.removeItem(key, driver)

.clear(driver)

.key(index, driver)
```

Example:
```js
// userID is going to be saved in localStorage
store.setItem('userID', 1234567890)

// user is updating profile and selected a photo.
// we are going to keep it in memory
store.setItem('profilePhotoToBeUploaded', '==bA12332...as9d1', 'memory')

// we can get userID
const userID = store.getItem('userID')

// and profile photo but by specifying memory as the driver
const photo = store.getItem('profilePhotoToBeUploaded', 'memory')
```

### Exporting Store As JSON
Simple call `.json()`:
```js
const json = store.json()
// {userID: 1234567890}
```

### Add More Drivers
Although it's not recommended, the library allow you to add more drivers to use as a kind of memory. See files in `source/drivers` to learn the structure of a driver.
```js
store.addDriver('myCustomDriver', MyCustomDriver)
// now it's default driver
```

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "local-storage-pro.amd.js (4.88 KB)",
  "local-storage-pro.amd.polyfilled.js (13.55 KB)",
  "local-storage-pro.cjs.js (4.89 KB)",
  "local-storage-pro.cjs.polyfilled.js (13.55 KB)",
  "local-storage-pro.es.js (4.74 KB)",
  "local-storage-pro.es.polyfilled.js (13.41 KB)",
  "local-storage-pro.iife.js (4.88 KB)",
  "local-storage-pro.iife.polyfilled.js (13.55 KB)",
  "local-storage-pro.umd.js (5.17 KB)",
  "local-storage-pro.umd.polyfilled.js (13.84 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.array.index-of",
  "es.object.keys",
  "es.array.slice"
]
// based on the targets:
{
  "android": "83",
  "chrome": "49",
  "edge": "18",
  "firefox": "68",
  "ie": "9",
  "ios": "9.3",
  "opera": "68",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
