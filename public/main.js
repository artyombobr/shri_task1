!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/public",t(t.s=0)}([function(n,e,t){t(1)},function(n,e,t){var o=t(2);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=n.exports=t(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:800);",""]),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=PT+Mono);",""]),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=PT+Sans);",""]);var o=t(4),i=o(t(5)),r=o(t(6)),a=o(t(7));e.push([n.i,'@charset "UTF-8";\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0; }\n\nhtml {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\nmain {\n  display: block; }\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\npre {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\na {\n  background-color: transparent; }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\nb, strong {\n  font-weight: bolder; }\n\ncode, kbd, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\nimg {\n  border-style: none; }\n\nbutton, input, optgroup, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0; }\n\nbutton, input {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\n[type=button], [type=reset], [type=submit], button {\n  -webkit-appearance: button; }\n\n[type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n[type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\nfieldset {\n  padding: .35em .75em .625em; }\n\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\ntextarea {\n  overflow: auto; }\n\n[type=checkbox], [type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\n[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\ndetails {\n  display: block; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none; }\n.button {\n  height: 52px;\n  color: #ffffff;\n  border-radius: 4px;\n  background: #0059D9;\n  font-family: "Montserrat", sans-serif;\n  font-size: 18px;\n  line-height: 24px;\n  border: none;\n  outline: none;\n  transition: background 1s, opacity 1s; }\n  .button:hover {\n    background: #000000; }\n  .button:active {\n    background: #0059D9;\n    opacity: 0.7; }\n\n.input {\n  width: 100%;\n  border: 1px solid rgba(31, 64, 111, 0.2);\n  border-radius: 4px;\n  transition: border-color 0.5s; }\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 124px 0 124px 0; }\n  .header__img {\n    border-radius: 50%;\n    width: 340px;\n    margin-bottom: 36px; }\n  .header__name {\n    font-size: 40px;\n    font-family: "Montserrat", sans-serif;\n    line-height: 44px;\n    margin: 0 0 8px 0; }\n  .header__title {\n    text-align: center;\n    opacity: 0.7;\n    margin: 0 0 20px 0;\n    font-family: "PT Mono", monospace;\n    font-size: 14px;\n    line-height: 20px; }\n  .header__contact {\n    width: 280px; }\n\n@media screen and (max-width: 600px) {\n  .header {\n    margin: 165px 40px 165px 40px; }\n    .header__img {\n      width: 250px;\n      margin-bottom: 32px; }\n    .header__name {\n      font-size: 32px;\n      line-height: 36px; }\n    .header__title {\n      width: 280px; } }\n\n@media screen and (max-width: 320px) {\n  .header {\n    margin: 88px 20px 87px 20px; }\n    .header__img {\n      width: 205px;\n      margin-bottom: 32px; }\n    .header__name {\n      font-size: 32px;\n      line-height: 36px; } }\n\n.expectations {\n  background: #FFFFFFFF;\n  padding: 100px 40px 100px 40px; }\n\n.accordion {\n  max-width: 700px;\n  margin: auto;\n  list-style: none; }\n  .accordion__title {\n    font-family: "Montserrat", sans-serif;\n    font-size: 32px;\n    margin-bottom: 16px;\n    line-height: 36px; }\n  .accordion__item {\n    border-top: 1px solid #D2D9E2;\n    position: relative;\n    font-family: "PT Mono", monospace;\n    font-size: 14px;\n    line-height: 20px; }\n\n.accordion-item input {\n  display: none; }\n\n.accordion-item__title {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  height: 52px; }\n  .accordion-item__title h3 {\n    font-family: "Montserrat", sans-serif;\n    color: #0059D9;\n    font-size: 18px;\n    transition: all 0.5s; }\n  .accordion-item__title:hover h3 {\n    color: #000; }\n  .accordion-item__title:before, .accordion-item__title:after {\n    content: "";\n    position: absolute;\n    display: block;\n    width: 2px;\n    height: 16px;\n    right: 8px;\n    background-color: #0059D9;\n    transition: all 1s; }\n  .accordion-item__title:after {\n    transform: rotate(90deg); }\n\n.accordion-item__content {\n  max-width: 520px;\n  max-height: 0;\n  line-height: 20px;\n  overflow: hidden;\n  transition: all linear 0.9s; }\n\n.accordion-item input:checked ~ .accordion-item__content {\n  max-height: 80px;\n  padding-bottom: 18px;\n  transition: all linear 1s; }\n\n.accordion-item__title:hover:after,\n.accordion-item input:checked ~ .accordion-item__title:after {\n  transform: rotate(45deg);\n  background-color: #000000; }\n\n.accordion-item__title:hover:before,\n.accordion-item input:checked ~ .accordion-item__title:before {\n  transform: rotate(-45deg);\n  background-color: #000000; }\n\n.accordion-item input:checked ~ .accordion-item__title h3 {\n  color: #000000; }\n\n@media screen and (max-width: 600px) {\n  .expectations {\n    max-width: 520px;\n    padding: 52px 40px; }\n  .accordion-item__content {\n    max-width: 385px; } }\n\n@media screen and (max-width: 320px) {\n  .expectations {\n    max-width: 280px;\n    padding: 52px 20px; } }\n\n.portfolio {\n  background: #25282a;\n  color: #FFFFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px 40px; }\n  .portfolio__title {\n    font-family: "Montserrat", sans-serif;\n    font-size: 32px;\n    line-height: 36px; }\n  .portfolio__text {\n    opacity: 0.7;\n    text-align: center;\n    font-weight: normal;\n    margin-top: 8px;\n    font-family: "PT Mono", monospace;\n    font-size: 14px;\n    line-height: 20px; }\n\n.portfolio-project {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 80px;\n  max-width: 700px; }\n  .portfolio-project__title {\n    font-family: "Montserrat", sans-serif;\n    font-size: 18px;\n    line-height: 24px; }\n  .portfolio-project__link {\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 20px; }\n    .portfolio-project__link a {\n      text-decoration: none;\n      color: #71ABFF;\n      transition: color 0.5s, opacity 0.5s;\n      font-family: "PT Mono", monospace;\n      font-size: 14px;\n      line-height: 20px; }\n      .portfolio-project__link a:hover {\n        color: #ffffff; }\n      .portfolio-project__link a:active {\n        color: #71ABFF;\n        opacity: 0.7; }\n\n.project-carousel {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  width: 100%; }\n  .project-carousel input {\n    display: none; }\n  .project-carousel__container {\n    width: 100%;\n    overflow: hidden;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 7px 22px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 8px; }\n  .project-carousel__items {\n    width: 400%;\n    list-style: none;\n    font-size: 0;\n    transition: transform 1s; }\n  .project-carousel__annotation {\n    font-family: "PT Sans", sans-serif;\n    font-size: 14px;\n    line-height: 20px;\n    flex-basis: 520px;\n    flex-grow: 1;\n    padding-top: 20px; }\n\n.carousel-items {\n  width: 400%;\n  list-style: none;\n  font-size: 0;\n  transition: transform 1s; }\n  .carousel-items__item {\n    float: left;\n    width: 25%; }\n    .carousel-items__item img {\n      width: 100%; }\n\n.carousel-navigation {\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 180px;\n  justify-content: center;\n  padding-top: 25px; }\n  .carousel-navigation label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 16px;\n    height: 16px; }\n  .carousel-navigation__circle {\n    float: right;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #71ABFF;\n    border: 1px solid #71ABFF;\n    transition: background 0.8s, border 0.8s; }\n    label:hover .carousel-navigation__circle {\n      background: white;\n      border: 1px solid white; }\n\n#slide-1-1:checked ~ .carousel-navigation label[for=slide-1-1] .carousel-navigation__circle {\n  background: transparent; }\n\n#slide-1-1:checked ~ .project-carousel__container .carousel-items {\n  transform: translateX(0%); }\n\n#slide-1-2:checked ~ .carousel-navigation label[for=slide-1-2] .carousel-navigation__circle {\n  background: transparent; }\n\n#slide-1-2:checked ~ .project-carousel__container .carousel-items {\n  transform: translateX(-25%); }\n\n#slide-1-3:checked ~ .carousel-navigation label[for=slide-1-3] .carousel-navigation__circle {\n  background: transparent; }\n\n#slide-1-3:checked ~ .project-carousel__container .carousel-items {\n  transform: translateX(-50%); }\n\n#slide-1-4:checked ~ .carousel-navigation label[for=slide-1-4] .carousel-navigation__circle {\n  background: transparent; }\n\n#slide-1-4:checked ~ .project-carousel__container .carousel-items {\n  transform: translateX(-75%); }\n\n@media screen and (min-width: 780px) {\n  .carousel-navigation {\n    justify-content: flex-end; }\n  .carousel-navigation label:last-of-type {\n    display: flex;\n    justify-content: flex-end;\n    width: 12px; } }\n\n@media screen and (max-width: 600px) {\n  .portfolio {\n    padding: 52px 40px; }\n    .portfolio-project {\n      padding-top: 60px; }\n      .portfolio-project__link {\n        margin-bottom: 16px; }\n  .project-carousel__navigation {\n    padding-top: 12px; }\n  .project-carousel__annotation {\n    padding-top: 14px; } }\n\n@media screen and (max-width: 320px) {\n  .portfolio {\n    padding: 52px 20px; } }\n\n.footer {\n  padding: 100px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.contact {\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .contact__title {\n    font-family: "Montserrat", sans-serif;\n    font-size: 32px;\n    color: #000000;\n    line-height: 36px;\n    text-align: center; }\n  .contact__text {\n    font-family: "PT Mono", monospace;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: center;\n    margin-bottom: 40px;\n    color: #000000;\n    margin-top: 21px; }\n  .contact__form {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-family: "PT Sans", sans-serif;\n    font-size: 16px;\n    line-height: 20px; }\n\n.social {\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  width: 176px;\n  justify-content: space-between;\n  margin-top: 16px; }\n  .social__link {\n    display: block;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    transition: background-color 0.5s; }\n    .social__link_fb {\n      background-color: #395a99;\n      background-image: url('+i+"); }\n    .social__link_vk {\n      background-color: #3d6898;\n      background-image: url("+r+"); }\n    .social__link_telegram {\n      background-color: #2ca5e0;\n      background-image: url("+a+'); }\n\n.form {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-family: "PT Sans", sans-serif;\n  font-size: 16px;\n  line-height: 20px; }\n  .form__submit {\n    width: 100%;\n    margin-top: 20px; }\n\n.form__input_type_name, .form__input_type_email {\n  padding: 6px 12px 8px 12px;\n  height: 20px;\n  width: 314px; }\n\n.form__input_type_textarea {\n  resize: none;\n  height: 124px;\n  margin-top: 20px;\n  padding: 6px 12px 3px 12px; }\n\n.form__input_type_file {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 34px;\n  margin-top: 20px; }\n  .form__input_type_file input {\n    display: none; }\n\n@media screen and (max-width: 800px) {\n  .form__input_type_name, .form__input_type_email {\n    width: 100%; }\n  .form__input_type_email, .form__input_type_textarea, .form__input_type_file {\n    margin-top: 16px; }\n  .form__submit {\n    margin-top: 16px; } }\n\n@media screen and (max-width: 600px) {\n  .footer {\n    padding: 52px 40px; }\n  .contact__text {\n    margin-bottom: 20px; } }\n\n@media screen and (max-width: 320px) {\n  .footer {\n    padding: 52px 20px; } }\n\nbody {\n  background: #eff1f2;\n  /*во время работы, flex использует ширину браузера, а элементы ширину viewport, \r\n\t поэтому во время проверки адаптивной верстки путем изменения самого окна браузеру, \r\n\t наблюдался баг, из-за лишних 17 пикселей полосы прокрутки*/\n  width: calc(100% + (100vw - 100%)); }\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(r).concat([i]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e){n.exports="images/fb.svg"},function(n,e){n.exports="images/vk.svg"},function(n,e){n.exports="images/telegram.svg"},function(n,e,t){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),c=null,p=0,l=[],d=t(9);function f(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function x(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return g(e,n.attrs),m(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=r}if(e.singleton){var a=p++;t=c||(c=h(e)),o=v.bind(null,t,a,!1),i=v.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),m(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=d(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){x(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){x(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return f(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,o.push(s)}n&&f(u(n,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var _,y=(_=[],function(n,e){return _[n]=e,_.filter(Boolean).join("\n")});function v(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);