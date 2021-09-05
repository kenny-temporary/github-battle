/*! For license information please see 291_680496c8_chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[291],{3291:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var n=r(7294),a=r(682),o=r(5977),l=r(4051),c=r(4184),i=r.n(c),u=r(5929),s=r(1555);function f(e){var t=e.labelFor,r=e.text;return n.createElement("label",{htmlFor:t,className:"player-label h6"},r)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e){var t=e.type,r=void 0===t?"text":t,a=e.labelFor,o=e.placeholder,l=e.onChange,c=e.value,i=e.className,u=void 0===i?"":i,s=e.style,f=void 0===s?{}:s,d=e.events,b=void 0===d?{}:d;return n.createElement("input",m({id:a,type:r,value:c,placeholder:o||"",onChange:function(e){var t;return l&&l(null===(t=e.target)||void 0===t?void 0:t.value,e)},autoComplete:"off",className:u,style:f},b))}var b=r(7625),p=r(1436),v=r(6892),y=r(5697),h=r.n(y),g=r(6792),w=r(5893);h().string,h().bool,h().bool,h().bool,h().bool;const E=n.forwardRef((({bsPrefix:e,className:t,fluid:r,rounded:n,roundedCircle:a,thumbnail:o,...l},c)=>(e=(0,g.vE)(e,"img"),(0,w.jsx)("img",{ref:c,...l,className:i()(t,r&&`${e}-fluid`,n&&"rounded",a&&"rounded-circle",o&&`${e}-thumbnail`)}))));E.displayName="Image",E.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};const O=E;var j=r(2134);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){var r,a,o,l=P((0,n.useState)(S({},null==e?void 0:e.labelFor,"")),2),c=l[0],i=l[1],u=P((0,n.useState)([{},!1]),2),m=P(u[0],2),y=m[0],h=m[1],g=u[1],w=P((0,n.useState)(!0),2),E=w[0],N=w[1],C=(0,n.useMemo)((function(){return S({},null==e?void 0:e.labelFor,(function(){N(!0),(0,v.I)({author:t.current[null==e?void 0:e.labelFor]}).then((function(e){g([null==e?void 0:e.data,!0])})).catch((function(e){return g([k({},e),!0])})).finally((function(){N(!1)}))}))}),[null==e?void 0:e.labelFor]);return n.createElement(s.Z,{className:"col-lg-6 col-12 px-2"},n.createElement("form",{onSubmit:(r=C[null==e?void 0:e.labelFor],a=2e3,o=Date.now(),function(){var e=this,t=arguments,n=Date.now();console.log(n,o),n-o>=a&&(r.call(e,t),o=n)})},n.createElement(f,e),n.createElement("div",{style:{width:"100%"},className:"d-flex justify-content-between align-center py-2"},n.createElement(d,x({},e,{style:{padding:"0.48rem",flex:7,marginRight:"0.48rem"},className:"flex-grow-8 flex-shrink-8",value:null==c?void 0:c[null==e?void 0:e.labelFor],onChange:function(r){N(!r),i(S({},null==e?void 0:e.labelFor,r)),t.current[null==e?void 0:e.labelFor]=r},events:{onKeyUp:function(e){13===e.keyCode&&console.log("Enter")}}})),n.createElement("button",{type:"submit",className:"flex-grow-2 flex-shrink-2",disabled:!!E&&"disabled",style:{border:"none",outline:"none",padding:"0.5rem 0.7rem",fontsize:"0.85rem",flex:2}},(null==e?void 0:e.submitText)||"Submit")),h&&n.createElement("div",{className:"d-flex justify-content-between align-items-center p-2",style:{backgroundColor:"#eee"}},n.createElement("div",{className:"d-flex align-items-center "},n.createElement("div",{style:{width:"60px",height:"60px"},className:"me-3"},n.createElement(O,{className:"img-fluid rounded-circle",src:null==y?void 0:y.avatar_url,alt:"Not Found avatar"})),n.createElement("a",{className:j.Z.loginName,href:null==y?void 0:y.html_url,target:"_blank",rel:"noreferrer"},(null==y?void 0:y.login)||"".concat(c[null==e?void 0:e.labelFor]," 用户不存在"))),n.createElement("div",{onClick:function(){return g([{},!1])}},n.createElement(b.G,{icon:p._Ob,color:"rgb(241, 138, 147)"})))))}const F=n.forwardRef(A);var Z=r(2633);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=[{labelFor:"playerone",placeholder:"Palyer One Username",text:"Player One"},{labelFor:"playertwo",placeholder:"Palyer Two Username",text:"Player Two"}],U=[{text:"Enter two Github users",icon:p.r$M,color:"rgb(255, 191, 116)"},{text:"Battle",icon:p.k_F,color:"rgb(114, 114, 114)"},{text:"See the winner",icon:p.kWN,color:"rgb(255, 215, 0)"}];function $(){var e=(0,o.k6)(),t=(0,n.useRef)({}),r=T((0,n.useState)(R),1)[0];return n.createElement(a.Z,{className:"mt-4"},n.createElement(l.Z,{className:"clear-row"},n.createElement("h1",{className:"text-center mt-2 header-lg"},"Instructions"),n.createElement("ul",{className:i()("row text-center my-4",Z.Z.containerSm)},null==U?void 0:U.map((function(e){return n.createElement(s.Z,{className:"col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center",key:null==e?void 0:e.text},n.createElement("h4",{className:"header-sm"},null==e?void 0:e.text),n.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundColor:"rgba(0, 0, 0, 0.10)",padding:"3.5rem 5rem"}},n.createElement(b.G,{icon:null==e?void 0:e.icon,size:"6x",color:null==e?void 0:e.color})))})))),n.createElement(l.Z,{className:"clear-row"},n.createElement("h1",{className:"text-center mt-2 mb-5 header-lg"},"Players"),n.createElement(l.Z,{className:i()("clear-row space-around")},r.map((function(e,r){return n.createElement(F,I({},e,{key:r,ref:t}))})))),n.createElement("div",{className:"text-center my-4"},n.createElement("button",{onClick:function(){var r=u.Z.objectToQueryString(t.current),n="/result".concat(r&&"?"+r);e.push(n)},className:"btn btn-dark"},"Battle")))}},6892:(e,t,r)=>{r.d(t,{I:()=>a});var n=r(91);function a(e){var t=e.author;return n.Z.get("/users/".concat(t),{accept:"application/vnd.github.v3+json"})}},5929:(e,t,r)=>{r.d(t,{Z:()=>n});const n={queryStringToObject:function(e){return e.match(/([^?=&]+)(=([^&]*))/g).reduce((function(e,t){return e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e}),{})},objectToQueryString:function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}}},91:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(9669),a=r.n(n);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"name","$development"),l(this,"BASE_URL","https://api.github.com")};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"name","$production"),i(this,"BASE_URL"," https://api.github.com")};var s=new(function(){function e(){var t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,r="startegies",n=new Map,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}var t,r,n;return t=e,(r=[{key:"use",value:function(e){var t=this;Array.isArray(e)&&e.forEach((function(e){t._check(e),t._register(e)}))}},{key:"processor",value:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.startegies.has(e)&&(null===(t=this.startegies.get(e))||void 0===t||t.processor.apply(t,n))}},{key:"getContext",value:function(e){return this.startegies.get(e)}},{key:"_register",value:function(e){this.startegies.set(e.name,e)}},{key:"_check",value:function(e){if(!e.name||"INIT"===e.name)throw new Error("invalid name: "+e.name);return!0}}])&&o(t.prototype,r),n&&o(t,n),e}());s.use([new c,new u]);const f={context:s,currentConfig:s.getContext("$".concat("production"))};var m=a().create({baseURL:f.currentConfig.BASE_URL,timeout:3e3});m.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){return function(e){return{data:null==e?void 0:e.data,status:null==e?void 0:e.status,response:e}}(e)}),(function(e){var t;return Promise.reject({errorMessage:null==e||null===(t=e.response)||void 0===t?void 0:t.data,errorResponse:e.response,errorEntity:e})}));const d=m},2633:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"container-sm":"container-sm",containerSm:"container-sm","header-lg":"header-lg",headerLg:"header-lg","header-sm":"header-sm",headerSm:"header-sm","clear-row":"clear-row",clearRow:"clear-row"};var a=r(4783)(e.id,{locals:!0});e.hot.dispose(a)},2134:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"login-name":"login-name",loginName:"login-name"};var a=r(4783)(e.id,{locals:!0});e.hot.dispose(a)}}]);