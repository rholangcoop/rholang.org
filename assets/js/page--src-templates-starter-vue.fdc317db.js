(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{364:function(t,e,n){"use strict";var o=n(432),a=n.n(o),r=n(433),s=n.n(r);a.a.setOptions({highlight:function(t,e){return s.a.languages[e]?s.a.highlight(t,s.a.languages[e],e):t}}),e.a=a.a},365:function(t,e,n){},366:function(t,e,n){},367:function(t,e){},581:function(t,e){t.exports=function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t).catch((function(t){throw void 0!==t?t:new DOMException("The request is not allowed","NotAllowedError")}));var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",document.body.appendChild(e);var n=window.getSelection(),o=window.document.createRange();n.removeAllRanges(),o.selectNode(e),n.addRange(o);var a=!1;try{a=window.document.execCommand("copy")}catch(t){console.log("error",t)}return n.removeAllRanges(),window.document.body.removeChild(e),a?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}},582:function(t,e,n){"use strict";var o=n(365);n.n(o).a},583:function(module,exports,__webpack_require__){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_5__){return function(t){function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(module,exports,__webpack_require__){"use strict";eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _vue = __webpack_require__(5);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar popovers = [];\n\nexports.default = {\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true\n\t\t},\n\t\tcloseOnContentClick: {\n\t\t\t'default': true,\n\t\t\ttype: Boolean,\n\t\t\trequired: false\n\t\t}\n\t},\n\n\tdata: function data() {\n\t\treturn {\n\t\t\tisOpen: false\n\t\t};\n\t},\n\n\n\tmethods: {\n\t\tonPopoverToggle: function onPopoverToggle(e) {\n\t\t\te.stopPropagation();\n\n\t\t\tif (this.isOpen) {\n\t\t\t\tthis.isOpen = false;\n\n\t\t\t\tthis.$emit('popover:close');\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar length = popovers.length;\n\n\t\t\tif (length > 1) {\n\t\t\t\tfor (var i = 0; i < length; i++) {\n\t\t\t\t\tvar popover = popovers[i];\n\n\t\t\t\t\tif (popover.isOpen) {\n\t\t\t\t\t\tpopover.isOpen = false;\n\n\t\t\t\t\t\tthis.$emit('popover:close');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.isOpen = true;\n\n\t\t\tdocument.documentElement.addEventListener('click', this.onDocumentClick, false);\n\n\t\t\tthis.$emit('popover:open');\n\t\t},\n\t\tonDocumentClick: function onDocumentClick() {\n\t\t\tthis.isOpen = false;\n\n\t\t\tthis.$emit('popover:close');\n\t\t},\n\t\tonPopoverContentClick: function onPopoverContentClick(e) {\n\t\t\te.stopPropagation();\n\n\t\t\tif (this.closeOnContentClick) {\n\t\t\t\tthis.isOpen = false;\n\n\t\t\t\tthis.$emit('popover:close');\n\t\t\t}\n\t\t},\n\t\tremoveDocumentEvent: function removeDocumentEvent() {\n\t\t\tdocument.documentElement.removeEventListener('click', this.onDocumentClick, false);\n\t\t}\n\t},\n\n\tcomputed: {\n\t\tid: function id() {\n\t\t\treturn 'popover-' + this.name;\n\t\t}\n\t},\n\n\tmounted: function mounted() {\n\t\tpopovers.push(this);\n\n\t\tthis.$on('popover:close', this.removeDocumentEvent);\n\t},\n\tbeforeDestroy: function beforeDestroy() {\n\t\tthis.removeDocumentEvent();\n\n\t\tpopovers.length = 0;\n\t}\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/component/js/Popover.vue\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0")},function(module,exports){eval('// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"remove":true}!./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-compiler?{"id":"data-v-cba4a60a","scoped":false,"hasInlineConfig":false}!./~/sass-loader/lib/loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/component/js/Popover.vue\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?./~/extract-text-webpack-plugin/loader.js?%7B%22omit%22:1,%22remove%22:true%7D!./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-compiler?%7B%22id%22:%22data-v-cba4a60a%22,%22scoped%22:false,%22hasInlineConfig%22:false%7D!./~/sass-loader/lib/loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0')},function(module,exports){eval("// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = Object.create(options.computed || null)\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n    options.computed = computed\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/component-normalizer.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/vue-loader/lib/component-normalizer.js?")},function(module,exports){eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'div\', {\n    staticClass: "popover",\n    class: ( _obj = {\n      open: _vm.isOpen\n    }, _obj[_vm.name] = true, _obj )\n  }, [_c(\'div\', {\n    staticClass: "popover__face",\n    attrs: {\n      "aria-owns": _vm.id\n    },\n    on: {\n      "click": _vm.onPopoverToggle\n    }\n  }, [_vm._t("face", [_c(\'a\', {\n    attrs: {\n      "href": "#"\n    }\n  }, [_vm._v("popover")])])], 2), _vm._v(" "), (_vm.isOpen) ? _c(\'div\', {\n    staticClass: "popover__container",\n    attrs: {\n      "id": _vm.id\n    },\n    on: {\n      "click": _vm.onPopoverContentClick\n    }\n  }, [_vm._t("content")], 2) : _vm._e()])\n  var _obj;\n},staticRenderFns: []}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/template-compiler?{"id":"data-v-cba4a60a"}!./~/vue-loader/lib/selector.js?type=template&index=0!./src/component/js/Popover.vue\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?./~/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-cba4a60a%22%7D!./~/vue-loader/lib/selector.js?type=template&index=0')},function(module,exports,__webpack_require__){eval("\n/* styles */\n__webpack_require__(1)\n\nvar Component = __webpack_require__(2)(\n  /* script */\n  __webpack_require__(0),\n  /* template */\n  __webpack_require__(3),\n  /* scopeId */\n  null,\n  /* cssModules */\n  null\n)\n\nmodule.exports = Component.exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/component/js/Popover.vue\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?")},function(module,exports){eval('module.exports = __WEBPACK_EXTERNAL_MODULE_5__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {"root":"Vue","commonjs2":"vue","commonjs":"vue","amd":"vue"}\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22Vue%22,%22commonjs2%22:%22vue%22,%22commonjs%22:%22vue%22,%22amd%22:%22vue%22%7D?')}])},module.exports=factory(__webpack_require__(1))},584:function(t,e,n){"use strict";var o=n(366);n.n(o).a},585:function(t,e,n){"use strict";var o=n(367),a=n.n(o);e.default=a.a},765:function(t,e,n){"use strict";n.r(e);n(181);var o,a=n(128),r=(n(129),n(581)),s=n.n(r),i=n(364),l=n(416),c=(n(582),n(0)),d=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton"})}),[],!1,null,null,null).exports,p=Object(c.a)({},(function(t,e){var n=e._c;return n("svg",e._g(e._b({class:["icon-clipboard_svg__feather icon-clipboard_svg__feather-clipboard",e.data.staticClass,e.data.class],style:[void 0,e.data.style],attrs:{width:e.data.attrs&&void 0!==e.data.attrs.width?e.data.attrs.width:"24",height:e.data.attrs&&void 0!==e.data.attrs.height?e.data.attrs.height:"24",viewBox:e.data.attrs&&void 0!==e.data.attrs.viewBox?e.data.attrs.viewBox:"0 0 24 24",fill:e.data.attrs&&void 0!==e.data.attrs.fill?e.data.attrs.fill:"none",stroke:e.data.attrs&&void 0!==e.data.attrs.stroke?e.data.attrs.stroke:"currentColor","stroke-width":e.data.attrs&&void 0!==e.data.attrs["stroke-width"]?e.data.attrs["stroke-width"]:"2","stroke-linecap":e.data.attrs&&void 0!==e.data.attrs["stroke-linecap"]?e.data.attrs["stroke-linecap"]:"round","stroke-linejoin":e.data.attrs&&void 0!==e.data.attrs["stroke-linejoin"]?e.data.attrs["stroke-linejoin"]:"round"}},"svg",e.data.attrs,!1),e.data.on),[n("path",{attrs:{d:"M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"}}),n("rect",{attrs:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}})])}),[],!0,null,null,null).exports,u=n(39),v=Object(c.a)({},(function(t,e){var n=e._c;return n("svg",e._g(e._b({class:[void 0,e.data.staticClass,e.data.class],style:[void 0,e.data.style],attrs:{width:e.data.attrs&&void 0!==e.data.attrs.width?e.data.attrs.width:"40",height:e.data.attrs&&void 0!==e.data.attrs.height?e.data.attrs.height:"40",viewBox:e.data.attrs&&void 0!==e.data.attrs.viewBox?e.data.attrs.viewBox:"0 0 40 40"}},"svg",e.data.attrs,!1),e.data.on),[n("defs",[n("radialGradient",{attrs:{id:"logo-netlify-small_svg__a",cy:"0%",r:"100.11%",fx:"50%",fy:"0%",gradientTransform:"matrix(0 .9989 -1.152 0 .5 -.5)"}},[n("stop",{attrs:{offset:"0%","stop-color":"#20C6B7"}}),n("stop",{attrs:{offset:"100%","stop-color":"#4D9ABF"}})],1)],1),n("path",{attrs:{fill:"url(#logo-netlify-small_svg__a)",d:"M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 01-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 01-.033.006h-.015a.104.104 0 01-.02-.017 1.716 1.716 0 00-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 00-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 00-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 001.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01a.136.136 0 01.006-.029c.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 00.695-.517c.024-.028.053-.055.09-.06a.09.09 0 01.029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 00-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 01.076.033c.013.013.016.027.019.043a1.757 1.757 0 001.028 1.175c.028.014.016.045.003.078a.238.238 0 00-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 01-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643a.15.15 0 01.04-.047c.025-.018.061-.01.091 0a2.434 2.434 0 001.638-.083c.027-.01.054-.017.075.002a.19.19 0 01.028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 01.033-.007c.034 0 .054.034.072.065a2.91 2.91 0 00.13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 00.03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 01.09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 004.626 6.687c.027.036.057.076.026.106a2.776 2.776 0 00-.395.528.16.16 0 01-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 00.523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063a.138.138 0 01-.043.05c-.024.015-.058.008-.086.001a2.274 2.274 0 00-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 01-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 011.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 01-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 00-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 01-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 00-.548.273.154.154 0 00-.02.017c-.011.012-.022.023-.04.025a.114.114 0 01-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 00-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 010 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 00.014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 01.034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 00-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"}})])}),[],!0,null,null,null).exports,m=Object(c.a)({},(function(t,e){var n=e._c;return n("svg",e._g(e._b({class:[void 0,e.data.staticClass,e.data.class],style:[void 0,e.data.style],attrs:{viewBox:e.data.attrs&&void 0!==e.data.attrs.viewBox?e.data.attrs.viewBox:"0 0 1024 1024"}},"svg",e.data.attrs,!1),e.data.on),[n("g",{attrs:{fill:"currentColor"}},[n("path",{attrs:{d:"M719.001 851V639.848L902 533.802v211.465L719.001 851M302.082 643.438L122.167 539.135v208.606l179.915 104.832V643.438M511.982 275.795l182.957-106.162L512.06 63 328.436 169.987l183.546 105.808"}})]),n("g",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"80","stroke-miterlimit":"10"}},[n("path",{attrs:{d:"M899 287.833L509 513v450M122.167 289L511.5 513"}}),n("path",{attrs:{d:"M121 739.083l389.917 223.959L901 738.333V288L511 62 121 289z"}})])])}),[],!0,null,null,null).exports,h=n(583),f=n.n(h),_={},b={components:{Starters:l.a,Skeleton:d,ClipboardIcon:p,NetlifyLogo:v,CodeSandboxLogo:m,Popover:f.a,GithubIcon:u.a},data:function(){return{readme:"",isLoading:!0}},computed:{siteName:function(){return this.$page.starter.repo.split("/")[1]},githubUrl:function(){return"https://github.com/".concat(this.$page.starter.repo)},netlifyDeployUrl:function(){return"https://app.netlify.com/start/deploy?repository=https://github.com/".concat(this.$page.starter.repo)},codeSandboxUrl:function(){return"https://codesandbox.io/s/github/".concat(this.$page.starter.repo)}},mounted:(o=Object(a.a)(regeneratorRuntime.mark((function t(){var e,n,o,a,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.$page.starter.repo,n="https://api.github.com/repos/".concat(e,"/readme"),!_[e]){t.next=6;break}return this.readme=_[e],this.isLoading=!1,t.abrupt("return");case 6:return this.isLoading=!0,t.next=9,fetch(n);case 9:return o=t.sent,t.next=12,o.json();case 12:return a=t.sent,t.next=15,fetch(a.download_url);case 15:return r=t.sent,t.next=18,r.text();case 18:s=t.sent,this.readme=_[e]=Object(i.a)(s),this.isLoading=!1;case 21:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{copyCommand:function(){s()(this.$refs.command.textContent)}}},g=(n(584),n(585)),x=Object(c.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Starters",{staticClass:"starter"},[n("div",{staticClass:"starter__header flex"},[t.$page.starter.platforms?n("g-image",{staticClass:"starter__header-platform-logo",attrs:{src:t.$page.starter.platforms.logo}}):t._e(),n("strong",{staticClass:"starter__header-title"},[t._v(t._s(t.$page.starter.title))]),t.$page.starter.author.path?n("g-link",{staticClass:"starter__header-author",attrs:{to:t.$page.starter.author.path}},[t._v("\n          by "+t._s(t.$page.starter.author.title)+"\n      ")]):t._e(),n("div",{staticClass:"flex gap-20 hide-for-small",staticStyle:{"margin-left":"auto"}},[n("a",{staticClass:"button button--blank",attrs:{rel:"noopener noreferrer",target:"_blank",href:t.githubUrl,title:"View on Github","aria-label":"View on Github"}},[n("github-icon")],1),t.$page.starter.preview?n("a",{staticClass:"button button--blank",attrs:{rel:"noopener noreferrer",target:"_blank",href:t.$page.starter.preview,title:"Live preview","aria-label":"Live preview"}},[n("svg",{staticClass:"feather feather-eye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}}),n("circle",{attrs:{cx:"12",cy:"12",r:"3"}})])]):t._e(),n("Popover",{attrs:{name:"InstallThis",closeOnContentClick:!1}},[n("div",{attrs:{slot:"face"},slot:"face"},[n("button",{staticClass:"button primary button--small"},[t._v("Install now  ")])]),n("div",{attrs:{slot:"content"},slot:"content"},[n("p",{staticStyle:{"margin-bottom":".5rem",display:"block"}},[t._v("\n            Install locally with "),n("strong",[n("g-link",{attrs:{to:"/docs/gridsome-cli/"}},[t._v("Gridsome CLI")])],1)]),n("div",{staticClass:"mb"},[n("code",{staticClass:"starter__command flex"},[n("span",{ref:"command"},[t._v("gridsome create my-project "+t._s(t.$page.starter.repo))]),n("button",{staticClass:"button button--xsmall",on:{click:function(e){return t.copyCommand()}}},[n("ClipboardIcon",{attrs:{title:"Copy to clipboard",width:"16",height:"16"}}),n("span",{staticStyle:{"margin-left":"0"}},[t._v(" Copy ")])],1)])]),n("hr"),n("div",{staticClass:"deploy-buttons flex"},[n("a",{staticClass:"button button--small",attrs:{href:t.codeSandboxUrl}},[n("CodeSandboxLogo",{attrs:{alt:"CodeSandbox",height:"16"}}),t._v(" Open in CodeSandbox\n              ")],1),n("a",{staticClass:"button button--small",attrs:{href:t.netlifyDeployUrl}},[n("NetlifyLogo",{attrs:{alt:"Netlify"}}),t._v(" Deploy to Netlify\n              ")],1)])])])],1)],1),t.$page.starter.screenshot?n("div",{staticClass:"starter__image",staticStyle:{order:"2"}},[n("g-image",{attrs:{src:t.$page.starter.screenshot}})],1):n("hr"),n("div",{staticClass:"starter__content"},[t.isLoading?n("div",{staticStyle:{width:"80%"}},[n("Skeleton"),n("Skeleton",{staticStyle:{height:"15px"}}),n("Skeleton",{staticStyle:{height:"15px",width:"80%",opacity:".6"}}),n("Skeleton",{staticStyle:{height:"15px",width:"85%",opacity:"1"}}),n("Skeleton",{staticStyle:{height:"15px",width:"85%",opacity:"1"}}),n("Skeleton",{staticStyle:{height:"15px",width:"65%",opacity:"1"}}),n("Skeleton",{staticStyle:{height:"15px",width:"55%",opacity:"1"}}),n("Skeleton",{staticStyle:{height:"15px",width:"75%",opacity:"1"}})],1):t._e(),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.readme)}})])])}),[],!1,null,null,null);"function"==typeof g.default&&Object(g.default)(x);e.default=x.exports}}]);