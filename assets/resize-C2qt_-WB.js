import{T as f,q as p,u as e,d as h,y as R,k as b}from"./index-D1153-67.js";import{d as v,B as x,U as N,M as I}from"./download-BT9AGL2B.js";import{H as L}from"./Helmet-BA2uRznI.js";import{B as u}from"./breadcrumb-VPTBzqTN.js";import{F as w}from"./figure-image-DB4zF1zb.js";function U(c,a,t){const n=new Image,i=(100-a)/100;n.src=URL.createObjectURL(c),n.onload=function(){URL.revokeObjectURL(n.src);const[s,o]=[n.width*i,n.height*i],r=document.createElement("canvas"),g=r.getContext("2d");r.width=s,r.height=o,g.drawImage(n,0,0,s,o);const m=r.toDataURL("image/webp");t({height:o,src:m,width:s})}}function z({level:c,originalImage:a,resizedImage:t,setLevel:n}){const i=f(()=>({original:`${parseInt(a.width)} x ${parseInt(a.height)} px`,resized:`${parseInt(t.width)} x ${parseInt(t.height)} px`}),[a,t]),s=p(r=>n(r.currentTarget.value),[c]),o=p(()=>{v(t.src,a.name,a.type)},[a,t]);return e(x,{downloadImage:o,icon:"box-arrow-in-down-left",id:"resizeModal",title:"Resize Image",children:e("div",{className:"g-3 row",children:[e("div",{className:"col-lg-6",children:e(w,{alt:"Original image",source:a.src,children:["Original dimension:",e("br",{}),e("strong",{className:"text-danger",children:i.original})]})}),e("div",{className:"col-lg-6",children:e(w,{alt:"Resized image",source:t.src,children:["Resized dimension:",e("br",{}),e("strong",{className:"text-success",children:i.resized})]})}),e("div",{className:"col-12",children:[e("label",{className:"form-label",htmlFor:"percentage",children:"Resizing Level"}),e("input",{className:"form-range",max:100,min:0,onChange:s,type:"range",value:c}),e("div",{className:"input-group w-fit",children:[e("input",{className:"form-control",max:100,min:0,onChange:s,type:"number",value:c}),e("span",{className:"input-group-text",children:e("i",{className:"bi bi-percent"})})]})]})]})})}function F(){const[c,a]=h(null),[t,n]=h(0),[i,s]=h({}),[o,r]=h({});R(()=>{i.src&&U(c,t,r)},[t,i]);const g=m=>{I.getOrCreateInstance("#resizeModal").show();const l=m.currentTarget.files[0];a(l);const d=new Image;d.src=URL.createObjectURL(l),d.onload=function(){URL.revokeObjectURL(d.src),l.height=d.height,l.src=d.src,l.width=d.width,s(l)},m.currentTarget.value=null,n(70)};return e(b,{children:[e(L,{title:"Resize Image"}),e(u,{children:[e(u.Item,{url:"/",children:[e("i",{className:"bi bi-house"})," Home"]}),e(u.Item,{active:!0,children:[e("i",{className:"bi bi-box-arrow-in-down-left"})," Resize Image"]})]}),e(N,{title:"Resize Image",uploadImage:g}),e(z,{level:t,originalImage:i,resizedImage:o,setLevel:n})]})}export{F as default};
