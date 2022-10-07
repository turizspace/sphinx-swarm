var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function s(t){let e;return l(t,(t=>e=t))(),e}function c(t,e,n){t.$$.on_destroy.push(l(e,n))}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let w;function k(t){w=t}function x(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t)}function C(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const B=[],j=[],E=[],L=[],_=Promise.resolve();let A=!1;function S(t){E.push(t)}const G=new Set;let M=0;function N(){const t=w;do{for(;M<B.length;){const t=B[M];M++,k(t),R(t.$$)}for(k(null),B.length=0,M=0;j.length;)j.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];G.has(e)||(G.add(e),e())}E.length=0}while(B.length);for(;L.length;)L.pop()();A=!1,G.clear(),k(t)}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const T=new Set;let P;function Y(){P={r:0,c:[],p:P}}function O(){P.r||r(P.c),P=P.p}function z(t,e){t&&t.i&&(T.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),P.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function U(t){t&&t.c()}function D(t,n,i,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,i),l||S((()=>{const n=c.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(S)}function q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(B.push(t),A||(A=!0,_.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,o,i,l,s,c,a,u=[-1]){const f=w;k(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||f.$$.root};a&&a(h.root);let d=!1;if(h.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&F(e,t)),n})):[],h.update(),d=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(g)}else h.fragment&&h.fragment.c();o.intro&&z(e.$$.fragment),D(e,o.target,o.anchor,o.customElement),N()}k(f)}class W{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var X=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,s=t[Symbol.iterator]();!(r=(l=s.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},J=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function Q(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function Z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var H=Object,V=["black","red","green","yellow","blue","magenta","cyan","lightGray","","default"],tt=["darkGray","lightRed","lightGreen","lightYellow","lightBlue","lightMagenta","lightCyan","white",""],et=["","bright","dim","italic","underline","","","inverse"],nt={red:"lightRed",green:"lightGreen",yellow:"lightYellow",blue:"lightBlue",magenta:"lightMagenta",cyan:"lightCyan",black:"darkGray",lightGray:"white"},rt={0:"style",2:"unstyle",3:"color",9:"colorLight",4:"bgColor",10:"bgColorLight"},ot={color:V,colorLight:tt,bgColor:V,bgColorLight:tt,style:et,unstyle:et},it=function(t){for(var e in t)t[e]||delete t[e];return 0===H.keys(t).length?void 0:t},lt=function(){function t(e,n,r){Z(this,t),this.background=e,this.name=n,this.brightness=r}return J(t,[{key:"defaultBrightness",value:function(e){return new t(this.background,this.name,this.brightness||e)}},{key:"css",value:function(t){var e=t?this.inverse:this,n=e.brightness===st.bright&&nt[e.name]||e.name,r=e.background?"background:":"color:",o=gt.rgb[n],i=this.brightness===st.dim?.5:1;return o?r+"rgba("+[].concat(Q(o),[i]).join(",")+");":!e.background&&i<1?"color:rgba(0,0,0,0.5);":""}},{key:"inverse",get:function(){return new t(!this.background,this.name||(this.background?"black":"white"),this.brightness)}},{key:"clean",get:function(){return it({name:"default"===this.name?"":this.name,bright:this.brightness===st.bright,dim:this.brightness===st.dim})}}]),t}(),st=function(){function t(e){Z(this,t),void 0!==e&&(this.value=Number(e))}return J(t,[{key:"type",get:function(){return rt[Math.floor(this.value/10)]}},{key:"subtype",get:function(){return ot[this.type][this.value%10]}},{key:"str",get:function(){return this.value?"["+this.value+"m":""}},{key:"isBrightness",get:function(){return this.value===t.noBrightness||this.value===t.bright||this.value===t.dim}}],[{key:"str",value:function(e){return new t(e).str}}]),t}();H.assign(st,{reset:0,bright:1,dim:2,inverse:7,noBrightness:22,noItalic:23,noUnderline:24,noInverse:27,noColor:39,noBgColor:49});var ct=function(t,e,n){var r=st.str(e),o=st.str(n);return String(t).split("\n").map((function(t){return function(t){return t.replace(/(\u001b\[(1|2)m)/g,"[22m$1")}(r+(e=t.replace(/\u001b\[22m(\u001b\[(1|2)m)/g,"$1"),n=o,i=r,e.split(n).join(i))+o);var e,n,i})).join("\n")},at=function(t,e){return t+e.charAt(0).toUpperCase()+e.slice(1)},ut=[].concat(Q(V.map((function(t,e){return t?[[t,30+e,st.noColor],[at("bg",t),40+e,st.noBgColor]]:[]}))),Q(tt.map((function(t,e){return t?[[t,90+e,st.noColor],[at("bg",t),100+e,st.noBgColor]]:[]}))),Q(["","BrightRed","BrightGreen","BrightYellow","BrightBlue","BrightMagenta","BrightCyan"].map((function(t,e){return t?[["bg"+t,100+e,st.noBgColor]]:[]}))),Q(et.map((function(t,e){return t?[[t,e,"bright"===t||"dim"===t?st.noBrightness:20+e]]:[]})))).reduce((function(t,e){return t.concat(e)}));var gt=function(){function t(e){Z(this,t),this.spans=e?function(t){for(var e=0,n="",r="",o="",i=[],l=[],s=0,c=t.length;s<c;s++){var a=t[s];switch(n+=a,e){case 0:""===a?(e=1,n=a):r+=a;break;case 1:"["===a?(e=2,o="",i=[]):(e=0,r+=n);break;case 2:if(a>="0"&&a<="9")o+=a;else if(";"===a)i.push(new st(o)),o="";else if("m"===a){o=o||"0",i.push(new st(o));var u=!0,g=!1,f=void 0;try{for(var h,d=i[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var p=h.value;l.push({text:r,code:p}),r=""}}catch(t){g=!0,f=t}finally{try{!u&&d.return&&d.return()}finally{if(g)throw f}}e=0}else e=0,r+=n}}return 0!==e&&(r+=n),r&&l.push({text:r,code:new st}),l}(e):[]}return J(t,[{key:Symbol.iterator,value:function(){return this.spans[Symbol.iterator]()}},{key:"str",get:function(){return this.spans.reduce((function(t,e){return t+e.text+e.code.str}),"")}},{key:"parsed",get:function(){var e=void 0,n=void 0,r=void 0,o=void 0;function i(){e=new lt,n=new lt(!0),r=void 0,o=new Set}return i(),H.assign(new t,{spans:this.spans.map((function(t){var l=t.code,s=o.has("inverse"),c=o.has("underline")?"text-decoration: underline;":"",a=o.has("italic")?"font-style: italic;":"",u=r===st.bright?"font-weight: bold;":"",g=e.defaultBrightness(r),f=H.assign({css:u+a+c+g.css(s)+n.css(s)},it({bold:!!u,color:g.clean,bgColor:n.clean}),t),h=!0,d=!1,p=void 0;try{for(var m,b=o[Symbol.iterator]();!(h=(m=b.next()).done);h=!0){f[m.value]=!0}}catch(t){d=!0,p=t}finally{try{!h&&b.return&&b.return()}finally{if(d)throw p}}if(l.isBrightness)r=l.value;else if(void 0!==t.code.value)if(t.code.value===st.reset)i();else switch(t.code.type){case"color":case"colorLight":e=new lt(!1,l.subtype);break;case"bgColor":case"bgColorLight":n=new lt(!0,l.subtype);break;case"style":o.add(l.subtype);break;case"unstyle":o.delete(l.subtype)}return f})).filter((function(t){return t.text.length>0}))})}},{key:"asChromeConsoleLogArguments",get:function(){var t=this.parsed.spans;return[t.map((function(t){return"%c"+t.text})).join("")].concat(Q(t.map((function(t){return t.css}))))}},{key:"browserConsoleArguments",get:function(){return this.asChromeConsoleLogArguments}}],[{key:"parse",value:function(e){return new t(e).parsed}},{key:"strip",value:function(t){return t.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g,"")}},{key:"isEscaped",value:function(e){return e=String(e),t.strip(e)!==e}},{key:"nice",get:function(){return t.names.forEach((function(e){e in String.prototype||H.defineProperty(String.prototype,e,{get:function(){return t[e](this)}})})),t}},{key:"ansicolor",get:function(){return t}}]),t}();!function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return ut.reduce((function(e,r){var o=X(r,3),i=o[0],l=o[1],s=o[2];return H.defineProperty(e,i,{get:function(){return t((function(t){return n(ct(t,l,s))}))}})}),e)}(gt,(function(t){return t})),gt.names=ut.map((function(t){return X(t,1)[0]})),gt.rgb={black:[0,0,0],darkGray:[100,100,100],lightGray:[200,200,200],white:[255,255,255],red:[204,0,0],lightRed:[255,51,0],green:[0,204,0],lightGreen:[51,204,51],yellow:[204,102,0],lightYellow:[255,153,51],blue:[0,0,255],lightBlue:[26,140,255],magenta:[204,0,204],lightMagenta:[255,0,255],cyan:[0,153,255],lightCyan:[0,204,255]};var ft=gt;ft.nice,ft.parse;const ht=ft.strip;ft.ansicolor,ft.black,ft.bgBlack,ft.red,ft.bgRed,ft.green,ft.bgGreen,ft.yellow,ft.bgYellow,ft.blue,ft.bgBlue,ft.magenta,ft.bgMagenta,ft.cyan,ft.bgCyan,ft.lightGray,ft.bgLightGray,ft.bgDefault,ft.darkGray,ft.bgDarkGray,ft.lightRed,ft.bgLightRed,ft.lightGreen,ft.bgLightGreen,ft.lightYellow,ft.bgLightYellow,ft.lightBlue,ft.bgLightBlue,ft.lightMagenta,ft.bgLightMagenta,ft.lightCyan,ft.bgLightCyan,ft.white,ft.bgWhite,ft.bgBrightRed,ft.bgBrightGreen,ft.bgBrightYellow,ft.bgBrightBlue,ft.bgBrightMagenta,ft.bgBrightCyan,ft.bright,ft.dim,ft.italic,ft.underline,ft.inverse,ft.names,ft.rgb;const dt=[];function pt(e,n=t){let r;const o=new Set;function l(t){if(i(e,t)&&(e=t,r)){const t=!dt.length;for(const t of o)t[1](),dt.push(t,e);if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(i,s=t){const c=[i,s];return o.add(c),1===o.size&&(r=n(l)||t),i(e),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const mt=pt([]),bt=pt([]),yt=pt({}),vt=pt(""),$t=pt(!1),wt=function(e,n,i){const s=!Array.isArray(e),c=s?[e]:e,a=n.length<2;return u=e=>{let i=!1;const u=[];let g=0,f=t;const h=()=>{if(g)return;f();const r=n(s?u[0]:u,e);a?e(r):f=o(r)?r:t},d=c.map(((t,e)=>l(t,(t=>{u[e]=t,g&=~(1<<e),i&&h()}),(()=>{g|=1<<e}))));return i=!0,h(),function(){r(d),f()}},{subscribe:pt(i,u).subscribe};var u}([yt,vt],(([t,e])=>{let n=t[e];return{peering:`cln${n}:${9735+n}`,broker:`${xt}:${1883+n}`,control:5e3+n,grpc:10019+n}})),kt="localhost:8080"===window.location.host,xt="44.211.127.45";let Ct="/api";async function Bt(t){if(!t.includes("-"))return!1;const e=t.split("-")[1];if(!e)return!1;return!!s(yt)[e]&&(vt.set(e),await async function(t){const e=await fetch(`${Ct}/logs?tag=${t}`),n=await e.json();if(Array.isArray(n)){let t=n.map((t=>ht(t).trim()));bt.set(t.reverse())}return n}(e),function(t){!function(t,e){var n=1;function r(t){const o=new EventSource(t);o.addEventListener("message",(t=>{try{let n=JSON.parse(t.data);e(n.trim())}catch(t){console.log("could parse incoming msg",t)}})),o.addEventListener("open",(()=>{$t.set(!0)})),o.addEventListener("error",(()=>{$t.set(!1),o.close();let e=n;n=Math.min(64,2*n),console.log(`connection lost. attempting to reconnect in ${e}s`),setTimeout((()=>r(t)),1e3*e)}))}r(t)}(`${Ct}/logstream?tag=${t}`,(t=>{bt.update((e=>[ht(t),...e]))}))}(e),!0)}function jt(e){let n,r,o,i;return{c(){n=h("div"),r=p(e[0]),y(n,"style",e[1]),y(n,"class","svelte-6iqo24")},m(t,l){u(t,n,l),a(n,r),o||(i=b(n,"click",e[2]),o=!0)},p(t,[e]){1&e&&v(r,t[0]),2&e&&y(n,"style",t[1])},i:t,o:t,d(t){t&&g(n),o=!1,i()}}}function Et(t,e,n){let{content:r=""}=e,{style:o=""}=e;return t.$$set=t=>{"content"in t&&n(0,r=t.content),"style"in t&&n(1,o=t.style)},[r,o,function(e){C.call(this,t,e)}]}kt&&(Ct="http://localhost:8000/api"),fetch("nodes.json").then((t=>t.json())).then((t=>{yt.set(t);let e=function(){const t=new URLSearchParams(window.location.search),e={};for(const[n,r]of t)e[n]=r;return e}();e.pwd&&kt&&Bt(`sphinx-${e.pwd}`)}));class Lt extends W{constructor(t){super(),K(this,t,Et,jt,i,{content:0,style:1})}}const _t=["$CLN getinfo","$CLN newaddr","export FRIEND_PUBKEY=xxx","$CLN connect $FRIEND_PUBKEY cln3 9738"];function At(t){let e,n;return{c(){e=h("span"),n=p(t[0]),y(e,"class","svelte-1cjg4lc")},m(t,r){u(t,e,r),a(e,n)},p(t,e){1&e&&v(n,t[0])},d(t){t&&g(e)}}}function St(e){let n,r,o,i,l,s,c,f,$,w,k=e[0]&&At(e);return{c(){n=h("div"),r=d("svg"),o=d("path"),l=m(),k&&k.c(),s=m(),c=h("span"),f=p(e[1]),y(o,"d","M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"),y(r,"class","copy svelte-1cjg4lc"),y(r,"viewBox","0 0 24 24"),y(r,"style",i=`transform:scale(${e[2]},${e[2]})`),y(c,"class","svelte-1cjg4lc"),y(n,"class","cmd svelte-1cjg4lc")},m(t,i){u(t,n,i),a(n,r),a(r,o),a(n,l),k&&k.m(n,null),a(n,s),a(n,c),a(c,f),$||(w=b(r,"click",e[3]),$=!0)},p(t,[e]){4&e&&i!==(i=`transform:scale(${t[2]},${t[2]})`)&&y(r,"style",i),t[0]?k?k.p(t,e):(k=At(t),k.c(),k.m(n,s)):k&&(k.d(1),k=null),2&e&&v(f,t[1])},i:t,o:t,d(t){t&&g(n),k&&k.d(),$=!1,w()}}}function Gt(t,e,n){let{label:r=""}=e,{cmd:o=""}=e,i=1;return t.$$set=t=>{"label"in t&&n(0,r=t.label),"cmd"in t&&n(1,o=t.cmd)},[r,o,i,function(){n(2,i=1.4),navigator.clipboard.writeText(o),setTimeout((()=>{n(2,i=1)}),101)}]}class Mt extends W{constructor(t){super(),K(this,t,Gt,St,i,{label:0,cmd:1})}}function Nt(t,e,n){const r=t.slice();return r[11]=e[n],r}function Rt(t,e,n){const r=t.slice();return r[14]=e[n],r}function Tt(t,e,n){const r=t.slice();return r[17]=e[n],r}function Pt(t){let e,n,r=t[17]+"";return{c(){e=h("div"),n=p(r),y(e,"class","log svelte-opghj6")},m(t,r){u(t,e,r),a(e,n)},p(t,e){8&e&&r!==(r=t[17]+"")&&v(n,r)},d(t){t&&g(e)}}}function Yt(t){let e,n,r=t[14]+"";return{c(){e=h("pre"),n=p(r),y(e,"class","log svelte-opghj6")},m(t,r){u(t,e,r),a(e,n)},p(t,e){16&e&&r!==(r=t[14]+"")&&v(n,r)},d(t){t&&g(e)}}}function Ot(t){let e,n,r,o,i,l,s,c,d,p,b,v,$,w,k,x;l=new Mt({props:{label:"Peering Address:",cmd:t[5].peering}}),c=new Mt({props:{label:"MQTT Broker:",cmd:t[5].broker}});let C=_t,B=[];for(let e=0;e<C.length;e+=1)B[e]=zt(Nt(t,C,e));const j=t=>I(B[t],1,1,(()=>{B[t]=null}));return{c(){e=h("section"),n=h("h5"),n.textContent="Node info",r=m(),o=h("div"),i=m(),U(l.$$.fragment),s=m(),U(c.$$.fragment),d=m(),p=h("div"),b=m(),v=h("h5"),v.textContent="Command Examples",$=m(),w=h("div"),k=m();for(let t=0;t<B.length;t+=1)B[t].c();y(n,"class","svelte-opghj6"),y(o,"class","break svelte-opghj6"),y(p,"class","break svelte-opghj6"),y(v,"class","svelte-opghj6"),y(w,"class","break svelte-opghj6"),y(e,"class","help-section svelte-opghj6")},m(t,g){u(t,e,g),a(e,n),a(e,r),a(e,o),a(e,i),D(l,e,null),a(e,s),D(c,e,null),a(e,d),a(e,p),a(e,b),a(e,v),a(e,$),a(e,w),a(e,k);for(let t=0;t<B.length;t+=1)B[t].m(e,null);x=!0},p(t,n){const r={};32&n&&(r.cmd=t[5].peering),l.$set(r);const o={};if(32&n&&(o.cmd=t[5].broker),c.$set(o),0&n){let r;for(C=_t,r=0;r<C.length;r+=1){const o=Nt(t,C,r);B[r]?(B[r].p(o,n),z(B[r],1)):(B[r]=zt(o),B[r].c(),z(B[r],1),B[r].m(e,null))}for(Y(),r=C.length;r<B.length;r+=1)j(r);O()}},i(t){if(!x){z(l.$$.fragment,t),z(c.$$.fragment,t);for(let t=0;t<C.length;t+=1)z(B[t]);x=!0}},o(t){I(l.$$.fragment,t),I(c.$$.fragment,t),B=B.filter(Boolean);for(let t=0;t<B.length;t+=1)I(B[t]);x=!1},d(t){t&&g(e),q(l),q(c),f(B,t)}}}function zt(e){let n,r;return n=new Mt({props:{cmd:e[11]}}),{c(){U(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){q(n,t)}}}function It(t){let e,n,o,i,l,s,c,d,p,v,w,k,x,C,B,j,E,L,_,A,S=t[3],G=[];for(let e=0;e<S.length;e+=1)G[e]=Pt(Tt(t,S,e));let M=t[4],N=[];for(let e=0;e<M.length;e+=1)N[e]=Yt(Rt(t,M,e));let R=t[2]&&Ot(t);return E=new Lt({props:{content:t[2]?"X":"</>",style:"position:absolute;top:3px;right:1rem;"}}),E.$on("click",t[9]),{c(){e=h("section"),n=h("h5"),n.textContent="Core Lightning Logs",o=m(),i=h("p");for(let t=0;t<G.length;t+=1)G[t].c();l=m(),s=h("section"),c=h("h5"),c.textContent="Terminal",d=m(),p=h("p");for(let t=0;t<N.length;t+=1)N[t].c();v=m(),w=h("div"),k=h("textarea"),x=m(),C=h("span"),C.textContent="$",B=m(),R&&R.c(),j=m(),U(E.$$.fragment),y(n,"class","svelte-opghj6"),y(i,"class","svelte-opghj6"),y(e,"class","svelte-opghj6"),y(c,"class","svelte-opghj6"),y(p,"class","svelte-opghj6"),y(k,"placeholder","Type commands here"),y(k,"class","svelte-opghj6"),y(C,"class","svelte-opghj6"),y(w,"class","txt-wrap svelte-opghj6"),y(s,"class","svelte-opghj6")},m(r,g){u(r,e,g),a(e,n),a(e,o),a(e,i);for(let t=0;t<G.length;t+=1)G[t].m(i,null);u(r,l,g),u(r,s,g),a(s,c),a(s,d),a(s,p);for(let t=0;t<N.length;t+=1)N[t].m(p,null);a(s,v),a(s,w),a(w,k),t[7](k),$(k,t[1]),a(w,x),a(w,C),u(r,B,g),R&&R.m(r,g),u(r,j,g),D(E,r,g),L=!0,_||(A=[b(k,"input",t[8]),b(k,"keypress",t[6])],_=!0)},p(t,[e]){if(8&e){let n;for(S=t[3],n=0;n<S.length;n+=1){const r=Tt(t,S,n);G[n]?G[n].p(r,e):(G[n]=Pt(r),G[n].c(),G[n].m(i,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=S.length}if(16&e){let n;for(M=t[4],n=0;n<M.length;n+=1){const r=Rt(t,M,n);N[n]?N[n].p(r,e):(N[n]=Yt(r),N[n].c(),N[n].m(p,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=M.length}2&e&&$(k,t[1]),t[2]?R?(R.p(t,e),4&e&&z(R,1)):(R=Ot(t),R.c(),z(R,1),R.m(j.parentNode,j)):R&&(Y(),I(R,1,1,(()=>{R=null})),O());const n={};4&e&&(n.content=t[2]?"X":"</>"),E.$set(n)},i(t){L||(z(R),z(E.$$.fragment,t),L=!0)},o(t){I(R),I(E.$$.fragment,t),L=!1},d(n){n&&g(e),f(G,n),n&&g(l),n&&g(s),f(N,n),t[7](null),n&&g(B),R&&R.d(n),n&&g(j),q(E,n),_=!1,r(A)}}}function Ut(t,e,n){let r,o,i,l;function a(t){if("clear\n"===t)return mt.set([]);mt.update((e=>[`$ ${t}`,...e])),async function(t){let e=s(vt);if(!e)return console.error("not logged in");const n=await fetch(`${Ct}/cmd?txt=${t}&tag=${e}`),r=await n.text();if(console.log(r),r.startsWith("{"))mt.update((t=>[r,...t]));else{const t=r.split("\n").filter((t=>t));t.length&&mt.update((e=>[...t.reverse(),...e]))}}(t)}c(t,bt,(t=>n(3,r=t))),c(t,mt,(t=>n(4,o=t))),c(t,wt,(t=>n(5,i=t))),x((function(){l.focus()}));let u="";let g=!1;return[l,u,g,r,o,i,function(t){"Enter"===t.key&&(a(u),n(1,u=""),t.stopPropagation(),setTimeout((()=>{t.target.setSelectionRange(0,0)}),1))},function(t){j[t?"unshift":"push"]((()=>{l=t,n(0,l)}))},function(){u=this.value,n(1,u)},()=>n(2,g=!g)]}class Dt extends W{constructor(t){super(),K(this,t,Ut,It,i,{})}}function qt(e){let n,o,i;return{c(){n=h("input"),y(n,"placeholder","Password"),y(n,"class","svelte-s2m3w3")},m(t,r){u(t,n,r),$(n,e[0]),o||(i=[b(n,"input",e[3]),b(n,"keypress",e[2])],o=!0)},p(t,e){1&e&&n.value!==t[0]&&$(n,t[0])},i:t,o:t,d(t){t&&g(n),o=!1,r(i)}}}function Ft(e){let n,r;return n=new Dt({}),{c(){U(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){q(n,t)}}}function Kt(t){let e,n,r,o;const i=[Ft,qt],l=[];function s(t,e){return t[1]?0:1}return n=s(t),r=l[n]=i[n](t),{c(){e=h("main"),r.c(),y(e,"class","svelte-s2m3w3")},m(t,r){u(t,e,r),l[n].m(e,null),o=!0},p(t,[o]){let c=n;n=s(t),n===c?l[n].p(t,o):(Y(),I(l[c],1,1,(()=>{l[c]=null})),O(),r=l[n],r?r.p(t,o):(r=l[n]=i[n](t),r.c()),z(r,1),r.m(e,null))},i(t){o||(z(r),o=!0)},o(t){I(r),o=!1},d(t){t&&g(e),l[n].d()}}}function Wt(t,e,n){let r;c(t,vt,(t=>n(1,r=t)));let o="";return[o,r,async function(t){"Enter"===t.key&&(await Bt(o)||console.error("invalid password"))},function(){o=this.value,n(0,o)}]}return new class extends W{constructor(t){super(),K(this,t,Wt,Kt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
