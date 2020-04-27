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
    ***************************************************************************** */function e(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",r="ΔDefFactories",o="ΔΔProxy",s="ΔIsProxy",a="ΔnewItem",c="Δjson",l=!1;function d(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var f=Array.isArray;function u(e,t){e&&(f(e)&&!e[s]?e.forEach(t):t(e))}function h(e,t){if(e&&t){if(e===t)return;if(f(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function v(e,t){return e?f(e)&&!e[s]?(e.push(t),e):[e,t]:t}function p(e){return e&&!0===e[n]?e[i]:0}function m(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function b(e){return!(!e||!0!==e[n])}function g(e){return p(e)%2==1}function w(e,t){var n=d(e);return n&&t?(n.watchers=v(n.watchers,t),g(e)&&F.register(e),t):null}function C(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=h(n.watchers,t))}function y(e,t){var n,i;t&&function(e,t){if(b(e)){var n=e.constructor.prototype["ΔDefFactories"];for(var i in n)n.hasOwnProperty(i)&&t(i,e["ΔΔ"+i],n[i])}}(e,(function(r,o,s){var d=s===D;if(n=t[r],i="ΔΔ"+r,void 0===n)d&&(e[i]=void 0);else{var f=typeof n;if(null===n)(d||s===P)&&(e[i]=null);else if("object"===f){var u=function(e,t){if(e&&void 0!==t){if(e[a])return e[a](t);l=!0;var n=e[t];return l=!1,n}}(e,r);u?u[c]=n:d&&(e[i]=n)}else"string"===f?(d||s===x)&&(e[i]=n):"number"===f?(d||s===j)&&(e[i]=n):"boolean"===f?(d||s===I)&&(e[i]=n):d&&(e[i]=n)}}));e[c]=void 0}function N(){return""}N["ΔIsFactory"]=!0;var x=N;function k(){return 0}k["ΔIsFactory"]=!0;var j=k;function $(){return!1}$["ΔIsFactory"]=!0;var I=$;function O(){return null}O["ΔIsFactory"]=!0;var P=O;function A(){}A["ΔIsFactory"]=!0;var D=A;function V(e,t){if(t){var n=d(t);n&&(n.parents=v(n.parents,e))}}var R=0,E=function(){function e(){this.id=++R}return e.prototype.register=function(e){var t=this,n=d(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){M();for(var i,r,o=[],s=0;n>s;s++)(r=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),r.refreshCtxt&&r.watchers&&o.push({dataNode:i,watchers:r.watchers})),r.refreshCtxt=void 0;this.objects=void 0,o.length&&(e?T(o):Promise.resolve().then((function(){T(o)})))}},e}();function T(e){for(var t=function(e){u(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var F=new E;function M(){F.objects&&(F=new E)}var S=0,L={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function W(e,t){for(var n=e,i=[];n;){if(n.template){var r=n.template;i.push('\n>> Template: "'+r.templateName+'" - File: "'+r.filePath+'"')}n=n.parentView}L.error("IVY: "+t+i.join(""))}var H=void 0,K=/^ΔΔ(\w+)Emitter$/,z="ΔIsAPI",_="ΔIsController",q=0,B=function(){function e(e,t,n,i,r){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=r,this._uid=++q,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=function(e,t,n,i){var r={kind:"#view",uid:"view"+ ++S,attached:!1,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:G,isEmpty:J};e?function(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}(r,e,t):r.doc="undefined"!=typeof document?document:null;return r}(null,null,0,this);var o=this;this.watchCb=function(){o.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==H&&(le(this.$Class,_)?this.hasCtlClass=!0:le(this.$Class,z)||b(this.$Class.prototype)||W(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),Y(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&oe(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,U(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(m(e,"$template")&&(e.$template=this),m(e,"$logger")){var t=this.view;e.$logger={log:L.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];W(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&U(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)W(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),de(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;for(var n=[],i=0,r=e.split(";");i<r.length;i++){var o=r[i];if(o&&"#"!==o.charAt(0))return W(this.view,"[$template.query()] Invalid label argument: '"+o+"' (labels must start with #)"),null;var s=this.labels&&this.labels[o]||null;if(s&&s.length){if(!t)return s[0];n=n.concat(s)}}return n.length?n:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(C(this.api,this.watchCb),C(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e,t){if(void 0===t&&(t=!1),this.processing)return this;t&&(this.forceRefresh=!0),this.processing=!0;var n=this.api,i=this.controller,r=this.view;if(i&&!b(i)&&(W(r,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),n&&e)for(var o in g(n)||M(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(n[o]=e[o]);var s=!this.forceRefresh,a=r.nodes;if(a&&a[0]&&a[0].attached||(s=!1),s&&p(n)+p(i)>this.lastRefreshVersion&&(s=!1),!s){i&&(this.initialized||(Y(r,i,"$init","controller"),this.initialized=!0),Y(r,i,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,r.lastRefresh++,r.instructions=void 0;try{this.renderFn(r,this.hasCtlClass?i:n,n,this)}catch(e){W(r,"Template execution error\n"+(e.message||e))}this.rendering=!1,i&&Y(r,i,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&M()}}(n),this.forceRefresh=!1,this.lastRefreshVersion=p(n)+p(i)}return this.activeWatch||(w(n,this.watchCb),i&&w(i,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function U(e,t,n){var i=n.events;if(void 0===i){var r=void 0;for(var o in t)if(o.match(K)){var s=RegExp.$1;r||(r=[]),"function"!=typeof t[s+"Emitter"].init?W(e,"Invalid EventEmitter: "+s+"Emitter"):(r.push(s+"Emitter"),r.push(s),t[s+"Emitter"].init(s,t))}n.events=r||null}else if(null!==i)for(var a=i.length,c=0;a>c;c+=2)t[i[c]].init(i[c+1],t)}function Y(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){W(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function G(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function J(){return function(e){if(e!==H&&null!==e){var t=!0;return function e(t,n,i){if(t!==H&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var r=0,o=t.nodes;r<o.length;r++){if(!s(o[r]))return!1}}return!0;function s(t){var r=t.kind;if("#fragment"===r)return!!i(t)&&e(t.contentView,n,i);if("#container"!==r)return i(t);if(!i(t))return!1;var o=t,s=o.subKind;if("##block"===s){var a=o.views;if(null!==a)for(var c=0,l=a;c<l.length;c++){var d=l[c];if(!e(d,n,i))return!1}if(n&&o.viewPool)for(var f=0,u=o.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var v=o.template;if(null!==v)return e(v.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var r=i.doc.createDocumentFragment();i.domNode=r,i.cmAppends=[function(e){e.domNode?de(e.domNode,r):e.domNode=r}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function Q(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==H&&null!==i)for(var r=i.template,o=n.length,s=0;o>s;s++)r.registerLabel(n[s],t)}}var X=[];function Z(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var r=i,o=r.lastRefresh;if(n||o===e.lastRefresh){var s=r.views.length;if(!n){if(s!==r.previousNbrOfViews)for(var a=r.viewPool,c=a.length,l=void 0,d=0;c>d;d++)oe(l=a[d],l.nodes[0]),l.attached=!1;r.previousNbrOfViews=s}}else oe(e,r)}}function ee(e,t,n,i,r,o,s,a,c){if(t){var l=e.createElement(r);if(a)for(var d=a.length,f=0;d>f;f+=2)l.setAttribute(a[f],a[f+1]);if(c){d=c.length;for(var u=0;d>u;u+=2)l[c[u]]=c[u+1]}var h={kind:"#element",uid:"elt"+ ++S,idx:n,parentIdx:-1,ns:"",domNode:l,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,Q(e,l,s),e.cmAppends[i](h,!1),o&&(e.cmAppends[i+1]=function(e,t){e.domNode?de(e.domNode,l):e.domNode=l,t||function(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0);t.parentIdx=e.idx}(h,e)})}else s&&Q(e,e.nodes[n].domNode,s)}function te(e,t,n,i,r,o,s,a){for(var c,l=[],d=8;d<arguments.length;d++)l[d-8]=arguments[d];if(a){var f=void 0,u=void 0,h=!1;f=t?s.slice(0):(c=e.nodes[i]).pieces;for(var v=0;a>v;v++)(u=ie(e,n,l[v]))!==X&&(h=!0,f[1+2*v]=null==u?"":u);if(!t)return h&&(c.domNode.textContent=f.join("")),void Q(e,c.domNode,o);c=p(e.doc.createTextNode(f.join("")),f),Q(e,c.domNode,o)}else{if(!t)return void(o&&Q(e,e.nodes[i].domNode,o));c=p(e.doc.createTextNode(s),void 0),Q(e,c.domNode,o)}function p(e,t){return{kind:"#text",uid:"txt"+ ++S,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=c,e.cmAppends[r](c,!1)}function ne(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return X;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function ie(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?X:(i[2*n[0]]=1,n[1])}return ne(e,n[0],n[1])}return n}function re(e,t,n,i,r,o,s,a){if(t){var c=e.nodes[i];if("#element"===c.kind){var l=c.domNode;if(!l)return void W(e,"Cannot set "+r+" event listener: undefined DOM node");var d=h(l);s&&!1!==(a=a||{}).passive&&(a.passive=!0),l.addEventListener(r,(function(e){d.callback&&d.callback(e)}),a)}else if("#container"===c.kind){var f=c.template;f?u(f.api,!1):W(e,"Cannot set "+r+" event listener: undefined component template")}else"#param"===c.kind?u(c.data,!0):"#decorator"===c.kind&&u(c.api,!0)}else e.nodes[n].callback=o;function u(t,n){if(t&&m(t,r+"Emitter")){var i=t[r+"Emitter"];if(i.addListener&&"function"==typeof i.addListener){var o=h(null);i.addListener((function(e){o.callback&&o.callback(e)})),n&&"function"==typeof i.init&&i.init(r,t)}else W(e,"Invalid event emitter for: "+r)}else W(e,"Unsupported event: "+r)}function h(t){var r={kind:"#listener",uid:"evt"+ ++S,idx:n,parentIdx:i,nextSibling:void 0,domNode:t,attached:!0,callback:o};return e.nodes[n]=r,r}}function oe(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=function e(t,n){if(0===n.idx&&t.projectionHost){if(!n.attached)return null;var i=t.projectionHost.hostNode;return"#element"===i.kind?i.domNode:e(t.projectionHost.view,i)}return 0===n.idx?t.parentView?e(t.parentView,t.container):t.rootDomNode:t.nodes[n.parentIdx].domNode}(e,t);t.attached=!1,n?n.removeChild(t.domNode):W(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,r=i.views,o=r.length,s=void 0,a=0;o>a;a++)s=r[a].nodes[0],oe(r[a],s),r[a].attached=s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=r.concat(i.viewPool)}else if("##cpt"===t.subKind){var c=t.template;s=c.view.nodes[0];oe(c.view,s),c.view.attached=s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var l=t;if(l.attached=!1,l.contentView)oe(l.contentView,l.contentView.nodes[0]);else if(l.firstChild)for(var d=l.firstChild;d;)oe(e,d),d=d.nextSibling;l.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var se=function(e){var t=e.prototype;t[n]=!0,t[i]=0},ae=function(e,t){return e||(e=O,t=3),function(n,i){var s="ΔΔ"+i,a=n[r];a||(a=n[r]={}),a[i]=t?1===t?O:A:e,n[s]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,r){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);!l&&e[c]&&y(e,e[c]);var o=e[t];(void 0===o||l&&null===o)&&(o=e[t]=!l&&r?r>1?void 0:null:i(),V(e,o));return o}(this,s,i,e,t)},set:function(t){!function(e,t,n,i,r,s){var a=b(i),c=r===D;if(e.ΔComputeDependencies)return void console.error("[Trax] @computed properties must not mutate the Data object when calculated");i&&!a&&r.ΔCreateProxy&&(i=r.ΔCreateProxy(i)||i,a=b(i));var l=!1,d=s[n];g(e)?l=d!==i:d!==i&&(!function e(t){if(!b(t))return;var n=!0;g(t)?n=!1:t.ΔChangeVersion+=1;if(F.register(t),n){var i=t.ΔMd;i&&i.parents&&u(i.parents,(function(t){e(t)}))}}(e),l=!0);l&&(a&&void 0===i&&(i=null),(a||d&&b(d))&&function(e,t,n,i){(function(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=h(n.parents,e))}})(e,t),i||V(e,n)}(e,d,i,c),s[n]=i,function(e,t,n,i,r){var s=e?e.ΔMd:void 0;if(s&&s.trackers){var a=e[o]||e;u(s.trackers,(function(e){e(a,t,n,i,r)}))}}(e,"set",t,d,i))}(this,i,s,t,e,this)},enumerable:!0,configurable:!0})}},ce={};function le(e,t){return!0===e.prototype[t]}function de(e,t,n){t.appendChild(e)}function fe(){this.count=0}var ue,he,ve,pe,me,be,ge,we,Ce,ye,Ne,xe,ke=(be={},ge=["class","counter"],we=["class","btn"],Ce=["class","val","tabIndex",0],ye=[" ",""," "],Ne=["class","btn"],xe=function(){function n(){this.ΔΔcount=42}return n.prototype.ΔDefault=function(e){switch(e){case"count":return 42}return ce},e([ae(),t("design:type",Object)],n.prototype,"count",void 0),n=e([se],n)}(),ue="counter",he=".../events/events.ts",ve=be,pe=function(e,t,n){var i,r,o,s=n.count,a=(r=11,(o=(i=e).cm)?(i.nodes=new Array(r),i.cmAppends||(i.cmAppends=[],i.anchorNode&&(i.cmAppends[0]=function(e,t){var n,r;e.domNode?(n=e.domNode,r=i.anchorNode,i.rootDomNode.insertBefore(n,r)):e.domNode=i.rootDomNode}))):i.cmAppends=null,o);ee(e,a,0,0,"div",1,0,ge),re(e,a,1,0,"keydown",(function(e){return function(e,t){var n=parseInt(e.key,10);isNaN(n)||(t.count=n)}(e,t)})),ee(e,a,2,1,"span",1,0,we),re(e,a,3,2,"click",(function(){t.count--}),1),te(e,a,0,4,2,0," - ",0),ee(e,a,5,1,"span",1,0,Ce),re(e,a,6,5,"dblclick",fe.bind(t)),te(e,a,0,7,2,0,ye,1,ne(e,0,s)),ee(e,a,8,1,"span",1,0,Ne),re(e,a,9,8,"click",(function(){return t.count++}),1,{capture:!0}),te(e,a,0,10,2,0," + ",0),function(e,t,n){if(n)for(var i=n.length,r=0;i>r;r++)Z(e,n[r],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}(e)},me=xe,function(){return new B(ue,he,ve,pe,me)});ke().attach(document.body).render(),ke().attach(document.body).render({count:18})}();