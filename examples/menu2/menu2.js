!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};function t(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}function n(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function i(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var o="ΔTrackable",r="ΔChangeVersion",a="ΔFactory",s="ΔDefFactories",d="ΔIsFactory",c="ΔΔProxy",l="ΔIsProxy",f="ΔDefault",u="ΔCreateProxy",v="ΔnewItem",p="Δdispose",h="Δjson",m=!1;function g(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var w=Array.isArray;function b(e,t){e&&(w(e)&&!e[l]?e.forEach(t):t(e))}function y(e,t){if(e&&t){if(e===t)return;if(w(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function N(e,t){return e?w(e)&&!e[l]?(e.push(t),e):[e,t]:t}function x(e){return e&&!0===e[o]?e[r]:0}function C(e,t){if(void 0===t&&(t=!1),I(e)){e[p]?e[p](t):k(e,(function(n,i){U(e,i),e["ΔΔ"+n]=void 0,t&&C(i,!0)}));var n=e.ΔMd;if(n){var i=[];b(n.parents,(function(e){i.push(e)}));for(var o=function(t){k(t,(function(n,i){i===e&&(U(t,e),t["ΔΔ"+n]=void 0)})),q(t)},r=0,a=i;r<a.length;r++){o(a[r])}}}}function k(e,t){if(I(e)){var n=e.constructor.prototype["ΔDefFactories"];for(var i in n)n.hasOwnProperty(i)&&t(i,e["ΔΔ"+i],n[i])}}function P(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function I(e){return!(!e||!0!==e[o])}function V(e){return x(e)%2==1}function A(e,t){var n=g(e);return n&&t?(n.watchers=N(n.watchers,t),V(e)&&ee.register(e),t):null}function D(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=y(n.watchers,t))}function O(e,t){if(e&&void 0!==t){if(e[v])return e[v](t);m=!0;var n=e[t];return m=!1,n}}function j(e,t){if(e&&t){var n=e[f];if(n){var i=n(t);if(i!==S)return e[t]=i}var o=e[s],r=o?o[t]:null;if(r)return e[t]=r()}}var R=function(){var e,t,n=[],i=[],o={getDefaultConversion:function(){return r(e,o)},getPreviousConversion:function(){return e.ΔtoJsResult}};function r(e,n){var i=n.getPreviousConversion();if(i)return i;var o=void 0;if(e.Δconvert)o=e.Δconvert(t);else{if(e["Δjson"])return e["Δjson"];o={},k(e,(function(e,n){I(n)&&(n=a(n,t)),void 0!==n&&(o[e]=n)}))}return o}function a(a,s){var d=0===n.length,c=a;if(a&&I(a)&&(n.push(a),c=void 0,i.push(a),e=a,s?(t=s,c=s(a,o)):c=r(a,o),a.ΔtoJsResult=c,i.pop(),e=i[i.length-1]),d){for(var l=n.length;l--;)n[l]["ΔtoJsResult"]=void 0;e=null,n=[],t=void 0}return c}return a}();function L(e){var t=e.prototype;t[o]=!0,t[r]=0}function _(e,t){return e||(e=X,t=3),function(n,i){var o="ΔΔ"+i,r=n[s];r||(r=n[s]={}),r[i]=t?1===t?X:z:e,n[o]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);!m&&e[h]&&function(e,t){var n,i;t&&k(e,(function(o,r,a){var s=a===W;if(n=t[o],i="ΔΔ"+o,void 0===n)s&&(e[i]=void 0);else{var d=typeof n;if(null===n)(s||a===K)&&(e[i]=null);else if("object"===d){var c=O(e,o);c?c[h]=n:s&&(e[i]=n)}else"string"===d?(s||a===E)&&(e[i]=n):"number"===d?(s||a===F)&&(e[i]=n):"boolean"===d?(s||a===M)&&(e[i]=n):s&&(e[i]=n)}})),e[h]=void 0}(e,e[h]);var r=e[t];(void 0===r||m&&null===r)&&(r=e[t]=!m&&o?o>1?void 0:null:i(),Y(e,r));return r}(this,o,i,e,t)},set:function(t){J(this,i,o,t,e,this)},enumerable:!0,configurable:!0})}}var S={};function $(){return""}$[d]=!0;var E=$;function T(){return 0}T[d]=!0;var F=T;function H(){return!1}H[d]=!0;var M=H;function X(){return null}X[d]=!0;var K=X;function z(){}z[d]=!0;var W=z;function J(e,t,n,i,o,r){var a=I(i),s=o===W;if(!e.ΔComputeDependencies){i&&!a&&o.ΔCreateProxy&&(a=I(i=o.ΔCreateProxy(i)||i));var d=!1,c=r[n];return V(e)?d=c!==i:c!==i&&(q(e),d=!0),d&&(a&&void 0===i&&(i=null),(a||c&&I(c))&&function(e,t,n,i){U(e,t),i||Y(e,n)}(e,c,i,s),r[n]=i,B(e,"set",t,c,i)),i}console.error("[Trax] @computed properties must not mutate the Data object when calculated")}function B(e,t,n,i,o){var r=e?e.ΔMd:void 0;if(r&&r.trackers){var a=e[c]||e;b(r.trackers,(function(e){e(a,t,n,i,o)}))}}function q(e){if(I(e)){var t=!0;if(V(e)?t=!1:e.ΔChangeVersion+=1,ee.register(e),t){var n=e.ΔMd;n&&n.parents&&b(n.parents,(function(e){q(e)}))}}}function U(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=y(n.parents,e))}}function Y(e,t){if(t){var n=g(t);n&&(n.parents=N(n.parents,e))}}var G=0,Q=function(){function e(){this.id=++G}return e.prototype.register=function(e){var t=this,n=g(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){te();for(var i,o,r=[],a=0;n>a;a++)(o=(i=t[a]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?Z(r):Promise.resolve().then((function(){Z(r)})))}},e}();function Z(e){for(var t=function(e){b(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var ee=new Q;function te(){ee.objects&&(ee=new Q)}var ne=["push","pop","shift","unshift","splice"],ie=/^\d+$/,oe=/^\Δ/,re=function(){function e(e){this.ΔTrackable=!0,this.ΔDataFactory=!0,this.ΔChangeVersion=0,this.ΔMd=void 0,this.ΔΔSelf=this,this.ΔIsProxy=!1,this.ΔItemFactory=e}return e.ΔNewProxy=function(t){var n=new Proxy([],new e(t));return n[c]=n,n},e.ΔCreateProxy=function(t,n){if(w(t)){var i=new Proxy(t,new e(n)),o=t.length;for(q(i);o--;)Y(i,t[o]);return i}return null},e.prototype.ΔnewItem=function(e){var t=this.ΔItemFactory();return void 0===e&&(e=this.ΔΔList.length),e>-1&&J(this.ΔΔSelf,e,e,t,this.ΔItemFactory,this.ΔΔList),t},e.prototype.Δdispose=function(e){void 0===e&&(e=!1);for(var t,n=this.ΔΔList,i=n.length;i--;)t=n[i],U(this.ΔΔSelf,t),n[i]=void 0,e&&C(t,!0);return n},e.prototype.Δconvert=function(e){for(var t=[],n=this.ΔΔList,i=n.length;i--;)t[i]=R(n[i],e);return t},e.prototype.ΔToString=function(){return"Trax List ["+this.ΔΔList.join(", ")+"]"},e.prototype.ΔinitFromJson=function(){var e=this["Δjson"];if(e){if(e.constructor!==Array)console.error("[Trax] Invalid json type: Lists can only be initialized from Arrays");else for(var t=e.length,n=void 0,i=this.ΔΔList,o=void 0;t--;)if(o=n=e[t],n){var r=this.ΔItemFactory();I(r)&&(r["Δjson"]=n,o=r),i[t]=o}else null===n&&(i[t]=null);this["Δjson"]=void 0}},e.prototype.set=function(e,t,n){if(this.ΔΔList||(this.ΔΔList=e),t.match(ie)){var i=parseInt(t,10);J(this.ΔΔSelf,i,i,n,this.ΔItemFactory,this.ΔΔList)}else t.match(oe)&&(this[t]=n);return!0},e.prototype.get=function(e,t){if(this.ΔΔList||(this.ΔΔList=e),t===l)return!0;var n=typeof t;if(this["Δjson"]&&this.ΔinitFromJson(),"string"===n){if(t.match(oe))return this[t];if(t.match(ie))return this.ΔΔList[parseInt(t,10)];if("length"===t)return this.ΔΔList.length;if("push"===t)return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=this,o=t.length,r=i.ΔΔList.length,a=0;o>a;a++)i.set(e,r+a+"",t[a])};if("toString"===t)return this.ΔToString;if("function"==typeof e[t])return function(){var e=this,n=ne.indexOf(t)>-1;if(n){q(e);for(var i=e.ΔΔList,o=0;i.length>o;o++)U(e,i[o])}var r=e.ΔΔList,a=r[t].apply(r,arguments);if(n){for(i=e.ΔΔList,o=0;i.length>o;o++)Y(e,i[o]);B(this,t)}return a}}return t===Symbol.iterator?this.ΔΔList[Symbol.iterator]:this[t]},e}();var ae=function(e){function t(){return re.ΔNewProxy(e)}return e=e||K,t[d]=!0,t[u]=function(t){return re.ΔCreateProxy(t,e)},t},se=0,de={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function ce(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}de.error("IVY: "+t+i.join(""))}var le=void 0,fe=11,ue="$api",ve=/^ΔΔ(\w+)Emitter$/,pe=/^ΔΔ(.+)$/,he="ΔIsAPI",me="ΔIsController",ge=0,we=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++ge,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=Ce(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==le&&(vt(this.$Class,me)?this.hasCtlClass=!0:vt(this.$Class,he)||I(this.$Class.prototype)||ce(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),ye(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&ot(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,be(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(P(e,"$template")&&(e.$template=this),P(e,"$logger")){var t=this.view;e.$logger={log:de.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];ce(t,e+(n.length?" "+n.join(" "):""))}}}e[ue]&&be(this.view,e[ue],this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)ce(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),pt(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;for(var n=[],i=0,o=e.split(";");i<o.length;i++){var r=o[i];if(r&&"#"!==r.charAt(0))return ce(this.view,"[$template.query()] Invalid label argument: '"+r+"' (labels must start with #)"),null;var a=this.labels&&this.labels[r]||null;if(a&&a.length){if(!t)return a[0];n=n.concat(a)}}return n.length?n:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(D(this.api,this.watchCb),D(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e,t){if(void 0===t&&(t=!1),this.processing)return this;t&&(this.forceRefresh=!0),this.processing=!0;var n=this.api,i=this.controller,o=this.view;if(i&&!I(i)&&(ce(o,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),n&&e)for(var r in V(n)||te(),this.disconnectObserver(),e)e.hasOwnProperty(r)&&(n[r]=e[r]);var a=!this.forceRefresh,s=o.nodes;if(s&&s[0]&&s[0].attached||(a=!1),a&&x(n)+x(i)>this.lastRefreshVersion&&(a=!1),!a){i&&(this.initialized||(ye(o,i,"$init","controller"),this.initialized=!0),ye(o,i,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,o.lastRefresh++,o.instructions=void 0;try{this.renderFn(o,this.hasCtlClass?i:n,n,this)}catch(e){ce(o,"Template execution error\n"+(e.message||e))}this.rendering=!1,i&&ye(o,i,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&te()}}(n),this.forceRefresh=!1,this.lastRefreshVersion=x(n)+x(i)}return this.activeWatch||(A(n,this.watchCb),i&&A(i,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function be(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(ve)){var a=RegExp.$1;o||(o=[]),"function"!=typeof t[a+"Emitter"].init?ce(e,"Invalid EventEmitter: "+a+"Emitter"):(o.push(a+"Emitter"),o.push(a),t[a+"Emitter"].init(a,t))}n.events=o||null}else if(null!==i)for(var s=i.length,d=0;s>d;d+=2)t[i[d]].init(i[d+1],t)}function ye(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){ce(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function Ne(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function xe(){return function(e){if(e!==le&&null!==e){var t=!0;return mt(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?pt(e.domNode,o):e.domNode=o}]}Le(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function Ce(e,t,n,i){var o={kind:"#view",uid:"view"+ ++se,attached:!1,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:Ne,isEmpty:xe};return e?Pe(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function ke(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==le&&null!==i)for(var o=i.template,r=n.length,a=0;r>a;a++)o.registerLabel(n[a],t)}}function Pe(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}function Ie(e,t,n,i,o){return function(){return new we(e,t,n,i,o)}}var Ve=[];function Ae(e,t,n){var i=e.cm;return i?(e.nodes=new Array(n),e.cmAppends||(e.cmAppends=[],e.anchorNode&&(e.cmAppends[0]=function(t,n){t.domNode?ht(t.domNode,e.anchorNode,e.rootDomNode):t.domNode=e.rootDomNode}))):e.cmAppends=null,i}function De(e,t,n,i,o){var r,a=e.nodes[n];if(a&&a.attached||ce(e,"Invalid ζview call: container must be attached ("+(a?a.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===a.kind)if("##block"===a.subKind){var s=(d=a).views;1===o&&(d.insertFn=null),1===o&&d.views.length>1?(d.previousNbrOfViews=s.length,r=s.shift(),d.viewPool.length?d.viewPool=s.concat(d.viewPool):d.viewPool=s,d.views=[r]):(r=d.views[o-1])||(d.viewPool.length>0?(d.insertFn||(d.insertFn=_e(e,d)),$e((r=s[o-1]=d.viewPool.shift()).nodes[0],d.insertFn),r.attached=!0):((r=s[o-1]=Ce(e,d)).nodes=new Array(i),e.cm&&d.cmAppend?r.cmAppends=[d.cmAppend]:e.cm||(r.cmAppends=[_e(e,d)]))),d.lastRefresh=r.lastRefresh=e.lastRefresh}else{var d;(r=(d=a).contentView)||((r=d.contentView=Ce(e,d)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===a.kind){var c=a;(r=c.contentView)||(r=c.contentView=Ce(e,null),c.viewPool&&(c.viewPool[c.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=c),r.lastRefresh=e.lastRefresh}return r}function Oe(e,t,n,i,o,r){var a=r||De(e,0,n,i,o);if(1===t)a.instructions=[];else{for(var s=a,d=t-1;d>0;)s=s.parentView,d--;s.instructions||(s.instructions=[]),a.instructions=s.instructions}return a.cm&&!a.cmAppends&&Re(a,je,[a,e,n]),a}function je(e,t,n){var i=t.nodes[n];"#container"===i.kind&&!e.cmAppends&&i.cmAppend&&(e.cmAppends=[i.cmAppend])}function Re(e,t,n){e.instructions.push(t),e.instructions.push(n)}function Le(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}function _e(e,t){var n=function e(t,n){for(;;){if(n||ce(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===fe)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}if(t.container&&"##block"===t.container.subKind){var r=t.container,a=r.views.indexOf(t);if(a>-1)for(var s=void 0,d=void 0,c=a+1;c<r.views.length;c++)if((s=r.views[c]).nodes&&s.nodes.length&&(d=m(s,s.nodes[0],r.domNode)))return d;for(var l=r.viewPool,f=void 0,u=0,v=l;u<v.length;u++){if((s=v[u]).nodes&&s.nodes.length&&s.attached&&(f=m(s,s.nodes[0],r.domNode)))return f}}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var p=t.nodes[n.parentIdx];return"#element"===p.kind?{position:"lastChild",parentDomNd:it(t,n)}:e(t,p)}var h=m(t,n.nextSibling,it(t,n));if(h)return h;n=n.nextSibling}function m(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=m(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return m(r,r.nodes[0],n)}return null}if("#container"===t.kind){var a=t;i=null;if("##block"===a.subKind)for(var s=a.views,d=s.length,c=0;d>c&&!(i=m(s[c],s[c].nodes[0],n));c++);else if("##cpt"===a.subKind){var l=a.template.view;i=m(l,l.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?ht(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?pt(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(gt),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var a,s=t.nodes.length,d="",c=0;s>c;c++)if(a=t.nodes[c])if(d=a.uid.length<5?["     ","    ","   ","  "," "][a.uid.length]:"","#container"===a.kind){var l=a,f=l.domNode?l.domNode.uid:"XX";if(console.log(n+"["+c+"] "+a.uid+d+" "+f+" attached:"+(a.attached?1:0)+" parent:"+C(a.parentIdx)+" nextSibling:"+(a.nextSibling?a.nextSibling.uid:"X")),"##block"===l.subKind){var u=l,v=u.views.length;if(v)for(var p=0;v>p;p++)if(u.views[p]){var h=u.views[p];f=h.rootDomNode?h.rootDomNode.$uid:"XX",console.log(n+"  - view #"+p),e(u.views[p],"    "+n)}else console.log(n+"  - view #"+p+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===l.subKind){var m=l,g=m.template,w=m.contentView;w?(console.log(n+"  - light DOM:"),e(w,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+l.subKind+" container")}else{f=a.domNode?a.domNode.uid:"XX";var b="";if(a.domNode&&"#text"===a.kind)b=" text=#"+a.domNode._textContent+"#";else if("#fragment"===a.kind||"#element"===a.kind){for(var y=[],N=a.firstChild;N;)y.push(N.uid),N=N.nextSibling;b=" children:["+y.join(", ")+"]";var x=a.contentView;x&&(b+=" >>> content view: "+x.uid)}console.log(n+"["+a.idx+"] "+a.uid+d+" "+f+" attached:"+(a.attached?1:0)+" parent:"+C(a.parentIdx)+" nextSibling:"+(a.nextSibling?a.nextSibling.uid:"X")+b)}else console.log(n+"["+c+"] XX");function C(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function Se(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var a=o.views.length;if(!n){if(a!==o.previousNbrOfViews)for(var s=o.viewPool,d=s.length,c=void 0,l=0;d>l;l++)ot(c=s[l],c.nodes[0]),c.attached=!1;o.previousNbrOfViews=a}}else ot(e,o)}}function $e(e,t,n){if(!e.attached){if(t(e,!0),e.attached=!0,"#fragment"===e.kind)for(var i=e.firstChild;i;)$e(i,t),i=i.nextSibling;else if("#container"===e.kind){var o=e.subKind;if("##cpt"===o){var r=e.template,a=r?r.view.nodes[0]:null;r&&(r.forceRefresh=!0),a&&($e(a,t),r.view.attached=!0)}else if("##block"===o)for(var s=e.views,d=0;s.length>d;d++)$e(s[d].nodes[0],t),s[d].attached=!0}if("#fragment"===e.kind||"#element"===e.kind){var c=e.contentView;c&&($e(c.nodes[0],t),c.attached=!0)}}}function Ee(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)Se(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function Te(e,t,n){if(e.paramNode){var i=e.paramNode;i.dataHolder?(Re(e,Ee,[e,t,n]),i.data&&"#view"!==i.data.kind?i.data?i.data.$content=e:console.warn("TODO: ζendD no data"):i.dataHolder[i.dataName]=e):ce(e,"ζendD dataHoler should be defined")}else Re(e,Ee,[e,t,n])}function Fe(e,t,n,i,o,r,a,s,d){if(t){var c=e.createElement(o);if(s)for(var l=s.length,f=0;l>f;f+=2)c.setAttribute(s[f],s[f+1]);if(d){l=d.length;for(var u=0;l>u;u+=2)c[d[u]]=d[u+1]}var v={kind:"#element",uid:"elt"+ ++se,idx:n,parentIdx:-1,ns:"",domNode:c,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=v,ke(e,c,a),e.cmAppends[i](v,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?pt(e.domNode,c):e.domNode=c,t||He(v,e)})}else a&&ke(e,e.nodes[n].domNode,a)}function He(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function Me(e,t,n,i,o,r,a,s){for(var d,c=[],l=8;l<arguments.length;l++)c[l-8]=arguments[l];if(s){var f=void 0,u=void 0,v=!1;f=t?a.slice(0):(d=e.nodes[i]).pieces;for(var p=0;s>p;p++)(u=ze(e,n,c[p]))!==Ve&&(v=!0,f[1+2*p]=null==u?"":u);if(!t)return v&&(d.domNode.textContent=f.join("")),void ke(e,d.domNode,r);d=h(e.doc.createTextNode(f.join("")),f),ke(e,d.domNode,r)}else{if(!t)return void(r&&ke(e,e.nodes[i].domNode,r));d=h(e.doc.createTextNode(a),void 0),ke(e,d.domNode,r)}function h(e,t){return{kind:"#text",uid:"txt"+ ++se,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=d,e.cmAppends[o](d,!1)}function Xe(e,t,n,i,o,r,a,s){for(var d=[],c=8;c<arguments.length;c++)d[c-8]=arguments[c];for(var l=[e,t,n,i,o,r,a,s],f=0;s>f;f++)l.push(d[f]);Re(e,Me,l)}function Ke(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return Ve;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function ze(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?Ve:(i[2*n[0]]=1,n[1])}return Ke(e,n[0],n[1])}return n}function We(e,t,n,i,o){if(t){var r=Je(n,null,o);return e.nodes[n]=r,Be(e,r,i),r}}function Je(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++se,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++se,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,cptRef:null,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}function Be(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===le)}}function qe(e,t,n,i,o,r,a,s,d,c){var l;n=n||0,t?l=e.nodes[i]||We(e,t,i,o,2):(l=e.nodes[i]).lists&&(l.lists.sizes={});var f=ze(e,n,r);if(l.template){if(f!==Ve&&l.cptRef!==f){var u=l.data;l.template.dispose(!0),m();var v=l.data;for(var p in u)if(u.hasOwnProperty(p)&&p.match(pe)){var h=RegExp.$1;P(v,h)&&(v[h]=u[h])}}}else{if(f===Ve)return void ce(e,"Invalid component ref");m()}function m(){var t=l.template=f();l.cptRef=f,Pe(t.view,e,l),t.disconnectObserver(),l.data=t.api,function(t){if(d){var n=d.length;if(!t&&n)ce(e,"Invalid parameter: "+d[0]);else for(var i=0;n>i;i+=2)P(t,d[i])?t[d[i]]=d[i+1]:ce(e,"Invalid parameter: "+d[i])}}(t.api)}c&&(l.dynamicParams={}),0===n&&a&&Ue(e,i,l,s,c)}function Ue(e,t,n,i,o){var r=(n=n||e.nodes[t])?n.template:void 0;if(void 0!==r){if(r.view.lastRefresh=e.lastRefresh-1,Ge(n),n.contentView){r.api.$content=n.contentView;var a=n.contentView.instructions;a&&a.length&&(r.forceRefresh=!0)}if(r.view.cm)r.view.cmAppends=[n.cmAppend];else{if(o)for(var s=o.length,d=(n?n.dynamicParams:{})||{},c=r.api,l=0;s>l;l++)d[o[l]]||j(c,o[l]);var f=r.view.nodes[0];if(!f.attached)r.forceRefresh=!0,$e(f,_e(e,n))}i&&ke(e,r.api,i),r.render()}}function Ye(e,t,n,i,o,r,a,s,d,c){var l,f=e.nodes,u=!1;if(f[i]){var v=(l=f[i]).viewPool;a>0&&!v&&((v=l.viewPool=[])[l.viewInstanceIdx]=l.contentView),v&&(l.contentView=v[a]),l.viewInstanceIdx=a,l.dataHolder=l.data=void 0,u=!0}else l={kind:"#param",uid:"pnd"+ ++se,idx:i,parentIdx:o,nextSibling:void 0,domNode:void 0,attached:!0,dataName:r,dataHolder:void 0,data:void 0,dataIsList:void 0,contentView:void 0,dynamicParams:void 0,viewInstanceIdx:a,viewPool:void 0},f[i]=l;c&&(l.dynamicParams={});var p,h=f[o],m=r,g=void 0,w=h.data;if(w){if(l.dataHolder=w,void 0===l.dataIsList&&function(e,t,n,i){P(i,n)?t.dataIsList=!1:P(i,n+"List")?(t.dataIsList=!0,t.dataName=n+"List"):ce(e,"Invalid parameter node: <."+n+">")}(e,l,m,w),m=l.dataName,g=l.data,l.dataIsList){var b=h.lists;b||(b=h.lists={sizes:{},listNames:[],listMap:{}}),b.listMap[m]||(b.listMap[m]=1,b.listNames.push(m));var y=b.sizes[m];y||(y=b.sizes[m]=0),(p=w[m][y])||(p=O(w[m],y)),b.sizes[m]+=1,l.data=p}else l.data=p=w[m],void 0===p&&(l.data=p=O(w,m));u&&p&&p["ΔΔ$content"]&&(l.contentView=p["ΔΔ$content"])}else ce(e,"Invalid parameter node <."+r+"/>: no param node can be used in this context");l.lists&&(l.lists.sizes={});var N=h.dynamicParams;if(N&&(N[m]=1),d)if(p){if(g!==p)for(var x=d.length,C=0;x>C;C+=2)t&&!P(p,d[C])&&ce(e,"Invalid param node parameter: "+d[C]),p[d[C]]=d[C+1]}else ce(e,"Invalid param node parameter: "+d[0])}function Ge(e){if(e.lists)for(var t=e.lists,n=t.listNames,i=void 0,o=void 0,r=void 0,a=void 0,s=0;n.length>s;s++)i=n[s],(o=t.sizes[i]||0)<(a=(r=e.data[i]).length)&&r.splice(o,a-o)}function Qe(e,t,n,i,o,r){var a=e.nodes[i];if(Ge(a),r)for(var s=r.length,d=a.dynamicParams,c=0;s>c;c++)d&&!d[r[c]]&&j(a.data,r[c]);void 0!==a.contentView&&q(a.dataHolder)}function Ze(e,t,n,i,o){if(o!==Ve){var r=ze(e,t,o);if(r!==Ve){var a=e.nodes[n].domNode;void 0===r?a.removeAttribute(i):a.setAttribute(i,r)}}}function et(e,t,n,i,o,r){if(r!==Ve){var a=ze(e,n,r);if(a!==Ve){var s=e.nodes[i],d=s.kind;if("#container"===d){var c=s.data;(function(e,t,n,i,o){if(i&&(!e.cm||P(i,o)))return!0;var r="";n.template&&(r=" on <*"+n.template.templateName+"/>");return ce(e,"Invalid parameter '"+o+"'"+r),!1})(e,0,s,c,o)&&(c[o]=a)}else if("#param"===d)!function(e,t,n,i,o){if(0===o){if(n.dataHolder)return n.dataHolder[n.dataName]=i,n.dataHolder}else{if(n.data)return t&&!P(n.data,o)&&ce(e,"Invalid param node parameter: "+o),n.data[o]=i,n.data;ce(e,"Invalid param node parameter: "+o)}}(e,t,s,a,o);else if("#decorator"===d){var l=s;t&&!function(e,t,n){if(!P(t.api,n))return ce(e,"Invalid decorator parameter '"+n+"' on "+t.refName),!1;return!0}(e,l,o)||(l.api[o]=a)}}}}function tt(e,t,n,i,o,r,a,s){if(t){var d=e.nodes[i];if("#element"===d.kind){var c=d.domNode;if(!c)return void ce(e,"Cannot set "+o+" event listener: undefined DOM node");var l=v(c);a&&!1!==(s=s||{}).passive&&(s.passive=!0),c.addEventListener(o,(function(e){l.callback&&l.callback(e)}),s)}else if("#container"===d.kind){var f=d.template;f?u(f.api,!1):ce(e,"Cannot set "+o+" event listener: undefined component template")}else"#param"===d.kind?u(d.data,!0):"#decorator"===d.kind&&u(d.api,!0)}else e.nodes[n].callback=r;function u(t,n){if(t&&P(t,o+"Emitter")){var i=t[o+"Emitter"];if(i.addListener&&"function"==typeof i.addListener){var r=v(null);i.addListener((function(e){r.callback&&r.callback(e)})),n&&"function"==typeof i.init&&i.init(o,t)}else ce(e,"Invalid event emitter for: "+o)}else ce(e,"Unsupported event: "+o)}function v(t){var o={kind:"#listener",uid:"evt"+ ++se,idx:n,parentIdx:i,nextSibling:void 0,domNode:t,attached:!0,callback:r};return e.nodes[n]=o,o}}function nt(e,t,n,i,o){var r,a=e.nodes[n];if(1===o)if(i[me]){if(P(i,ue)){var s=i[ue];s!==le&&(r=s.$content)}}else P(i,"$content")&&(r=i.$content);else r=ze(e,t,i);if(r!==Ve&&void 0!==i||(r=a.contentView),r){var d=r.projectionHost;if(d&&d.hostNode!==a&&ot(r,r.nodes[0]),a.contentView&&a.contentView!==r&&ot(a.contentView,a.contentView.nodes[0]),a.contentView=r,r.projectionHost={view:e,hostNode:a},r.cm)if("#element"===a.kind){var c=a.domNode;r.cmAppends=[function(e){e.domNode?pt(e.domNode,a.domNode):e.domNode=c}]}else r.cmAppends=[_e(e,a)];else{var l=void 0,f=!1;if(r.domNode!==le&&null!==r.nodes&&r.domNode.nodeType===fe&&(pt(r.nodes[0].domNode,a.domNode),function(e,t,n){if(!e||e.cm||!e.nodes||!e.nodes.length)return;n===le&&(n=e.domNode);if(n===le||t===n)return;mt(e,!0,(function(e){return"#view"!==e.kind&&"#fragment"!==e.kind&&"#container"!==e.kind||e.domNode===n&&(e.domNode=t),!0}))}(r,a.domNode),f=!0),!f){if("#element"===a.kind){var u=a.domNode;l=function(e,t){e.domNode?pt(e.domNode,u):e.domNode=u}}else l=_e(e,a);$e(r.nodes[0],l)}}r.container=a,Le(r)}}function it(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:it(e.projectionHost.view,n)}return 0===t.idx?e.parentView?it(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function ot(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=it(e,t);t.attached=!1,n?n.removeChild(t.domNode):ce(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,a=void 0,s=0;r>s;s++)a=o[s].nodes[0],ot(o[s],a),o[s].attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var d=t.template;a=d.view.nodes[0];ot(d.view,a),d.view.attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0)}}else if("#fragment"===t.kind){var c=t;if(c.attached=!1,c.contentView)ot(c.contentView,c.contentView.nodes[0]);else if(c.firstChild)for(var l=c.firstChild;l;)ot(e,l),l=l.nextSibling;c.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var rt=L,at=_,st=function(e){var t=e.ΔFactory;if(t)return t;function n(){return new e}return n[d]=!0,e[a]=n,n},dt=E,ct=F,lt=ae,ft=S;function ut(e){e.prototype[he]=!0,L(e)}function vt(e,t){return!0===e.prototype[t]}function pt(e,t,n){t.appendChild(e)}function ht(e,t,n,i){n.insertBefore(e,t)}function mt(e,t,n){if(e!==le&&null!==e){if(!n(e))return!1;if(null!==e.nodes&&e.nodes.length)for(var i=0,o=e.nodes;i<o.length;i++){if(!r(o[i]))return!1}}return!0;function r(e){var i=e.kind;if("#fragment"===i)return!!n(e)&&mt(e.contentView,t,n);if("#container"!==i)return n(e);if(!n(e))return!1;var o=e,r=o.subKind;if("##block"===r){var a=o.views;if(null!==a)for(var s=0,d=a;s<d.length;s++){if(!mt(d[s],t,n))return!1}if(t&&o.viewPool)for(var c=0,l=o.viewPool;c<l.length;c++){if(!mt(l[c],t,n))return!1}}else if("##cpt"===r){var f=o.template;if(null!==f)return mt(f.view,t,n)}else"##async"===r&&console.log("TODO: support scanNode for @async block");return!0}}var gt="-------------------------------------------------------------------------------";var wt,bt,yt,Nt,xt,Ct,kt=function(){function e(e,t,n,i){this._defaultPrevented=!1,this._immediatePropagationStopped=!1,this._type=e,this._target=t,this._cancelable=n,this.data=i||null}return Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"target",{get:function(){return this._target},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cancelable",{get:function(){return this._cancelable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"defaultPrevented",{get:function(){return this._defaultPrevented},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"immediatePropagationStopped",{get:function(){return this._immediatePropagationStopped},enumerable:!0,configurable:!0}),e.prototype.preventDefault=function(){this._cancelable&&(this._defaultPrevented=!0)},e.prototype.stopImmediatePropagation=function(){this._immediatePropagationStopped=!0},e}(),Pt=function(){function e(){this._cancelableEvents=!1,this._target=null,this._eventType=""}return e.prototype.init=function(e,t){this._eventType||(this._eventType=e,this._target=t||null)},Object.defineProperty(e.prototype,"listenerCount",{get:function(){return this._listeners?this._listeners.length:0},enumerable:!0,configurable:!0}),e.prototype.addListener=function(e){return this._listeners?this._listeners.push(e):this._listeners=[e],e},e.prototype.removeListener=function(e){var t=this._listeners;if(t)if(1===t.length&&t[0]===e)this._listeners=void 0;else{var n=t.indexOf(e);n>-1&&t.splice(n,1)}},e.prototype.removeAllListeners=function(){this._listeners=void 0},e.prototype.emit=function(e){if(this._listeners){for(var t=new kt(this._eventType,this._target,this._cancelableEvents,e||null),n=!0,i=0,o=this._listeners;i<o.length;i++){if((0,o[i])(t),t.defaultPrevented&&(n=!1),t.immediatePropagationStopped)break}return n}return!0},e}(),It=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n}(Pt),Vt=(function(e){function n(){var t=e.call(this)||this;return t._cancelableEvents=!0,t}t(n,e)}(Pt),function(){function e(){}return n([_(E),i("design:type",String)],e.prototype,"id",void 0),n([_(),i("design:type",Object)],e.prototype,"$content",void 0),e=n([L],e)}()),At=(wt={},bt=["class","menu"],yt=["class","main list"],Nt=["class","option"],xt=[3],Ct=function(){function e(){}return n([at(lt(st(Vt))),i("design:type",Array)],e.prototype,"optionList",void 0),n([at(st(It)),i("design:type",It)],e.prototype,"clickEmitter",void 0),e=n([rt],e)}(),Ie("menu",".../menu2/menu2.ts",wt,(function(e,t,n){var i,o=n.optionList,r=(n.clickEmitter,0),a=Ae(e,0,4);Fe(e,a,0,0,"div",1,0,bt),tt(e,a,1,0,"click",(function(e){return n=t,void((i=e.target)&&i.dataset&&n.clickEmitter.emit(i.dataset.code));var n,i})),Fe(e,a,2,1,"ul",1,0,yt),We(e,a,3,2,1);for(var s=0,d=o;s<d.length;s++){var c=d[s];Fe(i=De(e,0,3,1,++r),i.cm,0,0,"li",0,0,Nt),Ze(i,0,0,"data-code",Ke(i,0,c.id)),nt(i,0,0,Ke(i,1,c.$content)),Ee(i)}Ee(e,0,xt)}),Ct));var Dt=function(){function e(){this.ΔΔextraLength=3,this.ΔΔmessage=""}return e.prototype.ΔDefault=function(e){switch(e){case"extraLength":return 3;case"message":return""}return ft},n([at(ct),i("design:type",Number)],e.prototype,"extraLength",void 0),n([at(dt),i("design:type",String)],e.prototype,"message",void 0),e=n([ut],e)}();(function(){var e={},t=["class","commands"],n=["id","A"],i=["id","B"],o=["id","C"],r=[" Extra #",""," "],a=["class","logs"],s=[" ",""," "],d=["option"],c=[0];return Ie("main",".../menu2/menu2.ts",e,(function(e,l,f){var u,v,p,h,m,g,w,b,y,N,x,C=Ae(e,0,17);p=0,function(e,t,n,i){if(t){var o={kind:"#fragment",uid:"fra"+ ++se,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=o;var r=e.cmAppends[i];r(o,!1),e.cmAppends[i+1]=function(e,t){r(e,!0),t||He(o,e)}}}(e,C,0,0),Fe(e,C,1,1,"div",1,0,t),Me(e,C,0,2,2,0," Number of extras: ",0),Fe(e,C,3,2,"button",1),tt(e,C,4,3,"click",(function(){return l.extraLength++}),1),Me(e,C,0,5,3,0," + ",0),Fe(e,C,6,2,"button",1),tt(e,C,7,6,"click",(function(){return l.extraLength--}),1),Me(e,C,0,8,3,0," - ",0),qe(e,C,0,9,1,Ke(e,0,At),0,0,0,d),v=(u=Oe(e,1,9,1,0)).cm,Ye(e,C,0,10,9,"option",p++,0,n),Xe(h=Oe(e,1,10,1,0),m=h.cm,1,0,0,0," Value A ",0),Te(h,m),Qe(e,0,0,10),Ye(e,C,0,11,9,"option",p++,0,i),Xe(g=Oe(e,1,11,1,0),w=g.cm,1,0,0,0," Value B ",0),Te(g,w),Qe(e,0,0,11),Ye(e,C,0,12,9,"option",p++,0,o),Xe(b=Oe(e,1,12,1,0),y=b.cm,1,0,0,0," Value C ",0),Te(b,y),Qe(e,0,0,12),function(e,t,n,i,o){if(t){var r=Je(n,null,o);e.nodes[n]=r,Re(e,Be,[e,r,i])}}(u,v,0,0,1);for(var k=0;l.extraLength>k;k++)Ye(e,C,0,13,9,"option",p++),et(e,C,0,13,"id","X"+k),Xe(N=Oe(e,1,13,1,0),x=N.cm,1,0,0,0,r,1,[0,k]),Te(N,x),Qe(e,0,0,13);Te(u,v,c),tt(e,C,14,9,"click",(function(e){return l.message="You clicked on item "+e.data})),Ue(e,9,0,0,d),Fe(e,C,15,1,"div",1,0,a),Me(e,C,0,16,2,0,s,1,Ke(e,1,l.message)),Ee(e)}),Dt)})()().attach(document.getElementById("output")).render()}();