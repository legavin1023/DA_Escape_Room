import{_ as c,u as f,b as s,g as p,c as a,a as r,f as v,w as x,v as B,e as d,o as l}from"./index-ZBQLFBOR.js";const b={setup(){const u=f(),t=s(!1),n=s(""),e=s(!1),i=()=>{t.value=!0},m=()=>{n.value==="알리스터"?(e.value=!1,alert("그래, 이제 다 끝났어."),setTimeout(()=>{u.push("/ending")},1e3)):e.value=!0},o=p(()=>n.value==="알리스터");return{nameBtn:i,typingName:t,nameInput:n,textSubmit:m,showError:e,isNameCorrect:o}}},k={key:0,class:"nameBox"},y={key:0,style:{color:"red"}};function N(u,t,n,e,i,m){return l(),a("div",null,[r("button",{onClick:t[0]||(t[0]=(...o)=>e.nameBtn&&e.nameBtn(...o))},"문"),e.typingName?(l(),a("div",k,[t[3]||(t[3]=v(" 내 이름은.... ")),x(r("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>e.nameInput=o)},null,512),[[B,e.nameInput]]),r("button",{onClick:t[2]||(t[2]=(...o)=>e.textSubmit&&e.textSubmit(...o))},"제출"),e.showError?(l(),a("p",y,"아니, 아니야…")):d("",!0)])):d("",!0)])}const g=c(b,[["render",N]]);export{g as default};
