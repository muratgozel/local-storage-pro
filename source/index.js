const kit = require('@basekits/core')
const EventEmitter = require('event-emitter-object')
const LocalStorageDriver = require('./drivers/localStorage')
const MemoryDriver = require('./drivers/memory')

function LocalStoragePro(opts = {}) {
  EventEmitter.call(this, {})

  this.kit = kit
  this.kit.addKit( require('@basekits/kit-type') )
  this.kit.addKit( require('@basekits/kit-error') )
  this.kit.addKit( require('@basekits/kit-validator') )
  this.kit.addKit( require('@basekits/kit-object') )
  this.kit.addKit( require('@basekits/kit-function') )

  this.drivers = {}
  this.driver = null
  this.readWindow(opts)

  this.addDriver('memory', MemoryDriver)
  this.addDriver('localStorage', LocalStorageDriver)
}

LocalStoragePro.prototype = Object.create(EventEmitter.prototype)
LocalStoragePro.prototype.constructor = LocalStoragePro

LocalStoragePro.prototype.length = 0

LocalStoragePro.prototype.readWindow = function readWindow(opts) {

  this.window = this.kit.getProp(opts, 'window', typeof window == 'undefined' ? null : window)
}

LocalStoragePro.prototype.addDriver = function addDriver(name, Driver) {
  const instance = new Driver({window: this.window})
  if (instance.test() === true) {
    this.drivers[name] = instance
    this.driver = this.drivers[name]
  }
}

LocalStoragePro.prototype.setItem = function setItem(key, value, driver = null) {
  if (!this.isKeyValid(key)) {
    this.emit('error', new Error('INVALID_KEY'))
    return undefined
  }

  const activeDriver = this.getDriver(driver)
  if (activeDriver) {
    activeDriver.set( this.formatKey(key), value, this )

    if (this.kit.isError(activeDriver.error)) {
      this.emit('error', new Error('SET_ERROR'), activeDriver.error)
      activeDriver.clearError()
      return undefined
    }

    this.getLength()

    return true
  }
  else return undefined
}

LocalStoragePro.prototype.getItem = function getItem(key, driver = null) {
  if (!this.isKeyValid(key)) {
    this.emit('error', new Error('INVALID_KEY'))
    return undefined
  }

  const activeDriver = this.getDriver(driver)
  if (activeDriver) {
    const v = activeDriver.get( this.formatKey(key), this )
    this.getLength()
    return v
  }
  else return undefined
}

LocalStoragePro.prototype.removeItem = function removeItem(key, driver = null) {
  if (!this.isKeyValid(key)) {
    this.emit('error', new Error('INVALID_KEY'))
    return undefined
  }

  const activeDriver = this.getDriver(driver)
  if (activeDriver) {
    activeDriver.remove( this.formatKey(key) )
    this.getLength()
  }
  else return undefined

  return true
}

LocalStoragePro.prototype.clear = function clear(driver = null) {
  const activeDriver = this.getDriver(driver)
  if (activeDriver) {
    activeDriver.clear()
    this.getLength()
  }
  return true
}

LocalStoragePro.prototype.key = function key(index = 0, driver = null) {
  const activeDriver = this.getDriver(driver)
  return activeDriver ? activeDriver.getKey(index) : null
}

LocalStoragePro.prototype.getLength = function getLength(driver = null) {
  const activeDriver = this.getDriver(driver)
  this.length = activeDriver ? activeDriver.length() : 0
  return this.length
}

LocalStoragePro.prototype.json = function json(driver = null) {
  const activeDriver = this.getDriver(driver)
  return activeDriver ? activeDriver.json(this) : 0
}

LocalStoragePro.prototype.isKeyValid = function isKeyValid(k) {
  return (this.kit.isString(k) && !this.kit.isEmpty(k)) || this.kit.isNumber(k)
}

LocalStoragePro.prototype.formatKey = function formatKey(k) {
  if (this.kit.isNumber(k)) return k.toString()
  else return k
}

LocalStoragePro.prototype.availableDrivers = function availableDrivers() {
  return Object.keys(this.drivers)
}

LocalStoragePro.prototype.getDriver = function getDriver(driver = null) {
  if (!this.kit.isEmpty(driver)) {
    if (this.availableDrivers().indexOf(driver) === -1) {
      this.emit('error', new Error('DRIVER_NOT_FOUND'))
      return undefined
    }
    return this.drivers[driver]
  }

  return this.driver
}

module.exports = LocalStoragePro
