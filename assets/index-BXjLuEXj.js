import{j as s,d as g,a as i,e as u,L as f,F as l}from"./index-CLANbz8C.js";import{u as N,A as b,g as v,G as c}from"./HeroHeaderBase-D1L03HOP.js";import{B as P,a as y,p as d,e as B,g as L,h as w}from"./BlogPostProps-C5eyahW5.js";import{H as S}from"./HeroHeaderNormal-DQI1xhqo.js";import{T as E}from"./index-CmImGMrX.js";import"./getCapitalizeWords-CIjf9RAC.js";const C=({children:e})=>s.jsx("div",{className:"sidebarPD",children:s.jsx("aside",{className:"sidebar-wrapper",children:e})}),H=({excludeIds:e})=>s.jsx(C,{children:s.jsx(P,{excludeIds:e,showDate:!0,showCat:!1,typeCard:"horizontal",search:!0,spaceRow:d(30),spaceCol:d(20),columList:1,sortOrder:"latest",postPerPage:y(4)},(e==null?void 0:e.join("-"))??"no-exclude")}),M=()=>{const[e]=g(),n=e.get("id"),[a,m]=i.useState(null),{data:r}=N(c.post.sheetId,c.post.apiKey),t=u(()=>{const o=Number(n);if(!o||isNaN(o))return;const j=r.find(p=>p.id===o);m(j||null)},300),h=[{label:"Blog",url:"/blog"},{label:`${a==null?void 0:a.title}`,url:""}];console.table(r),i.useEffect(()=>(t(),()=>t.cancel()),[n,t,r]);const x=i.useMemo(()=>a?[a.id]:[],[a]);return a?s.jsxs("div",{className:"blog-details",children:[s.jsx(S,{breadcrumb:!0,dataBreadcrumb:h,children:s.jsx("span",{className:"text",dangerouslySetInnerHTML:{__html:a.title}})}),s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsxs(b,{animation:"fadeIn",duration:1.2,delayBase:.2,classElement:"col-lg-8 col-md-7 col-sm-12 col-12 col-left",children:[s.jsx("div",{className:"feature-image",children:s.jsx("img",{src:`${a.image}`,alt:v(a.title)})}),s.jsxs("div",{className:"infor-wraper",children:[s.jsxs("div",{className:"post-date",children:[s.jsx("span",{className:"icon-date icon-infor",children:s.jsx(l,{icon:B})}),s.jsx("span",{children:a.date})]}),s.jsxs("div",{className:"cat",children:[s.jsx("span",{className:"icon-cat icon-infor",children:s.jsx(l,{icon:L})}),s.jsx("span",{children:a.category})]}),s.jsxs("div",{className:"post-author",children:[s.jsx("span",{className:"icon-author icon-infor",children:s.jsx(l,{icon:w})}),s.jsx("span",{children:a.author})]})]}),s.jsx("div",{className:"main-content",dangerouslySetInnerHTML:{__html:a.content}})]}),s.jsx("div",{className:"col-lg-4 col-md-5 col-sm-12 col-12 col-right",children:s.jsxs("div",{className:"col-right-wraper",children:[s.jsx(H,{excludeIds:x}),s.jsx("div",{className:"margin-top-action",children:s.jsx(E,{typeList:"normal",linkParams:"/blog/category?cat",data:r,title:"Categories",field:"category",imageField:"imageCategory"})})]})})]})})]}):s.jsx("div",{className:"blog-details",children:s.jsx(f,{})})};export{M as BlogDetails};
