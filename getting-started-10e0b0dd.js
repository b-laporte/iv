import{d as t,f as e,n as a,j as o,L as n,w as s,M as i,k as d,h as r,q as c}from"./index-cae20ea6.js";import{M as g,m as u}from"./menu-layout-ad84deba.js";var m,f=new g;function v(t){m=t,t.add({"/getting-started/*":function(t,e){e.pageContent=C,f.categoryCode=j.categories[0].code,f.itemCode=j.categories[0].items[0].code}})}var p,l,h,j={categories:[{title:"todo",code:"base",items:[{title:"todo",code:"todo",content:(l=["class","md"],h=["id","under-construction"],t("todo",".../getting-started/getting-started.ts",p={},(function(t){var a=e(t,p,3);r(t,a,0,0,"div",1,0,l),r(t,a,1,1,"h1",1,0,h),c(t,a,0,2,2,0,"under construction...",0),d(t)})))}]}]};function y(t){m.navigate("/api/"+t.data)}var C=function(){var r={};return t("pageLayout",".../getting-started/getting-started.ts",r,(function(t){var c=e(t,r,2);a(t,c,0,0,0,o(t,0,u),0),n(t,c,0,0,"state",o(t,1,f)),n(t,c,0,0,"content",o(t,2,j)),s(t,c,1,0,"change",y),i(t,0),d(t)}))}();export{v as loadRoutes};