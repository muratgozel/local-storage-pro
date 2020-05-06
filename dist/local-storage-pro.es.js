import{functionkit as t,typekit as r,validationkit as e}from"basekits";import o from"event-emitter-object";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.error=null,this.window=t.window}function n(){this.error=null,this.data={}}function s(){o.call(this,{}),this.window=void 0,this.setWindow("undefined"==typeof window?void 0:window),this.drivers={},this.driver=null,this.addDriver("memory",n),this.addDriver("localStorage",i)}i.prototype.test=function(){if(void 0===this.window)return!1;if("localStorage"in this.window){try{this.window.localStorage.setItem("test","pass"),this.window.localStorage.removeItem("test")}catch(t){return!1}return!0}return!1},i.prototype.clearError=function(){this.error=null},i.prototype.set=function(e,o,i){var n=t.stringify(o);try{this.window.localStorage.setItem(e,n);var s=r.getType(o);this.window.localStorage.setItem("LOCALSTORAGEPRO_TYPE_"+e,s)}catch(t){return this.error=t,!1}return!0},i.prototype.get=function(r,e){var o=this.window.localStorage.getItem("LOCALSTORAGEPRO_TYPE_"+r);if("string"==typeof o&&o.length>0){var i=this.window.localStorage.getItem(r);return t.destringify(i,o)}return this.window.localStorage.getItem(r)},i.prototype.remove=function(t){return this.window.localStorage.removeItem(t),this.window.localStorage.removeItem("LOCALSTORAGEPRO_TYPE_"+t),!0},i.prototype.clear=function(){return this.window.localStorage.clear(),!0},i.prototype.length=function(){return this.window.localStorage.length/2},i.prototype.key=function(t){return this.window.localStorage(t)},i.prototype.json=function(t){for(var r={},e=0;e<2*this.length();e++){var o=this.window.localStorage.key(e);o.length>21&&"LOCALSTORAGEPRO_TYPE_"==o.slice(0,21)||(r[o]=this.get(o,t))}return r},n.prototype.test=function(){return!0},n.prototype.clearError=function(){this.error=null},n.prototype.set=function(t,r){return this.data[t]=r,!0},n.prototype.get=function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},n.prototype.remove=function(t){if(!this.data.hasOwnProperty(t))return null;for(var r=Object.keys(this.data),e={},o=0;o<r.length;o++){var i=r[o];i!=t&&(e[i]=this.data[i])}return this.data=e,!0},n.prototype.clear=function(){return this.data={},!0},n.prototype.length=function(){return Object.keys(this.data).length},n.prototype.key=function(t){var r=Object.keys(this.data);return t<r.length&&t>=0?r[t]:null},n.prototype.json=function(){return this.data},s.prototype=Object.create(o.prototype),s.prototype.constructor=s,s.prototype.length=0,s.prototype.setWindow=function(t){this.window=t},s.prototype.addDriver=function(t,r){var e=new r({window:this.window});!0===e.test()&&(this.drivers[t]=e,this.driver=this.drivers[t])},s.prototype.setItem=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.isKeyValid(t)){var i=this.getDriver(o);return i?(i.set(this.formatKey(t),e,this),r.isError(i.error)?(this.emit("error",new Error("SET_ERROR"),i.error),void i.clearError()):(this.getLength(),!0)):void 0}this.emit("error",new Error("INVALID_KEY"))},s.prototype.getItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var e=this.getDriver(r);if(e){var o=e.get(this.formatKey(t),this);return this.getLength(),o}}else this.emit("error",new Error("INVALID_KEY"))},s.prototype.removeItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var e=this.getDriver(r);if(e)return e.remove(this.formatKey(t)),this.getLength(),!0}else this.emit("error",new Error("INVALID_KEY"))},s.prototype.clear=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return r&&(r.clear(),this.getLength()),!0},s.prototype.key=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=this.getDriver(r);return e?e.getKey(t):null},s.prototype.getLength=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return this.length=r?r.length():0,this.length},s.prototype.json=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return r?r.json(this):0},s.prototype.isKeyValid=function(t){return r.isString(t)&&e.isNotEmpty(t)||r.isNumber(t)},s.prototype.formatKey=function(t){return r.isNumber(t)?t.toString():t},s.prototype.availableDrivers=function(){return Object.keys(this.drivers)},s.prototype.getDriver=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e.isNotEmpty(t)?-1===this.availableDrivers().indexOf(t)?void this.emit("error",new Error("DRIVER_NOT_FOUND")):this.drivers[t]:this.driver};var a=new s;export default a;
