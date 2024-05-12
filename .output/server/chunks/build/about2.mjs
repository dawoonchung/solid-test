import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';
import { P, b as b$1 } from './title-C2BBBZUd.mjs';
import 'classnames';

const c = "_header_1laim_1", l = "_cv_1laim_6", d = "_cvText_1laim_22", n = { header: c, cv: l, cvText: d };
var m = ["<p", ">Coming from interaction and service design background, I have been constantly challenging myself in blending technology into design process. Working as a freelance web designer and developer for over 7 years, I have gained expertise in modern web applications and services \u2013 from designing a platform-based service to actual implementation.</p>"], p = ["<p", ">Now as a Software Engineer, I take holistic approach from design research to technical implementation. I aim to take my role as a bridge between design and development throughout the process, by providing my own insights from technical point of view as well as building tangible prototypes for quick iterations \u2013 and sometimes, by delivering production-ready output.</p>"], u = ["<a", ' href="/da-woon.chung-curriculum-vitae.pdf"><span', ">C.V.</span></a>"], g = ["<div", ' class="about-page"><header', '><div class="container-fluid">', '</div></header><main class="about__content"><div class="container-fluid">', "</div></main></div>"];
function b() {
  return ssr(g, ssrHydrationKey(), ssrAttribute("class", escape(n.header, true), false), escape(createComponent(P, { title: "From user study to full-stack implementation", get headline() {
    return "As a software engineer, how can I utilise my unique background to bring research into real-life use\xA0cases?";
  } })), escape(createComponent(b$1, { get children() {
    return [ssr(m, ssrHydrationKey()), ssr(p, ssrHydrationKey()), ssr(u, ssrHydrationKey() + ssrAttribute("class", escape(n.cv, true), false), ssrAttribute("class", escape(n.cvText, true), false))];
  } })));
}

export { b as default };
//# sourceMappingURL=about2.mjs.map
