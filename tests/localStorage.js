const {JSDOM} = require("jsdom")
const store = require('../dist/local-storage-pro.cjs.js')

const dom = new JSDOM(`<!DOCTYPE html><html><body><p>Hello world</p></body></html>`, {
  url: 'http://127.0.0.1'
})
store.setWindow(dom.window)

test('setters and getters.', () => {
  store.setItem('hey', 'Murat')
  expect(store.getItem('hey')).toBe('Murat')

  store.setItem('hey2', 'Murat2')
  store.setItem('hey3', 'Murat3')
  expect(store.length).toBe(3)

  store.removeItem('hey3')
  expect(store.length).toBe(2)
  expect(store.json()).toStrictEqual({hey: 'Murat', hey2: 'Murat2'})

  store.clear()
  expect(store.length).toBe(0)

  store.setItem('hey4', {sample: 'A'})
  expect(store.getItem('hey4')).toStrictEqual({sample: 'A'})

  store.setItem('hey5', JSON.stringify({sample: 'A'}))
  expect(store.getItem('hey5')).toBe(JSON.stringify({sample: 'A'}))
})
