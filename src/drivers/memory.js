function MemoryDriver() {
  this.error = null
  this.data = {}
}

MemoryDriver.prototype.test = function test() {
  return true
}

MemoryDriver.prototype.clearError = function clearError() {
  this.error = null
}

MemoryDriver.prototype.set = function set(key, value) {
  this.data[key] = value
  return true
}

MemoryDriver.prototype.get = function get(key) {
  return this.data.hasOwnProperty(key) ? this.data[key] : null
}

MemoryDriver.prototype.remove = function remove(key) {
  if (!this.data.hasOwnProperty(key)) return null

  const names = Object.keys(this.data)
  const data = {}
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    if (name != key) {
      data[name] = this.data[name]
    }
  }

  this.data = data

  return true
}

MemoryDriver.prototype.clear = function clear() {
  this.data = {}
  return true
}

MemoryDriver.prototype.length = function length() {
  return Object.keys(this.data).length
}

MemoryDriver.prototype.key = function key(index) {
  const names = Object.keys(this.data)
  return index < names.length && index >= 0 ? names[index] : null
}

MemoryDriver.prototype.json = function json() {
  return this.data
}

export default MemoryDriver
