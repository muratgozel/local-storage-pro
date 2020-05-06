const store = require('../dist/local-storage-pro.cjs.js')

test('drivers.', () => {
  expect(store.availableDrivers()).toStrictEqual(['memory'])
})
