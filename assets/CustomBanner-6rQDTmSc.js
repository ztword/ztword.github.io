import{f as q,u as N,g as m,h as x,i as j,_ as F,r as L,o,c as r,a as z,t as h,j as u,F as C,k as w,l as G,n as H,d as V,m as D,e as O}from"./app-BEQIFcJr.js";const P=q({__name:"CustomBanner",setup(E,{expose:_}){_();const n=N(),s=m(()=>{var e,t,a,l;return(t=(e=n.value)==null?void 0:e.customBanner)!=null&&t.heroImage?x((l=(a=n.value)==null?void 0:a.customBanner)==null?void 0:l.heroImage):null}),v=m(()=>{var e,t;return((t=(e=n.value)==null?void 0:e.customBanner)==null?void 0:t.buttons)||[]}),f=m(()=>{var e,t;return(((t=(e=n.value)==null?void 0:e.customBanner)==null?void 0:t.socialLinks)||[]).map(a=>(a.color||(a.color=j()),a))}),p=m(()=>n.value.customBanner.heroImageStyle||{}),g=m(()=>{var l;const{bgImageStyle:e,bgImage:t}=((l=n.value)==null?void 0:l.customBanner)||{},a=t?{overflow:"hidden",background:`url(${x(t)}) center/cover no-repeat`}:{};return e?{...a,...e}:a}),i={frontmatter:n,heroImage:s,buttons:v,socialLinks:f,heroImageStyle:p,bgImageStyle:g};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),X={class:"banner-brand__content"},A={key:0,class:"title"},J={key:1,class:"description"},K={key:2,class:"tagline"},M={key:3,class:"btn-group"},Q={key:4,class:"social-links"},R=O('<div class="shields-wrapper" data-v-7a07772e><img alt="GitHub license" src="https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-7a07772e><img alt="GitHub stars" src="https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-7a07772e><img alt="GitHub forks" src="https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-7a07772e><img alt="Npm downloads" src="https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat-square&amp;logo=npm&amp;color=5D67E8" data-v-7a07772e><img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/vuepress-reco/vuepress-theme-reco?filename=packages%2Fvuepress-theme-reco%2Fpackage.json&amp;style=flat-square&amp;color=5D67E8&amp;logo=npm" data-v-7a07772e><img alt="Npm version" src="https://img.shields.io/badge/tailwindcss-3.1.6-5D67E8?style=flat-square&amp;logo=tailwindcss" data-v-7a07772e></div>',1);function T(E,_,n,s,v,f){var g,i,e,t,a,l,k,b,y,B,I,S;const p=L("Xicons");return o(),r("section",{class:"banner-brand__wrapper",style:D({...s.bgImageStyle})},[z("div",X,[(i=(g=s.frontmatter)==null?void 0:g.customBanner)!=null&&i.title?(o(),r("h1",A,h((t=(e=s.frontmatter)==null?void 0:e.customBanner)==null?void 0:t.title),1)):u("",!0),(l=(a=s.frontmatter)==null?void 0:a.customBanner)!=null&&l.description?(o(),r("p",J,h((b=(k=s.frontmatter)==null?void 0:k.customBanner)==null?void 0:b.description),1)):u("",!0),(B=(y=s.frontmatter)==null?void 0:y.customBanner)!=null&&B.tagline?(o(),r("p",K,h((S=(I=s.frontmatter)==null?void 0:I.customBanner)==null?void 0:S.tagline),1)):u("",!0),s.buttons.length>0?(o(),r("div",M,[(o(!0),r(C,null,w(s.buttons,(c,d)=>(o(),G(p,{class:H(c.type),key:d,icon:c.icon,text:c.text,link:c.link,"icon-size":"18","text-size":"14"},null,8,["class","icon","text","link"]))),128))])):u("",!0),s.socialLinks.length>0?(o(),r("ul",Q,[(o(!0),r(C,null,w(s.socialLinks,(c,d)=>(o(),r("li",{class:"social-item",key:d},[V(p,{icon:c.icon,link:c.link,style:D({color:c.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))])):u("",!0),R])],4)}const W=F(P,[["render",T],["__scopeId","data-v-7a07772e"],["__file","CustomBanner.vue"]]);export{W as default};
