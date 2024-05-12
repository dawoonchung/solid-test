import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent, ssrStyle } from 'solid-js/web';
import m from 'classnames';
import { createContext, useContext, createSignal, onMount, onCleanup, createEffect, Show, on as on$1 } from 'solid-js';
import { _ as _e, f as fe$1, d as de$1, o as oe, a as _, m as me$1, u as ue } from './project.module-B5Zg89BM.mjs';
import { A } from './cards-B9luA8aH.mjs';
import { v } from './gallery-SmyiBVw3.mjs';
import { P as P$1, b } from './title-C2BBBZUd.mjs';
import * as $ from 'three';
import { Vector3, PerspectiveCamera, Vector2 } from 'three';
import De from 'bezier-easing';

const Be = /* @__PURE__ */ new Map([["xs", 0], ["sm", 576], ["md", 1024], ["lg", 1200], ["xl", 1440]]), Oe = (e) => {
  let a = "xs";
  return Be.forEach((s, t) => {
    e > s && (a = t);
  }), a;
}, Re = { width: () => document.body.clientWidth, height: () => window.innerHeight, breakpoint: () => Oe(window.innerWidth) }, O = createContext(Re), Ee = window.scrollY, ge = createContext(() => Ee), ze = "_wrap_gekm5_1", Le = "_input_gekm5_6", Ne = "_toggle_gekm5_11", K = { wrap: ze, input: Le, toggle: Ne };
var Ve = ["<label", '><input type="checkbox"', "><span", "></span></label>"];
function Y(e) {
  return ssr(Ve, ssrHydrationKey() + ssrAttribute("class", escape(K.wrap, true), false), ssrAttribute("checked", e.enabled, true) + ssrAttribute("class", escape(K.input, true), false), ssrAttribute("class", escape(K.toggle, true), false));
}
var Xe = ["<canvas", "></canvas>"];
function He(e) {
  const { width: a, height: s } = useContext(O);
  return ssr(Xe, ssrHydrationKey() + ssrAttribute("class", escape(m(e.class, "canvas"), true), false) + ssrAttribute("width", escape(a(), true), false) + ssrAttribute("height", escape(s(), true), false));
}
function Ue() {
  const { camera: e, renderer: a, scene: s, scrollArea: t, rAF: o } = useContext(P), { width: u, height: c } = useContext(O), d = useContext(ge), [h, b] = createSignal(false);
  let w;
  const f = () => a().render(s, e);
  createEffect(() => {
    a().setSize(u(), c());
  }), U(f), createEffect(on$1(d, () => {
    const W = window.innerHeight, { top: v, height: D } = t.getBoundingClientRect();
    v < W && v > -D ? b(true) : b(false);
  }));
  function T() {
    o.run(), w = requestAnimationFrame(T);
  }
  return createEffect(() => {
    h() ? T() : cancelAnimationFrame(w), onCleanup(() => cancelAnimationFrame(w));
  }), null;
}
function Ge() {
  const e = new $.Scene();
  return e.fog = new $.FogExp2(2236962, 0.01), e;
}
const P = createContext(), U = (e) => {
  const { rAF: a } = useContext(P);
  createEffect(() => {
    const { tasks: s } = a;
    s.push(e), onCleanup(() => {
      s.splice(s.indexOf(e), 1);
    });
  });
};
function he(e) {
  const { width: a, height: s } = useContext(O), t = Qe(a(), s()), o = Ge();
  let u, c = { tasks: [], run: () => {
    c.tasks.forEach((h) => {
      h();
    });
  } };
  const d = { camera: t, renderer: () => u, scene: o, rAF: c, scrollArea: e.viRef, stage: e.stage };
  return [createComponent(He, { get class() {
    return e.class;
  } }), createComponent(P.Provider, { value: d, get children() {
    return [e.children, createComponent(Ue, {})];
  } })];
}
function qe(e, a, s, t) {
  const o = new Vector3();
  return e.updateMatrixWorld(), o.setFromMatrixPosition(e.matrixWorld), o.project(a), o.x = s / 2 * (o.x + 1), o.y = t / 2 * (-o.y + 1), new Vector2(o.x, o.y);
}
function Je(e, a, s, t = 1) {
  return new Vector3(e * Math.sin(a) * Math.cos(s) * t, e * Math.sin(a) * Math.sin(s) * t, e * Math.cos(a) * t);
}
function Z(e = 1, a) {
  const s = Math.random() * 2 * Math.PI, t = Math.random() * 2 - 1, o = Math.random(), u = Math.acos(t), c = a || Math.cbrt(o);
  return Je(c, u, s, e);
}
function Ke(e, a) {
  const s = Math.random() * Math.PI * 2, t = e * Math.sqrt(Math.random()), o = a * Math.random();
  return new Vector3(t * Math.cos(s), t * Math.sin(s), o);
}
function me(e, a) {
  const s = (/* @__PURE__ */ new Date()).getTime(), t = De(0.645, 0.045, 0.355, 1), o = Math.min((a - (e - s)) / a, 1);
  return t(o);
}
const te = new Vector3(0, 0, 200), Ye = new Vector3(0, 0, 50), E = new Vector3(0, 0, 100), Ze = [E, E, E, E, new Vector3(0, 0, 90), new Vector3(100, 0, 0), E], pe = 2e3;
function Qe(e, a) {
  const s = e / a, t = new PerspectiveCamera(45, s, 1, 1e3);
  return t.position.z = te.z, t;
}
function we() {
  if (!useContext(P))
    return;
  const { camera: e } = useContext(P), { width: a, height: s } = useContext(O);
  createEffect(() => {
    e.aspect = a() / s(), e.updateProjectionMatrix();
  });
}
function et() {
  if (we(), !useContext(P))
    return;
  const { camera: e, scrollArea: a } = useContext(P), s = useContext(ge);
  return createEffect(on$1(s, () => {
    const t = window.innerHeight, { top: o, height: u } = a.getBoundingClientRect(), c = t + u, d = te.z - Ye.z;
    if (o < t && o > -u) {
      const h = (o - t) / c * d;
      e.position.z = te.z + h;
    }
  })), null;
}
function tt() {
  we();
  const { camera: e, stage: a } = useContext(P);
  function s(c) {
    const d = (/* @__PURE__ */ new Date()).getTime(), h = d + pe;
    return { position0: e.position.clone(), moveDistance: c.clone().sub(e.position), start: d, end: h, isAnimating: true };
  }
  const [t, o] = createSignal({ ...s(E), isAnimating: false });
  return createEffect(() => {
    o(s(Ze[a()]));
  }), U(() => {
    const { position0: c, moveDistance: d, end: h, isAnimating: b } = t();
    if (!b)
      return;
    const w = me(h, pe), f = d.clone().multiplyScalar(w);
    e.position.x = c.x + f.x, e.position.y = c.y + f.y, e.position.z = c.z + f.z, e.lookAt(new Vector3(0, 0, 0)), w >= 1 && o({ ...t(), isAnimating: false });
  }), null;
}
const st = "_spinner_1nep0_1", nt = "_spin_1nep0_1", ot = { spinner: st, spin: nt };
var it = ["<span", "></span>"];
function at(e) {
  return ssr(it, ssrHydrationKey() + ssrAttribute("class", escape(m(ot.spinner, e.class), true), false));
}
const rt = 3, ct = [1e4, 1500, 700], lt = [110, 30, 20], pt = [30, 20, 15], dt = { mobile: [[new Vector3(50, -120, 0), new Vector3(-60, 0, -35), new Vector3(40, 40, -60)], [new Vector3(80, -80, -20), new Vector3(35, 0, -25), new Vector3(20, 30, -35)], [new Vector3(150, -100, -70), new Vector3(130, 0, -90), new Vector3(110, 30, -110)], [new Vector3(30, 0, -50), new Vector3(30, 0, -50), new Vector3(30, 0, -50)], [new Vector3(-30, 0, -55), new Vector3(0, 0, -35), new Vector3(20, 0, -15)], [new Vector3(-20, 0, -20), new Vector3(-20, 0, -10), new Vector3(-20, 0, 0)], [new Vector3(150, -100, -70), new Vector3(130, 0, -90), new Vector3(110, 30, -110)]], default: [[new Vector3(50, -100, 0), new Vector3(-60, 0, -35), new Vector3(40, 40, -60)], [new Vector3(80, -100, 0), new Vector3(50, 0, -20), new Vector3(30, 30, -30)], [new Vector3(150, -100, -70), new Vector3(130, 0, -90), new Vector3(110, 30, -110)], [new Vector3(50, 0, -50), new Vector3(50, 0, -50), new Vector3(50, 0, -50)], [new Vector3(30, 0, -55), new Vector3(90, 0, -35), new Vector3(50, 0, -15)], [new Vector3(0, 0, -55), new Vector3(0, 0, -35), new Vector3(0, 0, -15)], [new Vector3(150, -100, -70), new Vector3(130, 0, -90), new Vector3(110, 30, -110)]] };
function ut() {
  const e = {};
  for (const [a, s] of Object.entries(dt)) {
    const t = { positions: [], data: [], spreadOut: [] };
    for (let o = 0; o < rt; o += 1) {
      const u = [], c = [];
      for (let d = 0; d < s.length; d += 1) {
        const h = [];
        for (let b = 0; b < ct[o]; b += 1) {
          let w;
          if (d < 3 || d === 6)
            w = Z(lt[o]);
          else if (d === 3) {
            w = Z(40);
            const f = Z(40, 3);
            c.push(f.x), c.push(f.y), c.push(f.z);
          } else
            d === 4 && (w = Ke(pt[o], 6));
          d !== 5 && (h.push(w.x), h.push(w.y), h.push(w.z));
        }
        d === 5 ? u.push(u[4]) : u.push(new Float32Array(h));
      }
      t.spreadOut.push(new Float32Array(c)), t.data.push(u), t.positions = s;
    }
    e[a] = t;
  }
  return e;
}
const gt = "_spinner_hwh2n_1", ht = { spinner: gt }, ne = createContext(() => ({}));
function fe(e) {
  const { breakpoint: a } = useContext(O), [s, t] = createSignal(null), [o, u] = createSignal(null);
  return onMount(() => {
    s() || setTimeout(() => {
      t(ut());
    });
  }), createEffect(() => {
    s() && u(a() === "xs" ? s().mobile : s().default);
  }), createComponent(Show, { get when() {
    return s();
  }, get fallback() {
    return createComponent(at, { get class() {
      return ht.spinner;
    } });
  }, get children() {
    return createComponent(ne.Provider, { value: o, get children() {
      return e.children;
    } });
  } });
}
const mt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%200%2064%2064'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2054.1%20(76490)%20-%20https://sketchapp.com%20--%3e%3ctitle%3eOval%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3ccircle%20fill='%23fff'%20id='Oval'%20cx='32'%20cy='32'%20r='32'%3e%3c/circle%3e%3c/svg%3e", wt = "_popup_n6e8v_1", ft = { popup: wt };
var bt = ["<div", ' style="', '">', "</div>"];
const de = 1500, be = new $.Vector3(Math.PI / 4, 3 * Math.PI / 4, 0);
function ve(e) {
  const [a, s] = createSignal(false);
  let t;
  const o = new $.BufferGeometry(), { scene: u } = useContext(P), c = useContext(ne);
  return createEffect(() => {
    if (!c())
      return;
    const h = c().positions[0][e], b = c().data[e][0], { x: w, y: f, z: T } = h, { x: W, y: v, z: D } = be, g = new $.PointsMaterial({ color: 16777215, fog: true, map: new $.TextureLoader().load(mt), transparent: true, alphaTest: 0.1 });
    o.setAttribute("position", new $.BufferAttribute(b, 3)), o.attributes.position.setUsage($.DynamicDrawUsage), t = new $.Points(o, g), t.position.x = w, t.position.y = f, t.position.z = T, t.rotation.x = W, t.rotation.y = v, t.rotation.z = D, u.add(t), s(true), onCleanup(() => {
      t && u.remove(t);
    });
  }), U(() => {
    a() && (t.rotation.z += 3e-4);
  }), { pointsRef: () => t, geometry: o };
}
function Q(e) {
  return onMount(() => {
    ve(e.pointSetIndex);
  }), null;
}
function ee(e) {
  var _a;
  const { camera: a, stage: s } = useContext(P), t = useContext(ne), { width: o, height: u } = useContext(O), { pointsRef: c, geometry: d } = ve(e.pointSetIndex), [h, b] = createSignal(false), [w, f] = createSignal({ opacity: 0 }), T = (_a = t()) == null ? void 0 : _a.positions[0][e.pointSetIndex], W = (g) => {
    var _a2, _b, _c, _d;
    if (!s)
      throw new Error("No stage accessor found. Make sure you initialise THREE context with stage signal.");
    const A = e.isActive ? t().data[e.pointSetIndex][s()] : t().spreadOut[e.pointSetIndex], k = d.getAttribute("position"), y = (/* @__PURE__ */ new Date()).getTime(), S = y + de, F = c() ? c().position.clone() : T.clone(), M = t().positions[s()][e.pointSetIndex], R = k.array, G = R.slice(0), B = [], z = ((_a2 = c()) == null ? void 0 : _a2.material).opacity, L = e.isActive ? 1 : 0.1, oe = new $.Vector3((_b = c()) == null ? void 0 : _b.rotation.x, (_c = c()) == null ? void 0 : _c.rotation.y, (_d = c()) == null ? void 0 : _d.rotation.z), q = g || be;
    return R.forEach((ie, J) => {
      B.push(A[J] - ie);
    }), { position0: F, position1: M.clone().sub(F), vertices0: G, vertices1: new Float32Array(B), opacity0: z, opacity1: L, rotation0: oe, rotation1: q, start: y, end: S, isAnimating: true };
  };
  let v = null;
  return createEffect(() => {
    if (!t() || !s)
      return;
    let g;
    s() !== 1 && b(false), s() >= 4 && (g = new $.Vector3(0, 0, 0)), v = W(g);
  }), createEffect(() => {
    if (!h() || !c() || e.disablePopup) {
      f((y) => ({ ...y, opacity: 0 }));
      return;
    }
    const g = qe(c(), a, o(), u());
    let A, k;
    g.x > o() - 150 ? A = o() - 150 : g.x < 0 ? A = 150 : { x: A } = g, g.y > u() ? k = u() - 150 : g.y < 0 ? k = 150 : { y: k } = g, f((y) => ({ ...y, left: `${A}px`, top: `${k}px`, opacity: 1 }));
  }), U(() => {
    if (!v || !v.isAnimating || !c())
      return;
    const { position0: g, position1: A, vertices0: k, vertices1: y, opacity0: S, opacity1: F, rotation0: M, rotation1: R, end: G } = v, B = me(G, de), z = A.clone().multiplyScalar(B), L = [];
    y.forEach((_e, xe) => {
      const Se = _e * B, ke = k[xe];
      L.push(ke + Se);
    }), c().position.x = g.x + z.x, c().position.y = g.y + z.y, c().position.z = g.z + z.z;
    const q = d.getAttribute("position").clone().set(new Float32Array(L));
    d.setAttribute("position", q), d.attributes.position.needsUpdate = true;
    const J = (F - S) * B;
    c().material.opacity = S + J;
    const ye = R.clone().sub(M).multiplyScalar(B), ae = M.clone().add(ye);
    c().rotation.x = ae.x, c().rotation.y = ae.y, B >= 1 && (v = { ...v, isAnimating: false }, s() === 1 && b(true));
  }), ssr(bt, ssrHydrationKey() + ssrAttribute("class", escape(ft.popup, true), false), ssrStyle(w()), escape(e.popupText));
}
const vt = "/_build/assets/ideation-process-lg-COjN3Waf.jpg", yt = "/_build/assets/ideation-process-lg-Cw6Imty8.webp", _t = "/_build/assets/ideation-process-md-D_GnXJx8.jpg", xt = "/_build/assets/ideation-process-md-Cnwk9hdE.webp", St = "/_build/assets/ideation-process-sm-Bb_Px0Wz.jpg", kt = "/_build/assets/ideation-process-sm-DzIwQg0d.webp", It = "/_build/assets/ideation-process-xl-KRY36lMx.jpg", $t = "/_build/assets/ideation-process-xl-54LvSaKA.webp", At = "/_build/assets/ideation-process-xs-Bbm4WPn3.jpg", jt = "/_build/assets/ideation-process-xs-DW-fry78.webp", Ct = "/_build/assets/ideation-process-t3DtQZ-I.jpg", Pt = "/_build/assets/ideation-process-r8kfmqUL.webp", Ft = { xs: At, sm: St, md: _t, lg: vt, xl: It, default: Ct }, Mt = { xs: jt, sm: kt, md: xt, lg: yt, xl: $t, default: Pt }, Tt = { jpg: Ft, webp: Mt }, Wt = "/_build/assets/scenario-1-lg-DKqUOH78.jpg", Dt = "/_build/assets/scenario-1-lg-COSXkqCU.webp", Bt = "/_build/assets/scenario-1-md-CWklRUTG.jpg", Ot = "/_build/assets/scenario-1-md-BrDMy1n7.webp", Rt = "/_build/assets/scenario-1-sm-DSEc51hp.jpg", Et = "/_build/assets/scenario-1-sm-gubkIrKT.webp", zt = "/_build/assets/scenario-1-xl-BWcB3iEx.jpg", Lt = "/_build/assets/scenario-1-xl-CVIaT5tp.webp", Nt = "/_build/assets/scenario-1-xs-BiHu06WK.jpg", Vt = "/_build/assets/scenario-1-xs-BLHr-oca.webp", Xt = "/_build/assets/scenario-1-ACJHiBEg.jpg", Ht = "/_build/assets/scenario-1-BniVB34A.webp", Ut = { xs: Nt, sm: Rt, md: Bt, lg: Wt, xl: zt, default: Xt }, Gt = { xs: Vt, sm: Et, md: Ot, lg: Dt, xl: Lt, default: Ht }, qt = { jpg: Ut, webp: Gt }, Jt = "/_build/assets/scenario-2-lg-nxkmAU2W.jpg", Kt = "/_build/assets/scenario-2-lg-lnabbKpm.webp", Yt = "/_build/assets/scenario-2-md-B9AxVBw4.jpg", Zt = "/_build/assets/scenario-2-md-CnpaTFyA.webp", Qt = "/_build/assets/scenario-2-sm-B_YTdguA.jpg", es = "/_build/assets/scenario-2-sm-htwYrKnm.webp", ts = "/_build/assets/scenario-2-xl-FgkwJPFc.jpg", ss = "/_build/assets/scenario-2-xl-B2FAuJR_.webp", ns = "/_build/assets/scenario-2-xs-Ehwekpsx.jpg", os = "/_build/assets/scenario-2-xs-H3vl0zmh.webp", is = "/_build/assets/scenario-2-0oQaCBec.jpg", as = "/_build/assets/scenario-2-CLNXJOhV.webp", rs = { xs: ns, sm: Qt, md: Yt, lg: Jt, xl: ts, default: is }, cs = { xs: os, sm: es, md: Zt, lg: Kt, xl: ss, default: as }, ls = { jpg: rs, webp: cs }, ps = "/_build/assets/scenario-3-lg-SXfwXYOV.jpg", ds = "/_build/assets/scenario-3-lg-BzjST8gd.webp", us = "/_build/assets/scenario-3-md-CpvBAmDM.jpg", gs = "/_build/assets/scenario-3-md-WPVIqNq6.webp", hs = "/_build/assets/scenario-3-sm-BcIzYOHN.jpg", ms = "/_build/assets/scenario-3-sm-N7LVeD00.webp", ws = "/_build/assets/scenario-3-xl-Y49W2wLf.jpg", fs = "/_build/assets/scenario-3-xl-B54hp5SF.webp", bs = "/_build/assets/scenario-3-xs-pGBxEMXH.jpg", vs = "/_build/assets/scenario-3-xs-B3VJEfqz.webp", ys = "/_build/assets/scenario-3-CyXE6G_T.jpg", _s = "/_build/assets/scenario-3-D9v1RzGv.webp", xs = { xs: bs, sm: hs, md: us, lg: ps, xl: ws, default: ys }, Ss = { xs: vs, sm: ms, md: gs, lg: ds, xl: fs, default: _s }, ks = { jpg: xs, webp: Ss }, Is = "/_build/assets/scenario-4-lg-CBCpaRMu.jpg", $s = "/_build/assets/scenario-4-lg-BB5eO-09.webp", As = "/_build/assets/scenario-4-md-Bf9dmPkr.jpg", js = "/_build/assets/scenario-4-md-ph0C8NmU.webp", Cs = "/_build/assets/scenario-4-sm-BHlFrh8w.jpg", Ps = "/_build/assets/scenario-4-sm-DWADzoBU.webp", Fs = "/_build/assets/scenario-4-xl-BU-_VuHS.jpg", Ms = "/_build/assets/scenario-4-xl-B2QrCgiP.webp", Ts = "/_build/assets/scenario-4-xs-H843F37i.jpg", Ws = "/_build/assets/scenario-4-xs-B1VqBBU8.webp", Ds = "/_build/assets/scenario-4-Djfnq_rE.jpg", Bs = "/_build/assets/scenario-4-BuoA9ESb.webp", Os = { xs: Ts, sm: Cs, md: As, lg: Is, xl: Fs, default: Ds }, Rs = { xs: Ws, sm: Ps, md: js, lg: $s, xl: Ms, default: Bs }, Es = { jpg: Os, webp: Rs }, zs = "/_build/assets/scenario-5-lg-DVzyAbaO.jpg", Ls = "/_build/assets/scenario-5-lg-BDUV1Fgd.webp", Ns = "/_build/assets/scenario-5-md-DfiBCeS5.jpg", Vs = "/_build/assets/scenario-5-md-DLGQgPly.webp", Xs = "/_build/assets/scenario-5-sm-DJYumDPG.jpg", Hs = "/_build/assets/scenario-5-sm-Bm8AL5Df.webp", Us = "/_build/assets/scenario-5-xl-ZRwwenD7.jpg", Gs = "/_build/assets/scenario-5-xl-Do7didR0.webp", qs = "/_build/assets/scenario-5-xs-BiaIivxh.jpg", Js = "/_build/assets/scenario-5-xs-CiGZKrVt.webp", Ks = "/_build/assets/scenario-5-Ce7xtJEL.jpg", Ys = "/_build/assets/scenario-5-BmB1WsXg.webp", Zs = { xs: qs, sm: Xs, md: Ns, lg: zs, xl: Us, default: Ks }, Qs = { xs: Js, sm: Hs, md: Vs, lg: Ls, xl: Gs, default: Ys }, en = { jpg: Zs, webp: Qs }, tn = "/_build/assets/scenario-6-lg-B-gSch8r.jpg", sn = "/_build/assets/scenario-6-lg-CI9an6Hf.webp", nn = "/_build/assets/scenario-6-md-CInblE_L.jpg", on = "/_build/assets/scenario-6-md-CIF9smUq.webp", an = "/_build/assets/scenario-6-sm-BGjZooiB.jpg", rn = "/_build/assets/scenario-6-sm-DU0Nz8Wi.webp", cn = "/_build/assets/scenario-6-xl-8bLUaqrC.jpg", ln = "/_build/assets/scenario-6-xl-D3yLaRvP.webp", pn = "/_build/assets/scenario-6-xs-OrB1yd1_.jpg", dn = "/_build/assets/scenario-6-xs-MBUJbM7N.webp", un = "/_build/assets/scenario-6-mIZNyw2V.jpg", gn = "/_build/assets/scenario-6-B8GcqKNf.webp", hn = { xs: pn, sm: an, md: nn, lg: tn, xl: cn, default: un }, mn = { xs: dn, sm: rn, md: on, lg: sn, xl: ln, default: gn }, wn = { jpg: hn, webp: mn }, fn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.4,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20453.5%20255.1'%20style='enable-background:new%200%200%20453.5%20255.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:none;stroke:%23FFFFFF;}%20.st2{fill:none;stroke:%23FFFFFF;stroke-linecap:round;stroke-linejoin:round;}%20.st3{fill:none;stroke:%23FFFFFF;stroke-linejoin:round;}%20.st4{fill:none;stroke:%23FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:11.594,11.594;}%20%3c/style%3e%3ctitle%3ePage%201%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%3e%3cg%20id='Artboard-Copy-6'%20transform='translate(-83.000000,%20-509.000000)'%3e%3cg%20id='Page-1'%20transform='translate(83.000000,%20510.000000)'%3e%3cpolygon%20id='Fill-1'%20class='st0'%20points='386.7,53.3%20386.7,192%20438.9,216%20438.9,29.4%20'/%3e%3cg%20id='Group-28'%3e%3cpolygon%20id='Stroke-2'%20class='st1'%20points='438.7,216.2%20387.6,192.2%20387.6,53.3%20438.7,29.4%20'/%3e%3cpath%20id='Stroke-4'%20class='st2'%20d='M68.4,145.4c-7.2-3.2-12.2-10.4-12.2-18.7c0-8.4,5-15.6,12.2-18.7'/%3e%3cpath%20id='Stroke-6'%20class='st2'%20d='M198.1,126.7c0,40.5-10.9,73.3-24.3,73.3c-13.4,0-24.3-32.8-24.3-73.3s10.9-73.3,24.3-73.3%20C187.2,53.3,198.1,86.2,198.1,126.7z'/%3e%3cpath%20id='Stroke-8'%20class='st2'%20d='M318.8,126.7c0,55.7-5.8,100.8-12.9,100.8c-7.1,0-12.9-45.1-12.9-100.8S298.9,25.9,306,25.9%20C313.1,25.9,318.8,71,318.8,126.7z'/%3e%3cpath%20id='Stroke-10'%20class='st2'%20d='M263,81.7h-38.6c3.8,13.6,5.9,28.8,5.9,44.9c0,16.1-2.1,31.4-5.9,44.9H263%20c-3.8-13.6-5.9-28.8-5.9-44.9C257.1,110.6,259.2,95.3,263,81.7z'/%3e%3cpolyline%20id='Stroke-12'%20class='st2'%20points='68.1,160.9%2013.7,126.7%2068.1,92.5%20'/%3e%3cpath%20id='Stroke-14'%20class='st3'%20d='M62.2,95.2c4.9,5.2,8.4,17.3,8.4,31.5c0,13.9-3.3,25.8-8.1,31.2'/%3e%3cpath%20id='Stroke-16'%20class='st2'%20d='M70.6,126.7l9.7-1.8'/%3e%3cpolyline%20id='Stroke-18'%20class='st4'%20points='99.1,121.4%20149.5,112%20197.3,108.9%20229.6,110.3%20258.5,104.6%20294,89.1%20317.6,83.4%20389.7,83.4%20'/%3e%3cpath%20id='Stroke-20'%20class='st2'%20d='M399.3,83.4h9.9'/%3e%3cpath%20id='Stroke-22'%20class='st2'%20d='M70.6,126.7l9.7,1.8'/%3e%3cpolyline%20id='Stroke-24'%20class='st4'%20points='99.1,132%20149.5,141.4%20197.3,144.5%20229.6,143.1%20258.5,148.8%20294,164.2%20317.6,170%20389.7,170%20'/%3e%3cpath%20id='Stroke-26'%20class='st2'%20d='M399.3,170h9.9'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", bn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.4,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20453.5%20255.1'%20style='enable-background:new%200%200%20453.5%20255.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill-rule:evenodd;clip-rule:evenodd;fill:%23FEFEFE;}%20.st1{fill:none;stroke:%23231F20;stroke-linecap:round;stroke-linejoin:round;}%20.st2{fill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;stroke:%23020303;}%20.st3{fill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;}%20%3c/style%3e%3ctitle%3ePage%201%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%3e%3cg%20id='Artboard-Copy-6'%20transform='translate(-85.000000,%20-1399.000000)'%3e%3cg%20id='Page-1'%20transform='translate(86.000000,%201399.000000)'%3e%3cg%20id='Group-28'%20transform='translate(322.924779,%2030.473684)'%3e%3cpolygon%20id='Fill-1'%20class='st0'%20points='102.4,128.5%2052.9,99.5%203.1,128.5%2052.6,157.4%20'/%3e%3cpolygon%20id='Stroke-3'%20class='st1'%20points='102.4,128.5%2052.9,99.5%203.1,128.5%2052.6,157.4%20'/%3e%3cpolygon%20id='Fill-6'%20class='st0'%20points='39.9,36.3%20-9.9,65.3%203,128.5%2052.8,99.5%20'/%3e%3cpolygon%20id='Stroke-8'%20class='st1'%20points='39.9,36.3%20-9.9,65.3%203,128.5%2052.8,99.5%20'/%3e%3cpolygon%20id='Fill-11'%20class='st0'%20points='65.7,36.7%20115.4,65.7%20102.5,128.9%2052.8,99.9%20'/%3e%3cpolygon%20id='Stroke-13'%20class='st1'%20points='65.7,36.7%20115.4,65.7%20102.5,128.9%2052.8,99.9%20'/%3e%3cpolygon%20id='Fill-16'%20class='st0'%20points='102.4,128.3%20115,80.2%2065.3,109.2%2052.7,157.3%20'/%3e%3cpolygon%20id='Stroke-18'%20class='st1'%20points='102.4,128.3%20115,80.2%2065.3,109.2%2052.7,157.3%20'/%3e%3cpolygon%20id='Fill-21'%20class='st0'%20points='2.8,128.3%20-9.8,80.2%2040,109.2%2052.7,157.3%20'/%3e%3cpolygon%20id='Stroke-23'%20class='st1'%20points='2.8,128.3%20-9.8,80.2%2040,109.2%2052.7,157.3%20'/%3e%3c/g%3e%3cg%20id='Group-4'%3e%3cpolygon%20id='Stroke-26'%20class='st2'%20points='48.9,109.6%2013.2,73.8%2048.9,38%2084.8,73.8%20'/%3e%3cpolygon%20id='Stroke-29'%20class='st2'%20points='84.8,145.5%2048.9,109.6%2084.8,73.8%20120.6,109.6%20'/%3e%3cpolygon%20id='Stroke-30'%20class='st2'%20points='120.6,109.6%2084.8,73.8%20120.6,38%20156.4,73.8%20'/%3e%3cpolygon%20id='Stroke-32'%20class='st2'%20points='120.6,181.3%2084.8,145.5%20120.6,109.6%20156.4,145.5%20'/%3e%3cpolygon%20id='Stroke-33'%20class='st2'%20points='84.8,217.1%2048.9,181.3%2084.8,145.5%20120.6,181.3%20'/%3e%3cpolygon%20id='Stroke-35'%20class='st2'%20points='156.4,217.1%20120.6,181.3%20156.4,145.5%20192.3,181.3%20'/%3e%3c/g%3e%3cpath%20id='Combined-Shape'%20class='st3'%20d='M254.2,134.3v9.3l18.9-16l-18.9-16v9.3h-30v13.4h30V134.3z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", vn = "/_build/assets/driver-3-D-NZZ1-l.svg", yn = "/_build/assets/driver-4-e2O6Wja2.svg", _n = "_canvas_1ndsk_1", xn = "_intro_1ndsk_6", Sn = "_noiseCancel_1ndsk_7", kn = "_clustering_1ndsk_8", In = "_perspective_1ndsk_9", $n = "_positioner_1ndsk_13", j = { canvas: _n, intro: xn, noiseCancel: Sn, clustering: kn, perspective: In, positioner: $n };
var An = ["<div", "><h2>Introduction</h2><p>More and more companies are investing into gathering various data, as access to sensors and cloud services has never been easier. But what are they going to do with the flooding amount of data?</p><p>Our core objective was to find out ways to<em> make&nbsp;sense </em>of data with rich visual representation.</p></div>"], jn = ["<h2", ">Challenges</h2>"], Cn = ["<p", ">Not all projects are planned ideally \u2013 in fact, it is harder to find a flawless setup. But this project was at another level, leaving us difficult challenges before we could even start. These are key challenges we had to face:</p>"], Pn = ["<h2", ">Approach</h2>"], Fn = ["<p", ">We did not have time to play ping-pong with our client. Instead, we decided to work on top of the challenges to convince the client with our approach.</p>"], Mn = ["<h3", ">Seeking for use cases</h3>"], Tn = ["<p", ">Our major challenge was to find <em>practical</em> use cases for complex 3d data visualisation. Fortunately, we learnt that visual data mining is indeed a growing field with the help of artificial intelligence. One good example we found was <!--$-->", "<!--/-->.</p>"], Wn = ["<h3", ">Extracting design drivers</h3>"], Dn = ["<p", ">Based on our findings on use cases, we moved on to explore ways to navigate through data. Our learnings and ideation results were compiled into design drivers.</p>"], Bn = ["<h3", ">Scenario generation</h3>"], On = ["<p", ">After defining and selecting our design drivers, we started to narrow down our potential target user to build a complete use case scenario for the visualisation.</p>"], Rn = ["<h2", ">Outcome</h2>"], En = ["<p", ">During the ideation phase, it became clear that a working prototype is needed to show how interactions with complex data visualisation is done. I worked closely with visual designer and interaction designer to prioritise features to meet the time constraint.</p>"], zn = ["<p", ">Based on the generated scenario and key design drivers, I created a fully working prototype to demonstrate how our concepts are achieved with live interaction. Below are some of the concepts we delivered with the prototype.</p>"], Ln = ["<div", "><h3>Noise Cancelling</h3><p>Errant data can be switched on or off to allow for a pure focus experience or a noisier view to explore new connections.</p><p>Try toggling data below:<br><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></p></div>"], Nn = ["<div", "><h3>Clustering and Alignment</h3><p>The easiest way of visualising relevance of data is through clustering them. With the help of latest technologies such as machine learning, this process can be done automatically to discover new patterns.</p></div>"], Vn = ["<div", "><h3>Different Points of View</h3><p>A simple and one of the most common methods to view data in different ways. By combining recipes generated from latest technologies, this simple approach can unveil unexpected insights.</p></div>"], Xn = ["<h2", ">Learnings</h2>"], Hn = ["<p", ">This was my first project in which I took role completely as a Creative Technologist. On top of the challenges we had for the project, it was a very good opportunity to define my role within the studio as well as to showcase what tangible output we could produce together.</p>"], Un = ["<h3", ">Pushing our beliefs to the client</h3>"], Gn = ["<p", ">We had to face a client with very strong opinions towards the visual design output. We were constantly challenged to convince our client with the need of proper user research and use case scenario. We often did not have time to argue with the client, but instead we learnt to move forward believing in our approach to fight back later by showing the result.</p>"], qn = ["<h3", ">Bridging the creativity and technology</h3>"], Jn = ["<p", ">Just as the title states, my primary role is to establish a close connection between design and technology within the team. Coming from a design background, I actively participated in design process not only to adjust technical capabilities, but also to expand our design ideas based on technical knowledge.</p>"], Kn = ["<h3", ">Extending Fjord&apos;s capabilities in prototyping</h3>"], Yn = ["<p", ">My personal aim in this project was to demonstrate my capabilities in programming to the studio. I pushed the team to create a fully working visualisation rather than a click dummy. I have successfully delivered a high-fidelity prototype within 4-week period, and designers were convinced we could escalate our deliverables with next-level tangible outputs.</p>"], Zn = ["<div", ' class="scroll-area"><header', ">", '</header><main class="visual-intelligence__content project__main"><div class="container-fluid"><!--$-->', "<!--/--><!--$-->", '<!--/--></div><div class="container-fluid">', '</div><div class="container-fluid"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="container-fluid"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", '<!--/--></div><div class="container-fluid"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></main></div>"], Qn = ["<p", ">Our client was a massive corporate with nearly 150k employees. The only information provided to us was that we were supposed to target internal employees. To make things worse, we were not able to interview any of them.</p>"], eo = ["<p", ">We were not provided with any sample data we could ideate on. The official reason was confidentiality \u2013 but it was very clear to us that it was simply not defined. We were literally asked to deliver data visualisation without any data.</p>"], to = ["<p", ">The client already had a very strong idea on the tool&apos;s visual language. This was not fully aligned with our desires to produce <q>usable</q> visualisation. Rather, he wanted more visually pleasing one, putting aside the importance of use cases.</p>"], so = ["<p", ">Through the use of shadows, filters and lights we are able to expose new insights. Overlaps will show information in different ways for different perspectives. This is also about seeing the same thing in a totally different way. It&apos;s something very common, with a different perspective, e.g. infrared posters.</p>"], no = ["<p", ">Presented data changes based on angle of view, providing different ways to interpret it. Different angles can be achieved easily by changing the camera view or rotating the objects, with different number of viewports as well.</p>"], oo = ["<p", ">This concept will take the user on a data journey. It uses storytelling techniques to enable users to scroll through time, e.g. 5-year time-lapse. We explore the idea of presenting a snapshot in time \u2013 slowing everything down so it is understandable.</p>"], io = ["<p", ">We will explore the use of relativity to show connections, relationships (of different solutions). Example properties: size, shape, colour, fluidity, vibration, depth, speed, etc.</p>"];
function fo() {
  const { breakpoint: e } = useContext(O), [a, s] = createSignal(0), [t, o] = createSignal([true, true, true]);
  let u, c, d, h, b$1, w, f, T, W;
  const v$1 = () => [c, d, h, b$1, w, f, T], D = (S) => {
    o((F) => F.map((M, R) => R === S ? !M : M));
  }, [g, A$1] = createSignal(false), k = new IntersectionObserver((S) => {
    const F = S.find((M) => M.isIntersecting);
    F && s(v$1().indexOf(F.target));
  }, { rootMargin: "-40% 0%" });
  let y;
  return onMount(() => {
    document.body.classList.add("visual-intelligence");
    for (const S of v$1())
      k.observe(S);
  }), onCleanup(() => {
    k.disconnect(), y == null ? void 0 : y.disconnect(), document.body.classList.remove("visual-intelligence");
  }), createEffect(() => {
    a() === 3 ? o([false, true, false]) : o([true, true, true]);
  }), createEffect(() => {
    e() === "xs" ? (y || (y = new IntersectionObserver(([{ isIntersecting: S }]) => {
      A$1(S);
    }, { rootMargin: "-40% 0%" })), y.observe(W)) : y == null ? void 0 : y.unobserve(W);
  }), ssr(Zn, ssrHydrationKey(), ssrAttribute("class", escape(m(_e.hero, _e.sticky), true), false), escape(createComponent(he, { get class() {
    return j.canvas;
  }, viRef: u, stage: a, get children() {
    return createComponent(fe, { get children() {
      return [createComponent(tt, {}), createComponent(ee, { pointSetIndex: 0, popupText: "Unidentified machine", get isActive() {
        return t()[0];
      }, get disablePopup() {
        return g();
      } }), createComponent(ee, { pointSetIndex: 1, popupText: "Unrecognised user", get isActive() {
        return t()[1];
      }, get disablePopup() {
        return g();
      } }), createComponent(ee, { pointSetIndex: 2, popupText: "Unknown data", get isActive() {
        return t()[2];
      }, get disablePopup() {
        return g();
      } })];
    } });
  } })), escape(createComponent(P$1, { get headline() {
    return "How can we suggest ways to utilise complex data with limited information about\xA0users?";
  }, title: "Visual intelligence: use case scenarios for massive unknown data" })), escape(createComponent(fe$1, { agency: "Fjord", agencyLink: "https://www.fjordnet.com/", overview: `
              I explored and created ways to utilise a complex data
              visualisation. Moreover, I built working prototype to demonstrate
              the idea to convince the client.
            `, roles: ["Technical research", "Story telling", "Concept generation", "High-fidelity prototyping"], year: "2017-2018" })), escape(createComponent(b, { align: "left", fullHeight: true, get class() {
    return j.intro;
  }, get children() {
    return ssr(An, ssrHydrationKey() + ssrAttribute("class", escape(j.positioner, true), false));
  } })), escape(createComponent(de$1, {})), escape(createComponent(oe, { children: "...but we've never had any project without any\xA0user!" })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(jn, ssrHydrationKey()), ssr(Cn, ssrHydrationKey())];
  } })), escape(createComponent(A, { get cards() {
    return [{ title: "Undefined target user", children: ssr(Qn, ssrHydrationKey()) }, { title: "No access to any data", children: ssr(eo, ssrHydrationKey()) }, { title: "Pre-defined visuals", children: ssr(to, ssrHydrationKey()) }];
  }, col: 3 })), escape(createComponent(de$1, {})), escape(createComponent(oe, { children: "Cool visualisation without use case is... literally useless!" })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Pn, ssrHydrationKey()), ssr(Fn, ssrHydrationKey()), ssr(Mn, ssrHydrationKey()), ssr(Tn, ssrHydrationKey(), escape(createComponent(_, { href: "https://arxiv.org/pdf/1611.04558.pdf", children: "the use of Google Translate AI's visual representations for identifying connections between different languages" }))), ssr(Wn, ssrHydrationKey()), ssr(Dn, ssrHydrationKey())];
  } })), escape(createComponent(A, { col: 2, get cards() {
    return [{ title: "View data through lenses", image: fn, alt: "Design Driver 1", children: ssr(so, ssrHydrationKey()) }, { title: "Multi-faceted views", image: bn, alt: "Design Driver 2", children: ssr(no, ssrHydrationKey()) }, { title: "Visualising time and data", image: vn, alt: "Design Driver 3", children: ssr(oo, ssrHydrationKey()) }, { title: "Cluster forms identity", image: yn, alt: "Design Driver 4", children: ssr(io, ssrHydrationKey()) }];
  }, noPadding: true })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Bn, ssrHydrationKey()), ssr(On, ssrHydrationKey())];
  } })), escape(createComponent(v, { images: [{ srcset: qt, alt: "Scenario 1" }, { srcset: ls, alt: "Scenario 2" }, { srcset: ks, alt: "Scenario 3" }, { srcset: Es, alt: "Scenario 4" }, { srcset: en, alt: "Scenario 5" }, { srcset: wn, alt: "Scenario 6" }] })), escape(createComponent(de$1, {})), escape(createComponent(b, { get children() {
    return [ssr(Rn, ssrHydrationKey()), ssr(En, ssrHydrationKey()), ssr(zn, ssrHydrationKey())];
  } })), escape(createComponent(b, { align: "left", fullHeight: true, get class() {
    return j.noiseCancel;
  }, get children() {
    return ssr(Ln, ssrHydrationKey() + ssrAttribute("class", escape(j.positioner, true), false), escape(createComponent(Y, { get enabled() {
      return t()[0];
    }, handler: () => {
      D(0);
    } })), escape(createComponent(Y, { get enabled() {
      return t()[1];
    }, handler: () => {
      D(1);
    } })), escape(createComponent(Y, { get enabled() {
      return t()[2];
    }, handler: () => {
      D(2);
    } })));
  } })), escape(createComponent(b, { align: "left", fullHeight: true, get class() {
    return j.clustering;
  }, get children() {
    return ssr(Nn, ssrHydrationKey() + ssrAttribute("class", escape(j.positioner, true), false));
  } })), escape(createComponent(b, { align: "left", fullHeight: true, get class() {
    return j.perspective;
  }, get children() {
    return ssr(Vn, ssrHydrationKey() + ssrAttribute("class", escape(j.positioner, true), false));
  } })), escape(createComponent(de$1, {})), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Xn, ssrHydrationKey()), ssr(Hn, ssrHydrationKey())];
  } })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Un, ssrHydrationKey()), ssr(Gn, ssrHydrationKey())];
  } })), escape(createComponent(me$1, { alt: "Collaborating with an interaction designer.", srcset: Tt })), escape(createComponent(b, { get children() {
    return [ssr(qn, ssrHydrationKey()), ssr(Jn, ssrHydrationKey()), ssr(Kn, ssrHydrationKey()), ssr(Yn, ssrHydrationKey())];
  } })));
}
function bo(e) {
  return createComponent(he, { get class() {
    return m(j.canvas, e.class, ue.coverElement);
  }, get viRef() {
    return e.parentContainer;
  }, get children() {
    return createComponent(fe, { get children() {
      return [createComponent(et, {}), createComponent(Q, { pointSetIndex: 0 }), createComponent(Q, { pointSetIndex: 1 }), createComponent(Q, { pointSetIndex: 2 })];
    } });
  } });
}

const visualIntelligence = /*#__PURE__*/Object.freeze({
            __proto__: null,
            default: fo
});

export { O, bo as b, ge as g, visualIntelligence as v };
//# sourceMappingURL=visual-intelligence2.mjs.map
