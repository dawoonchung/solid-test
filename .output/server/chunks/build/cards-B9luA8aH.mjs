import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';
import m$1 from 'classnames';
import { For } from 'solid-js';
import { L } from './project.module-B5Zg89BM.mjs';

const m = "_card_u2oe8_1", g = "_image_u2oe8_16", h = "_title_u2oe8_21", a = { card: m, image: g, title: h, "col-2": "_col-2_u2oe8_26", "col-3": "_col-3_u2oe8_33" };
var d = ["<div", "><!--$-->", "<!--/--><h3", ">", "</h3><!--$-->", "<!--/--></div>"], _ = ["<figure", ">", "</figure>"], $ = ["<img", ">"];
function v(e) {
  if (e.image && !e.alt)
    throw new Error("You must provide alt text for the image.");
  return ssr(d, ssrHydrationKey() + ssrAttribute("class", escape(m$1(a.card, a[`col-${e.col}`]), true), false), e.image && ssr(_, ssrHydrationKey() + ssrAttribute("class", escape(a.image, true), false), typeof e.image == "string" ? ssr($, ssrHydrationKey() + ssrAttribute("src", escape(e.image, true), false) + ssrAttribute("alt", escape(e.alt, true), false)) : escape(createComponent(L, { get alt() {
    return e.alt;
  }, get srcset() {
    return e.image;
  } }))), ssrAttribute("class", escape(a.title, true), false), escape(e.title), escape(e.children));
}
const x = "_cards_10whc_1", C = { cards: x };
var w = ["<div", ">", "</div>"];
function A(e) {
  const t = ["project__section", "col-12"];
  return e.class && t.push(e.class), e.name && t.push(`${e.name}__section`), e.noPadding && t.push("section--no-padding"), e.col === 2 ? (t.push("col-sm-10"), t.push("offset-sm-1"), t.push("col-md-12"), t.push("offset-md-0"), t.push("col-lg-10"), t.push("offset-lg-1"), t.push("col-xl-8"), t.push("offset-xl-2")) : e.col === 3 && (t.push("col-sm-10"), t.push("offset-sm-1"), t.push("col-md-8"), t.push("offset-md-2"), t.push("col-lg-12"), t.push("offset-lg-0"), t.push("col-xl-10"), t.push("offset-xl-1")), ssr(w, ssrHydrationKey() + ssrAttribute("class", escape(m$1(t.join(" "), C.cards), true), false), escape(createComponent(For, { get each() {
    return e.cards;
  }, children: (c) => createComponent(v, { get alt() {
    return c.alt;
  }, get col() {
    return e.col;
  }, get image() {
    return c.image;
  }, get title() {
    return c.title;
  }, get children() {
    return c.children;
  } }) })));
}

export { A };
//# sourceMappingURL=cards-B9luA8aH.mjs.map
