import {typekit, functionkit} from 'basekits'

function LocalStorageDriver(opts = {}) {
  this.error = null
  this.window = opts.window
}

LocalStorageDriver.prototype.test = function test() {
  if (typeof this.window == 'undefined') return false

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

LocalStorageDriver.prototype.set = function set(key, value, lib) {
  // serialize value
  const v = functionkit.stringify(value)

  try {
    this.window.localStorage.setItem(key, v)

    // will remember type later
    const type = typekit.getType(value)
    this.window.localStorage.setItem('LOCALSTORAGEPRO_TYPE_' + key, type)
  } catch (e) {
    this.error = e
    return false
  }

  return true
}

LocalStorageDriver.prototype.get = function get(key, lib) {
  const type = this.window.localStorage.getItem('LOCALSTORAGEPRO_TYPE_' + key)
  if (typeof type == 'string' && type.length > 0) {
    const value = this.window.localStorage.getItem(key)
    return functionkit.destringify(value, type)
  }
  else {
    return this.window.localStorage.getItem(key)
  }
}

LocalStorageDriver.prototype.remove = function remove(key) {
  this.window.localStorage.removeItem(key)
  this.window.localStorage.removeItem('LOCALSTORAGEPRO_TYPE_' + key)
  return true
}

LocalStorageDriver.prototype.clear = function clear() {
  this.window.localStorage.clear()
  return true
}

LocalStorageDriver.prototype.length = function length() {
  return this.window.localStorage.length / 2
}

LocalStorageDriver.prototype.key = function key(index) {
  return this.window.localStorage(index)
}

LocalStorageDriver.prototype.json = function json(lib) {
  const json = {}
  for (let i = 0; i < this.length() * 2; i++) {
    const key = this.window.localStorage.key(i)
    if (!(key.length > 21 && key.slice(0, 21) == 'LOCALSTORAGEPRO_TYPE_')) {
      json[ key ] = this.get(key, lib)
    }
  }
  return json
}

export default LocalStorageDriver
