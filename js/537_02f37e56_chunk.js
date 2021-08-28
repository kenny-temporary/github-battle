/*! For license information please see 537_02f37e56_chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[537],{537:(e,t,r)=>{r.r(t),r.d(t,{default:()=>pe});var n=r(7294);var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)l.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return l};const l=function(e){void 0===e&&(e={});var t=a((0,n.useState)(e),2),r=t[0],l=t[1];return[r,(0,n.useCallback)((function(e){l((function(t){return o(o({},t),"function"==typeof e?e(t):e)}))}),[])]};var s=r(4184),i=r.n(s),c=r(6792),u=/-(.)/g;var p=r(5893);const d=e=>{return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function h(e,{displayName:t=d(e),Component:r,defaultProps:o}={}){const a=n.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...a},l)=>{const s=(0,c.vE)(n,e);return(0,p.jsx)(o,{ref:l,className:i()(t,s),...a})}));return a.defaultProps=o,a.displayName=t,a}const f=e=>n.forwardRef(((t,r)=>(0,p.jsx)("div",{...t,ref:r,className:i()(t.className,e)}))),m=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},a)=>{const l=(0,c.vE)(e,"card-img");return(0,p.jsx)(n,{ref:a,className:i()(r?`${l}-${r}`:l,t),...o})}));m.displayName="CardImg";const g=m,v=n.createContext(null);v.displayName="CardHeaderContext";const b=v,y=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},a)=>{const l=(0,c.vE)(e,"card-header"),s=(0,n.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,p.jsx)(b.Provider,{value:s,children:(0,p.jsx)(r,{ref:a,...o,className:i()(t,l)})})}));y.displayName="CardHeader";const w=y,E=f("h5"),x=f("h6"),T=h("card-body"),S=h("card-title",{Component:E}),O=h("card-subtitle",{Component:x}),C=h("card-link",{Component:"a"}),L=h("card-text",{Component:"p"}),_=h("card-footer"),j=h("card-img-overlay"),N=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:a,children:l,as:s="div",...u},d)=>{const h=(0,c.vE)(e,"card");return(0,p.jsx)(s,{ref:d,...u,className:i()(t,h,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:a?(0,p.jsx)(T,{children:l}):l})}));N.displayName="Card",N.defaultProps={body:!1};const P=Object.assign(N,{Img:g,Title:S,Subtitle:O,Body:T,Link:C,Text:L,Header:w,Footer:_,ImgOverlay:j});function D(e){var t=e.to,r=e.children,o=e.className;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer",className:o},r)}var k=r(9449);function R(e){var t,r,o,a,l=e.item;return n.createElement("ul",{className:k.Z.clearUlMp},n.createElement("li",{className:"text-center"},n.createElement(P.Img,{className:"avatar w-50",src:null==l||null===(t=l.owner)||void 0===t?void 0:t.avatar_url,alt:"Avatar for ".concat(null==l||null===(r=l.owner)||void 0===r?void 0:r.login)})),n.createElement("li",{className:"my-4 text-center"},n.createElement(D,{className:k.Z.repositotyName,to:null==l?void 0:l.html_url},null==l||null===(o=l.name)||void 0===o?void 0:o.slice(0,20))),n.createElement("li",{className:"mb-4 pb-4 repositoty-subtext"},n.createElement("div",null,n.createElement(D,{to:null==l||null===(a=l.owner)||void 0===a?void 0:a.html_url,className:k.Z.authorName},null==l?void 0:l.owner.login)),n.createElement("div",null,null==l?void 0:l.stargazers_count," stars"),n.createElement("div",null,null==l?void 0:l.forks_count," forks"),n.createElement("div",null,null==l?void 0:l.open_issues_count," open issues")))}const M=function(e){var t=e.item,r=e.index;return n.createElement(P,{className:i()("mb-3 bg-light",k.Z.clearCard)},n.createElement(P.Body,null,n.createElement("div",{className:i()("text-center my-4",k.Z.setCardTitle)},"#",r+1),n.createElement(R,{item:t})))};var A=r(4051),Y=r(1555),B=function(e,t){return(B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var $=function(){return($=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var Z="Pixel",U="Percent",H={unit:U,value:.8};function I(e){return"number"==typeof e?{unit:U,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:Z,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:U,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),H):(console.warn("scrollThreshold should be string or number"),H)}const F=function(e){function t(t){var r=e.call(this,t)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:"string"==typeof r.props.scrollableTarget?document.getElementById(r.props.scrollableTarget):(null===r.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},r.onStart=function(e){r.lastScrollTop||(r.dragging=!0,e instanceof MouseEvent?r.startY=e.pageY:e instanceof TouchEvent&&(r.startY=e.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(e){r.dragging&&(e instanceof MouseEvent?r.currentY=e.pageY:e instanceof TouchEvent&&(r.currentY=e.touches[0].pageY),r.currentY<r.startY||(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),r.currentY-r.startY>1.5*r.maxPullDownDistance||r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")}))},r.onScrollListener=function(e){"function"==typeof r.props.onScroll&&setTimeout((function(){return r.props.onScroll&&r.props.onScroll(e)}),0);var t=r.props.height||r._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;r.actionTriggered||((r.props.inverse?r.isElementAtTop(t,r.props.scrollThreshold):r.isElementAtBottom(t,r.props.scrollThreshold))&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=t.scrollTop)},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},r.throttledOnScrollListener=function(e,t,r,n){var o,a=!1,l=0;function s(){o&&clearTimeout(o)}function i(){var i=this,c=Date.now()-l,u=arguments;function p(){l=Date.now(),r.apply(i,u)}function d(){o=void 0}a||(n&&!o&&p(),s(),void 0===n&&c>e?p():!0!==t&&(o=setTimeout(n?d:p,void 0===n?e-c:e)))}return"boolean"!=typeof t&&(n=r,r=t,t=void 0),i.cancel=function(){s(),a=!0},i}(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return function(e,t){function r(){this.constructor=e}B(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?$($({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=I(t);return n.unit===Z?e.scrollTop<=n.value+r-e.scrollHeight+1:e.scrollTop<=n.value/100+r-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=I(t);return n.unit===Z?e.scrollTop+r>=e.scrollHeight-n.value:e.scrollTop+r>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=$({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},n.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&n.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},n.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);var q=r(682),z=r(5697),J=r.n(z),Q=r(6105);function W(e){var t=e.selected,r=e.languages,o=e.onUpdateLanguage,a=e.unselectedColor,l=void 0===a?"black":a,s=e.selectedColor;return n.createElement(q.Z,null,n.createElement("ul",{className:"d-flex justify-content-center"},null==r?void 0:r.map((function(e){return n.createElement("li",{key:e,className:i()("p-3",Q.Z.languageItemText),onClick:function(){return o(e)},style:e===t?{color:s}:{color:l}},e)}))))}W.propTypes={selected:J().string.isRequired,languages:J().arrayOf(J().string).isRequired,onUpdateLanguage:J().func.isRequired,selectedColor:J().string,unselectedColor:J().string};const V=W;function G(){return n.createElement("h3",null,"Loading ...")}var K=r(91),X=r(5929),ee=["language"];function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ae=r(2063);function le(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ie(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||ie(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){if(e){if("string"==typeof e)return ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ce(e,t):void 0}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ue=["All","JavaScript","Ruby","Java","CSS","Python"];function pe(){var e=se(l({repositoties:[],per_page:10,page:1,language:"All",additional:!1}),2),t=e[0],r=t.repositoties,o=t.language,a=t.per_page,s=t.page,i=e[1];return(0,n.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.language,r=oe(e,ee),n=re({q:t&&"All"==t?"stars:3E1":"stars:3E1+language:".concat(null==t?void 0:t.toLowerCase()),sort:"stars",order:"desc",type:"Repositories",per_page:10,page:1},r),o=X.Z.objectToQueryString(n);return K.Z.get("/search/repositories?".concat(o),{accept:"application/vnd.github.v3+json"})})({language:o,per_page:a,page:s}).then((function(e){i((function(t){var r,n;return{repositoties:null!=t&&t.additional?[].concat(le(t.repositoties),le(null===(r=e.data)||void 0===r?void 0:r.items)):null===(n=e.data)||void 0===n?void 0:n.items}}))}))}),[o,s,a,i]),n.createElement(q.Z,null,n.createElement(V,{languages:ue,selected:o,onUpdateLanguage:function(e){i({language:e,page:1,additional:!1,repositoties:[]})},selectedColor:"rgb(187, 46, 31)"}),n.createElement(F,{dataLength:null==r?void 0:r.length,next:function(){i({page:s+1,additional:!0})},hasMore:!0,loader:n.createElement(G,null)},n.createElement(A.Z,{className:ae.Z.repositotiesContainer},null==r?void 0:r.map((function(e,t){return n.createElement(Y.Z,{lg:3,md:4,sm:6,key:null==e?void 0:e.id},n.createElement(M,{index:t,item:e,sources:r}))})))))}},5929:(e,t,r)=>{r.d(t,{Z:()=>n});const n={queryStringToObject:function(e){return e.match(/([^?=&]+)(=([^&]*))/g).reduce((function(e,t){return e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e}),{})},objectToQueryString:function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}}},91:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(9669),o=r.n(n);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"name","$development"),l(this,"BASE_URL","https://api.github.com")};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"name","$production"),i(this,"BASE_URL"," https://api.github.com")};var u=new(function(){function e(){var t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,r="startegies",n=new Map,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}var t,r,n;return t=e,(r=[{key:"use",value:function(e){var t=this;Array.isArray(e)&&e.forEach((function(e){t._check(e),t._register(e)}))}},{key:"processor",value:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.startegies.has(e)&&(null===(t=this.startegies.get(e))||void 0===t||t.processor.apply(t,n))}},{key:"getContext",value:function(e){return this.startegies.get(e)}},{key:"_register",value:function(e){this.startegies.set(e.name,e)}},{key:"_check",value:function(e){if(!e.name||"INIT"===e.name)throw new Error("invalid name: "+e.name);return!0}}])&&a(t.prototype,r),n&&a(t,n),e}());u.use([new s,new c]);const p={context:u,currentConfig:u.getContext("$".concat("production"))};var d=o().create({baseURL:p.currentConfig.BASE_URL,timeout:3e3});d.interceptors.request.use((function(e){return e})),d.interceptors.response.use((function(e){return function(e){return{data:e.data,status:e.status,response:e}}(e)}));const h=d},9449:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"clear-m-p":"clear-m-p",clearMP:"clear-m-p","use-border-box":"use-border-box",useBorderBox:"use-border-box","clear-ul-default":"clear-ul-default",clearUlDefault:"clear-ul-default","clear-border":"clear-border",clearBorder:"clear-border","set-card-title":"set-card-title",setCardTitle:"set-card-title","clear-ul-mp":"clear-ul-mp",clearUlMp:"clear-ul-mp","bg-light":"bg-light",bgLight:"bg-light","clear-card":"clear-card",clearCard:"clear-card","repositoty-name":"repositoty-name",repositotyName:"repositoty-name","repositoty-subtext":"repositoty-subtext",repositotySubtext:"repositoty-subtext","author-name":"author-name",authorName:"author-name"};var o=r(4783)(e.id,{locals:!0});e.hot.dispose(o)},6105:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"language-item-text":"language-item-text",languageItemText:"language-item-text"};var o=r(4783)(e.id,{locals:!0});e.hot.dispose(o)},2063:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"clear-m-p":"clear-m-p",clearMP:"clear-m-p","use-border-box":"use-border-box",useBorderBox:"use-border-box","clear-ul-default":"clear-ul-default",clearUlDefault:"clear-ul-default","clear-border":"clear-border",clearBorder:"clear-border","repositoties-container":"repositoties-container",repositotiesContainer:"repositoties-container"};var o=r(4783)(e.id,{locals:!0});e.hot.dispose(o)},1555:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(4184),o=r.n(n),a=r(7294),l=r(6792),s=r(5893);const i=["xxl","xl","lg","md","sm","xs"];const c=a.forwardRef(((e,t)=>{const[{className:r,...n},{as:a="div",bsPrefix:c,spans:u}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,l.vE)(t,"col");const a=[],s=[];return i.forEach((e=>{const r=n[e];let o,l,i;delete n[e],"object"==typeof r&&null!=r?({span:o=!0,offset:l,order:i}=r):o=r;const c="xs"!==e?`-${e}`:"";o&&a.push(!0===o?`${t}${c}`:`${t}${c}-${o}`),null!=i&&s.push(`order${c}-${i}`),null!=l&&s.push(`offset${c}-${l}`)})),[{...n,className:o()(r,...s,...a)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,s.jsx)(a,{...n,ref:t,className:o()(r,!u.length&&c)})}));c.displayName="Col";const u=c}}]);