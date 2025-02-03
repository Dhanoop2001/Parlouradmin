(function(){"use strict";var e={6321:function(e,t,n){var r=n(5130),o=n(6768),a=n(6450),i=n(8477);function u(e,t,n,r,u,c){const f=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(a.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(i.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(f)])),_:1})])),_:1})}var c={name:"App"},f=n(1241);const l=(0,f.A)(c,[["render",u]]);var s=l,d=(n(5524),n(5790)),m=(0,d.$N)();async function p(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var h=n(973);const v=[{path:"/",name:"HomePage",component:()=>n.e(945).then(n.bind(n,1945))},{path:"/log-in",name:"LogIn",component:()=>n.e(900).then(n.bind(n,2900))},{path:"/admin-panel",name:"AdminPanel",component:()=>n.e(443).then(n.bind(n,5443))},{path:"/admin-parlours",name:"AdminParlours",component:()=>Promise.all([n.e(618),n.e(303),n.e(332),n.e(161)]).then(n.bind(n,8161))},{path:"/admin-category",name:"AdminCategory",component:()=>Promise.all([n.e(618),n.e(303),n.e(332),n.e(696)]).then(n.bind(n,2696))},{path:"/admin-offers",name:"AdminOffers",component:()=>Promise.all([n.e(618),n.e(303),n.e(846)]).then(n.bind(n,4846))},{path:"/admin-overview",name:"AdminOverview",component:()=>Promise.all([n.e(618),n.e(879)]).then(n.bind(n,879))}],b=(0,h.aE)({history:(0,h.LA)(),routes:v});var g=b,y=n(782),k=n(4373);const w=k.A.create({baseURL:"http://192.168.1.10:8080",headers:{Accept:"application/json"}});w.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}));const A=(0,y.y$)({state:{user:{email:""},isAuthenticated:!1,token:null},mutations:{setUser(e,t){e.user.email=t.email,e.token=t.token||null,e.isAuthenticated=!!t.token,t.token&&localStorage.setItem("token",t.token)},logoutUser(e){e.user={email:""},e.isAuthenticated=!1,e.token=null,localStorage.removeItem("token")}},actions:{async loginUser({commit:e},{email:t,password:n}){try{const r=new FormData;r.append("email",t),r.append("password",n);const o=await w.post("/admin/AdminLogin",r,{headers:{"Content-Type":"multipart/form-data"}});if(o.data&&o.data.token)return e("setUser",{email:t,token:o.data.token}),o.data;throw new Error("Invalid response from server")}catch(r){throw console.error("Error during login:",r),r}},logoutUser({commit:e}){e("logoutUser")}},getters:{getUserEmail:e=>e.user.email,isAuthenticated:e=>e.isAuthenticated,getAuthToken:e=>e.token}});var O=A;p();const j=(0,r.Ef)(s);j.use(g),j.use(m),j.mount("#app"),j.use(O)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(53===e?"webfontloader":e)+"."+{53:"6334aa3a",161:"09978934",303:"79d53c43",332:"df78a40d",443:"fb626ff4",618:"99ccdf94",696:"16ed4503",846:"2ca26a43",879:"adbc57b7",900:"8396f136",945:"b1799393"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{161:"e8529cc6",303:"39366234",332:"fdaab9aa",443:"c537348f",618:"2db9d4ed",696:"6b510f75",846:"51d0b4ea",879:"b152eafb",900:"1a76fe83",945:"f65ee88a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="parlouradmin:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=u,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={161:1,303:1,332:1,443:1,618:1,696:1,846:1,879:1,900:1,945:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);f<i.length;f++)a=i[f],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkparlouradmin"]=self["webpackChunkparlouradmin"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6321)}));r=n.O(r)})();
//# sourceMappingURL=app.d0158299.js.map