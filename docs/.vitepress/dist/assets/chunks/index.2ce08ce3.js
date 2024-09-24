import{i as J,al as K,r as y,ab as fe,s as me,m as k,w as W,I as ve,b as ge,o as z,t as j,e as r,v as g,d as v,V as d,u as a,$ as G,a5 as pe,C as E,c as $,S as U,x as be,a8 as we,a6 as _e,a7 as ke,B as Ie,a3 as xe,ad as he}from"../app.40ba1749.js";import{a as ye,I as Ne,O as Z,ax as Ce,P as q,bR as ze,bS as Ee,T as Te,Y as w,ar as Oe,am as Le,an as Re,bT as Se,bK as Ve,bU as $e,bV as Ae,_ as Xe,H as N,G as L,M as Ye,N as Me}from"./index.7434e67a.js";import{u as Be,b as De}from"./index.424a2ce8.js";import{d as Fe}from"./debounce.0db196d9.js";var Pe="Expected a function";function A(p,T,f){var I=!0,n=!0;if(typeof p!="function")throw new TypeError(Pe);return ye(f)&&(I="leading"in f?!!f.leading:I,n="trailing"in f?!!f.trailing:n),Fe(p,T,{leading:I,maxWait:T,trailing:n})}const He=Ne({urlList:{type:Z(Array),default:()=>Ce([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),Ke={close:()=>!0,switch:p=>q(p),rotate:p=>q(p)},We=["src","crossorigin"],je=J({name:"ElImageViewer"}),Ge=J({...je,props:He,emits:Ke,setup(p,{expose:T,emit:f}){var I;const n=p,C={CONTAIN:{name:"contain",icon:K(ze)},ORIGINAL:{name:"original",icon:K(Ee)}},{t:Q}=Be(),o=Te("image-viewer"),{nextZIndex:ee}=De(),R=y(),X=y([]),Y=fe(),x=y(!0),b=y(n.initialIndex),O=me(C.CONTAIN),l=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),ae=y((I=n.zIndex)!=null?I:ee()),te=k(()=>{const{urlList:e}=n;return e.length<=1}),M=k(()=>b.value===0),B=k(()=>b.value===n.urlList.length-1),se=k(()=>n.urlList[b.value]),ne=k(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!n.infinite&&M.value)]),oe=k(()=>[o.e("btn"),o.e("next"),o.is("disabled",!n.infinite&&B.value)]),le=k(()=>{const{scale:e,deg:t,offsetX:s,offsetY:u,enableTransition:m}=l.value;let i=s/e,c=u/e;switch(t%360){case 90:case-270:[i,c]=[c,-i];break;case 180:case-180:[i,c]=[-i,-c];break;case 270:case-90:[i,c]=[-c,i];break}const h={transform:`scale(${e}) rotate(${t}deg) translate(${i}px, ${c}px)`,transition:m?"transform .3s":""};return O.value.name===C.CONTAIN.name&&(h.maxWidth=h.maxHeight="100%"),h});function S(){ie(),f("close")}function re(){const e=A(s=>{switch(s.code){case N.esc:n.closeOnPressEscape&&S();break;case N.space:F();break;case N.left:P();break;case N.up:_("zoomIn");break;case N.right:H();break;case N.down:_("zoomOut");break}}),t=A(s=>{const u=s.deltaY||s.deltaX;_(u<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});Y.run(()=>{L(document,"keydown",e),L(document,"wheel",t)})}function ie(){Y.stop()}function ue(){x.value=!1}function ce(e){x.value=!1,e.target.alt=Q("el.image.error")}function de(e){if(x.value||e.button!==0||!R.value)return;l.value.enableTransition=!1;const{offsetX:t,offsetY:s}=l.value,u=e.pageX,m=e.pageY,i=A(h=>{l.value={...l.value,offsetX:t+h.pageX-u,offsetY:s+h.pageY-m}}),c=L(document,"mousemove",i);L(document,"mouseup",()=>{c()}),e.preventDefault()}function D(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function F(){if(x.value)return;const e=Ye(C),t=Object.values(C),s=O.value.name,m=(t.findIndex(i=>i.name===s)+1)%e.length;O.value=C[e[m]],D()}function V(e){const t=n.urlList.length;b.value=(e+t)%t}function P(){M.value&&!n.infinite||V(b.value-1)}function H(){B.value&&!n.infinite||V(b.value+1)}function _(e,t={}){if(x.value)return;const{minScale:s,maxScale:u}=n,{zoomRate:m,rotateDeg:i,enableTransition:c}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...t};switch(e){case"zoomOut":l.value.scale>s&&(l.value.scale=Number.parseFloat((l.value.scale/m).toFixed(3)));break;case"zoomIn":l.value.scale<u&&(l.value.scale=Number.parseFloat((l.value.scale*m).toFixed(3)));break;case"clockwise":l.value.deg+=i,f("rotate",l.value.deg);break;case"anticlockwise":l.value.deg-=i,f("rotate",l.value.deg);break}l.value.enableTransition=c}return W(se,()=>{ve(()=>{const e=X.value[0];e!=null&&e.complete||(x.value=!0)})}),W(b,e=>{D(),f("switch",e)}),ge(()=>{var e,t;re(),(t=(e=R.value)==null?void 0:e.focus)==null||t.call(e)}),T({setActiveItem:V}),(e,t)=>(z(),j(he,{to:"body",disabled:!e.teleported},[r(xe,{name:"viewer-fade",appear:""},{default:g(()=>[v("div",{ref_key:"wrapper",ref:R,tabindex:-1,class:d(a(o).e("wrapper")),style:G({zIndex:ae.value})},[v("div",{class:d(a(o).e("mask")),onClick:t[0]||(t[0]=pe(s=>e.hideOnClickModal&&S(),["self"]))},null,2),E(" CLOSE "),v("span",{class:d([a(o).e("btn"),a(o).e("close")]),onClick:S},[r(a(w),null,{default:g(()=>[r(a(Oe))]),_:1})],2),E(" ARROW "),a(te)?E("v-if",!0):(z(),$(U,{key:0},[v("span",{class:d(a(ne)),onClick:P},[r(a(w),null,{default:g(()=>[r(a(Le))]),_:1})],2),v("span",{class:d(a(oe)),onClick:H},[r(a(w),null,{default:g(()=>[r(a(Re))]),_:1})],2)],64)),E(" ACTIONS "),v("div",{class:d([a(o).e("btn"),a(o).e("actions")])},[v("div",{class:d(a(o).e("actions__inner"))},[r(a(w),{onClick:t[1]||(t[1]=s=>_("zoomOut"))},{default:g(()=>[r(a(Se))]),_:1}),r(a(w),{onClick:t[2]||(t[2]=s=>_("zoomIn"))},{default:g(()=>[r(a(Ve))]),_:1}),v("i",{class:d(a(o).e("actions__divider"))},null,2),r(a(w),{onClick:F},{default:g(()=>[(z(),j(be(a(O).icon)))]),_:1}),v("i",{class:d(a(o).e("actions__divider"))},null,2),r(a(w),{onClick:t[3]||(t[3]=s=>_("anticlockwise"))},{default:g(()=>[r(a($e))]),_:1}),r(a(w),{onClick:t[4]||(t[4]=s=>_("clockwise"))},{default:g(()=>[r(a(Ae))]),_:1})],2)],2),E(" CANVAS "),v("div",{class:d(a(o).e("canvas"))},[(z(!0),$(U,null,we(e.urlList,(s,u)=>_e((z(),$("img",{ref_for:!0,ref:m=>X.value[u]=m,key:s,src:s,style:G(a(le)),class:d(a(o).e("img")),crossorigin:e.crossorigin,onLoad:ue,onError:ce,onMousedown:de},null,46,We)),[[ke,u===b.value]])),128))],2),Ie(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Ue=Xe(Ge,[["__file","image-viewer.vue"]]);const ea=Me(Ue);export{ea as E,He as a,Ke as i,A as t};
