(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{106:function(e,t,r){},247:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(92),i=r.n(c),s=(r(106),r(4)),o=r(26),d=r(5),l=r(21),f=r(37),j=r.n(f),b=r(39),h=r.n(b),u=r(1),p=s.a.div({padding:"1.25rem"}),m=s.a.article({width:"100%",maxWidth:"100%"}),x=Object(s.a)(j.a)({}),O=Object(s.a)(o.b)({});var v=function(e){var t,r=e.prefix,n=e.listUrl,c=e.markdownUrl,i=a.a.useState([]),s=Object(l.a)(i,2),o=s[0],d=s[1],f=a.a.useState(),j=Object(l.a)(f,2),b=j[0],v=j[1];return t=function(){fetch("/changes"+n).then((function(e){return e.text()})).then((function(e){d(JSON.parse(e))})),fetch("/changes"+c).then((function(e){return e.text()})).then((function(e){v(e)}))},a.a.useEffect(t,[]),Object(u.jsxs)(p,{children:[Object(u.jsx)(m,{className:"prose",children:Object(u.jsx)(x,{remarkPlugins:[h.a],children:b})}),Object(u.jsx)("ul",{children:o.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)(O,{to:"".concat(r,"/").concat(e.id),children:e.title})},t)}))})]})};var g,k=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(v,{prefix:"/changes/ba",listUrl:"/comparisons/list.json",markdownUrl:"/comparisons/markdown.md"})})},w=r(54),y=r.n(w),D=r(27),U=r(93),C=r(94),S=r(96),B=r(95),_=r.n(B),I=s.a.div({}),H=Object(S.a)(_.a)(g||(g=Object(C.a)(["\n  ","\n"])),{}),J=s.a.div({width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem"}),N=s.a.span({fontSize:"0.875rem",lineHeight:"1.25rem"}),P=s.a.div({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"});var q=function(e){var t=e.beforeUrl,r=e.afterUrl,n=e.beforeDescription,a=e.afterDescription,c=e.centerDescription,i={showControls:!0,divisorBorder:!0,before:t,after:r,errorImage:"https://media.giphy.com/media/pyqqSHqdekwVi/giphy.gif",alt:"Before or after image",before_error:!1,after_error:!1,before_loaded:!1,after_loaded:!1,before_image_status:"loading",after_image_status:"loading"},s=i.showControls,o=i.imageHeight,d=i.divisorBorder,l=i.after,f=i.before,j=i.errorImage,b=i.alt;return Object(u.jsxs)(I,{children:[Object(u.jsx)(H,{before:f,after:l,showControls:s,imageHeight:o,divisorBorder:d,alt:b,errorImage:j}),Object(u.jsxs)(J,{children:[Object(u.jsx)(N,{children:n}),Object(u.jsx)(P,{children:c.split("|").map((function(e,t){return Object(u.jsx)(N,{children:e},t)}))}),Object(u.jsx)(N,{children:a})]})]})},E=r(99),L=r(100),W=s.a.div({}),R=s.a.span({marginLeft:"0.25rem"});var z=function(e){var t=e.onClick,r=e.children;return Object(u.jsxs)(W,{onClick:t,children:[Object(u.jsx)(E.a,{icon:L.a}),Object(u.jsx)(R,{children:r})]})},F=s.a.div({padding:"1.25rem"}),M=s.a.article({width:"100%",maxWidth:"100%"}),T=Object(s.a)(j.a)({}),V=s.a.div({}),A=s.a.div({marginBottom:"1.25rem"});var G=function(e){var t,r=Object(d.f)(),n=a.a.useState(""),c=Object(l.a)(n,2),i=c[0],s=c[1],o=a.a.useState([]),f=Object(l.a)(o,2),j=f[0],b=f[1];return t=function(){var t=e.match.params.id,r="".concat("/changes","/comparisons/").concat(t);s(r),fetch("".concat(r,"/entry.json")).then((function(e){return e.text()})).then(function(){var e=Object(U.a)(y.a.mark((function e(t){var n,a,c,i,s,o,d,l,f,j,h,u,p,m,x,O,v,g;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(t),e.prev=1,a=[],c=Object(D.a)(n);try{for(c.s();!(i=c.n()).done;)"md"===(s=i.value).type&&a.push(fetch("".concat(r,"/").concat(s.file)))}catch(k){c.e(k)}finally{c.f()}return e.next=7,Promise.all(a);case 7:o=e.sent,a=[],d=Object(D.a)(o);try{for(d.s();!(l=d.n()).done;)f=l.value,a.push(f.text())}catch(k){d.e(k)}finally{d.f()}return e.next=13,Promise.all(a);case 13:j=e.sent,h=0,u=Object(D.a)(j),e.prev=16,u.s();case 18:if((p=u.n()).done){e.next=46;break}m=p.value,x=0,O=0,v=Object(D.a)(n),e.prev=23,v.s();case 25:if((g=v.n()).done){e.next=35;break}if("md"!==g.value.type){e.next=32;break}if(x!==h){e.next=31;break}return n[O].markdown=m,e.abrupt("break",35);case 31:x+=1;case 32:O+=1;case 33:e.next=25;break;case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(23),v.e(e.t0);case 40:return e.prev=40,v.f(),e.finish(40);case 43:h+=1;case 44:e.next=18;break;case 46:e.next=51;break;case 48:e.prev=48,e.t1=e.catch(16),u.e(e.t1);case 51:return e.prev=51,u.f(),e.finish(51);case 54:e.next=59;break;case 56:e.prev=56,e.t2=e.catch(1),console.error("Could not load markdown");case 59:b(n);case 60:case"end":return e.stop()}}),e,null,[[1,56],[16,48,51,54],[23,37,40,43]])})));return function(t){return e.apply(this,arguments)}}())},a.a.useEffect(t,[]),Object(u.jsxs)(F,{children:[Object(u.jsx)(A,{children:Object(u.jsx)(z,{onClick:function(){r.goBack()},children:"Back"})}),j.map((function(e,t){return Object(u.jsxs)("div",{children:["md"===e.type&&Object(u.jsx)(M,{className:"prose",children:Object(u.jsx)(T,{remarkPlugins:[h.a],children:j[t].markdown})}),"ba"===e.type&&Object(u.jsx)(V,{children:Object(u.jsx)(q,{beforeUrl:"".concat(i,"/").concat(e.beforeUrl),afterUrl:"".concat(i,"/").concat(e.afterUrl),beforeDescription:e.beforeDescription,afterDescription:e.afterDescription,centerDescription:e.centerDescription})})]},t)}))]})},K=s.a.div({}),Q=s.a.div({marginLeft:"auto",marginRight:"auto",maxWidth:"80rem"});var X=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(K,{children:Object(u.jsx)(Q,{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/changes/",exact:!0,component:k}),Object(u.jsx)(d.a,{path:"/changes/ba/:id",component:G})]})})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.b245dfa8.chunk.js.map