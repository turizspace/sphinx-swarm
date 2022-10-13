var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function s(t){let e;return l(t,(t=>e=t))(),e}function c(t,e,n){t.$$.on_destroy.push(l(e,n))}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let w;function k(t){w=t}function C(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t)}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const B=[],j=[],L=[],_=[],E=Promise.resolve();let S=!1;function A(t){L.push(t)}const G=new Set;let P=0;function T(){const t=w;do{for(;P<B.length;){const t=B[P];P++,k(t),M(t.$$)}for(k(null),B.length=0,P=0;j.length;)j.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];G.has(e)||(G.add(e),e())}L.length=0}while(B.length);for(;_.length;)_.pop()();S=!1,G.clear(),k(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const N=new Set;let Y;function R(){Y={r:0,c:[],p:Y}}function O(){Y.r||r(Y.c),Y=Y.p}function U(t,e){t&&t.i&&(N.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),Y.c.push((()=>{N.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function I(t){t&&t.c()}function K(t,n,i,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,i),l||A((()=>{const n=c.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(A)}function q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(B.push(t),S||(S=!0,E.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,o,i,l,s,c,a,u=[-1]){const g=w;k(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(g?g.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||g.$$.root};a&&a(h.root);let d=!1;if(h.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&D(e,t)),n})):[],h.update(),d=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();o.intro&&U(e.$$.fragment),K(e,o.target,o.anchor,o.customElement),T()}k(g)}class W{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var X=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,s=t[Symbol.iterator]();!(r=(l=s.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function H(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Z=Object,V=["black","red","green","yellow","blue","magenta","cyan","lightGray","","default"],tt=["darkGray","lightRed","lightGreen","lightYellow","lightBlue","lightMagenta","lightCyan","white",""],et=["","bright","dim","italic","underline","","","inverse"],nt={red:"lightRed",green:"lightGreen",yellow:"lightYellow",blue:"lightBlue",magenta:"lightMagenta",cyan:"lightCyan",black:"darkGray",lightGray:"white"},rt={0:"style",2:"unstyle",3:"color",9:"colorLight",4:"bgColor",10:"bgColorLight"},ot={color:V,colorLight:tt,bgColor:V,bgColorLight:tt,style:et,unstyle:et},it=function(t){for(var e in t)t[e]||delete t[e];return 0===Z.keys(t).length?void 0:t},lt=function(){function t(e,n,r){J(this,t),this.background=e,this.name=n,this.brightness=r}return F(t,[{key:"defaultBrightness",value:function(e){return new t(this.background,this.name,this.brightness||e)}},{key:"css",value:function(t){var e=t?this.inverse:this,n=e.brightness===st.bright&&nt[e.name]||e.name,r=e.background?"background:":"color:",o=ft.rgb[n],i=this.brightness===st.dim?.5:1;return o?r+"rgba("+[].concat(H(o),[i]).join(",")+");":!e.background&&i<1?"color:rgba(0,0,0,0.5);":""}},{key:"inverse",get:function(){return new t(!this.background,this.name||(this.background?"black":"white"),this.brightness)}},{key:"clean",get:function(){return it({name:"default"===this.name?"":this.name,bright:this.brightness===st.bright,dim:this.brightness===st.dim})}}]),t}(),st=function(){function t(e){J(this,t),void 0!==e&&(this.value=Number(e))}return F(t,[{key:"type",get:function(){return rt[Math.floor(this.value/10)]}},{key:"subtype",get:function(){return ot[this.type][this.value%10]}},{key:"str",get:function(){return this.value?"["+this.value+"m":""}},{key:"isBrightness",get:function(){return this.value===t.noBrightness||this.value===t.bright||this.value===t.dim}}],[{key:"str",value:function(e){return new t(e).str}}]),t}();Z.assign(st,{reset:0,bright:1,dim:2,inverse:7,noBrightness:22,noItalic:23,noUnderline:24,noInverse:27,noColor:39,noBgColor:49});var ct=function(t,e,n){var r=st.str(e),o=st.str(n);return String(t).split("\n").map((function(t){return function(t){return t.replace(/(\u001b\[(1|2)m)/g,"[22m$1")}(r+(e=t.replace(/\u001b\[22m(\u001b\[(1|2)m)/g,"$1"),n=o,i=r,e.split(n).join(i))+o);var e,n,i})).join("\n")},at=function(t,e){return t+e.charAt(0).toUpperCase()+e.slice(1)},ut=[].concat(H(V.map((function(t,e){return t?[[t,30+e,st.noColor],[at("bg",t),40+e,st.noBgColor]]:[]}))),H(tt.map((function(t,e){return t?[[t,90+e,st.noColor],[at("bg",t),100+e,st.noBgColor]]:[]}))),H(["","BrightRed","BrightGreen","BrightYellow","BrightBlue","BrightMagenta","BrightCyan"].map((function(t,e){return t?[["bg"+t,100+e,st.noBgColor]]:[]}))),H(et.map((function(t,e){return t?[[t,e,"bright"===t||"dim"===t?st.noBrightness:20+e]]:[]})))).reduce((function(t,e){return t.concat(e)}));var ft=function(){function t(e){J(this,t),this.spans=e?function(t){for(var e=0,n="",r="",o="",i=[],l=[],s=0,c=t.length;s<c;s++){var a=t[s];switch(n+=a,e){case 0:""===a?(e=1,n=a):r+=a;break;case 1:"["===a?(e=2,o="",i=[]):(e=0,r+=n);break;case 2:if(a>="0"&&a<="9")o+=a;else if(";"===a)i.push(new st(o)),o="";else if("m"===a){o=o||"0",i.push(new st(o));var u=!0,f=!1,g=void 0;try{for(var h,d=i[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var p=h.value;l.push({text:r,code:p}),r=""}}catch(t){f=!0,g=t}finally{try{!u&&d.return&&d.return()}finally{if(f)throw g}}e=0}else e=0,r+=n}}return 0!==e&&(r+=n),r&&l.push({text:r,code:new st}),l}(e):[]}return F(t,[{key:Symbol.iterator,value:function(){return this.spans[Symbol.iterator]()}},{key:"str",get:function(){return this.spans.reduce((function(t,e){return t+e.text+e.code.str}),"")}},{key:"parsed",get:function(){var e=void 0,n=void 0,r=void 0,o=void 0;function i(){e=new lt,n=new lt(!0),r=void 0,o=new Set}return i(),Z.assign(new t,{spans:this.spans.map((function(t){var l=t.code,s=o.has("inverse"),c=o.has("underline")?"text-decoration: underline;":"",a=o.has("italic")?"font-style: italic;":"",u=r===st.bright?"font-weight: bold;":"",f=e.defaultBrightness(r),g=Z.assign({css:u+a+c+f.css(s)+n.css(s)},it({bold:!!u,color:f.clean,bgColor:n.clean}),t),h=!0,d=!1,p=void 0;try{for(var m,b=o[Symbol.iterator]();!(h=(m=b.next()).done);h=!0){g[m.value]=!0}}catch(t){d=!0,p=t}finally{try{!h&&b.return&&b.return()}finally{if(d)throw p}}if(l.isBrightness)r=l.value;else if(void 0!==t.code.value)if(t.code.value===st.reset)i();else switch(t.code.type){case"color":case"colorLight":e=new lt(!1,l.subtype);break;case"bgColor":case"bgColorLight":n=new lt(!0,l.subtype);break;case"style":o.add(l.subtype);break;case"unstyle":o.delete(l.subtype)}return g})).filter((function(t){return t.text.length>0}))})}},{key:"asChromeConsoleLogArguments",get:function(){var t=this.parsed.spans;return[t.map((function(t){return"%c"+t.text})).join("")].concat(H(t.map((function(t){return t.css}))))}},{key:"browserConsoleArguments",get:function(){return this.asChromeConsoleLogArguments}}],[{key:"parse",value:function(e){return new t(e).parsed}},{key:"strip",value:function(t){return t.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g,"")}},{key:"isEscaped",value:function(e){return e=String(e),t.strip(e)!==e}},{key:"nice",get:function(){return t.names.forEach((function(e){e in String.prototype||Z.defineProperty(String.prototype,e,{get:function(){return t[e](this)}})})),t}},{key:"ansicolor",get:function(){return t}}]),t}();!function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return ut.reduce((function(e,r){var o=X(r,3),i=o[0],l=o[1],s=o[2];return Z.defineProperty(e,i,{get:function(){return t((function(t){return n(ct(t,l,s))}))}})}),e)}(ft,(function(t){return t})),ft.names=ut.map((function(t){return X(t,1)[0]})),ft.rgb={black:[0,0,0],darkGray:[100,100,100],lightGray:[200,200,200],white:[255,255,255],red:[204,0,0],lightRed:[255,51,0],green:[0,204,0],lightGreen:[51,204,51],yellow:[204,102,0],lightYellow:[255,153,51],blue:[0,0,255],lightBlue:[26,140,255],magenta:[204,0,204],lightMagenta:[255,0,255],cyan:[0,153,255],lightCyan:[0,204,255]};var gt=ft;gt.nice,gt.parse;const ht=gt.strip;gt.ansicolor,gt.black,gt.bgBlack,gt.red,gt.bgRed,gt.green,gt.bgGreen,gt.yellow,gt.bgYellow,gt.blue,gt.bgBlue,gt.magenta,gt.bgMagenta,gt.cyan,gt.bgCyan,gt.lightGray,gt.bgLightGray,gt.bgDefault,gt.darkGray,gt.bgDarkGray,gt.lightRed,gt.bgLightRed,gt.lightGreen,gt.bgLightGreen,gt.lightYellow,gt.bgLightYellow,gt.lightBlue,gt.bgLightBlue,gt.lightMagenta,gt.bgLightMagenta,gt.lightCyan,gt.bgLightCyan,gt.white,gt.bgWhite,gt.bgBrightRed,gt.bgBrightGreen,gt.bgBrightYellow,gt.bgBrightBlue,gt.bgBrightMagenta,gt.bgBrightCyan,gt.bright,gt.dim,gt.italic,gt.underline,gt.inverse,gt.names,gt.rgb;const dt=[];function pt(e,n=t){let r;const o=new Set;function l(t){if(i(e,t)&&(e=t,r)){const t=!dt.length;for(const t of o)t[1](),dt.push(t,e);if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(i,s=t){const c=[i,s];return o.add(c),1===o.size&&(r=n(l)||t),i(e),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const mt=pt([]),bt=pt([]),yt=pt({}),vt=pt(""),$t=pt(!1),wt=function(e,n,i){const s=!Array.isArray(e),c=s?[e]:e,a=n.length<2;return u=e=>{let i=!1;const u=[];let f=0,g=t;const h=()=>{if(f)return;g();const r=n(s?u[0]:u,e);a?e(r):g=o(r)?r:t},d=c.map(((t,e)=>l(t,(t=>{u[e]=t,f&=~(1<<e),i&&h()}),(()=>{f|=1<<e}))));return i=!0,h(),function(){r(d),g()}},{subscribe:pt(i,u).subscribe};var u}([yt,vt],(([t,e])=>{let n=t[e];return{peering:`${9735+n}`,broker_ip:`${Ct}`,broker_port:`${1883+n}`,control:5e3+n,grpc:10019+n}})),kt="localhost:8080"===window.location.host,Ct="44.211.127.45";let xt="/api";async function Bt(t){if(!t.includes("-"))return!1;const e=t.split("-")[1];if(!e)return!1;return!!s(yt)[e]&&(vt.set(e),await async function(t){const e=await fetch(`${xt}/logs?tag=${t}`),n=await e.json();if(Array.isArray(n)){let t=n.map((t=>ht(t).trim()));bt.set(t.reverse())}return n}(e),function(t){!function(t,e){var n=1;function r(t){const o=new EventSource(t);o.addEventListener("message",(t=>{try{let n=JSON.parse(t.data);e(n.trim())}catch(t){console.log("could parse incoming msg",t)}})),o.addEventListener("open",(()=>{$t.set(!0)})),o.addEventListener("error",(()=>{$t.set(!1),o.close();let e=n;n=Math.min(64,2*n),console.log(`connection lost. attempting to reconnect in ${e}s`),setTimeout((()=>r(t)),1e3*e)}))}r(t)}(`${xt}/logstream?tag=${t}`,(t=>{bt.update((e=>[ht(t),...e]))}))}(e),!0)}function jt(e){let n,r,o,i;return{c(){n=h("div"),r=p(e[0]),y(n,"style",e[1]),y(n,"class","svelte-6iqo24")},m(t,l){u(t,n,l),a(n,r),o||(i=b(n,"click",e[2]),o=!0)},p(t,[e]){1&e&&v(r,t[0]),2&e&&y(n,"style",t[1])},i:t,o:t,d(t){t&&f(n),o=!1,i()}}}function Lt(t,e,n){let{content:r=""}=e,{style:o=""}=e;return t.$$set=t=>{"content"in t&&n(0,r=t.content),"style"in t&&n(1,o=t.style)},[r,o,function(e){x.call(this,t,e)}]}kt&&(xt="http://localhost:8000/api"),fetch("nodes.json").then((t=>t.json())).then((t=>{yt.set(t);let e=function(){const t=new URLSearchParams(window.location.search),e={};for(const[n,r]of t)e[n]=r;return e}();e.pwd&&Bt(`sphinx-${e.pwd}`)}));class _t extends W{constructor(t){super(),Q(this,t,Lt,jt,i,{content:0,style:1})}}const Et=["$CLN getinfo","$CLN newaddr","export PUBKEY=***","$CLN connect $PUBKEY $HOST 9738","$CLN fundchannel $PUBKEY 100000","$CLN keysend $PUBKEY 1000000","$CLN listfunds"];function St(t){let e,n;return{c(){e=h("span"),n=p(t[0]),y(e,"class","svelte-lbscvv")},m(t,r){u(t,e,r),a(e,n)},p(t,e){1&e&&v(n,t[0])},d(t){t&&f(e)}}}function At(e){let n,r,o,i,l,s,c,g,$,w,k=e[0]&&St(e);return{c(){n=h("div"),r=d("svg"),o=d("path"),l=m(),k&&k.c(),s=m(),c=h("span"),g=p(e[1]),y(o,"d","M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"),y(r,"class","copy svelte-lbscvv"),y(r,"viewBox","0 0 24 24"),y(r,"style",i=`transform:scale(${e[2]},${e[2]})`),y(c,"class","svelte-lbscvv"),y(n,"class","cmd svelte-lbscvv")},m(t,i){u(t,n,i),a(n,r),a(r,o),a(n,l),k&&k.m(n,null),a(n,s),a(n,c),a(c,g),$||(w=b(r,"click",e[3]),$=!0)},p(t,[e]){4&e&&i!==(i=`transform:scale(${t[2]},${t[2]})`)&&y(r,"style",i),t[0]?k?k.p(t,e):(k=St(t),k.c(),k.m(n,s)):k&&(k.d(1),k=null),2&e&&v(g,t[1])},i:t,o:t,d(t){t&&f(n),k&&k.d(),$=!1,w()}}}function Gt(t,e,n){let{label:r=""}=e,{cmd:o=""}=e,i=1;return t.$$set=t=>{"label"in t&&n(0,r=t.label),"cmd"in t&&n(1,o=t.cmd)},[r,o,i,function(){n(2,i=1.4),navigator.clipboard.writeText(o),setTimeout((()=>{n(2,i=1)}),101)}]}class Pt extends W{constructor(t){super(),Q(this,t,Gt,At,i,{label:0,cmd:1})}}function Tt(t,e,n){const r=t.slice();return r[11]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[14]=e[n],r}function Nt(t,e,n){const r=t.slice();return r[17]=e[n],r}function Yt(t){let e,n,r=t[17]+"";return{c(){e=h("div"),n=p(r),y(e,"class","log svelte-1lnnbjm")},m(t,r){u(t,e,r),a(e,n)},p(t,e){8&e&&r!==(r=t[17]+"")&&v(n,r)},d(t){t&&f(e)}}}function Rt(t){let e,n,r=t[14]+"";return{c(){e=h("pre"),n=p(r),y(e,"class","log svelte-1lnnbjm")},m(t,r){u(t,e,r),a(e,n)},p(t,e){16&e&&r!==(r=t[14]+"")&&v(n,r)},d(t){t&&f(e)}}}function Ot(t){let e,n,r,o,i,l,s,c,d,p,b,v,$,w,k,C,x,B;l=new Pt({props:{label:"Peering Port:",cmd:t[5].peering}}),c=new Pt({props:{label:"MQTT IP:",cmd:t[5].broker_ip}}),p=new Pt({props:{label:"MQTT Port:",cmd:t[5].broker_port}});let j=Et,L=[];for(let e=0;e<j.length;e+=1)L[e]=Ut(Tt(t,j,e));const _=t=>z(L[t],1,1,(()=>{L[t]=null}));return{c(){e=h("section"),n=h("h5"),n.textContent="Node info",r=m(),o=h("div"),i=m(),I(l.$$.fragment),s=m(),I(c.$$.fragment),d=m(),I(p.$$.fragment),b=m(),v=h("div"),$=m(),w=h("h5"),w.textContent="Command Examples",k=m(),C=h("div"),x=m();for(let t=0;t<L.length;t+=1)L[t].c();y(n,"class","svelte-1lnnbjm"),y(o,"class","break svelte-1lnnbjm"),y(v,"class","break svelte-1lnnbjm"),y(w,"class","svelte-1lnnbjm"),y(C,"class","break svelte-1lnnbjm"),y(e,"class","help-section svelte-1lnnbjm")},m(t,f){u(t,e,f),a(e,n),a(e,r),a(e,o),a(e,i),K(l,e,null),a(e,s),K(c,e,null),a(e,d),K(p,e,null),a(e,b),a(e,v),a(e,$),a(e,w),a(e,k),a(e,C),a(e,x);for(let t=0;t<L.length;t+=1)L[t].m(e,null);B=!0},p(t,n){const r={};32&n&&(r.cmd=t[5].peering),l.$set(r);const o={};32&n&&(o.cmd=t[5].broker_ip),c.$set(o);const i={};if(32&n&&(i.cmd=t[5].broker_port),p.$set(i),0&n){let r;for(j=Et,r=0;r<j.length;r+=1){const o=Tt(t,j,r);L[r]?(L[r].p(o,n),U(L[r],1)):(L[r]=Ut(o),L[r].c(),U(L[r],1),L[r].m(e,null))}for(R(),r=j.length;r<L.length;r+=1)_(r);O()}},i(t){if(!B){U(l.$$.fragment,t),U(c.$$.fragment,t),U(p.$$.fragment,t);for(let t=0;t<j.length;t+=1)U(L[t]);B=!0}},o(t){z(l.$$.fragment,t),z(c.$$.fragment,t),z(p.$$.fragment,t),L=L.filter(Boolean);for(let t=0;t<L.length;t+=1)z(L[t]);B=!1},d(t){t&&f(e),q(l),q(c),q(p),g(L,t)}}}function Ut(e){let n,r;return n=new Pt({props:{cmd:e[11]}}),{c(){I(n.$$.fragment)},m(t,e){K(n,t,e),r=!0},p:t,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){z(n.$$.fragment,t),r=!1},d(t){q(n,t)}}}function zt(t){let e,n,o,i,l,s,c,d,p,v,w,k,C,x,B,j,L,_,E,S,A,G,P=t[3],T=[];for(let e=0;e<P.length;e+=1)T[e]=Yt(Nt(t,P,e));let M=t[4],N=[];for(let e=0;e<M.length;e+=1)N[e]=Rt(Mt(t,M,e));let Y=t[2]&&Ot(t);return E=new _t({props:{content:t[2]?"X":"</>",style:"position:absolute;top:3px;right:1rem;"}}),E.$on("click",t[9]),{c(){e=h("section"),n=h("h5"),n.textContent="Core Lightning Logs",o=m(),i=h("p");for(let t=0;t<T.length;t+=1)T[t].c();s=m(),c=h("section"),d=h("h5"),d.textContent="Terminal",p=m(),v=h("p");for(let t=0;t<N.length;t+=1)N[t].c();w=m(),k=h("div"),C=h("textarea"),x=m(),B=h("span"),B.textContent="$",L=m(),Y&&Y.c(),_=m(),I(E.$$.fragment),y(n,"class","svelte-1lnnbjm"),y(i,"class","svelte-1lnnbjm"),y(e,"style",l=`width:${t[2]?"38":"50"}%`),y(e,"class","svelte-1lnnbjm"),y(d,"class","svelte-1lnnbjm"),y(v,"class","svelte-1lnnbjm"),y(C,"placeholder","Type commands here"),y(C,"class","svelte-1lnnbjm"),y(B,"class","svelte-1lnnbjm"),y(k,"class","txt-wrap svelte-1lnnbjm"),y(c,"style",j=`width:${t[2]?"38":"50"}%`),y(c,"class","svelte-1lnnbjm")},m(r,l){u(r,e,l),a(e,n),a(e,o),a(e,i);for(let t=0;t<T.length;t+=1)T[t].m(i,null);u(r,s,l),u(r,c,l),a(c,d),a(c,p),a(c,v);for(let t=0;t<N.length;t+=1)N[t].m(v,null);a(c,w),a(c,k),a(k,C),t[7](C),$(C,t[1]),a(k,x),a(k,B),u(r,L,l),Y&&Y.m(r,l),u(r,_,l),K(E,r,l),S=!0,A||(G=[b(C,"input",t[8]),b(C,"keypress",t[6])],A=!0)},p(t,[n]){if(8&n){let e;for(P=t[3],e=0;e<P.length;e+=1){const r=Nt(t,P,e);T[e]?T[e].p(r,n):(T[e]=Yt(r),T[e].c(),T[e].m(i,null))}for(;e<T.length;e+=1)T[e].d(1);T.length=P.length}if((!S||4&n&&l!==(l=`width:${t[2]?"38":"50"}%`))&&y(e,"style",l),16&n){let e;for(M=t[4],e=0;e<M.length;e+=1){const r=Mt(t,M,e);N[e]?N[e].p(r,n):(N[e]=Rt(r),N[e].c(),N[e].m(v,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=M.length}2&n&&$(C,t[1]),(!S||4&n&&j!==(j=`width:${t[2]?"38":"50"}%`))&&y(c,"style",j),t[2]?Y?(Y.p(t,n),4&n&&U(Y,1)):(Y=Ot(t),Y.c(),U(Y,1),Y.m(_.parentNode,_)):Y&&(R(),z(Y,1,1,(()=>{Y=null})),O());const r={};4&n&&(r.content=t[2]?"X":"</>"),E.$set(r)},i(t){S||(U(Y),U(E.$$.fragment,t),S=!0)},o(t){z(Y),z(E.$$.fragment,t),S=!1},d(n){n&&f(e),g(T,n),n&&f(s),n&&f(c),g(N,n),t[7](null),n&&f(L),Y&&Y.d(n),n&&f(_),q(E,n),A=!1,r(G)}}}function It(t,e,n){let r,o,i,l;function a(t){if("clear\n"===t)return mt.set([]);mt.update((e=>[`$ ${t}`,...e])),async function(t){let e=s(vt);if(!e)return console.error("not logged in");const n=await fetch(`${xt}/cmd?txt=${t}&tag=${e}`),r=await n.text();if(console.log(r),r.startsWith("{"))mt.update((t=>[r,...t]));else{const t=r.split("\n").filter((t=>t));t.length&&mt.update((e=>[...t.reverse(),...e]))}}(t)}c(t,bt,(t=>n(3,r=t))),c(t,mt,(t=>n(4,o=t))),c(t,wt,(t=>n(5,i=t))),C((function(){l.focus()}));let u="";let f=!0;return[l,u,f,r,o,i,function(t){"Enter"===t.key&&(a(u),n(1,u=""),t.stopPropagation(),setTimeout((()=>{t.target.setSelectionRange(0,0)}),1))},function(t){j[t?"unshift":"push"]((()=>{l=t,n(0,l)}))},function(){u=this.value,n(1,u)},()=>n(2,f=!f)]}class Kt extends W{constructor(t){super(),Q(this,t,It,zt,i,{})}}function qt(e){let n,o,i;return{c(){n=h("input"),y(n,"placeholder","Password"),y(n,"class","svelte-s2m3w3")},m(t,r){u(t,n,r),$(n,e[0]),o||(i=[b(n,"input",e[3]),b(n,"keypress",e[2])],o=!0)},p(t,e){1&e&&n.value!==t[0]&&$(n,t[0])},i:t,o:t,d(t){t&&f(n),o=!1,r(i)}}}function Dt(e){let n,r;return n=new Kt({}),{c(){I(n.$$.fragment)},m(t,e){K(n,t,e),r=!0},p:t,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){z(n.$$.fragment,t),r=!1},d(t){q(n,t)}}}function Qt(t){let e,n,r,o;const i=[Dt,qt],l=[];function s(t,e){return t[1]?0:1}return n=s(t),r=l[n]=i[n](t),{c(){e=h("main"),r.c(),y(e,"class","svelte-s2m3w3")},m(t,r){u(t,e,r),l[n].m(e,null),o=!0},p(t,[o]){let c=n;n=s(t),n===c?l[n].p(t,o):(R(),z(l[c],1,1,(()=>{l[c]=null})),O(),r=l[n],r?r.p(t,o):(r=l[n]=i[n](t),r.c()),U(r,1),r.m(e,null))},i(t){o||(U(r),o=!0)},o(t){z(r),o=!1},d(t){t&&f(e),l[n].d()}}}function Wt(t,e,n){let r;c(t,vt,(t=>n(1,r=t)));let o="";return[o,r,async function(t){"Enter"===t.key&&(await Bt(o)||console.error("invalid password"))},function(){o=this.value,n(0,o)}]}return new class extends W{constructor(t){super(),Q(this,t,Wt,Qt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
