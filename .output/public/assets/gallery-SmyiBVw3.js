import{ssr as s,ssrHydrationKey as l,ssrAttribute as o,escape as t,createComponent as a}from"solid-js/web";import i from"classnames";import{For as n}from"solid-js";import{P as m}from"./project.module-B5Zg89BM.js";const f="_gallery_ra65t_1",_="_item_ra65t_12",c={gallery:f,item:_};var g=["<div",">","</div>"],u=["<figure",">","</figure>"];function v(e){return s(g,l()+o("class",t(i(c.gallery,e.name&&`${e.name}__section`,e.class,{"section--no-padding":e.noPadding},"project__section col-12 col-sm-10 offset-sm-1 col-md-12 offset-md-0 col-xl-10 offset-xl-1"),!0),!1),t(a(n,{get each(){return e.images},children:r=>s(u,l()+o("class",t(c.item,!0),!1),t(a(m,{get alt(){return r.alt},get srcset(){return r.srcset}})))})))}export{v as G};