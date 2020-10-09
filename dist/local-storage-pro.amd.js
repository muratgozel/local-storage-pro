define(["basekits","event-emitter-object"],(function(t,e){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=r(e);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.error=null,this.window=t.window}function n(){this.error=null,this.data={}}function s(){i.default.call(this,{}),this.window=void 0,this.setWindow("undefined"==typeof window?void 0:window),this.drivers={},this.driver=null,this.addDriver("memory",n),this.addDriver("localStorage",o)}return o.prototype.test=function(){if(void 0===this.window)return!1;if("localStorage"in this.window){try{this.window.localStorage.setItem("test","pass"),this.window.localStorage.removeItem("test")}catch(t){return!1}return!0}return!1},o.prototype.clearError=function(){this.error=null},o.prototype.set=function(e,r,i){var o=t.functionkit.stringify(r);try{this.window.localStorage.setItem(e,o);var n=t.typekit.getType(r);this.window.localStorage.setItem("LOCALSTORAGEPRO_TYPE_"+e,n)}catch(t){return this.error=t,!1}return!0},o.prototype.get=function(e,r){var i=this.window.localStorage.getItem("LOCALSTORAGEPRO_TYPE_"+e);if("string"==typeof i&&i.length>0){var o=this.window.localStorage.getItem(e);return t.functionkit.destringify(o,i)}return this.window.localStorage.getItem(e)},o.prototype.remove=function(t){return this.window.localStorage.removeItem(t),this.window.localStorage.removeItem("LOCALSTORAGEPRO_TYPE_"+t),!0},o.prototype.clear=function(){return this.window.localStorage.clear(),!0},o.prototype.length=function(){return this.window.localStorage.length/2},o.prototype.key=function(t){return this.window.localStorage(t)},o.prototype.json=function(t){for(var e={},r=0;r<2*this.length();r++){var i=this.window.localStorage.key(r);i.length>21&&"LOCALSTORAGEPRO_TYPE_"==i.slice(0,21)||(e[i]=this.get(i,t))}return e},n.prototype.test=function(){return!0},n.prototype.clearError=function(){this.error=null},n.prototype.set=function(t,e){return this.data[t]=e,!0},n.prototype.get=function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},n.prototype.remove=function(t){if(!this.data.hasOwnProperty(t))return null;for(var e=Object.keys(this.data),r={},i=0;i<e.length;i++){var o=e[i];o!=t&&(r[o]=this.data[o])}return this.data=r,!0},n.prototype.clear=function(){return this.data={},!0},n.prototype.length=function(){return Object.keys(this.data).length},n.prototype.key=function(t){var e=Object.keys(this.data);return t<e.length&&t>=0?e[t]:null},n.prototype.json=function(){return this.data},s.prototype=Object.create(i.default.prototype),s.prototype.constructor=s,s.prototype.length=0,s.prototype.setWindow=function(t){this.window=t},s.prototype.addDriver=function(t,e){var r=new e({window:this.window});!0===r.test()&&(this.drivers[t]=r,this.driver=this.drivers[t])},s.prototype.setItem=function(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.isKeyValid(e)){var o=this.getDriver(i);return o?(o.set(this.formatKey(e),r,this),t.typekit.isError(o.error)?(this.emit("error",new Error("SET_ERROR"),o.error),void o.clearError()):(this.getLength(),!0)):void 0}this.emit("error",new Error("INVALID_KEY"))},s.prototype.getItem=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var r=this.getDriver(e);if(r){var i=r.get(this.formatKey(t),this);return this.getLength(),i}}else this.emit("error",new Error("INVALID_KEY"))},s.prototype.removeItem=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var r=this.getDriver(e);if(r)return r.remove(this.formatKey(t)),this.getLength(),!0}else this.emit("error",new Error("INVALID_KEY"))},s.prototype.clear=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return e&&(e.clear(),this.getLength()),!0},s.prototype.key=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getDriver(e);return r?r.getKey(t):null},s.prototype.getLength=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return this.length=e?e.length():0,this.length},s.prototype.json=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return e?e.json(this):0},s.prototype.isKeyValid=function(e){return t.typekit.isString(e)&&t.validationkit.isNotEmpty(e)||t.typekit.isNumber(e)},s.prototype.formatKey=function(e){return t.typekit.isNumber(e)?e.toString():e},s.prototype.availableDrivers=function(){return Object.keys(this.drivers)},s.prototype.getDriver=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t.validationkit.isNotEmpty(e)?-1===this.availableDrivers().indexOf(e)?void this.emit("error",new Error("DRIVER_NOT_FOUND")):this.drivers[e]:this.driver},new s}));
