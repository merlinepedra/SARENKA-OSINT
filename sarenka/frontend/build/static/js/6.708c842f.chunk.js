(this.webpackJsonpsarenka=this.webpackJsonpsarenka||[]).push([[6],{106:function(n,t,e){"use strict";var r=e(5),a=e(4),o=e(22);function c(){var n=Object(r.a)(["\n      margin-top: 0;\n      margin-bottom: 5px;\n    "]);return c=function(){return n},n}function i(){var n=Object(r.a)(["\n  font-size: 1.7rem;\n  color: ",";\n  font-weight: ",";\n  word-break: ",";\n  ","\n"]);return i=function(){return n},n}var u=a.d.p(i(),o.a.colors.font,(function(n){return n.bold?o.a.font.weight.bold:o.a.font.weight.regular}),(function(n){return n.wordBreak?"break-all":"normal"}),(function(n){return n.listTitle&&Object(a.c)(c())}));t.a=u},107:function(n,t,e){"use strict";var r=e(5),a=e(4);function o(){var n=Object(r.a)(["\n  0%{\n    opacity: 0;\n  }\n  100%{\n    opacity: 1;\n  }\n"]);return o=function(){return n},n}var c=Object(a.e)(o());function i(){var n=Object(r.a)(["\n  background: #070809;\n  border: 1px solid #333333;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 30px;\n  animation: 0.5s "," ease-out forwards;\n  margin-bottom: 40px;\n"]);return i=function(){return n},n}var u=a.d.section(i(),c);t.a=u},108:function(n,t,e){"use strict";var r=e(5),a=e(0),o=e.n(a),c=e(4),i=e(109),u=e.n(i);function l(){var n=Object(r.a)(["\n  margin: 0 50px 50px 50px;\n  display: grid;\n  grid-gap: 30px;\n  @media (max-width: 630px) {\n    margin: 0 20px 20px 20px;\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  background-image: url(",");\n  background-size: 100% 100%;\n  text-align: center;\n  padding: 5vh 0;\n  margin: 0 10px;\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n  margin-bottom: 140px;\n"]);return d=function(){return n},n}var f=c.d.div(d()),b=c.d.section(s(),u.a),m=c.d.article(l());t.a=function(n){var t=n.search,e=n.result;return o.a.createElement(f,null,o.a.createElement(b,null,t),o.a.createElement(m,null,e))}},109:function(n,t,e){n.exports=e.p+"static/media/resultbackground.063560a4.png"},117:function(n,t,e){n.exports=e.p+"static/media/arrow-right.ad645f95.svg"},123:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(11),c=e(108),i=e(40),u=e(24),l=e(25),s=e.n(l),d=e(20),f=e(5),b=e(4),m=e(107),p=e(106),v=e(117),g=e.n(v);function h(){var n=Object(f.a)(["\n  position: relative;\n  border-collapse: collapse;\n  width: 100%;\n  text-align: left;\n  border-spacing: 0;\n  display: ",";\n"]);return h=function(){return n},n}var x=b.d.table(h(),(function(n){var t=n.visible;return void 0===t||t?"table":"none"}));function k(){var n=Object(f.a)(["\n  & > tr:nth-child(even) {\n    background: ",";\n  }\n"]);return k=function(){return n},n}var O=b.d.tbody(k(),(function(n){return n.theme.colors.darkGrey}));function j(){var n=Object(f.a)(["\n  0%{\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100%{\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]);return j=function(){return n},n}var E=Object(b.e)(j());function y(){var n=Object(f.a)(["\n        opacity: 0;\n        animation: "," 0.2s ease-out forwards;\n      "]);return y=function(){return n},n}function w(){var n=Object(f.a)(["\n        position: sticky;\n        top: 0;\n        z-index: 1;\n      "]);return w=function(){return n},n}function z(){var n=Object(f.a)(["\n  & > th {\n    ",";\n    ",";\n    padding: 10px;\n    background: ",";\n  }\n  & > th:nth-child(1) {\n    border-radius: 10px 0 0 0;\n  }\n  & > th:nth-last-child(1) {\n    border-radius: 0 10px 0 0;\n  }\n"]);return z=function(){return n},n}var S=b.d.tr(z(),(function(n){return n.sticky&&Object(b.c)(w())}),(function(n){return n.animate&&Object(b.c)(y(),E)}),(function(n){return n.theme.colors.redDarker}));function L(){var n=Object(f.a)(["\n  word-break: break-all;\n"]);return L=function(){return n},n}function R(){var n=Object(f.a)(["\n      opacity: 0;\n      animation: "," 0.2s ease-out forwards;\n      animation-delay: ","s;\n    "]);return R=function(){return n},n}function B(){var n=Object(f.a)(["\n  list-style: none;\n  padding: 10px 0;\n  width: 90%;\n  ",";\n\n  & > td {\n    padding: 0 10px;\n  }\n"]);return B=function(){return n},n}var F=b.d.tr(B(),(function(n){var t=n.delay;return t&&Object(b.c)(R(),E,t)})),J=Object(b.d)(p.a)(L()),N=function(n){var t=n.columns,e=n.wordBreak,r=n.delay;return a.a.createElement(F,{delay:r},t.map((function(n,t){return a.a.createElement("td",{key:t},t===e?a.a.createElement(J,null,n):a.a.createElement(p.a,null,n))})))};function D(){var n=Object(f.a)(["\n  border: none;\n  color: ",";\n  cursor: pointer;\n  margin-bottom: 15px;\n  background: transparent;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    width: 13px;\n    height: 13px;\n    margin-right: 5px;\n    background: transparent url(",") no-repeat 0 0;\n    background-size: 15px 15px;\n    transition: 0.3s;\n    transform: ",";\n  }\n"]);return D=function(){return n},n}function V(){var n=Object(f.a)(["\n  word-break: break-all;\n"]);return V=function(){return n},n}var Y=Object(b.d)(p.a)(V()),Z=b.d.button(D(),(function(n){return n.theme.colors.font}),g.a,(function(n){return n.shouldRotate?"rotateZ(90deg)":"rotateZ(0)"})),A=function(n){var t=n.searchLocation,e=n.softwares,o=Object(r.useState)(!1),c=Object(d.a)(o,2),i=c[0],u=c[1],l=Object(r.useRef)(null),s=Object(r.useRef)(null);return a.a.createElement(m.a,null,a.a.createElement(Y,null,"Search location: ",t),a.a.createElement(Z,{shouldRotate:i,onClick:function(){return u(!i)}},"Show search results"),a.a.createElement(x,{visible:i},a.a.createElement("thead",null,a.a.createElement(S,{ref:s,sticky:!0,animate:!0},a.a.createElement(p.a,{as:"th"},"Name"),a.a.createElement(p.a,{as:"th"},"Location"),a.a.createElement(p.a,{as:"th"},"Version"),a.a.createElement(p.a,{as:"th"},"Date"),a.a.createElement(p.a,{as:"th"},"Vendor"))),a.a.createElement(O,{ref:l},null===e||void 0===e?void 0:e.map((function(n,t){var e=n.name,r=n.location,o=n.version,c=n.date,i=n.vendor;return a.a.createElement(N,{key:t,columns:[e,r,o,c,i],wordBreak:1,delay:(t+1)/10})})))))},C=e(7);t.default=function(){var n=Object(C.h)().page,t=Object(o.c)((function(t){return t.registryScan[n]})),e=t.isLoading,r=t.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{search:a.a.createElement("img",{src:s.a,alt:"App logo."}),result:e?a.a.createElement(i.a,null):a.a.createElement(a.a.Fragment,null,"{}"!==JSON.stringify(r)?a.a.createElement(a.a.Fragment,null,r.map((function(n){var t=n.key,e=n.softwares;return a.a.createElement(A,{key:t,searchLocation:t,softwares:e})}))):a.a.createElement(u.a,{as:"h3"},"No result found"))}))}}}]);
//# sourceMappingURL=6.708c842f.chunk.js.map