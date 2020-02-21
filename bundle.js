var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function s(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}function g(t,n,e){t.classList[e?"add":"remove"](n)}let h;function p(t){h=t}const $=[],y=[],x=[],v=[],b=Promise.resolve();let A=!1;function _(t){x.push(t)}let E=!1;const w=new Set;function O(){if(!E){E=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];p(n),P(n.$$)}for($.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];w.has(n)||(w.add(n),n())}x.length=0}while($.length);for(;v.length;)v.pop()();A=!1,E=!1,w.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const N=new Set;function T(t,n){-1===t.$$.dirty[0]&&($.push(t),A||(A=!0,b.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(c,l,u,i,f,a,s=[-1]){const d=h;p(c);const m=l.props||{},g=c.$$={fragment:null,ctx:null,props:a,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:s};let $=!1;var y,x;g.ctx=u?u(c,m,(t,n,...e)=>{const r=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=r)&&(g.bound[t]&&g.bound[t](r),$&&T(c,t)),n}):[],g.update(),$=!0,r(g.before_update),g.fragment=!!i&&i(g.ctx),l.target&&(l.hydrate?g.fragment&&g.fragment.l(function(t){return Array.from(t.childNodes)}(l.target)):g.fragment&&g.fragment.c(),l.intro&&((y=c.$$.fragment)&&y.i&&(N.delete(y),y.i(x))),function(t,e,c){const{fragment:l,on_mount:u,on_destroy:i,after_update:f}=t.$$;l&&l.m(e,c),_(()=>{const e=u.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(_)}(c,l.target,l.anchor),O()),p(d)}function R(t,n,e){const r=t.slice();return r[9]=n[e],r[11]=e,r}function k(t){let n,e,r,o=t[9]+"";function c(...n){return t[8](t[11],...n)}return{c(){n=f("div"),e=a(o),d(n,"class","cell svelte-117xdmg"),g(n,"highlighted",t[1].includes(t[11]))},m(t,o){var i,f,a,s;u(t,n,o),l(n,e),f="click",a=c,(i=n).addEventListener(f,a,s),r=()=>i.removeEventListener(f,a,s)},p(r,c){t=r,1&c&&o!==(o=t[9]+"")&&m(e,o),2&c&&g(n,"highlighted",t[1].includes(t[11]))},d(t){t&&i(n),r()}}}function C(t){let n,e,r,o=t[2]?"PLAYER":"OPPONENT";return{c(){n=f("p"),e=a("Turn: "),r=a(o),d(n,"class","svelte-117xdmg")},m(t,o){u(t,n,o),l(n,e),l(n,r)},p(t,n){4&n&&o!==(o=t[2]?"PLAYER":"OPPONENT")&&m(r,o)},d(t){t&&i(n)}}}function D(t){let n,e,r=`Game ended. ${t[3]} ${"DRAW"!==t[3]?"won!":""}`+"";return{c(){n=f("h2"),e=a(r),d(n,"class","svelte-117xdmg")},m(t,r){u(t,n,r),l(n,e)},p(t,n){8&n&&r!==(r=`Game ended. ${t[3]} ${"DRAW"!==t[3]?"won!":""}`+"")&&m(e,r)},d(t){t&&i(n)}}}function W(n){let e,r,o,c,a,m=n[0],g=[];for(let t=0;t<m.length;t+=1)g[t]=k(R(n,m,t));function h(t,n){return t[3]?D:C}let p=h(n),$=p(n);return{c(){e=f("main"),r=f("h1"),r.textContent="Tic Tac Toe",o=s(),c=f("div");for(let t=0;t<g.length;t+=1)g[t].c();a=s(),$.c(),d(r,"class","svelte-117xdmg"),d(c,"class","board svelte-117xdmg"),d(e,"class","svelte-117xdmg")},m(t,n){u(t,e,n),l(e,r),l(e,o),l(e,c);for(let t=0;t<g.length;t+=1)g[t].m(c,null);l(e,a),$.m(e,null)},p(t,[n]){if(19&n){let e;for(m=t[0],e=0;e<m.length;e+=1){const r=R(t,m,e);g[e]?g[e].p(r,n):(g[e]=k(r),g[e].c(),g[e].m(c,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=m.length}p===(p=h(t))&&$?$.p(t,n):($.d(1),$=p(t),$&&($.c(),$.m(e,null)))},i:t,o:t,d(t){t&&i(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(g,t),$.d()}}}function Y(t,n,e){let r=new Array(9).fill(""),o=new Array(3),c=!0,l=null;const u=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function i(t){""===r[t]&&null===l&&(e(0,r[t]=c?"X":"O",r),f(),e(2,c=!c))}function f(){u.forEach(([t,n,c])=>{if(function(...t){const n=t[0];return t.reduce((t,e)=>""!==e&&t&&n===e)}(r[t],r[n],r[c])){const l=r[t];e(1,o=[t,n,c]),a(l)}}),r.every(t=>""!==t)&&null===l&&a()}async function a(t){e(3,l="X"===t?"PLAYER":"O"===t?"OPPONENT":"DRAW"),setTimeout(()=>{e(3,l=null),e(0,r=new Array(9).fill("")),e(1,o=new Array(3))},2e3)}return[r,o,c,l,i,u,f,a,t=>i(t)]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),L(this,t,Y,W,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
