import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';
import m from 'classnames';
import { For } from 'solid-js';
import { L } from './project.module-B5Zg89BM.mjs';

const f = "_gallery_ra65t_1", _ = "_item_ra65t_12", c = { gallery: f, item: _ };
var g = ["<div", ">", "</div>"], u = ["<figure", ">", "</figure>"];
function v(e) {
  return ssr(g, ssrHydrationKey() + ssrAttribute("class", escape(m(c.gallery, e.name && `${e.name}__section`, e.class, { "section--no-padding": e.noPadding }, "project__section col-12 col-sm-10 offset-sm-1 col-md-12 offset-md-0 col-xl-10 offset-xl-1"), true), false), escape(createComponent(For, { get each() {
    return e.images;
  }, children: (r) => ssr(u, ssrHydrationKey() + ssrAttribute("class", escape(c.item, true), false), escape(createComponent(L, { get alt() {
    return r.alt;
  }, get srcset() {
    return r.srcset;
  } }))) })));
}

export { v };
//# sourceMappingURL=gallery-SmyiBVw3.mjs.map
