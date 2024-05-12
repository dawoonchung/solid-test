const g={context:void 0,registry:void 0};function M(e){g.context=e}const ve=(e,t)=>e===t,z=Symbol("solid-proxy"),Ve=Symbol("solid-track"),Z={equals:ve};let H=null,Oe=$e;const v=1,X=2,Ee={owned:null,cleanups:null,context:null,owner:null},re={};var h=null;let c=null,Ie=null,w=null,E=null,A=null,ne=0;function G(e,t){const n=w,s=h,r=e.length===0,i=t===void 0?s:t,l=r?Ee:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>N(()=>F(l)));h=l,w=null;try{return L(o,!0)}finally{w=n,h=s}}function V(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(c&&c.running&&c.sources.has(n)?r=r(n.tValue):r=r(n.value)),Ne(n,r));return[Pe.bind(n),s]}function ge(e,t,n){const s=Y(e,t,!0,v);K(s)}function B(e,t,n){const s=Y(e,t,!1,v);K(s)}function Me(e,t,n){Oe=He;const s=Y(e,t,!1,v),r=U&&de(U);r&&(s.suspense=r),s.user=!0,A?A.push(s):K(s)}function k(e,t,n){n=n?Object.assign({},Z,n):Z;const s=Y(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,K(s),Pe.bind(s)}function De(e){return e&&typeof e=="object"&&"then"in e}function Fe(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i={}):(s=e,r=t,i={});let l=null,o=re,f=null,a=!1,u=!1,d="initialValue"in i,y=typeof s=="function"&&k(s);const p=new Set,[x,C]=(i.storage||V)(i.initialValue),[$,T]=V(void 0),[O,P]=V(void 0,{equals:!1}),[j,I]=V(d?"ready":"unresolved");if(g.context){f=`${g.context.id}${g.context.count++}`;let b;i.ssrLoadFrom==="initial"?o=i.initialValue:g.load&&(b=g.load(f))&&(o=b)}function D(b,m,S,_){return l===b&&(l=null,_!==void 0&&(d=!0),(b===o||m===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(_,{value:m})),o=re,c&&b&&a?(c.promises.delete(b),a=!1,L(()=>{c.running=!0,he(m,S)},!1)):he(m,S)),m}function he(b,m){L(()=>{m===void 0&&C(()=>b),I(m!==void 0?"errored":d?"ready":"unresolved"),T(m);for(const S of p.keys())S.decrement();p.clear()},!1)}function se(){const b=U&&de(U),m=x(),S=$();if(S!==void 0&&!l)throw S;return w&&!w.user&&b&&ge(()=>{O(),l&&(b.resolved&&c&&a?c.promises.add(l):p.has(b)||(b.increment(),p.add(b)))}),m}function ie(b=!0){if(b!==!1&&u)return;u=!1;const m=y?y():s;if(a=c&&c.running,m==null||m===!1){D(l,N(x));return}c&&l&&c.promises.delete(l);const S=o!==re?o:N(()=>r(m,{value:x(),refetching:b}));return De(S)?(l=S,"value"in S?(S.status==="success"?D(l,S.value,void 0,m):D(l,void 0,void 0,m),S):(u=!0,queueMicrotask(()=>u=!1),L(()=>{I(d?"refreshing":"pending"),P()},!1),S.then(_=>D(S,_,void 0,m),_=>D(S,void 0,ke(_),m)))):(D(l,S,void 0,m),S)}return Object.defineProperties(se,{state:{get:()=>j()},error:{get:()=>$()},loading:{get(){const b=j();return b==="pending"||b==="refreshing"}},latest:{get(){if(!d)return se();const b=$();if(b&&!l)throw b;return x()}}}),y?ge(()=>ie(!1)):ie(!1),[se,{refetch:ie,mutate:C}]}function N(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function At(e,t,n){const s=Array.isArray(e);let r;return i=>{let l;if(s){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();const o=N(()=>t(l,r,i));return r=l,o}}function Ot(e){Me(()=>N(e))}function ae(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Be(e,t){H||(H=Symbol("error")),h=Y(void 0,void 0,!0),h.context={...h.context,[H]:[t]},c&&c.running&&c.sources.add(h);try{return e()}catch(n){J(n)}finally{h=h.owner}}function Ue(){return h}function Et(e,t){const n=h,s=w;h=e,w=null;try{return L(t,!0)}catch(r){J(r)}finally{h=n,w=s}}function Ct(e){if(c&&c.running)return e(),c.done;const t=w,n=h;return Promise.resolve().then(()=>{w=t,h=n;let s;return U&&(s=c||(c={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),L(e,!1),w=h=null,s?s.done:void 0})}const[Pt,ye]=V(!1);function _e(e){A.push.apply(A,e),e.length=0}function Ce(e,t){const n=Symbol("context");return{id:n,Provider:Ge(n),defaultValue:e}}function de(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function Re(e){const t=k(e),n=k(()=>oe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let U;function qe(){return U||(U=Ce())}function Pe(){const e=c&&c.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===v)K(this);else{const t=E;E=null,L(()=>te(this),!1),E=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return e&&c.sources.has(this)?this.tValue:this.value}function Ne(e,t,n){let s=c&&c.running&&c.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(c){const r=c.running;(r||!n&&c.sources.has(e))&&(c.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&L(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=c&&c.running;l&&c.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?E.push(i):A.push(i),i.observers&&Te(i)),l?i.tState=v:i.state=v)}if(E.length>1e6)throw E=[],new Error},!1)}return t}function K(e){if(!e.fn)return;F(e);const t=ne;we(e,c&&c.running&&c.sources.has(e)?e.tValue:e.value,t),c&&!c.running&&c.sources.has(e)&&queueMicrotask(()=>{L(()=>{c&&(c.running=!0),w=h=e,we(e,e.tValue,t),w=h=null},!1)})}function we(e,t,n){let s;const r=h,i=w;w=h=e;try{s=e.fn(t)}catch(l){return e.pure&&(c&&c.running?(e.tState=v,e.tOwned&&e.tOwned.forEach(F),e.tOwned=void 0):(e.state=v,e.owned&&e.owned.forEach(F),e.owned=null)),e.updatedAt=n+1,J(l)}finally{w=i,h=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ne(e,s,!0):c&&c.running&&e.pure?(c.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=v,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return c&&c.running&&(i.state=0,i.tState=s),h===null||h!==Ee&&(c&&c.running&&h.pure?h.tOwned?h.tOwned.push(i):h.tOwned=[i]:h.owned?h.owned.push(i):h.owned=[i]),i}function ee(e){const t=c&&c.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===X)return te(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);){if(t&&c.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(c.disposed.has(r))return}if((t?e.tState:e.state)===v)K(e);else if((t?e.tState:e.state)===X){const r=E;E=null,L(()=>te(e,n[0]),!1),E=r}}}function L(e,t){if(E)return e();let n=!1;t||(E=[]),A?n=!0:A=[],ne++;try{const s=e();return Ke(n),s}catch(s){n||(A=null),E=null,J(s)}}function Ke(e){if(E&&($e(E),E=null),e)return;let t;if(c){if(!c.promises.size&&!c.queue.size){const s=c.sources,r=c.disposed;A.push.apply(A,c.effects),t=c.resolve;for(const i of A)"tState"in i&&(i.state=i.tState),delete i.tState;c=null,L(()=>{for(const i of r)F(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)F(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}ye(!1)},!1)}else if(c.running){c.running=!1,c.effects.push.apply(c.effects,A),A=null,ye(!0);return}}const n=A;A=null,n.length&&L(()=>Oe(n),!1),t&&t()}function $e(e){for(let t=0;t<e.length;t++)ee(e[t])}function He(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ee(s)}if(g.context){if(g.count){g.effects||(g.effects=[]),g.effects.push(...e.slice(0,n));return}else g.effects&&(e=[...g.effects,...e],n+=g.effects.length,delete g.effects);M()}for(t=0;t<n;t++)ee(e[t])}function te(e,t){const n=c&&c.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===v?r!==t&&(!r.updatedAt||r.updatedAt<ne)&&ee(r):i===X&&te(r,t)}}}function Te(e){const t=c&&c.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=X:s.state=X,s.pure?E.push(s):A.push(s),s.observers&&Te(s))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(c&&c.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}je(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}c&&c.running?e.tState=0:e.state=0}function je(e,t){if(t||(e.tState=0,c.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)je(e.owned[n])}function ke(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t,n){try{for(const s of t)s(e)}catch(s){J(s,n&&n.owner||null)}}function J(e,t=h){const n=H&&t&&t.context&&t.context[H],s=ke(e);if(!n)throw s;A?A.push({fn(){pe(s,n,t)},state:v}):pe(s,n,t)}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=oe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ge(e,t){return function(s){let r;return B(()=>r=N(()=>(h.context={...h.context,[e]:s.value},Re(()=>s.children))),void 0),r}}const Xe=Symbol("fallback");function be(e){for(let t=0;t<e.length;t++)e[t]()}function We(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return ae(()=>be(i)),()=>{let f=e()||[],a,u;return f[Ve],N(()=>{let y=f.length,p,x,C,$,T,O,P,j,I;if(y===0)l!==0&&(be(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[Xe],r[0]=G(D=>(i[0]=D,n.fallback())),l=1);else if(l===0){for(r=new Array(y),u=0;u<y;u++)s[u]=f[u],r[u]=G(d);l=y}else{for(C=new Array(y),$=new Array(y),o&&(T=new Array(y)),O=0,P=Math.min(l,y);O<P&&s[O]===f[O];O++);for(P=l-1,j=y-1;P>=O&&j>=O&&s[P]===f[j];P--,j--)C[j]=r[P],$[j]=i[P],o&&(T[j]=o[P]);for(p=new Map,x=new Array(j+1),u=j;u>=O;u--)I=f[u],a=p.get(I),x[u]=a===void 0?-1:a,p.set(I,u);for(a=O;a<=P;a++)I=s[a],u=p.get(I),u!==void 0&&u!==-1?(C[u]=r[a],$[u]=i[a],o&&(T[u]=o[a]),u=x[u],p.set(I,u)):i[a]();for(u=O;u<y;u++)u in C?(r[u]=C[u],i[u]=$[u],o&&(o[u]=T[u],o[u](u))):r[u]=G(d);r=r.slice(0,l=y),s=f.slice(0)}return r});function d(y){if(i[u]=y,o){const[p,x]=V(u);return o[u]=x,t(f[u],p)}return t(f[u])}}}function Ye(e,t){return N(()=>e(t||{}))}function Q(){return!0}const fe={get(e,t,n){return t===z?n:e.get(t)},has(e,t){return t===z?!0:e.has(t)},set:Q,deleteProperty:Q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Q,deleteProperty:Q}},ownKeys(e){return e.keys()}};function le(e){return(e=typeof e=="function"?e():e)?e:{}}function Je(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Nt(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&z in o,e[l]=typeof o=="function"?(t=!0,k(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=le(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in le(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(le(e[o])));return[...new Set(l)]}},fe);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let a=f.length-1;a>=0;a--){const u=f[a];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(o,u);if(!s[u])s[u]=d.get?{enumerable:!0,configurable:!0,get:Je.bind(n[u]=[d.get.bind(o)])}:d.value!==void 0?d:void 0;else{const y=n[u];y&&(d.get?y.push(d.get.bind(o)):d.value!==void 0&&y.push(()=>d.value))}}}const r={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const o=i[l],f=s[o];f&&f.get?Object.defineProperty(r,o,f):r[o]=f?f.value:void 0}return r}function $t(e,...t){if(z in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},fe));return i.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},fe)),i}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),l=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let o=!1,f=0;for(const a of t)a.includes(r)&&(o=!0,l?s[f][r]=i.value:Object.defineProperty(s[f],r,i)),++f;o||(l?n[r]=i.value:Object.defineProperty(n,r,i))}return[...s,n]}function Tt(e){let t,n;const s=r=>{const i=g.context;if(i){const[o,f]=V();g.count||(g.count=0),g.count++,(n||(n=e())).then(a=>{M(i),g.count--,f(()=>a.default),M()}),t=o}else if(!t){const[o]=Fe(()=>(n||(n=e())).then(f=>f.default));t=o}let l;return k(()=>(l=t())&&N(()=>{if(!i)return l(r);const o=g.context;M(i);const f=l(r);return M(o),f}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Qe=0;function jt(){const e=g.context;return e?`${e.id}${e.count++}`:`cl-${Qe++}`}const ze=e=>`Stale read from <${e}>.`;function kt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(We(()=>e.each,e.children,t||void 0))}function Lt(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return k(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?N(()=>r(t?s:()=>{if(!N(n))throw ze("Show");return e.when})):r}return e.fallback},void 0,void 0)}let q;function vt(){q&&[...q].forEach(e=>e())}function Vt(e){let t;g.context&&g.load&&(t=g.load(g.context.id+g.context.count));const[n,s]=V(t,void 0);return q||(q=new Set),q.add(s),ae(()=>q.delete(s)),k(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?N(()=>i(r,()=>s())):i}return Be(()=>e.children,s)},void 0,void 0)}const Ze=Ce();function It(e){let t=0,n,s,r,i,l;const[o,f]=V(!1),a=qe(),u={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},d=Ue();if(g.context&&g.load){const x=g.context.id+g.context.count;let C=g.load(x);if(C&&(typeof C!="object"||C.status!=="success"?r=C:g.gather(x)),r&&r!=="$$f"){const[$,T]=V(void 0,{equals:!1});i=$,r.then(()=>{if(g.done)return T();g.gather(x),M(s),T(),M()},O=>{l=O,T()})}}const y=de(Ze);y&&(n=y.register(u.inFallback));let p;return ae(()=>p&&p()),Ye(a.Provider,{value:u,get children(){return k(()=>{if(l)throw l;if(s=g.context,i)return i(),i=void 0;s&&r==="$$f"&&M();const x=k(()=>e.children);return k(C=>{const $=u.inFallback(),{showContent:T=!0,showFallback:O=!0}=n?n():{};if((!$||r&&r!=="$$f")&&T)return u.resolved=!0,p&&p(),p=s=r=void 0,_e(u.effects),x();if(O)return p?C:G(P=>(p=P,s&&(M({id:s.id+"f",count:0}),s=void 0),e.fallback),d)})})}})}const et=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],tt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...et]),nt=new Set(["innerHTML","textContent","innerText","children"]),st=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),it=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function rt(e,t){const n=it[e];return typeof n=="object"?n[t]?n.$:void 0:n}const lt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ot={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ft(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,f=t[r-1].nextSibling,a=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const u=i<s?o?n[o-1].nextSibling:n[i-o]:f;for(;o<i;)e.insertBefore(n[o++],u)}else if(i===o)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],u),t[r]=n[i]}else{if(!a){a=new Map;let d=o;for(;d<i;)a.set(n[d],d++)}const u=a.get(t[l]);if(u!=null)if(o<u&&u<i){let d=l,y=1,p;for(;++d<r&&d<i&&!((p=a.get(t[d]))==null||p!==u+y);)y++;if(y>u-o){const x=t[l];for(;o<u;)e.insertBefore(n[o++],x)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const me="_$DX_DELEGATE";function Mt(e,t,n,s={}){let r;return G(i=>{r=i,t===document?e():wt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function Dt(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function ut(e,t=window.document){const n=t[me]||(t[me]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,mt))}}function ue(e,t,n){g.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function ct(e,t,n,s){g.context&&e.isConnected||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function at(e,t){g.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function dt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function ht(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(Se(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(Se(e,o,!0),n[o]=f)}return n}function gt(e,t,n){if(!t)return n?ue(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function Ft(e,t={},n,s){const r={};return s||B(()=>r.children=W(e,t.children,r.children)),B(()=>typeof t.ref=="function"?yt(t.ref,e):t.ref=e),B(()=>pt(e,t,n,!0,r,!0)),r}function yt(e,t,n){return N(()=>e(t,n))}function wt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return W(e,t,s,n);B(r=>W(e,t(),r,n),s)}function pt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=xe(e,l,null,r[l],n,i)}for(const l in t){if(l==="children")continue;const o=t[l];r[l]=xe(e,l,o,r[l],n,i)}}function bt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Se(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function xe(e,t,n,s,r,i){let l,o,f,a,u;if(t==="style")return gt(e,n,s);if(t==="classList")return ht(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);s&&e.removeEventListener(d,s),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);s&&e.removeEventListener(d,s,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),y=lt.has(d);if(!y&&s){const p=Array.isArray(s)?s[0]:s;e.removeEventListener(d,p)}(y||n)&&(dt(e,d,n,y),y&&ut([d]))}else if(t.slice(0,5)==="attr:")ue(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(f=nt.has(t))||!r&&((a=rt(t,e.tagName))||(o=tt.has(t)))||(l=e.nodeName.includes("-"))){if(u)t=t.slice(5),o=!0;else if(g.context&&e.isConnected)return n;t==="class"||t==="className"?at(e,n):l&&!o&&!f?e[bt(t)]=n:e[a||t]=n}else{const d=r&&t.indexOf(":")>-1&&ot[t.split(":")[0]];d?ct(e,d,t,n):ue(e,st[t]||t,n)}return n}function mt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),g.registry&&!g.done&&(g.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function W(e,t,n,s,r){const i=!!g.context&&e.isConnected;if(i){!n&&(n=[...e.childNodes]);let f=[];for(let a=0;a<n.length;a++){const u=n[a];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():f.push(u)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(i)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=R(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(i)return n;n=R(e,n,s)}else{if(l==="function")return B(()=>{let f=t();for(;typeof f=="function";)f=f();n=W(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],a=n&&Array.isArray(n);if(ce(f,t,n,r))return B(()=>n=W(e,f,n,s,!0)),()=>n;if(i){if(!f.length)return n;if(s===void 0)return[...e.childNodes];let u=f[0],d=[u];for(;(u=u.nextSibling)!==s;)d.push(u);return n=d}if(f.length===0){if(n=R(e,n,s),o)return n}else a?n.length===0?Ae(e,f,s):ft(e,n,f):(n&&R(e),Ae(e,f));n=f}else if(t.nodeType){if(i&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=R(e,n,s,t);R(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ce(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],f=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=ce(e,o,f)||r;else if(a==="function")if(s){for(;typeof o=="function";)o=o();r=ce(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||r}else e.push(o),r=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return r}function Ae(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function R(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const f=o.parentNode===e;!i&&!l?f?e.replaceChild(r,o):e.insertBefore(r,n):f&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const Bt=()=>{},Ut=!1;function St(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Le={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=r(i,s(o)))}return i}function s(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)t.call(i,o)&&i[o]&&(l=r(l,o));return l}function r(i,l){return l?i?i+" "+l:i+l:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Le);var xt=Le.exports;const _t=St(xt);export{Me as A,yt as B,Ot as C,Et as D,Vt as E,vt as F,Ct as G,Ut as H,Bt as I,$t as J,dt as K,St as L,kt as M,Lt as S,Ye as a,Ft as b,Ce as c,jt as d,B as e,Re as f,k as g,Ue as h,N as i,At as j,G as k,V as l,ut as m,Nt as n,ae as o,wt as p,Tt as q,ue as r,g as s,Dt as t,de as u,at as v,It as w,Mt as x,_t as y,gt as z};