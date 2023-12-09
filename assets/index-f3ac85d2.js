var se=Object.defineProperty;var ae=(i,t,s)=>t in i?se(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var c=(i,t,s)=>(ae(i,typeof t!="symbol"?t+"":t,s),s);import{j as l,r as I,c as f,I as R}from"./index-fef9e21c.js";import{S as ne,B as C,s as p,D as y}from"./sleep-2d836259.js";import{u as V,C as E}from"./use-fucus-fee32e23.js";import{T as re,H as k}from"./element-captions-6dbe28ed.js";const ie=({fill:i="#0032FF"})=>l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289L18.4142 12L10.7071 19.7071C10.3166 20.0976 9.68342 20.0976 9.29289 19.7071C8.90237 19.3166 8.90237 18.6834 9.29289 18.2929L15.5858 12L9.29289 5.70711C8.90237 5.31658 8.90237 4.68342 9.29289 4.29289Z",fill:i})}),oe=i=>{switch(i){case"default":return"#7a7a7a";case"changing":return"#e0bc72";case"modified":return"#7cbe5d"}};class de{constructor(){c(this,"head",null);c(this,"tail",null);c(this,"size",0);c(this,"CreateNode",({value:t,next:s=null,prev:r=null})=>({value:t,next:s,prev:r}));c(this,"isOutOfRangeError",({index:t,max:s,error:r})=>{if(t<0||t>s)throw new Error(r)});c(this,"findNodeByIndex",t=>{if(!this.head||!this.tail||t<0||t>this.size)return;let s=this.head,r=0;for(;r<t;)s=s.next,r++;return s});c(this,"insertAt",(t,s)=>{if(this.isOutOfRangeError({index:t,max:this.size,error:`Can't insert at ${t} index: out of range`}),!this.head||!this.tail){const o=this.CreateNode({value:s});return[this.head,this.tail]=[o,o],this.size++,this.head}if(t===0){const o=this.CreateNode({value:s,next:this.head});return[this.head.prev,this.head]=[o,o],this.size++,this.head}if(t===this.size){const o=this.CreateNode({value:s,prev:this.tail});return[this.tail.next,this.tail]=[o,o],this.size++,this.tail}const r=this.findNodeByIndex(t),n=r.prev,h=this.CreateNode({value:s,next:r,prev:n});return[n.next,r.prev]=[h,h],this.size++,h});c(this,"removeAt",t=>{const s=this.size-1;if(this.isOutOfRangeError({index:t,max:s,error:`Can't remove at ${t} index: out of range`}),!this.head||!this.tail)return null;if(t===0){const o=this.head;return[this.head,this.head.prev]=[this.head.next,null],this.size--,o}if(t===s){const o=this.tail;return[this.tail,this.tail.next]=[this.tail.prev,null],this.size--,o}const r=this.findNodeByIndex(t),n=r.prev,h=r.next;return[n.next,h.prev]=[h,n],this.size--,r});c(this,"removeAll",()=>{this.head=null,this.tail=null,this.size=0});c(this,"prepend",t=>this.insertAt(0,t));c(this,"append",t=>this.insertAt(this.size,t));c(this,"removeHead",()=>this.removeAt(0));c(this,"removeTail",()=>this.removeAt(this.size-1));c(this,"toArray",t=>{if(!this.head||!this.tail)return[];let s=this.head,r;const n=[];if(t)for(;s;)r=t(s),n.push(r),s=s.next;else for(;s;)r=s.value,n.push(r),s=s.next;return n});c(this,"getSize",()=>this.size)}}const le="_form_1y9qs_1",ce="_form__fieldset_1y9qs_10",ue="_form__fieldset_type_byValue_1y9qs_15",me="_form__fieldset_type_byIndex_1y9qs_21",he="_form__input_1y9qs_27",_e="_circle_1y9qs_31",fe="_circle_first_1y9qs_34",xe="_circle_last_1y9qs_37",pe="_resultList_1y9qs_41",ye="_resultList__item_1y9qs_50",ve="_inputValue_1y9qs_56",Ie="_inputIndex_1y9qs_60",Te="_addToHead_1y9qs_64",ge="_addToTail_1y9qs_68",Be="_removeFromHead_1y9qs_72",Le="_removeFromTail_1y9qs_76",Ce="_addByIndex_1y9qs_80",Ae="_removeByIndex_1y9qs_84",d={form:le,form__fieldset:ce,form__fieldset_type_byValue:ue,form__fieldset_type_byIndex:me,form__input:he,circle:_e,circle_first:fe,circle_last:xe,resultList:pe,resultList__item:ye,inputValue:ve,inputIndex:Ie,addToHead:Te,addToTail:ge,removeFromHead:Be,removeFromTail:Le,addByIndex:Ce,removeByIndex:Ae},Fe=8,He=4,D=[...Array(He)].map((i,t)=>t.toString()),ze=()=>{const[i,t]=I.useState(""),[s,r]=I.useState(""),n=+s,[h,o]=I.useState(D),[x,A]=I.useState(null),[a,v]=I.useState("idle"),[T,S]=I.useState(null),[O,F]=V(),[P,H]=V(),u=I.useRef(new de).current,m=h.length,j=a!=="idle",w=!i||m>=Fe,$=w||!s||n>=m,b=!m,M=b||!s||n>=m;I.useEffect(()=>(D.map(e=>u.append(e)),o(u.toArray()),()=>u.removeAll()),[]);const N=async()=>{for(let e=0;e<=n;e++)A(e),await p(y)},g=e=>{v("final"),S(e)},B=()=>{v("idle"),A(null),S(null),t(""),r("")},Y=e=>t(e.currentTarget.value),Z=e=>e.currentTarget.validity.valid&&r(e.currentTarget.value),G=async()=>{v("addToTail"),await p(y),u.append(i),o(u.toArray()),g("addToTail"),await p(y),B(),F()},J=async()=>{v("addToHead"),await p(y),u.prepend(i),o(u.toArray()),g("addToHead"),await p(y),B(),F()},K=async()=>{v("removeFromHead"),await p(y),u.removeHead(),o(u.toArray()),g("removeFromHead"),B(),H()},Q=async()=>{v("removeFromTail"),await p(y),u.removeTail(),o(u.toArray()),g("removeFromTail"),B(),H()},U=async()=>{n===m-1?(v("removeFromTail"),A(n),await p(y)):(v("removeByIndex"),await N()),u.removeAt(n),o(u.toArray()),g("removeByIndex"),await p(y),B(),H()},W=async()=>{v("addByIndex"),await N(),u.insertAt(n,i),o(u.toArray()),g("addByIndex"),await p(y),B(),F()},L=(e,_)=>l.jsx(E,{letter:e,state:"changing",isSmall:!0,"data-test":`circle-${_}`}),q=e=>a==="addToTail"&&e===m-1?"changing":T==="addToTail"&&a==="final"&&e===m-1?"modified":a==="addToHead"&&e===0?"changing":T==="addToHead"&&a==="final"&&e===0?"modified":T==="removeFromTail"&&a==="removeFromTail"&&e===m-1||a==="addByIndex"&&e<=n&&x!==null&&e<x?"changing":T==="addByIndex"&&a==="final"&&e===n?"modified":a==="removeByIndex"&&e<=n&&x!==null&&e<=x?"changing":"default",X=e=>a==="removeFromTail"&&e===m-1||a==="removeFromHead"&&e===0||a==="removeByIndex"&&e===n&&x!==null&&e===x?"":h[e],ee=e=>a==="removeFromTail"&&e===m-1?L(h[m-1]):a==="removeFromHead"&&e===0?L(h[0]):a==="removeByIndex"&&e===n&&x!==null&&e===x?L(h[n],"tail"):e===m-1?re:null,te=e=>a==="addToTail"&&e===m-1||a==="addToHead"&&e===0?L(i):T==="addToHead"&&a==="final"&&e===0?k:a==="addByIndex"&&e<=n&&x!==null&&e===x?L(i,"head"):T==="addByIndex"&&a==="final"&&e!==0?"":e===0&&k;return l.jsxs(ne,{title:"Связный список",children:[l.jsxs("form",{className:d.form,children:[l.jsxs("fieldset",{className:f(d.form__fieldset,d.form__fieldset_type_byValue),disabled:j,children:[l.jsx(R,{value:i,maxLength:4,isLimitText:!0,onChange:Y,disabled:a!=="idle",extraClass:f(d.form__input,d.inputValue),autoComplete:"off",autoFocus:!0,ref:O,"data-test":"inputValue"}),l.jsx(C,{text:"Добавить в head",isLoader:a==="addToHead",disabled:w,onClick:()=>void J(),extraClass:f(d.addToHead),"data-test":"addHeadBtn"}),l.jsx(C,{text:"Добавить в tail",isLoader:a==="addToTail",disabled:w,onClick:()=>void G(),extraClass:f(d.addToTail),"data-test":"addTailBtn"}),l.jsx(C,{text:"Удалить из head",isLoader:a==="removeFromHead",onClick:()=>void K(),disabled:b,extraClass:f(d.removeFromHead),"data-test":"removeHeadBtn"}),l.jsx(C,{text:"Удалить из tail",isLoader:a==="removeFromTail",onClick:()=>void Q(),disabled:b,extraClass:f(d.removeFromTail),"data-test":"removeTailBtn"})]}),l.jsxs("fieldset",{className:f(d.form__fieldset,d.form__fieldset_type_byIndex),disabled:j,children:[l.jsx(R,{type:"number",placeholder:"Введите индекс",value:s,min:0,maxLength:m-1,pattern:"\\d+",isLimitText:!0,onChange:Z,disabled:a!=="idle",extraClass:f(d.form__input,d.inputIndex),autoComplete:"off",autoFocus:!0,ref:P,"data-test":"inputIndex"}),l.jsx(C,{text:"Добавить по индексу",isLoader:a==="addByIndex",disabled:$,onClick:()=>void W(),extraClass:f(d.addByIndex),"data-test":"addByIndexBtn"}),l.jsx(C,{text:"Удалить по индексу",isLoader:a==="removeByIndex",onClick:()=>void U(),disabled:M,extraClass:f(d.removeByIndex),"data-test":"removeByIndexBtn"})]})]}),l.jsx("ul",{className:f(d.resultList,"mt-24"),children:h.map((e,_)=>{const z=m-1;return l.jsxs("li",{className:d.resultList__item,children:[l.jsx(E,{letter:X(_),index:_,state:q(_),head:te(_),tail:ee(_),extraClass:f(d.circle,{[d.circle_first]:_===0},{[d.circle_last]:_===z}),"data-test":`circle-${_}`}),_<z&&l.jsx(ie,{fill:oe(q(_))})]},_)})})]})};export{ze as ListPage};