var LocalStoragePro=function(t,r){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(r),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,r){return t(r={exports:{}},r.exports),r.exports}var u=function(t){return t&&t.Math==Math&&t},a=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof o&&o)||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},f=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,p={f:s&&!l.call({1:2},1)?function(t){var r=s(this,t);return!!r&&r.enumerable}:l},h=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},y={}.toString,g=function(t){return y.call(t).slice(8,-1)},d="".split,v=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==g(t)?d.call(t,""):Object(t)}:Object,w=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return v(w(t))},S=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,r){if(!S(t))return t;var e,n;if(r&&"function"==typeof(e=t.toString)&&!S(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!S(n=e.call(t)))return n;if(!r&&"function"==typeof(e=t.toString)&&!S(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,E=function(t,r){return O.call(t,r)},j=a.document,A=S(j)&&S(j.createElement),k=!f&&!c((function(){return 7!=Object.defineProperty((t="div",A?j.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),P=Object.getOwnPropertyDescriptor,I={f:f?P:function(t,r){if(t=m(t),r=b(r,!0),k)try{return P(t,r)}catch(t){}if(E(t,r))return h(!p.f.call(t,r),t[r])}},T=function(t){if(!S(t))throw TypeError(String(t)+" is not an object");return t},_=Object.defineProperty,L={f:f?_:function(t,r,e){if(T(t),r=b(r,!0),T(e),k)try{return _(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},D=f?function(t,r,e){return L.f(t,r,h(1,e))}:function(t,r,e){return t[r]=e,t},R=function(t,r){try{D(a,t,r)}catch(e){a[t]=r}return r},x=a["__core-js_shared__"]||R("__core-js_shared__",{}),C=Function.toString;"function"!=typeof x.inspectSource&&(x.inspectSource=function(t){return C.call(t)});var N,K,M,V,Y=x.inspectSource,F=a.WeakMap,G="function"==typeof F&&/native code/.test(Y(F)),z=i((function(t){(t.exports=function(t,r){return x[t]||(x[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),W=0,B=Math.random(),U=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+B).toString(36)},q=z("keys"),H={},J=a.WeakMap;if(G){var Q=new J,X=Q.get,Z=Q.has,$=Q.set;N=function(t,r){return $.call(Q,t,r),r},K=function(t){return X.call(Q,t)||{}},M=function(t){return Z.call(Q,t)}}else{var tt=q[V="state"]||(q[V]=U(V));H[tt]=!0,N=function(t,r){return D(t,tt,r),r},K=function(t){return E(t,tt)?t[tt]:{}},M=function(t){return E(t,tt)}}var rt,et,nt={set:N,get:K,has:M,enforce:function(t){return M(t)?K(t):N(t,{})},getterFor:function(t){return function(r){var e;if(!S(r)||(e=K(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},ot=i((function(t){var r=nt.get,e=nt.enforce,n=String(String).split("String");(t.exports=function(t,r,o,i){var u=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof r||E(o,"name")||D(o,"name",r),e(o).source=n.join("string"==typeof r?r:"")),t!==a?(u?!f&&t[r]&&(c=!0):delete t[r],c?t[r]=o:D(t,r,o)):c?t[r]=o:R(r,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&r(this).source||Y(this)}))})),it=a,ut=function(t){return"function"==typeof t?t:void 0},at=function(t,r){return arguments.length<2?ut(it[t])||ut(a[t]):it[t]&&it[t][r]||a[t]&&a[t][r]},ct=Math.ceil,ft=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ft:ct)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},ht=Math.max,yt=Math.min,gt=function(t,r){var e=lt(t);return e<0?ht(e+r,0):yt(e,r)},dt=function(t){return function(r,e,n){var o,i=m(r),u=pt(i.length),a=gt(n,u);if(t&&e!=e){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===e)return t||a||0;return!t&&-1}},vt={includes:dt(!0),indexOf:dt(!1)},wt=vt.indexOf,mt=function(t,r){var e,n=m(t),o=0,i=[];for(e in n)!E(H,e)&&E(n,e)&&i.push(e);for(;r.length>o;)E(n,e=r[o++])&&(~wt(i,e)||i.push(e));return i},St=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=St.concat("length","prototype"),Ot={f:Object.getOwnPropertyNames||function(t){return mt(t,bt)}},Et={f:Object.getOwnPropertySymbols},jt=at("Reflect","ownKeys")||function(t){var r=Ot.f(T(t)),e=Et.f;return e?r.concat(e(t)):r},At=function(t,r){for(var e=jt(r),n=L.f,o=I.f,i=0;i<e.length;i++){var u=e[i];E(t,u)||n(t,u,o(r,u))}},kt=/#|\.prototype\./,Pt=function(t,r){var e=Tt[It(t)];return e==Lt||e!=_t&&("function"==typeof r?c(r):!!r)},It=Pt.normalize=function(t){return String(t).replace(kt,".").toLowerCase()},Tt=Pt.data={},_t=Pt.NATIVE="N",Lt=Pt.POLYFILL="P",Dt=Pt,Rt=I.f,xt=function(t,r){var e,n,o,i,u,c=t.target,f=t.global,l=t.stat;if(e=f?a:l?a[c]||R(c,{}):(a[c]||{}).prototype)for(n in r){if(i=r[n],o=t.noTargetGet?(u=Rt(e,n))&&u.value:e[n],!Dt(f?n:c+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;At(i,o)}(t.sham||o&&o.sham)&&D(i,"sham",!0),ot(e,n,i,t)}},Ct=Object.defineProperty,Nt={},Kt=function(t){throw t},Mt=function(t,r){if(E(Nt,t))return Nt[t];r||(r={});var e=[][t],n=!!E(r,"ACCESSORS")&&r.ACCESSORS,o=E(r,0)?r[0]:Kt,i=E(r,1)?r[1]:void 0;return Nt[t]=!!e&&!c((function(){if(n&&!f)return!0;var t={length:-1};n?Ct(t,1,{enumerable:!0,get:Kt}):t[1]=1,e.call(t,o,i)}))},Vt=vt.indexOf,Yt=[].indexOf,Ft=!!Yt&&1/[1].indexOf(1,-0)<0,Gt=!!(et=[]["indexOf"])&&c((function(){et.call(null,rt||function(){throw 1},1)})),zt=Mt("indexOf",{ACCESSORS:!0,1:0});xt({target:"Array",proto:!0,forced:Ft||!Gt||!zt},{indexOf:function(t){return Ft?Yt.apply(this,arguments)||0:Vt(this,t,arguments.length>1?arguments[1]:void 0)}});var Wt=Object.keys||function(t){return mt(t,St)};xt({target:"Object",stat:!0,forced:c((function(){Wt(1)}))},{keys:function(t){return Wt(function(t){return Object(w(t))}(t))}});var Bt=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Ut=Bt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,qt=z("wks"),Ht=a.Symbol,Jt=Ut?Ht:Ht&&Ht.withoutSetter||U,Qt=function(t){return E(qt,t)||(Bt&&E(Ht,t)?qt[t]=Ht[t]:qt[t]=Jt("Symbol."+t)),qt[t]},Xt={};Xt[Qt("toStringTag")]="z";var Zt="[object z]"===String(Xt),$t=Qt("toStringTag"),tr="Arguments"==g(function(){return arguments}()),rr=Zt?g:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),$t))?e:tr?g(r):"Object"==(n=g(r))&&"function"==typeof r.callee?"Arguments":n},er=Zt?{}.toString:function(){return"[object "+rr(this)+"]"};Zt||ot(Object.prototype,"toString",er,{unsafe:!0});var nr=function(){var t=T(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r},or=RegExp.prototype,ir=or.toString,ur=c((function(){return"/a/b"!=ir.call({source:"a",flags:"b"})})),ar="toString"!=ir.name;(ur||ar)&&ot(RegExp.prototype,"toString",(function(){var t=T(this),r=String(t.source),e=t.flags;return"/"+r+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in or)?nr.call(t):e)}),{unsafe:!0});var cr,fr,lr=Array.isArray||function(t){return"Array"==g(t)},sr=function(t,r,e){var n=b(r);n in t?L.f(t,n,h(0,e)):t[n]=e},pr=at("navigator","userAgent")||"",hr=a.process,yr=hr&&hr.versions,gr=yr&&yr.v8;gr?fr=(cr=gr.split("."))[0]+cr[1]:pr&&(!(cr=pr.match(/Edge\/(\d+)/))||cr[1]>=74)&&(cr=pr.match(/Chrome\/(\d+)/))&&(fr=cr[1]);var dr=fr&&+fr,vr=Qt("species"),wr=function(t){return dr>=51||!c((function(){var r=[];return(r.constructor={})[vr]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}("slice"),mr=Mt("slice",{ACCESSORS:!0,0:0,1:2}),Sr=Qt("species"),br=[].slice,Or=Math.max;function Er(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.error=null,this.window=t.window}function jr(){this.error=null,this.data={}}function Ar(){n.default.call(this,{}),this.window=void 0,this.setWindow("undefined"==typeof window?void 0:window),this.drivers={},this.driver=null,this.addDriver("memory",jr),this.addDriver("localStorage",Er)}return xt({target:"Array",proto:!0,forced:!wr||!mr},{slice:function(t,r){var e,n,o,i=m(this),u=pt(i.length),a=gt(t,u),c=gt(void 0===r?u:r,u);if(lr(i)&&("function"!=typeof(e=i.constructor)||e!==Array&&!lr(e.prototype)?S(e)&&null===(e=e[Sr])&&(e=void 0):e=void 0,e===Array||void 0===e))return br.call(i,a,c);for(n=new(void 0===e?Array:e)(Or(c-a,0)),o=0;a<c;a++,o++)a in i&&sr(n,o,i[a]);return n.length=o,n}}),Er.prototype.test=function(){if(void 0===this.window)return!1;if("localStorage"in this.window){try{this.window.localStorage.setItem("test","pass"),this.window.localStorage.removeItem("test")}catch(t){return!1}return!0}return!1},Er.prototype.clearError=function(){this.error=null},Er.prototype.set=function(r,e,n){var o=t.functionkit.stringify(e);try{this.window.localStorage.setItem(r,o);var i=t.typekit.getType(e);this.window.localStorage.setItem("LOCALSTORAGEPRO_TYPE_"+r,i)}catch(t){return this.error=t,!1}return!0},Er.prototype.get=function(r,e){var n=this.window.localStorage.getItem("LOCALSTORAGEPRO_TYPE_"+r);if("string"==typeof n&&n.length>0){var o=this.window.localStorage.getItem(r);return t.functionkit.destringify(o,n)}return this.window.localStorage.getItem(r)},Er.prototype.remove=function(t){return this.window.localStorage.removeItem(t),this.window.localStorage.removeItem("LOCALSTORAGEPRO_TYPE_"+t),!0},Er.prototype.clear=function(){return this.window.localStorage.clear(),!0},Er.prototype.length=function(){return this.window.localStorage.length/2},Er.prototype.key=function(t){return this.window.localStorage(t)},Er.prototype.json=function(t){for(var r={},e=0;e<2*this.length();e++){var n=this.window.localStorage.key(e);n.length>21&&"LOCALSTORAGEPRO_TYPE_"==n.slice(0,21)||(r[n]=this.get(n,t))}return r},jr.prototype.test=function(){return!0},jr.prototype.clearError=function(){this.error=null},jr.prototype.set=function(t,r){return this.data[t]=r,!0},jr.prototype.get=function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},jr.prototype.remove=function(t){if(!this.data.hasOwnProperty(t))return null;for(var r=Object.keys(this.data),e={},n=0;n<r.length;n++){var o=r[n];o!=t&&(e[o]=this.data[o])}return this.data=e,!0},jr.prototype.clear=function(){return this.data={},!0},jr.prototype.length=function(){return Object.keys(this.data).length},jr.prototype.key=function(t){var r=Object.keys(this.data);return t<r.length&&t>=0?r[t]:null},jr.prototype.json=function(){return this.data},Ar.prototype=Object.create(n.default.prototype),Ar.prototype.constructor=Ar,Ar.prototype.length=0,Ar.prototype.setWindow=function(t){this.window=t},Ar.prototype.addDriver=function(t,r){var e=new r({window:this.window});!0===e.test()&&(this.drivers[t]=e,this.driver=this.drivers[t])},Ar.prototype.setItem=function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.isKeyValid(r)){var o=this.getDriver(n);return o?(o.set(this.formatKey(r),e,this),t.typekit.isError(o.error)?(this.emit("error",new Error("SET_ERROR"),o.error),void o.clearError()):(this.getLength(),!0)):void 0}this.emit("error",new Error("INVALID_KEY"))},Ar.prototype.getItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var e=this.getDriver(r);if(e){var n=e.get(this.formatKey(t),this);return this.getLength(),n}}else this.emit("error",new Error("INVALID_KEY"))},Ar.prototype.removeItem=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.isKeyValid(t)){var e=this.getDriver(r);if(e)return e.remove(this.formatKey(t)),this.getLength(),!0}else this.emit("error",new Error("INVALID_KEY"))},Ar.prototype.clear=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return r&&(r.clear(),this.getLength()),!0},Ar.prototype.key=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=this.getDriver(r);return e?e.getKey(t):null},Ar.prototype.getLength=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return this.length=r?r.length():0,this.length},Ar.prototype.json=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this.getDriver(t);return r?r.json(this):0},Ar.prototype.isKeyValid=function(r){return t.typekit.isString(r)&&t.validationkit.isNotEmpty(r)||t.typekit.isNumber(r)},Ar.prototype.formatKey=function(r){return t.typekit.isNumber(r)?r.toString():r},Ar.prototype.availableDrivers=function(){return Object.keys(this.drivers)},Ar.prototype.getDriver=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t.validationkit.isNotEmpty(r)?-1===this.availableDrivers().indexOf(r)?void this.emit("error",new Error("DRIVER_NOT_FOUND")):this.drivers[r]:this.driver},new Ar}(Basekits,EventEmitterObject);
