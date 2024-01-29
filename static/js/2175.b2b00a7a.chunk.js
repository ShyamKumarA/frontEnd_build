"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[2175],{53782:function(e,t,n){var o=n(25211),r=n(80184);t.Z=function(e){var t=e.children,n=e.title,s=e.subtitle;return(0,r.jsxs)(o.Zb,{children:[(0,r.jsx)(o.ll,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:n}),(0,r.jsxs)(o.eW,{className:"p-4",children:[(0,r.jsx)(o._R,{className:"text-muted mb-3",children:s||""}),(0,r.jsx)("div",{children:t})]})]})}},92175:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var o=n(1413),r=n(15671),s=n(43144),i=n(60136),a=n(27277),l=n(72791),c=n(86037),u=n(53782),p=n(97326),d=n(25211),h=n(80184),f=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={email:e.getStore().email},o._validateOnDemand=!0,o.validationCheck=o.validationCheck.bind((0,p.Z)(o)),o.isValidated=o.isValidated.bind((0,p.Z)(o)),o}return(0,s.Z)(n,[{key:"isValidated",value:function(){var e=this._grabUserInput(),t=this._validateData(e),n=!1;return Object.keys(t).every((function(e){return!0===t[e]}))?(this.props.getStore().email===e.email&&this.props.getStore().gender===e.gender||this.props.updateStore((0,o.Z)((0,o.Z)({},e),{},{savedToCloud:!1})),n=!0):this.setState(Object.assign(e,t,this._validationErrors(t))),n}},{key:"validationCheck",value:function(){if(this._validateOnDemand){var e=this._grabUserInput(),t=this._validateData(e);this.setState(Object.assign(e,t,this._validationErrors(t)))}}},{key:"_validateData",value:function(e){return{genderVal:""!==e.gender,emailVal:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e.email)}}},{key:"_validationErrors",value:function(e){return{genderValMsg:e.genderVal?"":"A gender selection is required",emailValMsg:e.emailVal?"":"A valid email is required"}}},{key:"_grabUserInput",value:function(){return{gender:this.gender.value,email:this.email.value}}},{key:"render",value:function(){var e=this,t={};return"undefined"===typeof this.state.genderVal||this.state.genderVal?t.genderCls="form-select mb-3":(t.genderCls="is-invalid form-select",t.genderValGrpCls="text-danger"),"undefined"===typeof this.state.emailVal||this.state.emailVal?t.emailCls="form-control":(t.emailCls="is-invalid form-control",t.emailValGrpCls="text-danger"),(0,h.jsx)("div",{className:"step step1 mt-5 ",children:(0,h.jsx)("div",{className:"row justify-content-md-center",children:(0,h.jsx)("div",{className:"col col-lg-6",children:(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("h4",{children:"Welcome, Please Enter your "}),(0,h.jsx)("form",{id:"Form",className:"form-horizontal mt-2",children:(0,h.jsxs)("div",{className:"form-group content form-block-holder",children:[(0,h.jsx)(d.__,{className:"control-label ",children:"Email"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{ref:function(t){e.email=t},autoComplete:"off",type:"email",placeholder:"john.smith@example.com",className:t.emailCls,required:!0,defaultValue:this.state.email,onBlur:this.validationCheck}),(0,h.jsx)("div",{className:t.emailValGrpCls,children:this.state.emailValMsg})]})]})})]})})})})}}]),n}(l.Component),m=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={},o}return(0,s.Z)(n,[{key:"render",value:function(){return(0,h.jsx)("div",{className:"step step2 mt-5",children:(0,h.jsx)("div",{className:"row justify-content-md-center",children:(0,h.jsx)("div",{className:"col-lg-8",children:(0,h.jsxs)("form",{children:[(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"staticEmail",className:"col-sm-2 col-form-label",children:"Date of Birth"}),(0,h.jsx)("div",{className:"col-sm-2",children:(0,h.jsxs)("select",{className:"form-select",children:[(0,h.jsx)("option",{value:"1",children:"1"}),(0,h.jsx)("option",{value:"2",children:"2"}),(0,h.jsx)("option",{value:"3",children:"3"})]})}),(0,h.jsx)("div",{className:"col-sm-4",children:(0,h.jsxs)("select",{className:"form-select",children:[(0,h.jsx)("option",{value:"Jan",children:"January"}),(0,h.jsx)("option",{value:"Feb",children:"February"}),(0,h.jsx)("option",{value:"Mar",children:"March"})]})}),(0,h.jsx)("div",{className:"col-sm-4",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Year"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Home Address"}),(0,h.jsxs)("div",{className:"col-sm-10",children:[(0,h.jsx)("div",{className:"row mb-3",children:(0,h.jsx)("div",{className:"col-sm-12",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Street Address"})})}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-sm-5",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Suburb"})}),(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsxs)("select",{className:"form-select",children:[(0,h.jsx)("option",{value:"nsw",children:"NSW"}),(0,h.jsx)("option",{value:"hfk",children:"HFK"}),(0,h.jsx)("option",{value:"uyr",children:"UYR"})]})}),(0,h.jsx)("div",{className:"col-sm-4",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Postcode"})})]})]})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"gender",className:"col-sm-2 col-form-label",children:"Gender"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsxs)("select",{className:"form-select",children:[(0,h.jsx)("option",{children:"Select Gender"}),(0,h.jsx)("option",{value:"1",children:"Male"}),(0,h.jsx)("option",{value:"2",children:"Female"}),(0,h.jsx)("option",{value:"3",children:"Other"})]})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"email",className:"col-sm-2 col-form-label",children:"Email"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"email",className:"form-control",placeholder:"Email"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"pphone",className:"col-sm-2 col-form-label",children:"Primary Phone"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Primary Number"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"ophone",className:"col-sm-2 col-form-label",children:"Other Phone"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Other Number"})})]})]})})})})}}]),n}(l.Component),v=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={},o}return(0,s.Z)(n,[{key:"render",value:function(){return(0,h.jsx)("div",{className:"step step3 mt-5",children:(0,h.jsx)("div",{className:"row justify-content-md-center",children:(0,h.jsx)("div",{className:"col-lg-8",children:(0,h.jsxs)("form",{children:[(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"height",className:"col-sm-2 col-form-Label",children:"Height"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Height (in cm)"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"weight",className:"col-sm-2 col-form-Label",children:"Weight"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Weight (in kg)"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"chest",className:"col-sm-2 col-form-Label",children:"Chest"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Chest (in inch)"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"waist",className:"col-sm-2 col-form-Label",children:"Waist"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Waist (in inch)"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"arm",className:"col-sm-2 col-form-Label",children:"Arm Length"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Arm Length (in cm)"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"vision",className:"col-sm-2 col-form-Label",children:"Vision"}),(0,h.jsx)("div",{className:"col-sm-10",children:(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Vision (ie. 6/6, 6/9, 6/12)"})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)(d.__,{htmlFor:"vision",className:"col-sm-2 col-form-Label",children:"Any Major Disease/Surgery in Past 10 Years?"}),(0,h.jsxs)("div",{className:"col-sm-10",children:[(0,h.jsxs)(d.cw,{check:!0,inline:!0,children:[(0,h.jsx)(d.II,{type:"radio",id:"customRadioInline1",name:"customRadioInline1"}),(0,h.jsx)(d.__,{check:!0,children:"No"})]}),(0,h.jsxs)(d.cw,{check:!0,inline:!0,children:[(0,h.jsx)(d.II,{type:"radio",id:"customRadioInline2",name:"customRadioInline1"}),(0,h.jsx)(d.__,{check:!0,children:"Only Surgery"})]}),(0,h.jsxs)(d.cw,{check:!0,inline:!0,children:[(0,h.jsx)(d.II,{type:"radio",id:"customRadioInline3",name:"customRadioInline1"}),(0,h.jsx)(d.__,{check:!0,children:"Only Disease"})]}),(0,h.jsxs)(d.cw,{check:!0,inline:!0,children:[(0,h.jsx)(d.II,{type:"radio",id:"customRadioInline4",name:"customRadioInline1"}),(0,h.jsx)(d.__,{check:!0,children:"Both"})]})]})]})]})})})})}}]),n}(l.Component),x=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={savedToCloud:e.getStore().savedToCloud},o}return(0,s.Z)(n,[{key:"render",value:function(){var e=this;return(0,h.jsx)("div",{className:"step step4 mt-5",children:(0,h.jsx)("div",{className:"row justify-content-md-center",children:(0,h.jsx)("div",{className:"col-lg-8",children:(0,h.jsx)("form",{id:"Form",className:"form-horizontal",children:(0,h.jsx)("div",{className:"form-group",children:(0,h.jsx)(d.__,{className:"col-md-12 control-label",children:this.state.savedToCloud?(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Thanks!"}),(0,h.jsx)("h2",{children:"Data was successfully saved to cloud..."})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Thanks"}),(0,h.jsx)("h2",{children:"Data was successfully saved to cloud..."}),(0,h.jsx)("span",{className:"btn btn-info text-white",onClick:function(){e.props.jumpToStep(4)},children:"Save"})]})})})})})})})}}]),n}(l.Component),y=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={},o.sampleStore={email:"",gender:"",savedToCloud:!1},o}return(0,s.Z)(n,[{key:"getStore",value:function(){return this.sampleStore}},{key:"updateStore",value:function(e){this.sampleStore=(0,o.Z)((0,o.Z)({},this.sampleStore),e)}},{key:"render",value:function(){var e=this,t=[{name:"Welcome",component:(0,h.jsx)(f,{getStore:function(){return e.getStore()},updateStore:function(t){e.updateStore(t)}})},{name:"Personal Details",component:(0,h.jsx)(m,{getStore:function(){return e.getStore()},updateStore:function(t){e.updateStore(t)}})},{name:"Physical Details",component:(0,h.jsx)(v,{getStore:function(){return e.getStore()},updateStore:function(t){e.updateStore(t)}})},{name:"Done",component:(0,h.jsx)(x,{getStore:function(){return e.getStore()},updateStore:function(t){e.updateStore(t)}})}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{title:"Form Steps",subtitle:(0,h.jsx)("span",{children:"Visit for more info https://www.npmjs.com/package/react-stepzilla"}),children:(0,h.jsx)("div",{className:"example",children:(0,h.jsx)("div",{className:"step-progress",children:(0,h.jsx)(c.Z,{steps:t,nextTextOnFinalActionStep:"Save"})})})})})}}]),n}(l.Component),j=y},93931:function(e,t,n){var o=n(5316),r=[],s=[],i=o.makeRequestCallFromTimer((function(){if(s.length)throw s.shift()}));function a(e){var t;(t=r.length?r.pop():new l).task=e,o(t)}function l(){this.task=null}e.exports=a,l.prototype.call=function(){try{this.task.call()}catch(e){a.onerror?a.onerror(e):(s.push(e),i())}finally{this.task=null,r[r.length]=this}}},5316:function(e,t,n){function o(e){s.length||(r(),!0),s[s.length]=e}e.exports=o;var r,s=[],i=0;function a(){for(;i<s.length;){var e=i;if(i+=1,s[e].call(),i>1024){for(var t=0,n=s.length-i;t<n;t++)s[t]=s[t+i];s.length-=i,i=0}}s.length=0,i=0,!1}var l="undefined"!==typeof n.g?n.g:self,c=l.MutationObserver||l.WebKitMutationObserver;function u(e){return function(){var t=setTimeout(o,0),n=setInterval(o,50);function o(){clearTimeout(t),clearInterval(n),e()}}}r="function"===typeof c?function(e){var t=1,n=new c(e),o=document.createTextNode("");return n.observe(o,{characterData:!0}),function(){t=-t,o.data=t}}(a):u(a),o.requestFlush=r,o.makeRequestCallFromTimer=u},64849:function(e,t,n){e.exports=n(64675)},70906:function(e,t,n){var o=n(5316);function r(){}var s=null,i={};function a(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor's argument is not a function");this._40=0,this._65=0,this._55=null,this._72=null,e!==r&&h(e,this)}function l(e,t){for(;3===e._65;)e=e._55;if(a._37&&a._37(e),0===e._65)return 0===e._40?(e._40=1,void(e._72=t)):1===e._40?(e._40=2,void(e._72=[e._72,t])):void e._72.push(t);!function(e,t){o((function(){var n=1===e._65?t.onFulfilled:t.onRejected;if(null!==n){var o=function(e,t){try{return e(t)}catch(n){return s=n,i}}(n,e._55);o===i?u(t.promise,s):c(t.promise,o)}else 1===e._65?c(t.promise,e._55):u(t.promise,e._55)}))}(e,t)}function c(e,t){if(t===e)return u(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var n=function(e){try{return e.then}catch(t){return s=t,i}}(t);if(n===i)return u(e,s);if(n===e.then&&t instanceof a)return e._65=3,e._55=t,void p(e);if("function"===typeof n)return void h(n.bind(t),e)}e._65=1,e._55=t,p(e)}function u(e,t){e._65=2,e._55=t,a._87&&a._87(e,t),p(e)}function p(e){if(1===e._40&&(l(e,e._72),e._72=null),2===e._40){for(var t=0;t<e._72.length;t++)l(e,e._72[t]);e._72=null}}function d(e,t,n){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=n}function h(e,t){var n=!1,o=function(e,t,n){try{e(t,n)}catch(o){return s=o,i}}(e,(function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,u(t,e))}));n||o!==i||(n=!0,u(t,s))}e.exports=a,a._37=null,a._87=null,a._61=r,a.prototype.then=function(e,t){if(this.constructor!==a)return function(e,t,n){return new e.constructor((function(o,s){var i=new a(r);i.then(o,s),l(e,new d(t,n,i))}))}(this,e,t);var n=new a(r);return l(this,new d(e,t,n)),n}},88858:function(e,t,n){var o=n(70906);e.exports=o,o.prototype.done=function(e,t){var n=arguments.length?this.then.apply(this,arguments):this;n.then(null,(function(e){setTimeout((function(){throw e}),0)}))}},65906:function(e,t,n){var o=n(70906);e.exports=o;var r=u(!0),s=u(!1),i=u(null),a=u(void 0),l=u(0),c=u("");function u(e){var t=new o(o._61);return t._65=1,t._55=e,t}o.resolve=function(e){if(e instanceof o)return e;if(null===e)return i;if(void 0===e)return a;if(!0===e)return r;if(!1===e)return s;if(0===e)return l;if(""===e)return c;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new o(t.bind(e))}catch(n){return new o((function(e,t){t(n)}))}return u(e)},o.all=function(e){var t=Array.prototype.slice.call(e);return new o((function(e,n){if(0===t.length)return e([]);var r=t.length;function s(i,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof o&&a.then===o.prototype.then){for(;3===a._65;)a=a._55;return 1===a._65?s(i,a._55):(2===a._65&&n(a._55),void a.then((function(e){s(i,e)}),n))}var l=a.then;if("function"===typeof l)return void new o(l.bind(a)).then((function(e){s(i,e)}),n)}t[i]=a,0===--r&&e(t)}for(var i=0;i<t.length;i++)s(i,t[i])}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,n){e.forEach((function(e){o.resolve(e).then(t,n)}))}))},o.prototype.catch=function(e){return this.then(null,e)}},94722:function(e,t,n){var o=n(70906);e.exports=o,o.prototype.finally=function(e){return this.then((function(t){return o.resolve(e()).then((function(){return t}))}),(function(t){return o.resolve(e()).then((function(){throw t}))}))}},64675:function(e,t,n){e.exports=n(70906),n(88858),n(94722),n(65906),n(48863),n(48397)},48863:function(e,t,n){var o=n(70906),r=n(93931);e.exports=o,o.denodeify=function(e,t){return"number"===typeof t&&t!==1/0?function(e,t){for(var n=[],r=0;r<t;r++)n.push("a"+r);var i=["return function ("+n.join(",")+") {","var self = this;","return new Promise(function (rs, rj) {","var res = fn.call(",["self"].concat(n).concat([s]).join(","),");","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],i)(o,e)}(e,t):function(e){for(var t=Math.max(e.length-1,3),n=[],r=0;r<t;r++)n.push("a"+r);var i=["return function ("+n.join(",")+") {","var self = this;","var args;","var argLength = arguments.length;","if (arguments.length > "+t+") {","args = new Array(arguments.length + 1);","for (var i = 0; i < arguments.length; i++) {","args[i] = arguments[i];","}","}","return new Promise(function (rs, rj) {","var cb = "+s+";","var res;","switch (argLength) {",n.concat(["extra"]).map((function(e,t){return"case "+t+":res = fn.call("+["self"].concat(n.slice(0,t)).concat("cb").join(",")+");break;"})).join(""),"default:","args[argLength] = cb;","res = fn.apply(self, args);","}","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],i)(o,e)}(e)};var s="function (err, res) {if (err) { rj(err); } else { rs(res); }}";o.nodeify=function(e){return function(){var t=Array.prototype.slice.call(arguments),n="function"===typeof t[t.length-1]?t.pop():null,s=this;try{return e.apply(this,arguments).nodeify(n,s)}catch(i){if(null===n||"undefined"==typeof n)return new o((function(e,t){t(i)}));r((function(){n.call(s,i)}))}}},o.prototype.nodeify=function(e,t){if("function"!=typeof e)return this;this.then((function(n){r((function(){e.call(t,null,n)}))}),(function(n){r((function(){e.call(t,n)}))}))}},48397:function(e,t,n){var o=n(70906);e.exports=o,o.enableSynchronous=function(){o.prototype.isPending=function(){return 0==this.getState()},o.prototype.isFulfilled=function(){return 1==this.getState()},o.prototype.isRejected=function(){return 2==this.getState()},o.prototype.getValue=function(){if(3===this._65)return this._55.getValue();if(!this.isFulfilled())throw new Error("Cannot get a value of an unfulfilled promise.");return this._55},o.prototype.getReason=function(){if(3===this._65)return this._55.getReason();if(!this.isRejected())throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._55},o.prototype.getState=function(){return 3===this._65?this._55.getState():-1===this._65||-2===this._65?0:this._65}},o.disableSynchronous=function(){o.prototype.isPending=void 0,o.prototype.isFulfilled=void 0,o.prototype.isRejected=void 0,o.prototype.getValue=void 0,o.prototype.getReason=void 0,o.prototype.getState=void 0}},86037:function(e,t,n){t.Z=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(72791)),r=i(n(52007)),s=i(n(64849));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,u(t).call(this,e))).state={compState:n.props.startAtStep,navState:n.getNavStates(n.props.startAtStep,n.props.steps.length)},n.hidden={display:"none"},n.nextTextOnFinalActionStep=n.props.nextTextOnFinalActionStep?n.props.nextTextOnFinalActionStep:n.props.nextButtonText,n.applyValidationFlagsToSteps(),n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,r=[{key:"applyValidationFlagsToSteps",value:function(){var e=this;this.props.steps.map((function(t,n){return e.props.dontValidate?t.validated=!0:t.validated=!(t.component.type&&t.component.type.prototype&&t.component.type.prototype.isValidated&&e.isStepAtIndexHOCValidationBased(n)),t}))}},{key:"getNavStates",value:function(e,t){for(var n=[],o=0;o<t;o++)o<e||!this.props.prevBtnOnLastStep&&e===t-1?n.push("done"):o===e?n.push("doing"):n.push("todo");return{current:e,styles:n}}},{key:"getPrevNextBtnLayout",value:function(e){var t=!0,n=!0,o=this.props.nextButtonText;return 0===e&&(t=!1),e===this.props.steps.length-2&&(o=this.props.nextTextOnFinalActionStep||o),e>=this.props.steps.length-1&&(n=!1,t=!1!==this.props.prevBtnOnLastStep),{showPreviousBtn:t,showNextBtn:n,nextStepText:o}}},{key:"checkNavState",value:function(e){this.props.onStepChange&&this.props.onStepChange(e)}},{key:"setNavState",value:function(e){this.setState({navState:this.getNavStates(e,this.props.steps.length)}),e<this.props.steps.length&&this.setState({compState:e}),this.checkNavState(e)}},{key:"handleKeyDown",value:function(e){13===e.which&&(this.props.preventEnterSubmission||"textarea"===e.target.type?"textarea"!==e.target.type&&e.preventDefault():this.next())}},{key:"jumpToStep",value:function(e){var t=this;if("undefined"===typeof e.target)this.setNavState(e);else{if(!this.props.stepsNavigation||e.target.value===this.state.compState)return e.preventDefault(),void e.stopPropagation();e.persist();var n=e.target.value<this.state.compState,o=!1,r=!1;this.abstractStepMoveAllowedToPromise(n).then((function(){var s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];r=s,n||t.updateStepValidationFlag(r),r&&(n||(o=t.props.steps.reduce((function(n,o,r){return r>=t.state.compState&&r<e.target.value&&n.push(o.validated),n}),[]).some((function(e){return!1===e}))))})).catch((function(){n||t.updateStepValidationFlag(!1)})).then((function(){r&&!o&&(e.target.value===t.props.steps.length-1&&t.state.compState===t.props.steps.length-1?t.setNavState(t.props.steps.length):t.setNavState(e.target.value))})).catch((function(e){e&&setTimeout((function(){throw e}))}))}}},{key:"next",value:function(){var e=this;this.abstractStepMoveAllowedToPromise().then((function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.updateStepValidationFlag(t),t&&e.setNavState(e.state.compState+1)})).catch((function(t){t&&setTimeout((function(){throw t})),e.updateStepValidationFlag(!1)}))}},{key:"previous",value:function(){this.state.compState>0&&this.setNavState(this.state.compState-1)}},{key:"updateStepValidationFlag",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.props.steps[this.state.compState].validated=e}},{key:"stepMoveAllowed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!!this.props.dontValidate||!!e||(this.isStepAtIndexHOCValidationBased(this.state.compState)?this.refs.activeComponent.refs.component.isValidated():0===Object.keys(this.refs).length||"undefined"===typeof this.refs.activeComponent.isValidated||this.refs.activeComponent.isValidated())}},{key:"isStepAtIndexHOCValidationBased",value:function(e){return this.props.hocValidationAppliedTo.length>0&&this.props.hocValidationAppliedTo.indexOf(e)>-1}},{key:"abstractStepMoveAllowedToPromise",value:function(e){return s.default.resolve(this.stepMoveAllowed(e))}},{key:"getClassName",value:function(e,t){var n="".concat(e,"-").concat(this.state.navState.styles[t]);return this.props.stepsNavigation||(n+=" no-hl"),n}},{key:"renderSteps",value:function(){var e=this;return this.props.steps.map((function(t,n){return o.default.createElement("li",{className:e.getClassName("progtrckr",n),onClick:function(t){e.jumpToStep(t)},key:n,value:n},o.default.createElement("em",null,n+1),o.default.createElement("span",null,e.props.steps[n].name))}))}},{key:"render",value:function(){var e=this,t=this.props,n=this.getPrevNextBtnLayout(this.state.compState),r=n.nextStepText,s=n.showNextBtn,i=n.showPreviousBtn,a={jumpToStep:function(t){e.jumpToStep(t)}},l=this.props.steps[this.state.compState].component;(l instanceof o.Component||l.type&&l.type.prototype instanceof o.Component)&&(a.ref="activeComponent");var c=o.default.cloneElement(l,a);return o.default.createElement("div",{className:"multi-step",onKeyDown:function(t){e.handleKeyDown(t)}},this.props.showSteps?o.default.createElement("ol",{className:"progtrckr"},this.renderSteps()):o.default.createElement("span",null),c,o.default.createElement("div",{style:this.props.showNavigation?{}:this.hidden,className:"footer-buttons"},o.default.createElement("button",{type:"button",style:i?{}:this.hidden,className:t.backButtonCls,onClick:function(){e.previous()},id:"prev-button"},this.props.backButtonText),o.default.createElement("button",{type:"button",style:s?{}:this.hidden,className:t.nextButtonCls,onClick:function(){e.next()},id:"next-button"},r)))}}],r&&l(n.prototype,r),i&&l(n,i),t}(o.Component);t.Z=d,d.defaultProps={showSteps:!0,showNavigation:!0,stepsNavigation:!0,prevBtnOnLastStep:!0,dontValidate:!1,preventEnterSubmission:!1,startAtStep:0,nextButtonText:"Next",nextButtonCls:"btn btn-prev btn-primary btn-lg pull-right",backButtonText:"Previous",backButtonCls:"btn btn-next btn-primary btn-lg pull-left",hocValidationAppliedTo:[]},d.propTypes={steps:r.default.arrayOf(r.default.shape({name:r.default.oneOfType([r.default.string,r.default.object]).isRequired,component:r.default.element.isRequired})).isRequired,showSteps:r.default.bool,showNavigation:r.default.bool,stepsNavigation:r.default.bool,prevBtnOnLastStep:r.default.bool,dontValidate:r.default.bool,preventEnterSubmission:r.default.bool,startAtStep:r.default.number,nextButtonText:r.default.string,nextButtonCls:r.default.string,backButtonCls:r.default.string,backButtonText:r.default.string,hocValidationAppliedTo:r.default.array,onStepChange:r.default.func}}}]);
//# sourceMappingURL=2175.b2b00a7a.chunk.js.map