import{S as I,i as T,s as z,F as K,e as k,c as A,a as F,d as f,b as $,g as y,G as C,E as w,H as L,I as N,v as O,J as Q,K as R,k as M,w as V,L as x,m as q,x as W,M as j,y as B,N as U,O as X,P as Y,q as E,o as S,B as D}from"../chunks/index-d1261f6c.js";import{w as Z}from"../chunks/index-da0413c8.js";var G;const b=Z((G=localStorage.getItem("theme"))!=null?G:"light");b.subscribe(n=>{localStorage.setItem("theme",n),document.documentElement.className=n});function ee(n){let t,a,i;return K(n[4]),{c(){t=k("canvas"),this.h()},l(e){t=A(e,"CANVAS",{class:!0}),F(t).forEach(f),this.h()},h(){$(t,"class","circles svelte-2txu5t")},m(e,r){y(e,t,r),n[5](t),a||(i=[C(window,"resize",n[3]),C(window,"resize",n[4])],a=!0)},p:w,i:w,o:w,d(e){e&&f(t),n[5](null),a=!1,L(i)}}}const te=1,se=1;function ne(n,t,a){let i;N(n,b,u=>a(7,i=u));let e,r=0,h=0;const d=(u,l,_)=>(1-_)*u+_*l,m=()=>{!e||(a(0,e.width=r,e),a(0,e.height=h,e))};let p=-1;class o{constructor(){this.reset()}reset(){let l=-1;do this.x=Math.random(),this.y=Math.random(),this.radius=0,this.x<=.5&&this.y<=.5&&(l=0),this.x>.5&&this.y<=.5&&(l=1),this.x<=.5&&this.y>.5&&(l=2),this.x>.5&&this.y>.5&&(l=3);while(l==p);p=l}animate(l){this.radius=d(this.radius,1,te*l)}draw(l){const _=(1-this.radius)*se;l.strokeStyle=i=="dark"?"#fff":"#000",l.globalAlpha=_,l.beginPath(),l.arc(this.x*e.width,this.y*e.height,this.radius*e.height,0,2*Math.PI),l.stroke()}dead(){return this.radius>.99}}let s=[new o];O(()=>{const u=e.getContext("2d");let l=requestAnimationFrame(H),_;function H(P){const J=_?(P-_)/1e3:.016666666666666666;_=P,l=requestAnimationFrame(H),u.clearRect(0,0,e.width,e.height);for(const v of s)v.animate(J),v.draw(u),v.dead()&&v.reset()}return m(),()=>{cancelAnimationFrame(l)}});function c(){a(1,r=window.innerWidth),a(2,h=window.innerHeight)}function g(u){Q[u?"unshift":"push"](()=>{e=u,a(0,e)})}return[e,r,h,m,c,g]}class ae extends I{constructor(t){super(),T(this,t,ne,ee,z,{})}}function ie(n){let t,a,i;return{c(){t=k("div"),this.h()},l(e){t=A(e,"DIV",{class:!0}),F(t).forEach(f),this.h()},h(){$(t,"class","theme-switcher svelte-11m9nqe")},m(e,r){y(e,t,r),a||(i=C(t,"click",n[0]),a=!0)},p:w,i:w,o:w,d(e){e&&f(t),a=!1,i()}}}function re(n,t,a){let i;return N(n,b,r=>a(1,i=r)),[()=>b.set(i=="dark"?"light":"dark")]}class le extends I{constructor(t){super(),T(this,t,re,ie,z,{})}}function oe(n){let t,a,i,e,r,h,d,m;i=new ae({});const p=n[2].default,o=R(p,n,n[1],null);return d=new le({}),{c(){t=k("meta"),a=M(),V(i.$$.fragment),e=M(),r=k("main"),o&&o.c(),h=M(),V(d.$$.fragment),this.h()},l(s){const c=x('[data-svelte="svelte-1t0jwfh"]',document.head);t=A(c,"META",{name:!0,content:!0}),c.forEach(f),a=q(s),W(i.$$.fragment,s),e=q(s),r=A(s,"MAIN",{});var g=F(r);o&&o.l(g),h=q(g),W(d.$$.fragment,g),g.forEach(f),this.h()},h(){$(t,"name","color-scheme"),$(t,"content",n[0])},m(s,c){j(document.head,t),y(s,a,c),B(i,s,c),y(s,e,c),y(s,r,c),o&&o.m(r,null),j(r,h),B(d,r,null),m=!0},p(s,[c]){(!m||c&1)&&$(t,"content",s[0]),o&&o.p&&(!m||c&2)&&U(o,p,s,s[1],m?Y(p,s[1],c,null):X(s[1]),null)},i(s){m||(E(i.$$.fragment,s),E(o,s),E(d.$$.fragment,s),m=!0)},o(s){S(i.$$.fragment,s),S(o,s),S(d.$$.fragment,s),m=!1},d(s){f(t),s&&f(a),D(i,s),s&&f(e),s&&f(r),o&&o.d(s),D(d)}}}function ce(n,t,a){let i;N(n,b,h=>a(0,i=h));let{$$slots:e={},$$scope:r}=t;return n.$$set=h=>{"$$scope"in h&&a(1,r=h.$$scope)},[i,r,e]}class ue extends I{constructor(t){super(),T(this,t,ce,oe,z,{})}}export{ue as default};