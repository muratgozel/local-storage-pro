const {JSDOM} = require("jsdom")
const store = require('../dist/local-storage-pro.cjs.js')

const dom = new JSDOM(`<!DOCTYPE html><html><body><p>Hello world</p></body></html>`, {
  url: 'http://127.0.0.1'
})
store.setWindow(dom.window)

test('json output across different drivers.', () => {
  store.setItem('hey', 'Murat')
  store.setItem('hey2', 'Murat2', 'memory')

  expect(store.json()).toStrictEqual({hey: 'Murat'})
  expect(store.json('memory')).toStrictEqual({hey2: 'Murat2'})
})
