import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import m from 'classnames';

var l=["<a",' target="_blank" rel="noreferrer noopener"',">","</a>"];function i(r){return ssr(l,ssrHydrationKey()+ssrAttribute("href",escape(r.href,!0),!1),ssrAttribute("class",escape(m(r.class),!0),!1),escape(r.children))}

export { i };
//# sourceMappingURL=external_link.mjs.map
