/*! For license information please see 254_fc14905d_chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[254],{1254:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var r=n(7294),a=n(5977),o=n(682),i=n(4051),u=n(5929),c=n(91);function s(t){var e=t.author;return c.Z.get("/users/".concat(e),{accept:"application/vnd.github.v3+json"})}function l(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){u=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v="Pendding",p="Check",d="CheckFailure",b="Fetch",m="Battle";function g(){var t=(0,a.TH)(),e=f((0,r.useState)([[],[]]),2),n=f(e[0],2),c=n[0],y=n[1],h=e[1],g=f((0,r.useState)({status:v,reason:{}}),2),w=g[0],k=g[1],S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return s({author:t})}));return e},j=(0,r.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=S(t);k({status:b,reason:{}}),Promise.allSettled(e).then((function(t){console.log("allPlayersDetails --\x3e",t),h((function(){return[null==t?void 0:t.map((function(t){var e;return null===(e=t.value)||void 0===e?void 0:e.data})),[]]})),k({status:m,reason:{}})})).catch((function(t){h([[],Array.from(t)])}))}),[]);return(0,r.useEffect)((function(){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{k({status:p,reason:{}});var e=Object.keys(t).reduce((function(e,n){return t[n]&&(e=[].concat(l(e),[t[n]])),e}),[]);return{effectivePlayers:e,canBattle:(null==e?void 0:e.length)>=2,playersNumber:null==e?void 0:e.length}}catch(t){k({status:d,reason:Object(t)})}}(u.Z.queryStringToObject(t.search)),n=e.canBattle,r=e.effectivePlayers;n?j(r):console.log("can't find enough players ---\x3e",n,r)}),[j,t]),r.createElement(o.Z,null,r.createElement(i.Z,{style:{width:"80%",margin:"auto",justifyContent:"center",wordBreak:"break-word"}},"Status: ",JSON.stringify(w),"参赛玩家:",c.map((function(t,e){return r.createElement("div",{key:e,style:{marginBottom:"40px"}},JSON.stringify(t))})),"出错玩家：",y.map((function(t,e){return r.createElement("div",{key:e},"出错玩家",e,": ",JSON.stringify(t))}))))}},5929:(t,e,n)=>{n.d(e,{Z:()=>r});const r={queryStringToObject:function(t){return t.match(/([^?=&]+)(=([^&]*))/g).reduce((function(t,e){return t[e.slice(0,e.indexOf("="))]=e.slice(e.indexOf("=")+1),t}),{})},objectToQueryString:function(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&")}}},91:(t,e,n)=>{n.d(e,{Z:()=>h});var r=n(9669),a=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const u=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"name","$development"),i(this,"BASE_URL","https://api.github.com")};function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"name","$production"),c(this,"BASE_URL"," https://api.github.com")};var l=new(function(){function t(){var e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n="startegies",r=new Map,n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}var e,n,r;return e=t,(n=[{key:"use",value:function(t){var e=this;Array.isArray(t)&&t.forEach((function(t){e._check(t),e._register(t)}))}},{key:"processor",value:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.startegies.has(t)&&(null===(e=this.startegies.get(t))||void 0===e||e.processor.apply(e,r))}},{key:"getContext",value:function(t){return this.startegies.get(t)}},{key:"_register",value:function(t){this.startegies.set(t.name,t)}},{key:"_check",value:function(t){if(!t.name||"INIT"===t.name)throw new Error("invalid name: "+t.name);return!0}}])&&o(e.prototype,n),r&&o(e,r),t}());l.use([new u,new s]);const f={context:l,currentConfig:l.getContext("$".concat("production"))};var y=a().create({baseURL:f.currentConfig.BASE_URL,timeout:3e3});y.interceptors.request.use((function(t){return t})),y.interceptors.response.use((function(t){return function(t){return{data:t.data,status:t.status,response:t}}(t)}));const h=y}}]);