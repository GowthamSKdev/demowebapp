import{r as l,S as m,j as s}from"./index-I8GDrITg.js";const o=()=>{const{all_shoes:a,cartItems:r,removeFromCart:c}=l.useContext(m),n=Object.values(r).reduce((t,e)=>t+e,0),i=a.reduce((t,e)=>r[e.id]>0?t+e.new_price*r[e.id]:t,0);return s.jsxs("div",{className:"CartItems",children:[s.jsxs("div",{className:"cartitems-main-part",children:[s.jsx("p",{children:"Product"}),s.jsx("p",{children:"Quantity"}),s.jsx("p",{children:"Price"}),s.jsx("p",{children:"Remove"})]}),s.jsx("hr",{}),a.map(t=>{if(r[t.id]>0)return s.jsxs("div",{className:"cartitems-main-part cartitem-format",children:[s.jsxs("div",{className:"productDetails",children:[s.jsx("img",{src:t.image,alt:"",className:"carticon-producticon"}),s.jsxs("p",{children:["Name : ",t.name]}),s.jsxs("p",{children:["Price : $",t.new_price]})]}),s.jsx("button",{className:"cartitem-quantity btn",children:r[t.id]}),s.jsxs("p",{children:["$",t.new_price*r[t.id]]}),s.jsx("img",{src:"",alt:"",onClick:()=>{c()},className:"fa-solid fa-xmark"})]})}),s.jsx("hr",{}),s.jsxs("div",{className:"pay-container",children:[s.jsxs("p",{children:["Total Cart Item count : ",n]}),s.jsxs("p",{children:["Total Cart Price : $",i]}),s.jsxs("button",{type:"submit",className:"btn",children:[" Pay  $",i]})]})]})};export{o as default};
