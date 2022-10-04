/*! For license information please see server.js.LICENSE.txt */
(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=b(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,c,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==n&&o.call(g,c)&&(y=g);var x=v.prototype=p.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,r){function n(i,c,a,u){var s=f(t[i],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==e(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,s(x,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(x),s(x,u,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const i=require("react"),c=require("react-dom/server");var a=t.n(c);const u=require("express");var s=t.n(u);const l=require("react-router-dom/server"),f=require("react-router-dom"),h=require("react/jsx-runtime"),p=function(){return(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(f.Link,{to:"/red",children:"Red"})}),(0,h.jsx)("li",{children:(0,h.jsx)(f.Link,{to:"/blue",children:"Blue"})}),(0,h.jsx)("li",{children:(0,h.jsx)(f.Link,{to:"/users",children:"Users"})})]})},d=function(){return(0,h.jsx)("div",{className:"Red",children:"Red"})},v=function(){return(0,h.jsx)(d,{})},y=function(){return(0,h.jsx)("div",{className:"Blue",children:"Blue"})},m=function(){return(0,h.jsx)(y,{})},g=function(t){var e=t.users;return e?(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:e.map((function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(f.Link,{to:"/users/".concat(t.id),children:t.username})},t.id)}))})}):null},x=require("react-redux");function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const E=require("axios");var O=t.n(E),L="users/GET_USERS_PENDING",S="users/GET_USERS_SUCCESS",_="users/GET_USERS_FAILURE",P={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var k=(0,i.createContext)(null),R=function(t){var e=t.resolve,r=(0,i.useContext)(k);return r?(r.done||r.promises.push(Promise.resolve(e())),null):null};const N=(0,x.connect)((function(t){return{users:t.users.users}}),{getUsers:function(){return function(){var t=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:L}),t.next=4,O().get("https://jsonplaceholder.typicode.com/users");case 4:n=t.sent,e({type:S,payload:n}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),e((r=t.t0,{type:_,error:!0,payload:r})),t.t0;case 12:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.users,r=t.getUsers;return(0,i.useEffect)((function(){e||r()}),[r,e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{users:e}),(0,h.jsx)(R,{resolve:r})]})})),T=function(){return(0,h.jsx)(N,{})},q=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(p,{}),(0,h.jsx)("hr",{}),(0,h.jsxs)(f.Routes,{children:[(0,h.jsx)(f.Route,{path:"/red",element:(0,h.jsx)(v,{})}),(0,h.jsx)(f.Route,{path:"/blue",element:(0,h.jsx)(m,{})}),(0,h.jsx)(f.Route,{path:"/users",element:(0,h.jsx)(T,{})})]})]})},G=require("path");var D=t.n(G);const F=require("fs");var U=t.n(F);const C=require("redux"),A=(0,C.combineReducers)({users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return b(b({},t),{},{loading:b(b({},t.loading),{},{users:!0})});case S:return b(b({},t),{},{loading:b(b({},t.loading),{},{users:!1}),users:e.payload.data});case _:return b(b({},t),{},{loading:b(b({},t.loading),{},{users:!1}),error:b(b({},t.error),{},{users:e.payload})});default:return t}}}),I=require("redux-thunk");var Y=t.n(I),B=JSON.parse(U().readFileSync(D().resolve("./build/asset-manifest.json"),"utf8")),J=Object.keys(B.files).filter((function(t){return/chunk\.js$/.exec(t)})).map((function(t){return'<script src ="'.concat(B.files[t],'"><\/script>')})).join("");function M(t,e){return'<!DOCTYPE html>\n  <html lang = "en>\n  <head>\n    <meta charset="utf-8" />\n    <link rel = "shortcut icon" href="/favicon.ico" />\n    <meta\n      name ="viewport"\n      content = "width = device-width, initial-scale=1, shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <title> React App</title>\n    <link href="'.concat(B.files["main.css"],'" rel = "stylesheet" />\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app. </noscript>\n    <div id = \'root\'>\n    ').concat(t,"\n    </div>\n    ").concat(e,'\n    <script src="').concat(B.files["runtime~main.js"],'"><\/script>\n    ').concat(J,'\n    <script src="').concat(B.files["main.js"],'"><\/script>\n  </body>\n</html>\n')}var $=s()(),z=function(){var t=o(r().mark((function t(e,n,o){var i,c,u,s,f,p,d;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={},c=(0,C.createStore)(A,(0,C.applyMiddleware)(Y())),u={done:!1,promises:[]},s=(0,h.jsx)(u.Provider,{value:u,children:(0,h.jsx)(x.Provider,{store:c,children:(0,h.jsx)(l.StaticRouter,{location:e.url,context:i,children:(0,h.jsx)(q,{})})})}),a().renderToStaticMarkup(s),t.prev=5,t.next=8,Promise.all(preloadContext.promises);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",n.status(500));case 14:preloadContext.done=!0,f=a().renderToString(s),p=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),d="<script>__PRELOADED_STATE__= ".concat(p,"<\/script>"),n.send(M(f,d));case 19:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e,r,n){return t.apply(this,arguments)}}(),H=s().static(D().resolve("./build"),{index:!1});$.use(H),$.use(z),$.listen(3999,(function(){console.log("Running on http://localhost:3999")}))})();