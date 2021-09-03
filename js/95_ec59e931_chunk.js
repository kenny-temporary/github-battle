/*! For license information please see 95_ec59e931_chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[95],{78:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){var t=e.to,r=e.children,a=e.className;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer",className:a},r)}},3314:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),a=r(4184),o=r.n(a),l=r(444),i=r(9449);const c=function(e){var t=e.title,r=e.renderDescription;return n.createElement(l.Z,{className:o()("mb-3 bg-light",i.Z.clearCard)},n.createElement(l.Z.Body,null,n.createElement("div",{className:o()("text-center my-4",i.Z.setCardTitle)},t),r))}},9095:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(7294),a=r(5977),o=r(682),l=r(4051),i=r(5929),c=r(1555),s=r(3314),u=r(444),d=r(78),f=r(9449);function m(e){var t,r,a=e.item;return n.createElement("ul",{className:f.Z.clearUlMp},n.createElement("li",{className:"text-center"},n.createElement(u.Z.Img,{className:"avatar w-50",src:null==a?void 0:a.avatar_url,alt:"Avatar for ".concat(null==a||null===(t=a.owner)||void 0===t?void 0:t.login)})),n.createElement("li",{className:"text-center mt-4"},"Score: ",(null==a?void 0:a.followers)+(null==a?void 0:a.public_gists)),n.createElement("li",{className:"my-3 text-center"},n.createElement(d.Z,{className:f.Z.repositotyName,to:null==a?void 0:a.html_url},null==a||null===(r=a.login)||void 0===r?void 0:r.slice(0,20))),n.createElement("li",{className:"mb-4 pb-4 repositoty-subtext"},n.createElement("div",null,n.createElement("i",{className:"fa fa-user orange-icon"}),null==a?void 0:a.name),n.createElement("div",null,n.createElement("i",{className:"fa fa-star yellow-icon"}),null==a?void 0:a.location),n.createElement("div",null,n.createElement("i",{className:"fa fa-download blue-icon"}),null==a?void 0:a.followers," followers"),n.createElement("div",null,n.createElement("i",{className:"fa fa-exclamation-triangle orangered-icon"}),null==a?void 0:a.following," following")))}var v=r(6892);function p(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h="Pendding",w="Check",E="CheckFailure",N="Fetch",x="Battle",C="BattleFailure",P=function(e){return"fulfilled"===(null==e?void 0:e.status)};function j(){var e=(0,a.TH)(),t=b((0,n.useState)([[],[]]),2),r=b(t[0],1)[0],u=t[1],d=b((0,n.useState)({status:h,reason:{}}),2),f=d[0],y=d[1],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return(0,v.I)({author:e})}))},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,r=[],n=[],a=null==e?void 0:e.every((function(e){var a,o=t(e);o?r=[].concat(p(r),[null==e||null===(a=e.value)||void 0===a?void 0:a.data]):n=[].concat(p(n),[null==e?void 0:e.reason]);return o}));return{passedPlayers:r,failedPlayers:n,allPassed:a,canBattle:r.length>=2,allPlayersNumber:e.length,passedPlayersNumber:e.length,failedPlayersNumber:n.length}},k=(0,n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=g(e);y({status:N,reason:{}}),Promise.allSettled(t).then((function(e){var t=j(e);u([null==t?void 0:t.passedPlayers,null==t?void 0:t.failedPlayers]),y({status:null!=t&&t.canBattle?x:C,reason:null!=t&&t.canBattle?{}:{message:"有参赛玩家的信息错误"}})}))}),[]);return(0,n.useEffect)((function(){if(e.search){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y({status:w,reason:{}});var t=Object.keys(e).reduce((function(t,r){return e[r]&&"undefined"!==e[r]&&(t=[].concat(p(t),[e[r]])),t}),[]);return{effectivePlayers:t,canBattle:(null==t?void 0:t.length)>=2,playersNumber:null==t?void 0:t.length}}(i.Z.queryStringToObject(e.search)),r=t.canBattle,n=t.effectivePlayers;r?k(n):y({status:E,reason:{message:"参赛玩家不足或玩家的用户名有误"}})}else y({status:E,reason:{message:"参赛玩家不足或玩家的用户名有误"}})}),[k,e]),n.createElement(o.Z,null,n.createElement(l.Z,{style:{margin:"auto",justifyContent:"center",wordBreak:"break-word"}},n.createElement("code",{className:"text-center mb-4"},JSON.stringify(f)),null==r?void 0:r.map((function(e,t){return n.createElement(c.Z,{lg:3,md:4,sm:6,key:(null==e?void 0:e.login)||t},n.createElement(s.Z,{item:e,title:"Player"+(t+1),renderDescription:n.createElement(m,{item:e})}))}))))}},6892:(e,t,r)=>{r.d(t,{I:()=>a});var n=r(91);function a(e){var t=e.author;return n.Z.get("/users/".concat(t),{accept:"application/vnd.github.v3+json"})}},5929:(e,t,r)=>{r.d(t,{Z:()=>n});const n={queryStringToObject:function(e){return e.match(/([^?=&]+)(=([^&]*))/g).reduce((function(e,t){return e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e}),{})},objectToQueryString:function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}}},91:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(9669),a=r.n(n);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"name","$development"),l(this,"BASE_URL","https://api.github.com")};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"name","$production"),c(this,"BASE_URL"," https://api.github.com")};var u=new(function(){function e(){var t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,r="startegies",n=new Map,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}var t,r,n;return t=e,(r=[{key:"use",value:function(e){var t=this;Array.isArray(e)&&e.forEach((function(e){t._check(e),t._register(e)}))}},{key:"processor",value:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.startegies.has(e)&&(null===(t=this.startegies.get(e))||void 0===t||t.processor.apply(t,n))}},{key:"getContext",value:function(e){return this.startegies.get(e)}},{key:"_register",value:function(e){this.startegies.set(e.name,e)}},{key:"_check",value:function(e){if(!e.name||"INIT"===e.name)throw new Error("invalid name: "+e.name);return!0}}])&&o(t.prototype,r),n&&o(t,n),e}());u.use([new i,new s]);const d={context:u,currentConfig:u.getContext("$".concat("production"))};var f=a().create({baseURL:d.currentConfig.BASE_URL,timeout:3e3});f.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return function(e){return{data:null==e?void 0:e.data,status:null==e?void 0:e.status,response:e}}(e)}),(function(e){var t;return Promise.reject({errorMessage:null==e||null===(t=e.response)||void 0===t?void 0:t.data,errorResponse:e.response,errorEntity:e})}));const m=f},9449:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"clear-m-p":"clear-m-p",clearMP:"clear-m-p","use-border-box":"use-border-box",useBorderBox:"use-border-box","clear-ul-default":"clear-ul-default",clearUlDefault:"clear-ul-default","clear-border":"clear-border",clearBorder:"clear-border","set-card-title":"set-card-title",setCardTitle:"set-card-title","clear-ul-mp":"clear-ul-mp",clearUlMp:"clear-ul-mp","bg-light":"bg-light",bgLight:"bg-light","clear-card":"clear-card",clearCard:"clear-card","repositoty-name":"repositoty-name",repositotyName:"repositoty-name","repositoty-subtext":"repositoty-subtext",repositotySubtext:"repositoty-subtext","orange-icon":"orange-icon",orangeIcon:"orange-icon","yellow-icon":"yellow-icon",yellowIcon:"yellow-icon","blue-icon":"blue-icon",blueIcon:"blue-icon","orangered-icon":"orangered-icon",orangeredIcon:"orangered-icon","author-name":"author-name",authorName:"author-name","description-item":"description-item",descriptionItem:"description-item"};var a=r(4783)(e.id,{locals:!0});e.hot.dispose(a)},444:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(4184),a=r.n(n),o=r(7294),l=r(6792),i=/-(.)/g;var c=r(5893);const s=e=>{return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=s(e),Component:r,defaultProps:n}={}){const i=o.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...i},s)=>{const u=(0,l.vE)(n,e);return(0,c.jsx)(o,{ref:s,className:a()(t,u),...i})}));return i.defaultProps=n,i.displayName=t,i}const d=e=>o.forwardRef(((t,r)=>(0,c.jsx)("div",{...t,ref:r,className:a()(t.className,e)}))),f=o.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},i)=>{const s=(0,l.vE)(e,"card-img");return(0,c.jsx)(n,{ref:i,className:a()(r?`${s}-${r}`:s,t),...o})}));f.displayName="CardImg";const m=f,v=o.createContext(null);v.displayName="CardHeaderContext";const p=v,b=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},i)=>{const s=(0,l.vE)(e,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,c.jsx)(p.Provider,{value:u,children:(0,c.jsx)(r,{ref:i,...n,className:a()(t,s)})})}));b.displayName="CardHeader";const y=b,g=d("h5"),h=d("h6"),w=u("card-body"),E=u("card-title",{Component:g}),N=u("card-subtitle",{Component:h}),x=u("card-link",{Component:"a"}),C=u("card-text",{Component:"p"}),P=u("card-footer"),j=u("card-img-overlay"),k=o.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:i,children:s,as:u="div",...d},f)=>{const m=(0,l.vE)(e,"card");return(0,c.jsx)(u,{ref:f,...d,className:a()(t,m,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,c.jsx)(w,{children:s}):s})}));k.displayName="Card",k.defaultProps={body:!1};const S=Object.assign(k,{Img:m,Title:E,Subtitle:N,Body:w,Link:x,Text:C,Header:y,Footer:P,ImgOverlay:j})}}]);