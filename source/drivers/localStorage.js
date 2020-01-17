function LocalStorageDriver(opts = {}) {
  this.error = null
  this.window = opts.window
}

LocalStorageDriver.prototype.test = function test() {
  if (typeof this.window == 'undefined' || this.window === null) return false

  if ('localStorage' in this.window) {
    try {
      this.window.localStorage.setItem('test', 'pass')
      this.window.localStorage.removeItem('test')
    } catch (e) {
      return false
    }

    return true
  }

  return false
}

LocalStorageDriver.prototype.clearError = function clearError() {
  this.error = null
}

LocalStorageDriver.prototype.set = function set(key, value) {
  try {
    this.window.localStorage.setItem(key, value)
  } catch (e) {
    this.error = e
    return false
  }

  return true
}

LocalStorageDriver.prototype.get = function get(key) {
  return this.window.localStorage.getItem(key)
}

LocalStorageDriver.prototype.remove = function remove(key) {
  this.window.localStorage.removeItem(key)
  return true
}

LocalStorageDriver.prototype.clear = function clear() {
  this.window.localStorage.clear()
  return true
}

LocalStorageDriver.prototype.length = function length() {
  return this.window.localStorage.length
}

LocalStorageDriver.prototype.key = function key(index) {
  return this.window.localStorage(index)
}

LocalStorageDriver.prototype.json = function json() {
  const json = {}
  for (let i = 0; i < this.length(); i++) {
    const key = this.window.localStorage.key(i)
    json[ key ] = this.get(key)
  }
  return json
}

module.exports = LocalStorageDriver
