var LocalStoragePro=function(t,r){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.error=null,this.window=t.window}function i(){this.error=null,this.data={}}function o(){r.call(this,{}),this.window=void 0,this.setWindow("undefined"==typeof window?void 0:window),this.drivers={},this.driver=null,this.addDriver("memory",i),this.addDriver("localStorage",e)}return r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,e.prototype.test=function(){if(void 0===this.window)return!1;if("localStorage"in this.window){try{this.window.localStorage.setItem("test","pass"),this.window.localStorage.removeItem("test")}catch(t){return!1}return!0}return!1},e.prototype.clearError=function(){this.error=null},e.prototype.set=function(r,e,i){var o=t.functionkit.stringify(e);try{this.window.localStorage.setItem(r,o);var n=t.typekit.getType(e);this.window.localStorage.setItem("LOCALSTORAGEPRO_TYPE_"+r,n)}catch(t){return this.error=t,!1}return!0},e.prototype.get=function(r,e){var i=this.window.localStorage.getItem("LOCALSTORAGEPRO_TYPE_"+r);if("string"==typeof i&&i.length>0){var o=this.window.localStorage.getItem(r);return t.functionkit.destringify(o,i)}return this.window.localStorage.getItem(r)},e.prototype.remove=function(t){return this.window.localStorage.removeItem(t),this.window.localStorage.removeItem("LOCALSTORAGEPRO_TYPE_"+t),!0},e.prototype.clear=function(){return this.window.localStorage.clear(),!0},e.prototype.length=function(){return this.window.localStorage.length/2},e.prototype.key=function(t){return this.window.localStorage(t)},e.prototype.json=function(t){for(var r={},e=0;e<2*this.length();e++){var i=this.window.localStorage.key(e);i.length>21&&"LOCALSTORAGEPRO_TYPE_"==i.slice(0,21)||(r[i]=this.get(i,t))}return r},i.prototype.test=function(){return!0},i.prototype.clearError=function(){this.error=null},i.prototype.set=function(t,r){return this.data[t]=r,!0},i.prototype.get=function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},i.prototype.remove=function(t){if(!this.data.hasOwnProperty(t))return null;for(var r=Object.keys(this.data),e={},i=0;i<r.length;i++){var o=r[i];o!=t&&(e[o]=this.data[o])}return this.data=e,!0},i.prototype.clear=function(){return this.data={},!0},i.prototype.length=function(){return Object.keys(this.data).length},i.prototype.key=function(t){var r=Object.keys(this.data);return t<r.length&&t>=0?r[t]:null},i.prototype.json=function(){return this.data},o.prototype=Object.create(r.prototype),o.prototype.constructor=o,o.prototype.length=0,o.prototype.setWindow=function(t){this.window=t},o.prototype.addDriver=function(t,r){var e=new r({window:this.window});!0===e.test()&&(this.drivers[t]=e,this.driver=this.drivers[t])},o.prototype.setItem=function(r,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.isKeyValid(r)){var o=this.getDriver(i);return o?(o.set(this.formatKey(r),e,this),t.typekit.isError(o.error)?(this.emit("error",new Error("SET_ERROR"),o.error),void o.clearError()):(this.getLength(),!0)):void 0}this.emit("error",new Error("INVALID_KEY"))},o.prototype.getItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var e=this.getDriver(r);if(e){var i=e.get(this.formatKey(t),this);return this.getLength(),i}}else this.emit("error",new Error("INVALID_KEY"))},o.prototype.removeItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var e=this.getDriver(r);if(e)return e.remove(this.formatKey(t)),this.getLength(),!0}else this.emit("error",new Error("INVALID_KEY"))},o.prototype.clear=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return r&&(r.clear(),this.getLength()),!0},o.prototype.key=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=this.getDriver(r);return e?e.getKey(t):null},o.prototype.getLength=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return this.length=r?r.length():0,this.length},o.prototype.json=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return r?r.json(this):0},o.prototype.isKeyValid=function(r){return t.typekit.isString(r)&&t.validationkit.isNotEmpty(r)||t.typekit.isNumber(r)},o.prototype.formatKey=function(r){return t.typekit.isNumber(r)?r.toString():r},o.prototype.availableDrivers=function(){return Object.keys(this.drivers)},o.prototype.getDriver=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t.validationkit.isNotEmpty(r)?-1===this.availableDrivers().indexOf(r)?void this.emit("error",new Error("DRIVER_NOT_FOUND")):this.drivers[r]:this.driver},new o}(Basekits,EventEmitterObject);
