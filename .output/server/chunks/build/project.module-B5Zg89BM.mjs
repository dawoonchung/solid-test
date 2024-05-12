import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';
import m from 'classnames';
import { For } from 'solid-js';

const h = "_quote_rhym9_1", v = "_noQuote_rhym9_9", $ = { quote: h, noQuote: v };
var x = ["<blockquote", ">", "</blockquote>"];
function oe(r) {
  return ssr(x, ssrHydrationKey() + ssrAttribute("class", escape(m($.quote, "col-12", "col-lg-10", "offset-lg-1", r.class, { [`${r.name}__quote`]: !!r.name, [$.noQuote]: r.noQuote }), true), false), escape(r.children));
}
var b = ["<source", ' type="', '">'], o = ["<source", ' type="', '" media="', '">'], j = ["<source", ' type="', '" media="(orientation: portrait)">'], w = ["<source", ' type="', '" media="(orientation: portrait) and (min-resolution: 192dpi)">'], y = ["<source", ' type="', '" media="(orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)">'], p = ["<source", ' type="', '" media="(orientation: portrait) and (min-resolution: 384dpi)">'], q = ["<source", ' type="', '" media="(orientation: portrait) and (-webkit-min-device-pixel-ratio: 3)">'], B = ["<picture", "><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><img", ' loading="lazy"></picture>'];
const u = { xs: 0, sm: 576, md: 1024, lg: 1200, xl: 1440, hd: 1920 };
function g(r, a = "jpeg") {
  const l = {};
  for (const [m, i] of Object.entries(r))
    switch (m) {
      case "xs":
        l[m] = ssr(b, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`);
        break;
      case "sm":
      case "md":
        l[m] = ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u[m], true)}px)`);
        break;
      case "lg":
        l[m] = [ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.sm, true)}px) and (min-resolution: 192dpi)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.sm, true)}px) and (-webkit-min-device-pixel-ratio: 2)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u[m], true)}px)`)];
        break;
      case "xl":
        l[m] = [ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.md, true)}px) and (min-resolution: 192dpi)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.md, true)}px) and (-webkit-min-device-pixel-ratio: 2)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u[m], true)}px)`)];
        break;
      case "portrait1x":
        l[m] = ssr(j, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`);
        break;
      case "portrait2x":
        l[m] = [ssr(w, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`), ssr(y, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(orientation: portrait) and (min-width: ${escape(u.sm, true)})`)];
        break;
      case "portrait3x":
        l[m] = [ssr(p, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`), ssr(q, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(orientation: portrait) and (min-width: ${escape(u.sm, true)}) and (min-resolution: 192dpi)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(orientation: portrait) and (min-width: ${escape(u.sm, true)}) and (-webkit-min-device-pixel-ratio: 2)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(orientation: portrait) and (min-width: ${escape(u.lg, true)})`)];
        break;
      case "default":
      default:
        l[m] = [ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.md, true)}px) and (min-resolution: 384dpi)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.md, true)}px) and (-webkit-min-device-pixel-ratio: 3)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.xl, true)}px) and (min-resolution: 192dpi)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.xl, true)}px) and (-webkit-min-device-pixel-ratio: 2)`), ssr(o, ssrHydrationKey() + ssrAttribute("srcset", escape(i, true), false), `image/${escape(a, true)}`, `(min-width: ${escape(u.hd, true)}px)`)];
        break;
    }
  return l;
}
function L(r) {
  const a = g(r.srcset.jpg), l = g(r.srcset.webp, "webp");
  return ssr(B, ssrHydrationKey(), escape(l.default), escape(l.portrait3x), escape(l.portrait2x), escape(l.portrait1x), escape(l.xl), escape(l.lg), escape(l.md), escape(l.sm), escape(l.xs), escape(a.default), escape(a.portrait3x), escape(a.portrait2x), escape(a.portrait1x), escape(a.xl), escape(a.lg), escape(a.md), escape(a.sm), escape(a.xs), ssrAttribute("alt", escape(r.alt, true), false) + ssrAttribute("class", escape(r.class, true), false) + ssrAttribute("src", escape(r.srcset.jpg.default, true), false));
}
var E = ["<a", ' target="_blank" rel="noreferrer noopener"', ">", "</a>"];
function _(r) {
  return ssr(E, ssrHydrationKey() + ssrAttribute("href", escape(r.href, true), false), ssrAttribute("class", escape(m(r.class), true), false), escape(r.children));
}
const P = "_hero_jjkc4_1", Q = "_background_jjkc4_8", I = "_cover_jjkc4_15", S = "_coverElement_jjkc4_20", T = "_overlay_jjkc4_26", A = "_content_jjkc4_35", C = "_subtitle_jjkc4_42", H = "_link_jjkc4_47", K = "_linkText_jjkc4_64", ue = { hero: P, background: Q, cover: I, coverElement: S, overlay: T, content: A, subtitle: C, link: H, linkText: K }, N = "_line_3otpa_1", R = { line: N };
var O = ["<hr", ">"];
function de() {
  return ssr(O, ssrHydrationKey() + ssrAttribute("class", escape(m(R.line, "col-2", "offset-5"), true), false));
}
const z = "_imageBlock_8psxd_1", F = { imageBlock: z };
var D = ["<div", "><!--$-->", "<!--/--><!--$-->", "<!--/--></div>"], G = ["<img", ">"];
function me(r) {
  return ssr(D, ssrHydrationKey() + ssrAttribute("class", escape(m("project__section col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2", F.imageBlock, r.className, r.name && `${r.name}__section`), true), false), r.src && ssr(G, ssrHydrationKey() + ssrAttribute("alt", escape(r.alt, true), false) + ssrAttribute("src", escape(r.src, true), false)), r.srcset && escape(createComponent(L, { get alt() {
    return r.alt;
  }, get srcset() {
    return r.srcset;
  } })));
}
const J = "_roles_ah6jh_1", M = "_overview_ah6jh_13", U = "_role_ah6jh_1", V = "_label_ah6jh_26", W = "_content_ah6jh_33", c = { roles: J, overview: M, role: U, label: V, content: W };
var X = ["<section", '><div class="container-fluid"><dl', "><dt", ">Summary</dt><dd", "><h2", ">", "</h2></dd></dl><dl", "><!--$-->", "<!--/--><dt", ">Key roles</dt><dd", "><ul", ">", "</ul></dd><dt", ">Project year</dt><dd", ">", "</dd><dt", ">Agency</dt><dd", ">", "</dd><dt", ">Client</dt><dd", ">", "</dd></dl></div></section>"], Y = ["<p", ">", "</p>"], Z = ["<li", ">", "</li>"];
function fe(r) {
  let a;
  return r.client ? a = r.clientLink ? createComponent(_, { get href() {
    return r.clientLink;
  }, get children() {
    return r.client;
  } }) : r.client : a = "[Non-disclosable]", ssr(X, ssrHydrationKey() + ssrAttribute("class", escape(m(c.roles, r.name && `${r.name}__section`, "project__section col-nested"), true), false), ssrAttribute("class", escape(m(c.summary, "col-12 col-sm-7 col-md-6 offset-md-1"), true), false), ssrAttribute("class", escape(c.label, true), false), ssrAttribute("class", escape(c.content, true), false), ssrAttribute("class", escape(m(c.overview, "font--overview"), true), false), escape(r.overview), ssrAttribute("class", escape(m(c.details, "col-12 col-sm-5 col-md-4"), true), false), r.projectLink && ssr(Y, ssrHydrationKey() + ssrAttribute("class", escape(m(c.content, c.projectLink, "font--default"), true), false), escape(createComponent(_, { get href() {
    return r.projectLink;
  }, children: "Project link" }))), ssrAttribute("class", escape(c.label, true), false), ssrAttribute("class", escape(c.content, true), false), ssrAttribute("class", escape(m(c.role, "font--default"), true), false), escape(createComponent(For, { get each() {
    return r.roles;
  }, children: (l) => ssr(Z, ssrHydrationKey(), escape(l)) })), ssrAttribute("class", escape(c.label, true), false), ssrAttribute("class", escape(m(c.content, c.year, "font--default"), true), false), escape(r.year), ssrAttribute("class", escape(c.label, true), false), ssrAttribute("class", escape(m(c.content, c.agency, "font--default"), true), false), r.agencyLink ? escape(createComponent(_, { get href() {
    return r.agencyLink;
  }, get children() {
    return r.agency;
  } })) : escape(r.agency), ssrAttribute("class", escape(c.label, true), false), ssrAttribute("class", escape(m(c.content, c.client, "font--default"), true), false), escape(a));
}
const ee = "_main_fkvu0_1", te = "_header_fkvu0_5", re = "_hero_fkvu0_12", ae = "_sticky_fkvu0_18", se = "_bg_fkvu0_22", ne = "_overlay_fkvu0_28", _e = { main: ee, header: te, hero: re, sticky: ae, bg: se, overlay: ne };

export { L, _e as _, _ as a, de as d, fe as f, me as m, oe as o, ue as u };
//# sourceMappingURL=project.module-B5Zg89BM.mjs.map
