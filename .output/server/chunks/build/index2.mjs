import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent, ssrElement, mergeProps as mergeProps$1, ssrStyle } from 'solid-js/web';
import m from 'classnames';
import { createContext, onMount, onCleanup, useContext, createSignal, createEffect, on, mergeProps, splitProps, createMemo } from 'solid-js';
import { b as bo, g as ge, O } from './visual-intelligence2.mjs';
import { u as ue$1 } from './project.module-B5Zg89BM.mjs';
import { m as ms } from './azizi-life2.mjs';
import { g as ga } from './mobility-study2.mjs';
import { S as Se } from './synaesthesify2.mjs';
import { S as Sn } from './typing-practice2.mjs';
import './cards-B9luA8aH.mjs';
import './gallery-SmyiBVw3.mjs';
import './title-C2BBBZUd.mjs';
import 'three';
import 'bezier-easing';

const W = /^\/+|(\/)\/+$/g;
function P(e, o = false) {
  const r = e.replace(W, "$1");
  return r ? o || /^[?#]/.test(r) ? r : "/" + r : "";
}
function J(e, o) {
  if (e == null)
    throw new Error(o);
  return e;
}
const K = createContext(), U = createContext(), w = () => J(useContext(K), "<A> and 'use' router primitives can be only used inside a Route."), F = () => useContext(U) || w().base, G = (e) => {
  const o = F();
  return createMemo(() => o.resolvePath(e()));
}, Q = (e) => {
  const o = w();
  return createMemo(() => {
    const r = e();
    return r !== void 0 ? o.renderPath(r) : r;
  });
}, X = () => w().location;
function Y(e) {
  e = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, e);
  const [, o] = splitProps(e, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), r = G(() => e.href), m = Q(r), l = X(), u = createMemo(() => {
    const f = r();
    if (f === void 0)
      return [false, false];
    const d = P(f.split(/[?#]/, 1)[0]).toLowerCase(), s = P(l.pathname).toLowerCase();
    return [e.end ? d === s : s.startsWith(d), d === s];
  });
  return ssrElement("a", mergeProps$1(o, { get href() {
    return m() || e.href;
  }, get state() {
    return JSON.stringify(e.state);
  }, get classList() {
    return { ...e.class && { [e.class]: true }, [e.inactiveClass]: !u()[0], [e.activeClass]: u()[0], ...o.classList };
  }, link: true, get "aria-current"() {
    return u()[1] ? "page" : void 0;
  } }), void 0, true);
}
const Z = "_container_1scc3_1", ee = "_border_1scc3_15", te = "_top_1scc3_20", se = "_bottom_1scc3_21", ie = "_left_1scc3_55", oe = "_right_1scc3_56", c = { container: Z, border: ee, top: te, bottom: se, left: ie, right: oe };
var re = ["<div", "><div", ' style="', '"></div><div', ' style="', '"></div><div', ' style="', '"></div><div', ' style="', '"></div></div>'];
function ne(e) {
  return ssr(re, ssrHydrationKey() + ssrAttribute("class", escape(c.container, true), false), ssrAttribute("class", escape(m(c.border, c.top), true), false), ssrStyle(e.style.y), ssrAttribute("class", escape(m(c.border, c.right), true), false), ssrStyle(e.style.x), ssrAttribute("class", escape(m(c.border, c.left), true), false), ssrStyle(e.style.x), ssrAttribute("class", escape(m(c.border, c.bottom), true), false), ssrStyle(e.style.y));
}
var ae = ["<span", ">Learn more</span>"], le = ["<section", "><div", "><div", ">", "</div><!--$-->", "<!--/--><!--$-->", "<!--/--></div><div", '><div class="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 offset-sm-1"><h2 class="font--title">', "</h2><h3", ">", "</h3><!--$-->", "<!--/--></div></div></section>"], ce = ["<div", ' style="', '"></div>'];
function h(e) {
  let o;
  const r = useContext(ge), { height: m$1 } = useContext(O), [l, u] = createSignal(0), [f, d] = createSignal(m$1() * 0.25), [s, y] = createSignal(1), [p, k] = createSignal({});
  return createEffect(on(r, () => {
    u(o.getBoundingClientRect().top);
  })), createEffect(() => {
    d(m$1() * 0.25);
  }), createEffect(() => {
    l() < 0 && -l() < f() ? y((f() + l()) / f()) : l() >= 0 ? y(1) : y(0);
  }), createEffect(() => {
    k({ x: { transform: `scale3d(${s()}, 1, 1)` }, y: { transform: `scale3d(1, ${s()}, 1)` } });
  }), ssr(le, ssrHydrationKey() + ssrAttribute("class", escape(m(e.class, ue$1.hero, "col-nested"), true), false), ssrAttribute("class", escape(ue$1.background, true), false), ssrAttribute("class", escape(ue$1.cover, true), false), escape(e.children), e.overlay && ssr(ce, ssrHydrationKey() + ssrAttribute("class", escape(ue$1.overlay, true), false), "opacity:" + (1 - escape(s(), true))), escape(createComponent(ne, { get style() {
    return p();
  } })), ssrAttribute("class", escape(m(ue$1.content, "container-fluid"), true), false), escape(e.title), ssrAttribute("class", escape(m(ue$1.subtitle, "font--subtitle"), true), false), escape(e.subtitle), escape(createComponent(Y, { get href() {
    return e.linkTo;
  }, get class() {
    return ue$1.link;
  }, get children() {
    return ssr(ae, ssrHydrationKey() + ssrAttribute("class", escape(ue$1.linkText, true), false));
  } })));
}
const ue = "_container_s3vi3_1", fe = "_intro_s3vi3_5", de = "_name_s3vi3_12", ve = "_position_s3vi3_13", me = "_headline_s3vi3_14", g = { container: ue, intro: fe, name: de, position: ve, headline: me };
var ye = ["<main", "><section", "><div><h1", ">Da-Woon Chung</h1><h2", ">Software Engineer at DeepMind</h2><h3", ">I deliver unique design perspectives by combining user- and tech-driven insights. I also leverage my skills to evolve them into tangible&nbsp;output.</h3></div></section><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></main>"];
function ze() {
  let e, o, r, m$1, l, u;
  const f = () => [e, o, r, m$1, l, u], d = new IntersectionObserver((s) => {
    for (const { isIntersecting: y, target: p } of s)
      y ? document.body.classList.add(p.classList[0]) : document.body.classList.remove(p.classList[0]);
  }, { rootMargin: "0px 0px -100% 0px" });
  return onMount(() => {
    document.body.classList.add("home");
    for (const s of f())
      d.observe(s);
  }), onCleanup(() => {
    d.disconnect(), document.body.className = "";
  }), ssr(ye, ssrHydrationKey() + ssrAttribute("class", escape(m(g.container, "container-fluid"), true), false), ssrAttribute("class", escape(m("intro", g.intro, "col-12", "col-md-10", "col-xl-8", "offset-md-1", "offset-xl-2"), true), false), ssrAttribute("class", escape(m(g.name, "font--title"), true), false), ssrAttribute("class", escape(m(g.position), true), false), ssrAttribute("class", escape(m(g.headline), true), false), escape(createComponent(h, { class: "visual-intelligence", title: "Visual Intelligence", subtitle: "Utilising complex data through visualisation", linkTo: "/visual-intelligence", forwardRef: (s) => {
    o = s;
  }, get children() {
    return createComponent(bo, { parentContainer: o });
  } })), escape(createComponent(h, { class: "typing-practice", title: "Nyaruka!", subtitle: "Speeding up typing in Rwanda", overlay: true, linkTo: "/typing-practice", forwardRef: (s) => {
    r = s;
  }, get children() {
    return createComponent(Sn, {});
  } })), escape(createComponent(h, { class: "mobility-study", title: "Volkswagen Mobility Study", subtitle: "A visual exploration with qualitative data", overlay: true, linkTo: "/mobility-study", forwardRef: (s) => {
    m$1 = s;
  }, get children() {
    return createComponent(ga, {});
  } })), escape(createComponent(h, { class: "azizi-life", title: "Azizi Life", subtitle: "A pro bono project for a fair trade firm in Rwanda", overlay: true, linkTo: "/azizi-life", forwardRef: (s) => {
    l = s;
  }, get children() {
    return createComponent(ms, {});
  } })), escape(createComponent(h, { class: "synaesthesify", title: "Synaesthesify", subtitle: "A visual synthesiser with Spotify API", overlay: true, linkTo: "/synaesthesify", forwardRef: (s) => {
    u = s;
  }, get children() {
    return createComponent(Se, {});
  } })));
}

export { ze as default };
//# sourceMappingURL=index2.mjs.map
