const assert = require('assert')
const Store = require('../dist/minified')

const store = new Store()
assert.deepStrictEqual(store.availableDrivers(), ['memory'])
