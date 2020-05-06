"use strict";var t,e=require("basekits"),r=(t=require("event-emitter-object"))&&"object"==typeof t&&"default"in t?t.default:t;function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.error=null,this.window=t.window}function o(){this.error=null,this.data={}}function n(){r.call(this,{}),this.window=void 0,this.setWindow("undefined"==typeof window?void 0:window),this.drivers={},this.driver=null,this.addDriver("memory",o),this.addDriver("localStorage",i)}i.prototype.test=function(){if(void 0===this.window)return!1;if("localStorage"in this.window){try{this.window.localStorage.setItem("test","pass"),this.window.localStorage.removeItem("test")}catch(t){return!1}return!0}return!1},i.prototype.clearError=function(){this.error=null},i.prototype.set=function(t,r,i){var o=e.functionkit.stringify(r);try{this.window.localStorage.setItem(t,o);var n=e.typekit.getType(r);this.window.localStorage.setItem("LOCALSTORAGEPRO_TYPE_"+t,n)}catch(t){return this.error=t,!1}return!0},i.prototype.get=function(t,r){var i=this.window.localStorage.getItem("LOCALSTORAGEPRO_TYPE_"+t);if("string"==typeof i&&i.length>0){var o=this.window.localStorage.getItem(t);return e.functionkit.destringify(o,i)}return this.window.localStorage.getItem(t)},i.prototype.remove=function(t){return this.window.localStorage.removeItem(t),this.window.localStorage.removeItem("LOCALSTORAGEPRO_TYPE_"+t),!0},i.prototype.clear=function(){return this.window.localStorage.clear(),!0},i.prototype.length=function(){return this.window.localStorage.length/2},i.prototype.key=function(t){return this.window.localStorage(t)},i.prototype.json=function(t){for(var e={},r=0;r<2*this.length();r++){var i=this.window.localStorage.key(r);i.length>21&&"LOCALSTORAGEPRO_TYPE_"==i.slice(0,21)||(e[i]=this.get(i,t))}return e},o.prototype.test=function(){return!0},o.prototype.clearError=function(){this.error=null},o.prototype.set=function(t,e){return this.data[t]=e,!0},o.prototype.get=function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},o.prototype.remove=function(t){if(!this.data.hasOwnProperty(t))return null;for(var e=Object.keys(this.data),r={},i=0;i<e.length;i++){var o=e[i];o!=t&&(r[o]=this.data[o])}return this.data=r,!0},o.prototype.clear=function(){return this.data={},!0},o.prototype.length=function(){return Object.keys(this.data).length},o.prototype.key=function(t){var e=Object.keys(this.data);return t<e.length&&t>=0?e[t]:null},o.prototype.json=function(){return this.data},n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.length=0,n.prototype.setWindow=function(t){this.window=t},n.prototype.addDriver=function(t,e){var r=new e({window:this.window});!0===r.test()&&(this.drivers[t]=r,this.driver=this.drivers[t])},n.prototype.setItem=function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.isKeyValid(t)){var o=this.getDriver(i);return o?(o.set(this.formatKey(t),r,this),e.typekit.isError(o.error)?(this.emit("error",new Error("SET_ERROR"),o.error),void o.clearError()):(this.getLength(),!0)):void 0}this.emit("error",new Error("INVALID_KEY"))},n.prototype.getItem=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var r=this.getDriver(e);if(r){var i=r.get(this.formatKey(t),this);return this.getLength(),i}}else this.emit("error",new Error("INVALID_KEY"))},n.prototype.removeItem=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var r=this.getDriver(e);if(r)return r.remove(this.formatKey(t)),this.getLength(),!0}else this.emit("error",new Error("INVALID_KEY"))},n.prototype.clear=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return e&&(e.clear(),this.getLength()),!0},n.prototype.key=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getDriver(e);return r?r.getKey(t):null},n.prototype.getLength=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return this.length=e?e.length():0,this.length},n.prototype.json=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return e?e.json(this):0},n.prototype.isKeyValid=function(t){return e.typekit.isString(t)&&e.validationkit.isNotEmpty(t)||e.typekit.isNumber(t)},n.prototype.formatKey=function(t){return e.typekit.isNumber(t)?t.toString():t},n.prototype.availableDrivers=function(){return Object.keys(this.drivers)},n.prototype.getDriver=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e.validationkit.isNotEmpty(t)?-1===this.availableDrivers().indexOf(t)?void this.emit("error",new Error("DRIVER_NOT_FOUND")):this.drivers[t]:this.driver};var s=new n;module.exports=s;