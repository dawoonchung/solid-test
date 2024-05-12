import { createComponent } from 'solid-js/web';
import { createContext, createSignal, onMount, onCleanup } from 'solid-js';

const b=new Map([["xs",0],["sm",576],["md",1024],["lg",1200],["xl",1440]]),l=t=>{let e="xs";return b.forEach((i,n)=>{t>i&&(e=n);}),e},g={width:()=>document.body.clientWidth,height:()=>window.innerHeight,breakpoint:()=>l(window.innerWidth)},p=createContext(g);function W(t){const[e,i]=createSignal(document.body.clientWidth),[n,o]=createSignal(window.innerHeight),[u,v]=createSignal(l(window.innerWidth));let r;const s=()=>{r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{i(document.body.clientWidth),o(window.innerHeight),v(l(window.innerWidth));});};return onMount(()=>{addEventListener("resize",s),s();}),onCleanup(()=>{r&&cancelAnimationFrame(r),removeEventListener("resize",s);}),createComponent(p.Provider,{value:{width:e,height:n,breakpoint:u},get children(){return t.children}})}const w=window.scrollY,f=createContext(()=>w);function z(t){const[e,i]=createSignal(w),n=()=>{let o;o&&cancelAnimationFrame(o),o=requestAnimationFrame(()=>{i(window.scrollY);});};return onMount(()=>{addEventListener("scroll",n);}),onCleanup(()=>{removeEventListener("scroll",n);}),createComponent(f.Provider,{value:e,get children(){return t.children}})}

export { W, f, p, z };
//# sourceMappingURL=scroll_observer.mjs.map
