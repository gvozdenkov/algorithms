import{j as n,c as _,a as S,r as b,b as x}from"./index-298ce0e6.js";import{S as w,B as g,s as $,a as k}from"./sleep-20444c3a.js";import{g as p,s as M}from"./get-state-array-a2cbb5c2.js";const I=({index:a,state:r="default",extraClass:t=""})=>n.jsxs("div",{className:_(S.content,{[t]:!!t}),children:[n.jsx("div",{className:_(S.column,S[`column__state_${r}`]),style:{height:320*a/100||1}}),n.jsx("p",{className:_("text text_color_input mt-3",S.column__index),children:a})]}),C=({label:a="Введите текст",extraClass:r="",disabled:t=!1,...l})=>{const o=b.useId();return n.jsxs("div",{className:`${x.content} ${r}`,children:[n.jsx("input",{className:x.input,type:"radio",id:o,...l,disabled:t}),n.jsx("label",{className:`text text_type_button ${x.label}`,htmlFor:o,children:a})]})},R=(a,r=100)=>[...Array(a)].map(()=>Math.floor(r*Math.random())),E=(a,r)=>Math.floor(Math.random()*(r-a+1)+a);function*T({array:a,order:r="desc"}){const t=[...a],l=t.length;let o=p(l);yield{arr:t,state:o};for(let s=0;s<l;s++){let e=s;for(let c=s+1;c<l;c++)o=o.map((u,f)=>s>0&&f<s?"modified":f===s||f===c?"changing":"default"),yield{arr:t,state:o},e=r==="asc"&&t[c]<t[e]?c:e,e=r==="desc"&&t[c]>t[e]?c:e;e!==s&&M(t,s,e),o=o.map((c,u)=>u<=s?"modified":"default"),yield{arr:t,state:o}}}function*D({array:a,order:r="asc"}){const t=[...a],l=t.length;let o=p(l);for(let s=0;s<l;s++){o=o.map((e,c)=>s>0&&c>l-s-1?"modified":"default"),yield{arr:t,state:o};for(let e=0;e<l-s-1;e++)o=o.map((c,u)=>s>0&&u>l-s-1?"modified":u===e||u===e+1?"changing":"default"),yield{arr:t,state:o},(r==="asc"&&t[e]>t[e+1]||r==="desc"&&t[e]<t[e+1])&&M(t,e,e+1)}yield{arr:t,state:p(l,"modified")}}const G="_form_udydl_1",d={form:G,"result-list":"_result-list_udydl_11","selection-radio":"_selection-radio_udydl_23","bubble-radio":"_bubble-radio_udydl_27","asc-btn":"_asc-btn_udydl_31","desc-btn":"_desc-btn_udydl_35","new-arr-btn":"_new-arr-btn_udydl_39"},B=17,F=17,P=100,H=()=>{const a=E(B,F);return R(a,P)},J=()=>{const[a,r]=b.useState([]),[t,l]=b.useState("selectionSort"),[o,s]=b.useState(void 0),[e,c]=b.useState([]),[u,f]=b.useState("idle"),m=u==="processing";b.useEffect(()=>{y()},[]);const y=()=>{r(H()),c([])},A={selectionSort:i=>T({array:a,order:i}),bubbleSort:i=>D({array:a,order:i})},j=i=>l(i.currentTarget.value),v=async i=>{const h=i.currentTarget.value;s(i.currentTarget.value),f("processing");const L=A[t](h);for(const N of L)r(N.arr),c(N.state),await $(k);f("finished"),s(void 0)};return n.jsxs(w,{title:"Сортировка массива",children:[n.jsxs("form",{className:d.form,children:[n.jsx(C,{label:"Выбор",name:"sortMethod",value:"selectionSort",checked:t==="selectionSort",onChange:j,disabled:m,extraClass:d["selection-radio"]}),n.jsx(C,{label:"Пузырёк",name:"sortMethod",value:"bubbleSort",checked:t==="bubbleSort",onChange:j,disabled:m,extraClass:d["bubble-radio"]}),n.jsx(g,{text:"По возрастанию",sorting:"asc",value:"asc",onClick:i=>void v(i),type:"button",isLoader:m&&o==="asc",disabled:m,extraClass:_(d["asc-btn"],d.form__button)}),n.jsx(g,{text:"По убыванию",sorting:"desc",value:"desc",onClick:i=>void v(i),type:"button",isLoader:m&&o==="desc",disabled:m,extraClass:_(d["desc-btn"],d.form__button)}),n.jsx(g,{text:"Новый массив",type:"button",onClick:y,disabled:m,extraClass:_(d["new-arr-btn"],d.form__button)})]}),n.jsx("ul",{className:_(d["result-list"],"mt-24"),children:a.map((i,h)=>n.jsx("li",{className:d["result-list__item"],children:n.jsx(I,{index:i,state:e[h]})},h))})]})};export{J as SortingPage};