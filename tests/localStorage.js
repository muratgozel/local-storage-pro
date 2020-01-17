const assert = require('assert')
const {JSDOM} = require("jsdom")
const Store = require('../dist/minified')

const dom = new JSDOM(`<!DOCTYPE html><html><body><p>Hello world</p></body></html>`, {
  url: 'http://127.0.0.1'
})
const store = new Store({window: dom.window})
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
