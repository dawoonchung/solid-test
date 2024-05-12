import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent, ssrStyle } from 'solid-js/web';
import m from 'classnames';
import { createContext, useContext, createSignal, onMount, onCleanup, createEffect, Show, on as on$1 } from 'solid-js';
import { f as fe$1, _ as _e, d as de, o as oe, m as me$1, u as ue } from './project.module.mjs';
import { A } from './cards.mjs';
import { i } from './external_link.mjs';
import { v } from './gallery.mjs';
import { P as P$1, b } from './title.mjs';
import { p, f } from './scroll_observer.mjs';
import * as $ from 'three';
import { Vector3, PerspectiveCamera, Vector2 } from 'three';
import De from 'bezier-easing';

const Be="_wrap_gekm5_1",Oe="_input_gekm5_6",Re="_toggle_gekm5_11",J={wrap:Be,input:Oe,toggle:Re};var Ee=["<label",'><input type="checkbox"',"><span","></span></label>"];function K(e){return ssr(Ee,ssrHydrationKey()+ssrAttribute("class",escape(J.wrap,!0),!1),ssrAttribute("checked",e.enabled,!0)+ssrAttribute("class",escape(J.input,!0),!1),ssrAttribute("class",escape(J.toggle,!0),!1))}var ze=["<canvas","></canvas>"];function Le(e){const{width:c,height:s}=useContext(p);return ssr(ze,ssrHydrationKey()+ssrAttribute("class",escape(m(e.class,"canvas"),!0),!1)+ssrAttribute("width",escape(c(),!0),!1)+ssrAttribute("height",escape(s(),!0),!1))}function Ne(){const{camera:e,renderer:c,scene:s,scrollArea:t,rAF:o}=useContext(P),{width:g,height:a}=useContext(p),d=useContext(f),[h,v]=createSignal(!1);let w;const f$1=()=>c().render(s,e);createEffect(()=>{c().setSize(g(),a());}),H(f$1),createEffect(on$1(d,()=>{const W=window.innerHeight,{top:b,height:D}=t.getBoundingClientRect();b<W&&b>-D?v(!0):v(!1);}));function T(){o.run(),w=requestAnimationFrame(T);}return createEffect(()=>{h()?T():cancelAnimationFrame(w),onCleanup(()=>cancelAnimationFrame(w));}),null}function Ve(){const e=new $.Scene;return e.fog=new $.FogExp2(2236962,.01),e}const P=createContext(),H=e=>{const{rAF:c}=useContext(P);createEffect(()=>{const{tasks:s}=c;s.push(e),onCleanup(()=>{s.splice(s.indexOf(e),1);});});};function he(e){const{width:c,height:s}=useContext(p),t=Je(c(),s()),o=Ve();let g,a={tasks:[],run:()=>{a.tasks.forEach(h=>{h();});}};const d={camera:t,renderer:()=>g,scene:o,rAF:a,scrollArea:e.viRef,stage:e.stage};return [createComponent(Le,{get class(){return e.class}}),createComponent(P.Provider,{value:d,get children(){return [e.children,createComponent(Ne,{})]}})]}function Xe(e,c,s,t){const o=new Vector3;return e.updateMatrixWorld(),o.setFromMatrixPosition(e.matrixWorld),o.project(c),o.x=s/2*(o.x+1),o.y=t/2*(-o.y+1),new Vector2(o.x,o.y)}function He(e,c,s,t=1){return new Vector3(e*Math.sin(c)*Math.cos(s)*t,e*Math.sin(c)*Math.sin(s)*t,e*Math.cos(c)*t)}function Y(e=1,c){const s=Math.random()*2*Math.PI,t=Math.random()*2-1,o=Math.random(),g=Math.acos(t),a=c||Math.cbrt(o);return He(a,g,s,e)}function Ue(e,c){const s=Math.random()*Math.PI*2,t=e*Math.sqrt(Math.random()),o=c*Math.random();return new Vector3(t*Math.cos(s),t*Math.sin(s),o)}function me(e,c){const s=new Date().getTime(),t=De(.645,.045,.355,1),o=Math.min((c-(e-s))/c,1);return t(o)}const ee=new Vector3(0,0,200),Ge=new Vector3(0,0,50),E=new Vector3(0,0,100),qe=[E,E,E,E,new Vector3(0,0,90),new Vector3(100,0,0),E],le=2e3;function Je(e,c){const s=e/c,t=new PerspectiveCamera(45,s,1,1e3);return t.position.z=ee.z,t}function we(){if(!useContext(P))return;const{camera:e}=useContext(P),{width:c,height:s}=useContext(p);createEffect(()=>{e.aspect=c()/s(),e.updateProjectionMatrix();});}function Ke(){if(we(),!useContext(P))return;const{camera:e,scrollArea:c}=useContext(P),s=useContext(f);return createEffect(on$1(s,()=>{const t=window.innerHeight,{top:o,height:g}=c.getBoundingClientRect(),a=t+g,d=ee.z-Ge.z;if(o<t&&o>-g){const h=(o-t)/a*d;e.position.z=ee.z+h;}})),null}function Ye(){we();const{camera:e,stage:c}=useContext(P);function s(a){const d=new Date().getTime(),h=d+le;return {position0:e.position.clone(),moveDistance:a.clone().sub(e.position),start:d,end:h,isAnimating:!0}}const[t,o]=createSignal({...s(E),isAnimating:!1});return createEffect(()=>{o(s(qe[c()]));}),H(()=>{const{position0:a,moveDistance:d,end:h,isAnimating:v}=t();if(!v)return;const w=me(h,le),f=d.clone().multiplyScalar(w);e.position.x=a.x+f.x,e.position.y=a.y+f.y,e.position.z=a.z+f.z,e.lookAt(new Vector3(0,0,0)),w>=1&&o({...t(),isAnimating:!1});}),null}const Ze="_spinner_1nep0_1",Qe="_spin_1nep0_1",et={spinner:Ze,spin:Qe};var tt=["<span","></span>"];function st(e){return ssr(tt,ssrHydrationKey()+ssrAttribute("class",escape(m(et.spinner,e.class),!0),!1))}const nt=3,ot=[1e4,1500,700],it=[110,30,20],rt=[30,20,15],at={mobile:[[new Vector3(50,-120,0),new Vector3(-60,0,-35),new Vector3(40,40,-60)],[new Vector3(80,-80,-20),new Vector3(35,0,-25),new Vector3(20,30,-35)],[new Vector3(150,-100,-70),new Vector3(130,0,-90),new Vector3(110,30,-110)],[new Vector3(30,0,-50),new Vector3(30,0,-50),new Vector3(30,0,-50)],[new Vector3(-30,0,-55),new Vector3(0,0,-35),new Vector3(20,0,-15)],[new Vector3(-20,0,-20),new Vector3(-20,0,-10),new Vector3(-20,0,0)],[new Vector3(150,-100,-70),new Vector3(130,0,-90),new Vector3(110,30,-110)]],default:[[new Vector3(50,-100,0),new Vector3(-60,0,-35),new Vector3(40,40,-60)],[new Vector3(80,-100,0),new Vector3(50,0,-20),new Vector3(30,30,-30)],[new Vector3(150,-100,-70),new Vector3(130,0,-90),new Vector3(110,30,-110)],[new Vector3(50,0,-50),new Vector3(50,0,-50),new Vector3(50,0,-50)],[new Vector3(30,0,-55),new Vector3(90,0,-35),new Vector3(50,0,-15)],[new Vector3(0,0,-55),new Vector3(0,0,-35),new Vector3(0,0,-15)],[new Vector3(150,-100,-70),new Vector3(130,0,-90),new Vector3(110,30,-110)]]};function ct(){const e={};for(const[c,s]of Object.entries(at)){const t={positions:[],data:[],spreadOut:[]};for(let o=0;o<nt;o+=1){const g=[],a=[];for(let d=0;d<s.length;d+=1){const h=[];for(let v=0;v<ot[o];v+=1){let w;if(d<3||d===6)w=Y(it[o]);else if(d===3){w=Y(40);const f=Y(40,3);a.push(f.x),a.push(f.y),a.push(f.z);}else d===4&&(w=Ue(rt[o],6));d!==5&&(h.push(w.x),h.push(w.y),h.push(w.z));}d===5?g.push(g[4]):g.push(new Float32Array(h));}t.spreadOut.push(new Float32Array(a)),t.data.push(g),t.positions=s;}e[c]=t;}return e}const lt="_spinner_hwh2n_1",pt={spinner:lt},se=createContext(()=>({}));function fe(e){const{breakpoint:c}=useContext(p),[s,t]=createSignal(null),[o,g]=createSignal(null);return onMount(()=>{s()||setTimeout(()=>{t(ct());});}),createEffect(()=>{s()&&g(c()==="xs"?s().mobile:s().default);}),createComponent(Show,{get when(){return s()},get fallback(){return createComponent(st,{get class(){return pt.spinner}})},get children(){return createComponent(se.Provider,{value:o,get children(){return e.children}})}})}const dt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%200%2064%2064'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2054.1%20(76490)%20-%20https://sketchapp.com%20--%3e%3ctitle%3eOval%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3ccircle%20fill='%23fff'%20id='Oval'%20cx='32'%20cy='32'%20r='32'%3e%3c/circle%3e%3c/svg%3e",gt="_popup_n6e8v_1",ut={popup:gt};var ht=["<div",' style="','">',"</div>"];const pe=1500,ve=new $.Vector3(Math.PI/4,3*Math.PI/4,0);function be(e){const[c,s]=createSignal(!1);let t;const o=new $.BufferGeometry,{scene:g}=useContext(P),a=useContext(se);return createEffect(()=>{if(!a())return;const h=a().positions[0][e],v=a().data[e][0],{x:w,y:f,z:T}=h,{x:W,y:b,z:D}=ve,u=new $.PointsMaterial({color:16777215,fog:!0,map:new $.TextureLoader().load(dt),transparent:!0,alphaTest:.1});o.setAttribute("position",new $.BufferAttribute(v,3)),o.attributes.position.setUsage($.DynamicDrawUsage),t=new $.Points(o,u),t.position.x=w,t.position.y=f,t.position.z=T,t.rotation.x=W,t.rotation.y=b,t.rotation.z=D,g.add(t),s(!0),onCleanup(()=>{t&&g.remove(t);});}),H(()=>{c()&&(t.rotation.z+=3e-4);}),{pointsRef:()=>t,geometry:o}}function Z(e){return onMount(()=>{be(e.pointSetIndex);}),null}function Q(e){const{camera:c,stage:s}=useContext(P),t=useContext(se),{width:o,height:g}=useContext(p),{pointsRef:a,geometry:d}=be(e.pointSetIndex),[h,v]=createSignal(!1),[w,f]=createSignal({opacity:0}),T=t()?.positions[0][e.pointSetIndex],W=u=>{if(!s)throw new Error("No stage accessor found. Make sure you initialise THREE context with stage signal.");const A=e.isActive?t().data[e.pointSetIndex][s()]:t().spreadOut[e.pointSetIndex],k=d.getAttribute("position"),y=new Date().getTime(),S=y+pe,F=a()?a().position.clone():T.clone(),M=t().positions[s()][e.pointSetIndex],R=k.array,U=R.slice(0),B=[],z=(a()?.material).opacity,L=e.isActive?1:.1,ne=new $.Vector3(a()?.rotation.x,a()?.rotation.y,a()?.rotation.z),G=u||ve;return R.forEach((oe,q)=>{B.push(A[q]-oe);}),{position0:F,position1:M.clone().sub(F),vertices0:U,vertices1:new Float32Array(B),opacity0:z,opacity1:L,rotation0:ne,rotation1:G,start:y,end:S,isAnimating:!0}};let b=null;return createEffect(()=>{if(!t()||!s)return;let u;s()!==1&&v(!1),s()>=4&&(u=new $.Vector3(0,0,0)),b=W(u);}),createEffect(()=>{if(!h()||!a()||e.disablePopup){f(y=>({...y,opacity:0}));return}const u=Xe(a(),c,o(),g());let A,k;u.x>o()-150?A=o()-150:u.x<0?A=150:{x:A}=u,u.y>g()?k=g()-150:u.y<0?k=150:{y:k}=u,f(y=>({...y,left:`${A}px`,top:`${k}px`,opacity:1}));}),H(()=>{if(!b||!b.isAnimating||!a())return;const{position0:u,position1:A,vertices0:k,vertices1:y,opacity0:S,opacity1:F,rotation0:M,rotation1:R,end:U}=b,B=me(U,pe),z=A.clone().multiplyScalar(B),L=[];y.forEach((_e,xe)=>{const Se=_e*B,ke=k[xe];L.push(ke+Se);}),a().position.x=u.x+z.x,a().position.y=u.y+z.y,a().position.z=u.z+z.z;const G=d.getAttribute("position").clone().set(new Float32Array(L));d.setAttribute("position",G),d.attributes.position.needsUpdate=!0;const q=(F-S)*B;a().material.opacity=S+q;const ye=R.clone().sub(M).multiplyScalar(B),ie=M.clone().add(ye);a().rotation.x=ie.x,a().rotation.y=ie.y,B>=1&&(b={...b,isAnimating:!1},s()===1&&v(!0));}),ssr(ht,ssrHydrationKey()+ssrAttribute("class",escape(ut.popup,!0),!1),ssrStyle(w()),escape(e.popupText))}const mt="/_server/assets/ideation-process-lg-COjN3Waf.jpg",wt="/_server/assets/ideation-process-lg-Cw6Imty8.webp",ft="/_server/assets/ideation-process-md-D_GnXJx8.jpg",vt="/_server/assets/ideation-process-md-Cnwk9hdE.webp",bt="/_server/assets/ideation-process-sm-Bb_Px0Wz.jpg",yt="/_server/assets/ideation-process-sm-DzIwQg0d.webp",_t="/_server/assets/ideation-process-xl-KRY36lMx.jpg",xt="/_server/assets/ideation-process-xl-54LvSaKA.webp",St="/_server/assets/ideation-process-xs-Bbm4WPn3.jpg",kt="/_server/assets/ideation-process-xs-DW-fry78.webp",It="/_server/assets/ideation-process-t3DtQZ-I.jpg",$t="/_server/assets/ideation-process-r8kfmqUL.webp",At={xs:St,sm:bt,md:ft,lg:mt,xl:_t,default:It},jt={xs:kt,sm:yt,md:vt,lg:wt,xl:xt,default:$t},Ct={jpg:At,webp:jt},Pt="/_server/assets/scenario-1-lg-DKqUOH78.jpg",Ft="/_server/assets/scenario-1-lg-COSXkqCU.webp",Mt="/_server/assets/scenario-1-md-CWklRUTG.jpg",Tt="/_server/assets/scenario-1-md-BrDMy1n7.webp",Wt="/_server/assets/scenario-1-sm-DSEc51hp.jpg",Dt="/_server/assets/scenario-1-sm-gubkIrKT.webp",Bt="/_server/assets/scenario-1-xl-BWcB3iEx.jpg",Ot="/_server/assets/scenario-1-xl-CVIaT5tp.webp",Rt="/_server/assets/scenario-1-xs-BiHu06WK.jpg",Et="/_server/assets/scenario-1-xs-BLHr-oca.webp",zt="/_server/assets/scenario-1-ACJHiBEg.jpg",Lt="/_server/assets/scenario-1-BniVB34A.webp",Nt={xs:Rt,sm:Wt,md:Mt,lg:Pt,xl:Bt,default:zt},Vt={xs:Et,sm:Dt,md:Tt,lg:Ft,xl:Ot,default:Lt},Xt={jpg:Nt,webp:Vt},Ht="/_server/assets/scenario-2-lg-nxkmAU2W.jpg",Ut="/_server/assets/scenario-2-lg-lnabbKpm.webp",Gt="/_server/assets/scenario-2-md-B9AxVBw4.jpg",qt="/_server/assets/scenario-2-md-CnpaTFyA.webp",Jt="/_server/assets/scenario-2-sm-B_YTdguA.jpg",Kt="/_server/assets/scenario-2-sm-htwYrKnm.webp",Yt="/_server/assets/scenario-2-xl-FgkwJPFc.jpg",Zt="/_server/assets/scenario-2-xl-B2FAuJR_.webp",Qt="/_server/assets/scenario-2-xs-Ehwekpsx.jpg",es="/_server/assets/scenario-2-xs-H3vl0zmh.webp",ts="/_server/assets/scenario-2-0oQaCBec.jpg",ss="/_server/assets/scenario-2-CLNXJOhV.webp",ns={xs:Qt,sm:Jt,md:Gt,lg:Ht,xl:Yt,default:ts},os={xs:es,sm:Kt,md:qt,lg:Ut,xl:Zt,default:ss},is={jpg:ns,webp:os},rs="/_server/assets/scenario-3-lg-SXfwXYOV.jpg",as="/_server/assets/scenario-3-lg-BzjST8gd.webp",cs="/_server/assets/scenario-3-md-CpvBAmDM.jpg",ls="/_server/assets/scenario-3-md-WPVIqNq6.webp",ps="/_server/assets/scenario-3-sm-BcIzYOHN.jpg",ds="/_server/assets/scenario-3-sm-N7LVeD00.webp",gs="/_server/assets/scenario-3-xl-Y49W2wLf.jpg",us="/_server/assets/scenario-3-xl-B54hp5SF.webp",hs="/_server/assets/scenario-3-xs-pGBxEMXH.jpg",ms="/_server/assets/scenario-3-xs-B3VJEfqz.webp",ws="/_server/assets/scenario-3-CyXE6G_T.jpg",fs="/_server/assets/scenario-3-D9v1RzGv.webp",vs={xs:hs,sm:ps,md:cs,lg:rs,xl:gs,default:ws},bs={xs:ms,sm:ds,md:ls,lg:as,xl:us,default:fs},ys={jpg:vs,webp:bs},_s="/_server/assets/scenario-4-lg-CBCpaRMu.jpg",xs="/_server/assets/scenario-4-lg-BB5eO-09.webp",Ss="/_server/assets/scenario-4-md-Bf9dmPkr.jpg",ks="/_server/assets/scenario-4-md-ph0C8NmU.webp",Is="/_server/assets/scenario-4-sm-BHlFrh8w.jpg",$s="/_server/assets/scenario-4-sm-DWADzoBU.webp",As="/_server/assets/scenario-4-xl-BU-_VuHS.jpg",js="/_server/assets/scenario-4-xl-B2QrCgiP.webp",Cs="/_server/assets/scenario-4-xs-H843F37i.jpg",Ps="/_server/assets/scenario-4-xs-B1VqBBU8.webp",Fs="/_server/assets/scenario-4-Djfnq_rE.jpg",Ms="/_server/assets/scenario-4-BuoA9ESb.webp",Ts={xs:Cs,sm:Is,md:Ss,lg:_s,xl:As,default:Fs},Ws={xs:Ps,sm:$s,md:ks,lg:xs,xl:js,default:Ms},Ds={jpg:Ts,webp:Ws},Bs="/_server/assets/scenario-5-lg-DVzyAbaO.jpg",Os="/_server/assets/scenario-5-lg-BDUV1Fgd.webp",Rs="/_server/assets/scenario-5-md-DfiBCeS5.jpg",Es="/_server/assets/scenario-5-md-DLGQgPly.webp",zs="/_server/assets/scenario-5-sm-DJYumDPG.jpg",Ls="/_server/assets/scenario-5-sm-Bm8AL5Df.webp",Ns="/_server/assets/scenario-5-xl-ZRwwenD7.jpg",Vs="/_server/assets/scenario-5-xl-Do7didR0.webp",Xs="/_server/assets/scenario-5-xs-BiaIivxh.jpg",Hs="/_server/assets/scenario-5-xs-CiGZKrVt.webp",Us="/_server/assets/scenario-5-Ce7xtJEL.jpg",Gs="/_server/assets/scenario-5-BmB1WsXg.webp",qs={xs:Xs,sm:zs,md:Rs,lg:Bs,xl:Ns,default:Us},Js={xs:Hs,sm:Ls,md:Es,lg:Os,xl:Vs,default:Gs},Ks={jpg:qs,webp:Js},Ys="/_server/assets/scenario-6-lg-B-gSch8r.jpg",Zs="/_server/assets/scenario-6-lg-CI9an6Hf.webp",Qs="/_server/assets/scenario-6-md-CInblE_L.jpg",en="/_server/assets/scenario-6-md-CIF9smUq.webp",tn="/_server/assets/scenario-6-sm-BGjZooiB.jpg",sn="/_server/assets/scenario-6-sm-DU0Nz8Wi.webp",nn="/_server/assets/scenario-6-xl-8bLUaqrC.jpg",on="/_server/assets/scenario-6-xl-D3yLaRvP.webp",rn="/_server/assets/scenario-6-xs-OrB1yd1_.jpg",an="/_server/assets/scenario-6-xs-MBUJbM7N.webp",cn="/_server/assets/scenario-6-mIZNyw2V.jpg",ln="/_server/assets/scenario-6-B8GcqKNf.webp",pn={xs:rn,sm:tn,md:Qs,lg:Ys,xl:nn,default:cn},dn={xs:an,sm:sn,md:en,lg:Zs,xl:on,default:ln},gn={jpg:pn,webp:dn},un="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.4,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20453.5%20255.1'%20style='enable-background:new%200%200%20453.5%20255.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:none;stroke:%23FFFFFF;}%20.st2{fill:none;stroke:%23FFFFFF;stroke-linecap:round;stroke-linejoin:round;}%20.st3{fill:none;stroke:%23FFFFFF;stroke-linejoin:round;}%20.st4{fill:none;stroke:%23FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:11.594,11.594;}%20%3c/style%3e%3ctitle%3ePage%201%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%3e%3cg%20id='Artboard-Copy-6'%20transform='translate(-83.000000,%20-509.000000)'%3e%3cg%20id='Page-1'%20transform='translate(83.000000,%20510.000000)'%3e%3cpolygon%20id='Fill-1'%20class='st0'%20points='386.7,53.3%20386.7,192%20438.9,216%20438.9,29.4%20'/%3e%3cg%20id='Group-28'%3e%3cpolygon%20id='Stroke-2'%20class='st1'%20points='438.7,216.2%20387.6,192.2%20387.6,53.3%20438.7,29.4%20'/%3e%3cpath%20id='Stroke-4'%20class='st2'%20d='M68.4,145.4c-7.2-3.2-12.2-10.4-12.2-18.7c0-8.4,5-15.6,12.2-18.7'/%3e%3cpath%20id='Stroke-6'%20class='st2'%20d='M198.1,126.7c0,40.5-10.9,73.3-24.3,73.3c-13.4,0-24.3-32.8-24.3-73.3s10.9-73.3,24.3-73.3%20C187.2,53.3,198.1,86.2,198.1,126.7z'/%3e%3cpath%20id='Stroke-8'%20class='st2'%20d='M318.8,126.7c0,55.7-5.8,100.8-12.9,100.8c-7.1,0-12.9-45.1-12.9-100.8S298.9,25.9,306,25.9%20C313.1,25.9,318.8,71,318.8,126.7z'/%3e%3cpath%20id='Stroke-10'%20class='st2'%20d='M263,81.7h-38.6c3.8,13.6,5.9,28.8,5.9,44.9c0,16.1-2.1,31.4-5.9,44.9H263%20c-3.8-13.6-5.9-28.8-5.9-44.9C257.1,110.6,259.2,95.3,263,81.7z'/%3e%3cpolyline%20id='Stroke-12'%20class='st2'%20points='68.1,160.9%2013.7,126.7%2068.1,92.5%20'/%3e%3cpath%20id='Stroke-14'%20class='st3'%20d='M62.2,95.2c4.9,5.2,8.4,17.3,8.4,31.5c0,13.9-3.3,25.8-8.1,31.2'/%3e%3cpath%20id='Stroke-16'%20class='st2'%20d='M70.6,126.7l9.7-1.8'/%3e%3cpolyline%20id='Stroke-18'%20class='st4'%20points='99.1,121.4%20149.5,112%20197.3,108.9%20229.6,110.3%20258.5,104.6%20294,89.1%20317.6,83.4%20389.7,83.4%20'/%3e%3cpath%20id='Stroke-20'%20class='st2'%20d='M399.3,83.4h9.9'/%3e%3cpath%20id='Stroke-22'%20class='st2'%20d='M70.6,126.7l9.7,1.8'/%3e%3cpolyline%20id='Stroke-24'%20class='st4'%20points='99.1,132%20149.5,141.4%20197.3,144.5%20229.6,143.1%20258.5,148.8%20294,164.2%20317.6,170%20389.7,170%20'/%3e%3cpath%20id='Stroke-26'%20class='st2'%20d='M399.3,170h9.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",hn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.4,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20453.5%20255.1'%20style='enable-background:new%200%200%20453.5%20255.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill-rule:evenodd;clip-rule:evenodd;fill:%23FEFEFE;}%20.st1{fill:none;stroke:%23231F20;stroke-linecap:round;stroke-linejoin:round;}%20.st2{fill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;stroke:%23020303;}%20.st3{fill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;}%20%3c/style%3e%3ctitle%3ePage%201%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%3e%3cg%20id='Artboard-Copy-6'%20transform='translate(-85.000000,%20-1399.000000)'%3e%3cg%20id='Page-1'%20transform='translate(86.000000,%201399.000000)'%3e%3cg%20id='Group-28'%20transform='translate(322.924779,%2030.473684)'%3e%3cpolygon%20id='Fill-1'%20class='st0'%20points='102.4,128.5%2052.9,99.5%203.1,128.5%2052.6,157.4%20'/%3e%3cpolygon%20id='Stroke-3'%20class='st1'%20points='102.4,128.5%2052.9,99.5%203.1,128.5%2052.6,157.4%20'/%3e%3cpolygon%20id='Fill-6'%20class='st0'%20points='39.9,36.3%20-9.9,65.3%203,128.5%2052.8,99.5%20'/%3e%3cpolygon%20id='Stroke-8'%20class='st1'%20points='39.9,36.3%20-9.9,65.3%203,128.5%2052.8,99.5%20'/%3e%3cpolygon%20id='Fill-11'%20class='st0'%20points='65.7,36.7%20115.4,65.7%20102.5,128.9%2052.8,99.9%20'/%3e%3cpolygon%20id='Stroke-13'%20class='st1'%20points='65.7,36.7%20115.4,65.7%20102.5,128.9%2052.8,99.9%20'/%3e%3cpolygon%20id='Fill-16'%20class='st0'%20points='102.4,128.3%20115,80.2%2065.3,109.2%2052.7,157.3%20'/%3e%3cpolygon%20id='Stroke-18'%20class='st1'%20points='102.4,128.3%20115,80.2%2065.3,109.2%2052.7,157.3%20'/%3e%3cpolygon%20id='Fill-21'%20class='st0'%20points='2.8,128.3%20-9.8,80.2%2040,109.2%2052.7,157.3%20'/%3e%3cpolygon%20id='Stroke-23'%20class='st1'%20points='2.8,128.3%20-9.8,80.2%2040,109.2%2052.7,157.3%20'/%3e%3c/g%3e%3cg%20id='Group-4'%3e%3cpolygon%20id='Stroke-26'%20class='st2'%20points='48.9,109.6%2013.2,73.8%2048.9,38%2084.8,73.8%20'/%3e%3cpolygon%20id='Stroke-29'%20class='st2'%20points='84.8,145.5%2048.9,109.6%2084.8,73.8%20120.6,109.6%20'/%3e%3cpolygon%20id='Stroke-30'%20class='st2'%20points='120.6,109.6%2084.8,73.8%20120.6,38%20156.4,73.8%20'/%3e%3cpolygon%20id='Stroke-32'%20class='st2'%20points='120.6,181.3%2084.8,145.5%20120.6,109.6%20156.4,145.5%20'/%3e%3cpolygon%20id='Stroke-33'%20class='st2'%20points='84.8,217.1%2048.9,181.3%2084.8,145.5%20120.6,181.3%20'/%3e%3cpolygon%20id='Stroke-35'%20class='st2'%20points='156.4,217.1%20120.6,181.3%20156.4,145.5%20192.3,181.3%20'/%3e%3c/g%3e%3cpath%20id='Combined-Shape'%20class='st3'%20d='M254.2,134.3v9.3l18.9-16l-18.9-16v9.3h-30v13.4h30V134.3z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",mn="/_server/assets/driver-3-D-NZZ1-l.svg",wn="/_server/assets/driver-4-e2O6Wja2.svg",fn="_canvas_1ndsk_1",vn="_intro_1ndsk_6",bn="_noiseCancel_1ndsk_7",yn="_clustering_1ndsk_8",_n="_perspective_1ndsk_9",xn="_positioner_1ndsk_13",j={canvas:fn,intro:vn,noiseCancel:bn,clustering:yn,perspective:_n,positioner:xn};var Sn=["<div","><h2>Introduction</h2><p>More and more companies are investing into gathering various data, as access to sensors and cloud services has never been easier. But what are they going to do with the flooding amount of data?</p><p>Our core objective was to find out ways to<em> make&nbsp;sense </em>of data with rich visual representation.</p></div>"],kn=["<h2",">Challenges</h2>"],In=["<p",">Not all projects are planned ideally – in fact, it is harder to find a flawless setup. But this project was at another level, leaving us difficult challenges before we could even start. These are key challenges we had to face:</p>"],$n=["<h2",">Approach</h2>"],An=["<p",">We did not have time to play ping-pong with our client. Instead, we decided to work on top of the challenges to convince the client with our approach.</p>"],jn=["<h3",">Seeking for use cases</h3>"],Cn=["<p",">Our major challenge was to find <em>practical</em> use cases for complex 3d data visualisation. Fortunately, we learnt that visual data mining is indeed a growing field with the help of artificial intelligence. One good example we found was <!--$-->","<!--/-->.</p>"],Pn=["<h3",">Extracting design drivers</h3>"],Fn=["<p",">Based on our findings on use cases, we moved on to explore ways to navigate through data. Our learnings and ideation results were compiled into design drivers.</p>"],Mn=["<h3",">Scenario generation</h3>"],Tn=["<p",">After defining and selecting our design drivers, we started to narrow down our potential target user to build a complete use case scenario for the visualisation.</p>"],Wn=["<h2",">Outcome</h2>"],Dn=["<p",">During the ideation phase, it became clear that a working prototype is needed to show how interactions with complex data visualisation is done. I worked closely with visual designer and interaction designer to prioritise features to meet the time constraint.</p>"],Bn=["<p",">Based on the generated scenario and key design drivers, I created a fully working prototype to demonstrate how our concepts are achieved with live interaction. Below are some of the concepts we delivered with the prototype.</p>"],On=["<div","><h3>Noise Cancelling</h3><p>Errant data can be switched on or off to allow for a pure focus experience or a noisier view to explore new connections.</p><p>Try toggling data below:<br><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></p></div>"],Rn=["<div","><h3>Clustering and Alignment</h3><p>The easiest way of visualising relevance of data is through clustering them. With the help of latest technologies such as machine learning, this process can be done automatically to discover new patterns.</p></div>"],En=["<div","><h3>Different Points of View</h3><p>A simple and one of the most common methods to view data in different ways. By combining recipes generated from latest technologies, this simple approach can unveil unexpected insights.</p></div>"],zn=["<h2",">Learnings</h2>"],Ln=["<p",">This was my first project in which I took role completely as a Creative Technologist. On top of the challenges we had for the project, it was a very good opportunity to define my role within the studio as well as to showcase what tangible output we could produce together.</p>"],Nn=["<h3",">Pushing our beliefs to the client</h3>"],Vn=["<p",">We had to face a client with very strong opinions towards the visual design output. We were constantly challenged to convince our client with the need of proper user research and use case scenario. We often did not have time to argue with the client, but instead we learnt to move forward believing in our approach to fight back later by showing the result.</p>"],Xn=["<h3",">Bridging the creativity and technology</h3>"],Hn=["<p",">Just as the title states, my primary role is to establish a close connection between design and technology within the team. Coming from a design background, I actively participated in design process not only to adjust technical capabilities, but also to expand our design ideas based on technical knowledge.</p>"],Un=["<h3",">Extending Fjord&apos;s capabilities in prototyping</h3>"],Gn=["<p",">My personal aim in this project was to demonstrate my capabilities in programming to the studio. I pushed the team to create a fully working visualisation rather than a click dummy. I have successfully delivered a high-fidelity prototype within 4-week period, and designers were convinced we could escalate our deliverables with next-level tangible outputs.</p>"],qn=["<div",' class="scroll-area"><header',">",'</header><main class="visual-intelligence__content project__main"><div class="container-fluid"><!--$-->',"<!--/--><!--$-->",'<!--/--></div><div class="container-fluid">','</div><div class="container-fluid"><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->",'<!--/--></div><div class="container-fluid"><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->",'<!--/--></div><div class="container-fluid"><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></div></main></div>"],Jn=["<p",">Our client was a massive corporate with nearly 150k employees. The only information provided to us was that we were supposed to target internal employees. To make things worse, we were not able to interview any of them.</p>"],Kn=["<p",">We were not provided with any sample data we could ideate on. The official reason was confidentiality – but it was very clear to us that it was simply not defined. We were literally asked to deliver data visualisation without any data.</p>"],Yn=["<p",">The client already had a very strong idea on the tool&apos;s visual language. This was not fully aligned with our desires to produce <q>usable</q> visualisation. Rather, he wanted more visually pleasing one, putting aside the importance of use cases.</p>"],Zn=["<p",">Through the use of shadows, filters and lights we are able to expose new insights. Overlaps will show information in different ways for different perspectives. This is also about seeing the same thing in a totally different way. It&apos;s something very common, with a different perspective, e.g. infrared posters.</p>"],Qn=["<p",">Presented data changes based on angle of view, providing different ways to interpret it. Different angles can be achieved easily by changing the camera view or rotating the objects, with different number of viewports as well.</p>"],eo=["<p",">This concept will take the user on a data journey. It uses storytelling techniques to enable users to scroll through time, e.g. 5-year time-lapse. We explore the idea of presenting a snapshot in time – slowing everything down so it is understandable.</p>"],to=["<p",">We will explore the use of relativity to show connections, relationships (of different solutions). Example properties: size, shape, colour, fluidity, vibration, depth, speed, etc.</p>"];function mo(){const{breakpoint:e}=useContext(p),[c,s]=createSignal(0),[t,o]=createSignal([!0,!0,!0]);let g,a,d,h,v$1,w,f,T,W;const b$1=()=>[a,d,h,v$1,w,f,T],D=S=>{o(F=>F.map((M,R)=>R===S?!M:M));},[u,A$1]=createSignal(!1),k=new IntersectionObserver(S=>{const F=S.find(M=>M.isIntersecting);F&&s(b$1().indexOf(F.target));},{rootMargin:"-40% 0%"});let y;return onMount(()=>{document.body.classList.add("visual-intelligence");for(const S of b$1())k.observe(S);}),onCleanup(()=>{k.disconnect(),y?.disconnect(),document.body.classList.remove("visual-intelligence");}),createEffect(()=>{c()===3?o([!1,!0,!1]):o([!0,!0,!0]);}),createEffect(()=>{e()==="xs"?(y||(y=new IntersectionObserver(([{isIntersecting:S}])=>{A$1(S);},{rootMargin:"-40% 0%"})),y.observe(W)):y?.unobserve(W);}),ssr(qn,ssrHydrationKey(),ssrAttribute("class",escape(m(fe$1.hero,fe$1.sticky),!0),!1),escape(createComponent(he,{get class(){return j.canvas},viRef:g,stage:c,get children(){return createComponent(fe,{get children(){return [createComponent(Ye,{}),createComponent(Q,{pointSetIndex:0,popupText:"Unidentified machine",get isActive(){return t()[0]},get disablePopup(){return u()}}),createComponent(Q,{pointSetIndex:1,popupText:"Unrecognised user",get isActive(){return t()[1]},get disablePopup(){return u()}}),createComponent(Q,{pointSetIndex:2,popupText:"Unknown data",get isActive(){return t()[2]},get disablePopup(){return u()}})]}})}})),escape(createComponent(P$1,{get headline(){return "How can we suggest ways to utilise complex data with limited information about users?"},title:"Visual intelligence: use case scenarios for massive unknown data"})),escape(createComponent(_e,{agency:"Fjord",agencyLink:"https://www.fjordnet.com/",overview:`
              I explored and created ways to utilise a complex data
              visualisation. Moreover, I built working prototype to demonstrate
              the idea to convince the client.
            `,roles:["Technical research","Story telling","Concept generation","High-fidelity prototyping"],year:"2017-2018"})),escape(createComponent(b,{align:"left",fullHeight:!0,get class(){return j.intro},get children(){return ssr(Sn,ssrHydrationKey()+ssrAttribute("class",escape(j.positioner,!0),!1))}})),escape(createComponent(de,{})),escape(createComponent(oe,{children:"...but we've never had any project without any user!"})),escape(createComponent(b,{noPadding:!0,get children(){return [ssr(kn,ssrHydrationKey()),ssr(In,ssrHydrationKey())]}})),escape(createComponent(A,{get cards(){return [{title:"Undefined target user",children:ssr(Jn,ssrHydrationKey())},{title:"No access to any data",children:ssr(Kn,ssrHydrationKey())},{title:"Pre-defined visuals",children:ssr(Yn,ssrHydrationKey())}]},col:3})),escape(createComponent(de,{})),escape(createComponent(oe,{children:"Cool visualisation without use case is... literally useless!"})),escape(createComponent(b,{noPadding:!0,get children(){return [ssr($n,ssrHydrationKey()),ssr(An,ssrHydrationKey()),ssr(jn,ssrHydrationKey()),ssr(Cn,ssrHydrationKey(),escape(createComponent(i,{href:"https://arxiv.org/pdf/1611.04558.pdf",children:"the use of Google Translate AI's visual representations for identifying connections between different languages"}))),ssr(Pn,ssrHydrationKey()),ssr(Fn,ssrHydrationKey())]}})),escape(createComponent(A,{col:2,get cards(){return [{title:"View data through lenses",image:un,alt:"Design Driver 1",children:ssr(Zn,ssrHydrationKey())},{title:"Multi-faceted views",image:hn,alt:"Design Driver 2",children:ssr(Qn,ssrHydrationKey())},{title:"Visualising time and data",image:mn,alt:"Design Driver 3",children:ssr(eo,ssrHydrationKey())},{title:"Cluster forms identity",image:wn,alt:"Design Driver 4",children:ssr(to,ssrHydrationKey())}]},noPadding:!0})),escape(createComponent(b,{noPadding:!0,get children(){return [ssr(Mn,ssrHydrationKey()),ssr(Tn,ssrHydrationKey())]}})),escape(createComponent(v,{images:[{srcset:Xt,alt:"Scenario 1"},{srcset:is,alt:"Scenario 2"},{srcset:ys,alt:"Scenario 3"},{srcset:Ds,alt:"Scenario 4"},{srcset:Ks,alt:"Scenario 5"},{srcset:gn,alt:"Scenario 6"}]})),escape(createComponent(de,{})),escape(createComponent(b,{get children(){return [ssr(Wn,ssrHydrationKey()),ssr(Dn,ssrHydrationKey()),ssr(Bn,ssrHydrationKey())]}})),escape(createComponent(b,{align:"left",fullHeight:!0,get class(){return j.noiseCancel},get children(){return ssr(On,ssrHydrationKey()+ssrAttribute("class",escape(j.positioner,!0),!1),escape(createComponent(K,{get enabled(){return t()[0]},handler:()=>{D(0);}})),escape(createComponent(K,{get enabled(){return t()[1]},handler:()=>{D(1);}})),escape(createComponent(K,{get enabled(){return t()[2]},handler:()=>{D(2);}})))}})),escape(createComponent(b,{align:"left",fullHeight:!0,get class(){return j.clustering},get children(){return ssr(Rn,ssrHydrationKey()+ssrAttribute("class",escape(j.positioner,!0),!1))}})),escape(createComponent(b,{align:"left",fullHeight:!0,get class(){return j.perspective},get children(){return ssr(En,ssrHydrationKey()+ssrAttribute("class",escape(j.positioner,!0),!1))}})),escape(createComponent(de,{})),escape(createComponent(b,{noPadding:!0,get children(){return [ssr(zn,ssrHydrationKey()),ssr(Ln,ssrHydrationKey())]}})),escape(createComponent(b,{noPadding:!0,get children(){return [ssr(Nn,ssrHydrationKey()),ssr(Vn,ssrHydrationKey())]}})),escape(createComponent(me$1,{alt:"Collaborating with an interaction designer.",srcset:Ct})),escape(createComponent(b,{get children(){return [ssr(Xn,ssrHydrationKey()),ssr(Hn,ssrHydrationKey()),ssr(Un,ssrHydrationKey()),ssr(Gn,ssrHydrationKey())]}})))}function wo(e){return createComponent(he,{get class(){return m(j.canvas,e.class,ue.coverElement)},get viRef(){return e.parentContainer},get children(){return createComponent(fe,{get children(){return [createComponent(Ke,{}),createComponent(Z,{pointSetIndex:0}),createComponent(Z,{pointSetIndex:1}),createComponent(Z,{pointSetIndex:2})]}})}})}

const visualIntelligence = /*#__PURE__*/Object.freeze({
            __proto__: null,
            default: mo
});

export { visualIntelligence as v, wo as w };
//# sourceMappingURL=visual-intelligence.mjs.map