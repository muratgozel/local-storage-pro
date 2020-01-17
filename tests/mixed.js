const assert = require('assert')
const {JSDOM} = require("jsdom")
const Store = require('../dist/minified')

const dom = new JSDOM(`<!DOCTYPE html><html><body><p>Hello world</p></body></html>`, {
  url: 'http://127.0.0.1'
})
const store = new Store({window: dom.window})

store.setItem('hey', 'Murat')
store.setItem('hey2', 'Murat2', 'memory')
assert.deepStrictEqual( store.json(), {hey: 'Murat'} )
assert.deepStrictEqual( store.json('memory'), {hey2: 'Murat2'} )
