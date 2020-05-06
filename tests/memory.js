const store = require('../dist/local-storage-pro.cjs.js')

test('memory', () => {
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
})
