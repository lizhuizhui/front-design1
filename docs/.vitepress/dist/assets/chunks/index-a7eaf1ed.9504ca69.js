import{cq as o}from"./index.7434e67a.js";import{i as x,r as n,w as v,o as b,t as h,v as g,u as p,e as w,I as C}from"../app.40ba1749.js";const y=x({__name:"index",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(m,{emit:s}){const d=o.getComponent("input"),i=o.getComponent("select"),r=m,c=s,l=n(null),a=n("px"),f=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"},{label:"vh",value:"vh"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"pt",value:"pt"}];v(()=>r.modelValue,t=>{const e=parseFloat(t);if(!e)return l.value=null,!1;l.value=String(e),a.value=t.substring(l.value.length)},{immediate:!0}),v(()=>a.value+l.value,()=>{V()});function V(){C(()=>c("update:modelValue",l.value?l.value+a.value:void 0))}return(t,e)=>(b(),h(p(d),{class:"epic-input-size",modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=u=>l.value=u),value:l.value,"onUpdate:value":e[3]||(e[3]=u=>l.value=u),type:"number",min:"0",placeholder:"\u8BF7\u8F93\u5165"},{suffix:g(()=>[w(p(i),{value:a.value,"onUpdate:value":e[0]||(e[0]=u=>a.value=u),modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=u=>a.value=u),style:{width:"68px"},options:f},null,8,["value","modelValue"])]),_:1},8,["modelValue","value"]))}});export{y as default};
