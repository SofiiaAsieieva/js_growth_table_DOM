parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw i}}}}function r(e){return i(e)||o(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return l(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,r):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return l(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var a=document.querySelector(".append-row"),c=document.querySelector(".append-column"),d=document.querySelector(".remove-row"),u=document.querySelector(".remove-column");function f(){var e=document.querySelector("tbody");d.disabled=!1,e.append(e.children[0].cloneNode(!0)),e.children.length>=10&&(a.disabled=!0)}function y(){var e=document.querySelector("tbody");a.disabled=!1,e.children[0].remove(),2===e.children.length&&(d.disabled=!0)}function s(){var n=r(document.querySelectorAll("tr"));u.disabled=!1;var t,o=e(n);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.append(i.children[0].cloneNode(!0))}}catch(l){o.e(l)}finally{o.f()}n[0].children.length>=10&&(c.disabled=!0)}function m(){var n=r(document.querySelectorAll("tr"));c.disabled=!1;var t,o=e(n);try{for(o.s();!(t=o.n()).done;){t.value.children[0].remove()}}catch(i){o.e(i)}finally{o.f()}2===n[0].children.length&&(u.disabled=!0)}a.addEventListener("click",f),d.addEventListener("click",y),c.addEventListener("click",s),u.addEventListener("click",m);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.455deef3.js.map