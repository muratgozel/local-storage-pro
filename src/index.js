import {typekit, validationkit} from 'basekits'
import EventEmitterObject from 'event-emitter-object'
import LocalStorageDriver from './drivers/localStorage'
import MemoryDriver from './drivers/memory'

function LocalStoragePro() {
  EventEmitterObject.call(this, {})

  this.window = undefined
  this.setWindow(typeof window == 'undefined' ? undefined : window)

  this.drivers = {}
  this.driver = null
  this.addDriver('memory', MemoryDriver)
  this.addDriver('localStorage', LocalStorageDriver)
}

LocalStoragePro.prototype = Object.create(EventEmitterObject.prototype)
LocalStoragePro.prototype.constructor = LocalStoragePro

LocalStoragePro.prototype.length = 0

LocalStoragePro.prototype.setWindow = function setWindow(w) {
  this.window = w
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

    if (typekit.isError(activeDriver.error)) {
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
  return (typekit.isString(k) && validationkit.isNotEmpty(k)) || typekit.isNumber(k)
}

LocalStoragePro.prototype.formatKey = function formatKey(k) {
  if (typekit.isNumber(k)) return k.toString()
  else return k
}

LocalStoragePro.prototype.availableDrivers = function availableDrivers() {
  return Object.keys(this.drivers)
}

LocalStoragePro.prototype.getDriver = function getDriver(driver = null) {
  if (validationkit.isNotEmpty(driver)) {
    if (this.availableDrivers().indexOf(driver) === -1) {
      this.emit('error', new Error('DRIVER_NOT_FOUND'))
      return undefined
    }
    return this.drivers[driver]
  }

  return this.driver
}

export default new LocalStoragePro()
