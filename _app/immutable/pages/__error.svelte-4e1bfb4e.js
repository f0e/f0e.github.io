import{S as k,i as x,s as A,a as q,l as m,r as C,Q as H,h as i,c as b,m as d,n as p,u as w,p as y,b as h,R as v,v as L,E as S}from"../chunks/index-33171326.js";function P(o){let t,s,a,n,r,f,u=o[0].message.toLowerCase()+"",c;return{c(){t=q(),s=m("h1"),a=m("a"),n=C(o[1]),r=q(),f=m("p"),c=C(u),this.h()},l(e){H('[data-svelte="svelte-1pimdqi"]',document.head).forEach(i),t=b(e),s=d(e,"H1",{});var _=p(s);a=d(_,"A",{class:!0,href:!0}),p(a).forEach(i),n=w(_,o[1]),_.forEach(i),r=b(e),f=d(e,"P",{});var E=p(f);c=w(E,u),E.forEach(i),this.h()},h(){document.title="f0e / error",y(a,"class","back"),y(a,"href","/")},m(e,l){h(e,t,l),h(e,s,l),v(s,a),v(s,n),h(e,r,l),h(e,f,l),v(f,c)},p(e,[l]){l&2&&L(n,e[1]),l&1&&u!==(u=e[0].message.toLowerCase()+"")&&L(c,u)},i:S,o:S,d(e){e&&i(t),e&&i(s),e&&i(r),e&&i(f)}}}function j({error:o,status:t}){return{props:{error:o,status:t}}}function Q(o,t,s){let{error:a,status:n}=t;return o.$$set=r=>{"error"in r&&s(0,a=r.error),"status"in r&&s(1,n=r.status)},[a,n]}class z extends k{constructor(t){super(),x(this,t,Q,P,A,{error:0,status:1})}}export{z as default,j as load};