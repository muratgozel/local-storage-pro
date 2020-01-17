# Local Storage Pro
A Web storage spec compliant cross browser local storage library.

This library simply wraps `window.localStorage` api and provide in-memory fallback if `localStorage` is not available for some reason. There are other libraries such as [localForage](https://github.com/localForage/localForage) and [store.js](https://github.com/marcuswestin/store.js) to persist data in whatever it takes mind but this library is not that kind. It simply use `localStorage`, extend its functionality and fallback to in-memory way at worst case.

API of this library is same as the api of `window.localStorage` as specified in [w3.org/TR/webstorage/][f5759939].

  [f5759939]: https://www.w3.org/TR/webstorage/ "Local Storage Specification"

## Installation
Through npm:
```sh
npm i local-storage-pro
```

## Initiation
Simply require and initiate the object:
```js
const LocalStoragePro = require('local-storage-pro')
const store = new LocalStoragePro()
```
Initiate with custom `window` object **(for special use cases)**:
```js
const store = new LocalStoragePro({ window: myWindowObject })
```
`localStorage` and `memory` are the two drivers that this library use for storing data. `localStorage` prior to the `memory` and both available to use if browser supports `localStorage`.

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
.setItem(key, value, ?driver)

.getItem(key, ?driver)

.removeItem(key, ?driver)

.clear(?driver)

.key(index, ?driver)
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

## Development & Contributing
Clone this repo:
```sh
git clone git@github.com:muratgozel/local-storage-pro.git
```
Run build command after making changes:
```sh
npm run build
npm run build-umd
```
Run tests:
```
npm run test
```
Make a pull request.
