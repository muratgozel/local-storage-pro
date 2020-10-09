!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("basekits"),require("event-emitter-object")):"function"==typeof define&&define.amd?define(["basekits","event-emitter-object"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocalStoragePro=e(t.Basekits,t.EventEmitterObject)}(this,(function(t,e){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=r(e),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var u=function(t){return t&&t.Math==Math&&t},c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof o&&o)||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},f=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,p={f:l&&!s.call({1:2},1)?function(t){var e=l(this,t);return!!e&&e.enumerable}:s},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},y={}.toString,g=function(t){return y.call(t).slice(8,-1)},d="".split,v=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==g(t)?d.call(t,""):Object(t)}:Object,w=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return v(w(t))},b=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=function(t,e){if(!b(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!b(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!b(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!b(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,E=function(t,e){return O.call(t,e)},j=c.document,k=b(j)&&b(j.createElement),A=!f&&!a((function(){return 7!=Object.defineProperty((t="div",k?j.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),T=Object.getOwnPropertyDescriptor,P={f:f?T:function(t,e){if(t=m(t),e=S(e,!0),A)try{return T(t,e)}catch(t){}if(E(t,e))return h(!p.f.call(t,e),t[e])}},I=function(t){if(!b(t))throw TypeError(String(t)+" is not an object");return t},_=Object.defineProperty,L={f:f?_:function(t,e,r){if(I(t),e=S(e,!0),I(r),A)try{return _(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},x=f?function(t,e,r){return L.f(t,e,h(1,r))}:function(t,e,r){return t[e]=r,t},D=function(t,e){try{x(c,t,e)}catch(r){c[t]=e}return e},R=c["__core-js_shared__"]||D("__core-js_shared__",{}),C=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return C.call(t)});var N,K,M,V,Y=R.inspectSource,F=c.WeakMap,G="function"==typeof F&&/native code/.test(Y(F)),z=i((function(t){(t.exports=function(t,e){return R[t]||(R[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),W=0,q=Math.random(),B=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+q).toString(36)},U=z("keys"),H={},J=c.WeakMap;if(G){var Q=new J,X=Q.get,Z=Q.has,$=Q.set;N=function(t,e){return $.call(Q,t,e),e},K=function(t){return X.call(Q,t)||{}},M=function(t){return Z.call(Q,t)}}else{var tt=U[V="state"]||(U[V]=B(V));H[tt]=!0,N=function(t,e){return x(t,tt,e),e},K=function(t){return E(t,tt)?t[tt]:{}},M=function(t){return E(t,tt)}}var et,rt,nt={set:N,get:K,has:M,enforce:function(t){return M(t)?K(t):N(t,{})},getterFor:function(t){return function(e){var r;if(!b(e)||(r=K(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=i((function(t){var e=nt.get,r=nt.enforce,n=String(String).split("String");(t.exports=function(t,e,o,i){var u=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||E(o,"name")||x(o,"name",e),r(o).source=n.join("string"==typeof e?e:"")),t!==c?(u?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=o:x(t,e,o)):a?t[e]=o:D(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||Y(this)}))})),it=c,ut=function(t){return"function"==typeof t?t:void 0},ct=function(t,e){return arguments.length<2?ut(it[t])||ut(c[t]):it[t]&&it[t][e]||c[t]&&c[t][e]},at=Math.ceil,ft=Math.floor,st=function(t){return isNaN(t=+t)?0:(t>0?ft:at)(t)},lt=Math.min,pt=function(t){return t>0?lt(st(t),9007199254740991):0},ht=Math.max,yt=Math.min,gt=function(t,e){var r=st(t);return r<0?ht(r+e,0):yt(r,e)},dt=function(t){return function(e,r,n){var o,i=m(e),u=pt(i.length),c=gt(n,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},vt={includes:dt(!0),indexOf:dt(!1)},wt=vt.indexOf,mt=function(t,e){var r,n=m(t),o=0,i=[];for(r in n)!E(H,r)&&E(n,r)&&i.push(r);for(;e.length>o;)E(n,r=e[o++])&&(~wt(i,r)||i.push(r));return i},bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],St=bt.concat("length","prototype"),Ot={f:Object.getOwnPropertyNames||function(t){return mt(t,St)}},Et={f:Object.getOwnPropertySymbols},jt=ct("Reflect","ownKeys")||function(t){var e=Ot.f(I(t)),r=Et.f;return r?e.concat(r(t)):e},kt=function(t,e){for(var r=jt(e),n=L.f,o=P.f,i=0;i<r.length;i++){var u=r[i];E(t,u)||n(t,u,o(e,u))}},At=/#|\.prototype\./,Tt=function(t,e){var r=It[Pt(t)];return r==Lt||r!=_t&&("function"==typeof e?a(e):!!e)},Pt=Tt.normalize=function(t){return String(t).replace(At,".").toLowerCase()},It=Tt.data={},_t=Tt.NATIVE="N",Lt=Tt.POLYFILL="P",xt=Tt,Dt=P.f,Rt=function(t,e){var r,n,o,i,u,a=t.target,f=t.global,s=t.stat;if(r=f?c:s?c[a]||D(a,{}):(c[a]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(u=Dt(r,n))&&u.value:r[n],!xt(f?n:a+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;kt(i,o)}(t.sham||o&&o.sham)&&x(i,"sham",!0),ot(r,n,i,t)}},Ct=Object.defineProperty,Nt={},Kt=function(t){throw t},Mt=function(t,e){if(E(Nt,t))return Nt[t];e||(e={});var r=[][t],n=!!E(e,"ACCESSORS")&&e.ACCESSORS,o=E(e,0)?e[0]:Kt,i=E(e,1)?e[1]:void 0;return Nt[t]=!!r&&!a((function(){if(n&&!f)return!0;var t={length:-1};n?Ct(t,1,{enumerable:!0,get:Kt}):t[1]=1,r.call(t,o,i)}))},Vt=vt.indexOf,Yt=[].indexOf,Ft=!!Yt&&1/[1].indexOf(1,-0)<0,Gt=!!(rt=[]["indexOf"])&&a((function(){rt.call(null,et||function(){throw 1},1)})),zt=Mt("indexOf",{ACCESSORS:!0,1:0});Rt({target:"Array",proto:!0,forced:Ft||!Gt||!zt},{indexOf:function(t){return Ft?Yt.apply(this,arguments)||0:Vt(this,t,arguments.length>1?arguments[1]:void 0)}});var Wt=Object.keys||function(t){return mt(t,bt)};Rt({target:"Object",stat:!0,forced:a((function(){Wt(1)}))},{keys:function(t){return Wt(function(t){return Object(w(t))}(t))}});var qt=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())})),Bt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ut=z("wks"),Ht=c.Symbol,Jt=Bt?Ht:Ht&&Ht.withoutSetter||B,Qt=function(t){return E(Ut,t)||(qt&&E(Ht,t)?Ut[t]=Ht[t]:Ut[t]=Jt("Symbol."+t)),Ut[t]},Xt={};Xt[Qt("toStringTag")]="z";var Zt="[object z]"===String(Xt),$t=Qt("toStringTag"),te="Arguments"==g(function(){return arguments}()),ee=Zt?g:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),$t))?r:te?g(e):"Object"==(n=g(e))&&"function"==typeof e.callee?"Arguments":n},re=Zt?{}.toString:function(){return"[object "+ee(this)+"]"};Zt||ot(Object.prototype,"toString",re,{unsafe:!0});var ne=function(){var t=I(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},oe=RegExp.prototype,ie=oe.toString,ue=a((function(){return"/a/b"!=ie.call({source:"a",flags:"b"})})),ce="toString"!=ie.name;(ue||ce)&&ot(RegExp.prototype,"toString",(function(){var t=I(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in oe)?ne.call(t):r)}),{unsafe:!0});var ae,fe,se=Array.isArray||function(t){return"Array"==g(t)},le=function(t,e,r){var n=S(e);n in t?L.f(t,n,h(0,r)):t[n]=r},pe=ct("navigator","userAgent")||"",he=c.process,ye=he&&he.versions,ge=ye&&ye.v8;ge?fe=(ae=ge.split("."))[0]+ae[1]:pe&&(!(ae=pe.match(/Edge\/(\d+)/))||ae[1]>=74)&&(ae=pe.match(/Chrome\/(\d+)/))&&(fe=ae[1]);var de=fe&&+fe,ve=Qt("species"),we=function(t){return de>=51||!a((function(){var e=[];return(e.constructor={})[ve]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("slice"),me=Mt("slice",{ACCESSORS:!0,0:0,1:2}),be=Qt("species"),Se=[].slice,Oe=Math.max;function Ee(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.error=null,this.window=t.window}function je(){this.error=null,this.data={}}function ke(){n.default.call(this,{}),this.window=void 0,this.setWindow("undefined"==typeof window?void 0:window),this.drivers={},this.driver=null,this.addDriver("memory",je),this.addDriver("localStorage",Ee)}return Rt({target:"Array",proto:!0,forced:!we||!me},{slice:function(t,e){var r,n,o,i=m(this),u=pt(i.length),c=gt(t,u),a=gt(void 0===e?u:e,u);if(se(i)&&("function"!=typeof(r=i.constructor)||r!==Array&&!se(r.prototype)?b(r)&&null===(r=r[be])&&(r=void 0):r=void 0,r===Array||void 0===r))return Se.call(i,c,a);for(n=new(void 0===r?Array:r)(Oe(a-c,0)),o=0;c<a;c++,o++)c in i&&le(n,o,i[c]);return n.length=o,n}}),Ee.prototype.test=function(){if(void 0===this.window)return!1;if("localStorage"in this.window){try{this.window.localStorage.setItem("test","pass"),this.window.localStorage.removeItem("test")}catch(t){return!1}return!0}return!1},Ee.prototype.clearError=function(){this.error=null},Ee.prototype.set=function(e,r,n){var o=t.functionkit.stringify(r);try{this.window.localStorage.setItem(e,o);var i=t.typekit.getType(r);this.window.localStorage.setItem("LOCALSTORAGEPRO_TYPE_"+e,i)}catch(t){return this.error=t,!1}return!0},Ee.prototype.get=function(e,r){var n=this.window.localStorage.getItem("LOCALSTORAGEPRO_TYPE_"+e);if("string"==typeof n&&n.length>0){var o=this.window.localStorage.getItem(e);return t.functionkit.destringify(o,n)}return this.window.localStorage.getItem(e)},Ee.prototype.remove=function(t){return this.window.localStorage.removeItem(t),this.window.localStorage.removeItem("LOCALSTORAGEPRO_TYPE_"+t),!0},Ee.prototype.clear=function(){return this.window.localStorage.clear(),!0},Ee.prototype.length=function(){return this.window.localStorage.length/2},Ee.prototype.key=function(t){return this.window.localStorage(t)},Ee.prototype.json=function(t){for(var e={},r=0;r<2*this.length();r++){var n=this.window.localStorage.key(r);n.length>21&&"LOCALSTORAGEPRO_TYPE_"==n.slice(0,21)||(e[n]=this.get(n,t))}return e},je.prototype.test=function(){return!0},je.prototype.clearError=function(){this.error=null},je.prototype.set=function(t,e){return this.data[t]=e,!0},je.prototype.get=function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},je.prototype.remove=function(t){if(!this.data.hasOwnProperty(t))return null;for(var e=Object.keys(this.data),r={},n=0;n<e.length;n++){var o=e[n];o!=t&&(r[o]=this.data[o])}return this.data=r,!0},je.prototype.clear=function(){return this.data={},!0},je.prototype.length=function(){return Object.keys(this.data).length},je.prototype.key=function(t){var e=Object.keys(this.data);return t<e.length&&t>=0?e[t]:null},je.prototype.json=function(){return this.data},ke.prototype=Object.create(n.default.prototype),ke.prototype.constructor=ke,ke.prototype.length=0,ke.prototype.setWindow=function(t){this.window=t},ke.prototype.addDriver=function(t,e){var r=new e({window:this.window});!0===r.test()&&(this.drivers[t]=r,this.driver=this.drivers[t])},ke.prototype.setItem=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.isKeyValid(e)){var o=this.getDriver(n);return o?(o.set(this.formatKey(e),r,this),t.typekit.isError(o.error)?(this.emit("error",new Error("SET_ERROR"),o.error),void o.clearError()):(this.getLength(),!0)):void 0}this.emit("error",new Error("INVALID_KEY"))},ke.prototype.getItem=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var r=this.getDriver(e);if(r){var n=r.get(this.formatKey(t),this);return this.getLength(),n}}else this.emit("error",new Error("INVALID_KEY"))},ke.prototype.removeItem=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var r=this.getDriver(e);if(r)return r.remove(this.formatKey(t)),this.getLength(),!0}else this.emit("error",new Error("INVALID_KEY"))},ke.prototype.clear=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return e&&(e.clear(),this.getLength()),!0},ke.prototype.key=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getDriver(e);return r?r.getKey(t):null},ke.prototype.getLength=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return this.length=e?e.length():0,this.length},ke.prototype.json=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.getDriver(t);return e?e.json(this):0},ke.prototype.isKeyValid=function(e){return t.typekit.isString(e)&&t.validationkit.isNotEmpty(e)||t.typekit.isNumber(e)},ke.prototype.formatKey=function(e){return t.typekit.isNumber(e)?e.toString():e},ke.prototype.availableDrivers=function(){return Object.keys(this.drivers)},ke.prototype.getDriver=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t.validationkit.isNotEmpty(e)?-1===this.availableDrivers().indexOf(e)?void this.emit("error",new Error("DRIVER_NOT_FOUND")):this.drivers[e]:this.driver},new ke}));
