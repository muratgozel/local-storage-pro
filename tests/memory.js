const assert = require('assert')
const Store = require('../dist/minified')

const store = new Store()
assert.strictEqual( store.setItem('hey', 'Murat'), true )
assert.strictEqual( store.getItem('hey'), 'Murat' )

store.setItem('hey2', 'Murat2')
store.setItem('hey3', 'Murat3')
assert.strictEqual( store.length, 3 )

store.removeItem('hey3')
assert.strictEqual( store.length, 2 )
assert.deepStrictEqual( store.json(), {hey: 'Murat', hey2: 'Murat2'} )

store.clear()
assert.strictEqual( store.length, 0 )
