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
    ***************************************************************************** */function e(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",o="ΔFactory",r="ΔDefFactories",a="ΔIsFactory",s="ΔΔProxy",d="ΔIsProxy",l="ΔnewItem",c="Δjson",u=!1;function f(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var v=Array.isArray;function p(e,t){e&&(v(e)&&!e[d]?e.forEach(t):t(e))}function h(e,t){if(e&&t){if(e===t)return;if(v(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function m(e,t){return e?v(e)&&!e[d]?(e.push(t),e):[e,t]:t}function g(e){return e&&!0===e[n]?e[i]:0}function b(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function w(e){return!(!e||!0!==e[n])}function N(e){return g(e)%2==1}function y(e,t){var n=f(e);return n&&t?(n.watchers=m(n.watchers,t),N(e)&&X.register(e),t):null}function x(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=h(n.watchers,t))}function C(e,t){var n,i;t&&function(e,t){if(w(e)){var n=e.constructor.prototype["ΔDefFactories"];for(var i in n)n.hasOwnProperty(i)&&t(i,e["ΔΔ"+i],n[i])}}(e,(function(o,r,a){var s=a===S;if(n=t[o],i="ΔΔ"+o,void 0===n)s&&(e[i]=void 0);else{var d=typeof n;if(null===n)(s||a===E)&&(e[i]=null);else if("object"===d){var f=function(e,t){if(e&&void 0!==t){if(e[l])return e[l](t);u=!0;var n=e[t];return u=!1,n}}(e,o);f?f[c]=n:s&&(e[i]=n)}else"string"===d?(s||a===O)&&(e[i]=n):"number"===d?(s||a===P)&&(e[i]=n):"boolean"===d?(s||a===V)&&(e[i]=n):s&&(e[i]=n)}}));e[c]=void 0}function k(e){var t=e.prototype;t[n]=!0,t[i]=0}function I(e,t){return e||(e=j,t=3),function(n,i){var o="ΔΔ"+i,a=n[r];a||(a=n[r]={}),a[i]=t?1===t?j:R:e,n[o]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);!u&&e[c]&&C(e,e[c]);var r=e[t];(void 0===r||u&&null===r)&&(r=e[t]=!u&&o?o>1?void 0:null:i(),T(e,r));return r}(this,o,i,e,t)},set:function(t){!function(e,t,n,i,o,r){var a=w(i),d=o===S;if(e.ΔComputeDependencies)return void console.error("[Trax] @computed properties must not mutate the Data object when calculated");i&&!a&&o.ΔCreateProxy&&(i=o.ΔCreateProxy(i)||i,a=w(i));var l=!1,c=r[n];N(e)?l=c!==i:c!==i&&(!function e(t){if(!w(t))return;var n=!0;N(t)?n=!1:t.ΔChangeVersion+=1;if(X.register(t),n){var i=t.ΔMd;i&&i.parents&&p(i.parents,(function(t){e(t)}))}}(e),l=!0);l&&(a&&void 0===i&&(i=null),(a||c&&w(c))&&function(e,t,n,i){(function(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=h(n.parents,e))}})(e,t),i||T(e,n)}(e,c,i,d),r[n]=i,function(e,t,n,i,o){var r=e?e.ΔMd:void 0;if(r&&r.trackers){var a=e[s]||e;p(r.trackers,(function(e){e(a,t,n,i,o)}))}}(e,"set",t,c,i))}(this,i,o,t,e,this)},enumerable:!0,configurable:!0})}}function D(){return""}D[a]=!0;var O=D;function A(){return 0}A[a]=!0;var P=A;function $(){return!1}$[a]=!0;var V=$;function j(){return null}j[a]=!0;var E=j;function R(){}R[a]=!0;var S=R;function T(e,t){if(t){var n=f(t);n&&(n.parents=m(n.parents,e))}}var F=0,H=function(){function e(){this.id=++F}return e.prototype.register=function(e){var t=this,n=f(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){M();for(var i,o,r=[],a=0;n>a;a++)(o=(i=t[a]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?K(r):Promise.resolve().then((function(){K(r)})))}},e}();function K(e){for(var t=function(e){p(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var X=new H;function M(){X.objects&&(X=new H)}var L=0,W={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function B(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}W.error("IVY: "+t+i.join(""))}var q=void 0,U=11,_=/^ΔΔ(\w+)Emitter$/,z=/^ΔΔ/,Y=/([^ ]+)\s([^ ]+)/,G="ΔIsAPI",J="ΔIsController",Q="ΔDefaultParam",Z="ΔIoParams",ee="ΔRequiredProps",te={$targetApi:"$1 cannot be used on DOM nodes",$targetElt:"$1 cannot be used on components that don't define #main elements"},ne=0,ie=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++ne,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=de(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==q&&(He(this.$Class,J)?this.hasCtlClass=!0:He(this.$Class,G)||w(this.$Class.prototype)||B(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),re(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&Pe(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,oe(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(b(e,"$template")&&(e.$template=this),b(e,"$logger")){var t=this.view;e.$logger={log:W.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];B(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&oe(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)B(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),We(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;for(var n=[],i=0,o=e.split(";");i<o.length;i++){var r=o[i];if(r&&"#"!==r.charAt(0))return B(this.view,"[$template.query()] Invalid label argument: '"+r+"' (labels must start with #)"),null;var a=this.labels&&this.labels[r]||null;if(a&&a.length){if(!t)return a[0];n=n.concat(a)}}return n.length?n:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(x(this.api,this.watchCb),x(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!w(n)&&(B(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var o in N(t)||M(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(t[o]=e[o]);var r=!this.forceRefresh,a=i.nodes;if(a&&a[0]&&a[0].attached||(r=!1),r&&g(t)+g(n)>this.lastRefreshVersion&&(r=!1),!r){n&&(this.initialized||(re(i,n,"$init","controller"),this.initialized=!0),re(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){B(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&re(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&M()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=g(t)+g(n)}return this.activeWatch||(y(t,this.watchCb),n&&y(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function oe(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(_)){var a=RegExp.$1;o||(o=[]),"function"!=typeof t[a+"Emitter"].init?B(e,"Invalid EventEmitter: "+a+"Emitter"):(o.push(a+"Emitter"),o.push(a),t[a+"Emitter"].init(a,t))}n.events=o||null}else if(null!==i)for(var s=i.length,d=0;s>d;d+=2)t[i[d]].init(i[d+1],t)}function re(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){B(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function ae(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function se(){return function(e){if(e!==q&&null!==e){var t=!0;return function e(t,n,i){if(t!==q&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var o=0,r=t.nodes;o<r.length;o++){if(!a(r[o]))return!1}}return!0;function a(t){var o=t.kind;if("#fragment"===o)return!!i(t)&&e(t.contentView,n,i);if("#container"!==o)return i(t);if(!i(t))return!1;var r=t,a=r.subKind;if("##block"===a){var s=r.views;if(null!==s)for(var d=0,l=s;d<l.length;d++){var c=l[d];if(!e(c,n,i))return!1}if(n&&r.viewPool)for(var u=0,f=r.viewPool;u<f.length;u++){var v=f[u];if(!e(v,n,i))return!1}}else if("##cpt"===a){var p=r.template;if(null!==p)return e(p.view,n,i)}else"##async"===a&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?We(e.domNode,o):e.domNode=o}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function de(e,t,n,i){var o={kind:"#view",uid:"view"+ ++L,attached:!1,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:ae,isEmpty:se};return e?function(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function le(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==q&&null!==i)for(var o=i.template,r=n.length,a=0;r>a;a++)o.registerLabel(n[a],t)}}var ce=[];function ue(e,t,n,i,o){var r,a=e.nodes[n];if(a&&a.attached||B(e,"Invalid ζview call: container must be attached ("+(a?a.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===a.kind)if("##block"===a.subKind){var s=(d=a).views;1===o&&(d.insertFn=null),1===o&&d.views.length>1?(d.previousNbrOfViews=s.length,r=s.shift(),d.viewPool.length?d.viewPool=s.concat(d.viewPool):d.viewPool=s,d.views=[r]):(r=d.views[o-1])||(d.viewPool.length>0?(d.insertFn||(d.insertFn=fe(e,d)),function e(t,n,i){if(t.attached)return;if(n(t,!0),t.attached=!0,"#fragment"===t.kind)for(var o=t.firstChild;o;)e(o,n),o=o.nextSibling;else if("#container"===t.kind){var r=t.subKind;if("##cpt"===r){var a=t.template,s=a?a.view.nodes[0]:null;a&&(a.forceRefresh=!0),s&&(e(s,n),a.view.attached=!0)}else if("##block"===r)for(var d=t.views,l=0;d.length>l;l++)e(d[l].nodes[0],n),d[l].attached=!0}if("#fragment"===t.kind||"#element"===t.kind){var c=t.contentView;c&&(e(c.nodes[0],n),c.attached=!0)}}((r=s[o-1]=d.viewPool.shift()).nodes[0],d.insertFn),r.attached=!0):((r=s[o-1]=de(e,d)).nodes=new Array(i),e.cm&&d.cmAppend?r.cmAppends=[d.cmAppend]:e.cm||(r.cmAppends=[fe(e,d)]))),d.lastRefresh=r.lastRefresh=e.lastRefresh}else{var d;(r=(d=a).contentView)||((r=d.contentView=de(e,d)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===a.kind){var l=a;(r=l.contentView)||(r=l.contentView=de(e,null),l.viewPool&&(l.viewPool[l.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=l),r.lastRefresh=e.lastRefresh}return r}function fe(e,t){var n=function e(t,n){for(;;){if(n||B(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===U)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}if(t.container&&"##block"===t.container.subKind){var r=t.container,a=r.views.indexOf(t);if(a>-1)for(var s=void 0,d=void 0,l=a+1;l<r.views.length;l++)if((s=r.views[l]).nodes&&s.nodes.length&&(d=m(s,s.nodes[0],r.domNode)))return d;for(var c=r.viewPool,u=void 0,f=0,v=c;f<v.length;f++){if((s=v[f]).nodes&&s.nodes.length&&s.attached&&(u=m(s,s.nodes[0],r.domNode)))return u}}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var p=t.nodes[n.parentIdx];return"#element"===p.kind?{position:"lastChild",parentDomNd:Ae(t,n)}:e(t,p)}var h=m(t,n.nextSibling,Ae(t,n));if(h)return h;n=n.nextSibling}function m(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=m(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return m(r,r.nodes[0],n)}return null}if("#container"===t.kind){var a=t;i=null;if("##block"===a.subKind)for(var s=a.views,d=s.length,l=0;d>l&&!(i=m(s[l],s[l].nodes[0],n));l++);else if("##cpt"===a.subKind){var c=a.template.view;i=m(c,c.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?Be(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?We(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(qe),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var a,s=t.nodes.length,d="",l=0;s>l;l++)if(a=t.nodes[l])if(d=a.uid.length<5?["     ","    ","   ","  "," "][a.uid.length]:"","#container"===a.kind){var c=a,u=c.domNode?c.domNode.uid:"XX";if(console.log(n+"["+l+"] "+a.uid+d+" "+u+" attached:"+(a.attached?1:0)+" parent:"+C(a.parentIdx)+" nextSibling:"+(a.nextSibling?a.nextSibling.uid:"X")),"##block"===c.subKind){var f=c,v=f.views.length;if(v)for(var p=0;v>p;p++)if(f.views[p]){var h=f.views[p];u=h.rootDomNode?h.rootDomNode.$uid:"XX",console.log(n+"  - view #"+p),e(f.views[p],"    "+n)}else console.log(n+"  - view #"+p+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===c.subKind){var m=c,g=m.template,b=m.contentView;b?(console.log(n+"  - light DOM:"),e(b,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+c.subKind+" container")}else{u=a.domNode?a.domNode.uid:"XX";var w="";if(a.domNode&&"#text"===a.kind)w=" text=#"+a.domNode._textContent+"#";else if("#fragment"===a.kind||"#element"===a.kind){for(var N=[],y=a.firstChild;y;)N.push(y.uid),y=y.nextSibling;w=" children:["+N.join(", ")+"]";var x=a.contentView;x&&(w+=" >>> content view: "+x.uid)}console.log(n+"["+a.idx+"] "+a.uid+d+" "+u+" attached:"+(a.attached?1:0)+" parent:"+C(a.parentIdx)+" nextSibling:"+(a.nextSibling?a.nextSibling.uid:"X")+w)}else console.log(n+"["+l+"] XX");function C(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function ve(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var a=o.views.length;if(!n){if(a!==o.previousNbrOfViews)for(var s=o.viewPool,d=s.length,l=void 0,c=0;d>c;c++)Pe(l=s[c],l.nodes[0]),l.attached=!1;o.previousNbrOfViews=a}}else Pe(e,o)}}function pe(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)ve(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function he(e,t,n,i,o,r,a,s,d){if(t){var l=e.createElement(o);if(s)for(var c=s.length,u=0;c>u;u+=2)l.setAttribute(s[u],s[u+1]);if(d){c=d.length;for(var f=0;c>f;f+=2)l[d[f]]=d[f+1]}var v={kind:"#element",uid:"elt"+ ++L,idx:n,parentIdx:-1,ns:"",domNode:l,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=v,le(e,l,a),e.cmAppends[i](v,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?We(e.domNode,l):e.domNode=l,t||me(v,e)})}else a&&le(e,e.nodes[n].domNode,a)}function me(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function ge(e,t,n,i,o,r,a,s){for(var d,l=[],c=8;c<arguments.length;c++)l[c-8]=arguments[c];if(s){var u=void 0,f=void 0,v=!1;u=t?a.slice(0):(d=e.nodes[i]).pieces;for(var p=0;s>p;p++)(f=we(e,n,l[p]))!==ce&&(v=!0,u[1+2*p]=null==f?"":f);if(!t)return v&&(d.domNode.textContent=u.join("")),void le(e,d.domNode,r);d=h(e.doc.createTextNode(u.join("")),u),le(e,d.domNode,r)}else{if(!t)return void(r&&le(e,e.nodes[i].domNode,r));d=h(e.doc.createTextNode(a),void 0),le(e,d.domNode,r)}function h(e,t){return{kind:"#text",uid:"txt"+ ++L,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=d,e.cmAppends[o](d,!1)}function be(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return ce;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function we(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?ce:(i[2*n[0]]=1,n[1])}return be(e,n[0],n[1])}return n}function Ne(e,t,n,i,o){if(t){var r=function(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++L,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++L,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,cptRef:null,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}(n,null,o);return e.nodes[n]=r,function(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===q)}}(e,r,i),r}}function ye(e,t,n,i,o){if(o!==ce){var r=we(e,t,o);if(r!==ce){var a=e.nodes[n].domNode;void 0===r?a.removeAttribute(i):a.setAttribute(i,r)}}}function xe(e,t,n,i,o,r,a,s){var d,l=e.nodes[i],c=l.kind,u=q;if(a!==q&&s!==q&&null!==a&&"object"==typeof a&&(t&&"string"==typeof s&&w(a)&&!b(a,s)&&B(e,"Invalid property: '"+s+"'"),u=a[s]),"#container"===c)(function(e,t,n,i,o){if(i&&(!e.cm||b(i,o)))return!0;var r="";return n.template&&(r=" on <*"+n.template.templateName+"/>"),B(e,"Invalid parameter '"+o+"'"+r),!1})(e,0,l,d=l.data,r)&&(t&&Le(e,d,r),d[r]=u);else if("#param"===c)if(0===r){var f=l;f.dataHolder&&(f.dataHolder[f.dataName]=u,d=f.dataHolder,r=f.dataName,t&&Le(e,d,r,"."+r,!1,!0))}else d=function(e,t,n,i,o){if(0===o){if(n.dataHolder)return n.dataHolder[n.dataName]=i,n.dataHolder}else{if(n.data)return t&&!b(n.data,o)&&B(e,"Invalid param node parameter: "+o),n.data[o]=i,n.data;B(e,"Invalid param node parameter: "+o)}return null}(e,t,l,u,r),t&&Le(e,d,r,"."+l.dataName);else if("#decorator"===c){var v=l;d=v.api,0===r?(r=Ie(e,v,u),t&&r&&Le(e,d,r,v.refName,!0)):t&&!ke(e,v,r)||(t&&Le(e,d,r,v.refName),d[r]=u)}var p=l.bindings;if(p===q&&(p=l.bindings=[]),p[o]===q){if(d){var h={propertyHolder:a,propertyName:s,watchFn:y(d,(function(){var e=d[r],t=h.propertyHolder;if(t!==q&&null!==t&&h.propertyName!==q&&t[h.propertyName]!==e){var n=g(t);0===n||n%2==1?Promise.resolve().then((function(){t[h.propertyName]=e})):t[h.propertyName]=e}}))};p[o]=h}}else{var m=p[o];m.propertyHolder=a,m.propertyName=s}}function Ce(e,t,n,i,o,r,a,s,d,l,c){var u;if(t){var f=e.nodes;if(void 0===a)B(e,"Undefined decorator reference: @"+r);else if("function"!=typeof a&&!0!==a.$isDecorator)B(e,"Invalid decorator reference: @"+r);else{var v=new a.$apiClass,p=a(v);if(u={kind:"#decorator",uid:"deco"+ ++L,idx:i,parentIdx:o,attached:!0,nextSibling:void 0,domNode:void 0,instance:p,api:v,refName:"@"+r,validProps:!0},f[i]=u,l)for(var h=l.length,m=0;h>m;m+=2)ke(e,u,l[m]),v[l[m]]=l[m+1]}}else u=e.nodes[i];if(u!==q){v=u.api;1===s&&Ie(e,u,d),le(e,v,c)}}function ke(e,t,n){return!!b(t.api,n)||(B(e,"Invalid decorator parameter '"+n+"' on "+t.refName),!1)}function Ie(e,t,n){var i=t.api,o=i[Q];return o===q?(B(e,t.refName+" doesn't define any default parameter"),""):(i[o]=n,o)}function De(e,t,n){if(t){var i=n.api,o=e.nodes[n.parentIdx],r=null,a=null;if(void 0===o.kind)r=o;else if("#element"===o.kind)r=o.domNode;else if("#container"===o.kind&&"##cpt"===o.subKind){var s=o.template;a=s.api,r=s.query("#main")}else B(e,"Invalid decorator target for "+n.refName);null!==r&&b(i,"$targetElt")&&(i.$targetElt=r),null!==a&&b(i,"$targetApi")&&(i.$targetApi=a),n.validProps=function(e,t,n,i){if(t[ee]!==q){var o=t[ee],r=void 0,a=!0;for(var s in o)if((r=t[o[s]])===q||null===r){var d=Fe(o[s]);i!==q&&i[d]!==q?B(e,(n+" "+d).replace(Y,i[d])):B(e,d+" property is required for "+n),a=!1}return a}return!0}(e,n.api,n.refName,te),n.validProps&&re(e,n.instance,"$init",n.refName)}n.validProps&&re(e,n.instance,"$render",n.refName)}function Oe(e,t,n,i){var o=e.nodes[i];o!==q&&De(e,t,o)}function Ae(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:Ae(e.projectionHost.view,n)}return 0===t.idx?e.parentView?Ae(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function Pe(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=Ae(e,t);t.attached=!1,n?n.removeChild(t.domNode):B(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,a=void 0,s=0;r>s;s++)a=o[s].nodes[0],Pe(o[s],a),o[s].attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var d=t.template;a=d.view.nodes[0];Pe(d.view,a),d.view.attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0)}}else if("#fragment"===t.kind){var l=t;if(l.attached=!1,l.contentView)Pe(l.contentView,l.contentView.nodes[0]);else if(l.firstChild)for(var c=l.firstChild;c;)Pe(e,c),c=c.nextSibling;l.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var $e=k,Ve=I,je=function(e){var t=e.ΔFactory;if(t)return t;function n(){return new e}return n[a]=!0,e[o]=n,n},Ee=O,Re=P,Se={};function Te(e){e.prototype[G]=!0,k(e)}function Fe(e){return e.replace(z,"")}function He(e,t){return!0===e.prototype[t]}function Ke(e,t){e[Q]=Fe(t)}function Xe(e,t){var n=e[Z];t="/"+Fe(t),e[Z]=n===q?t:n+t}function Me(e,t){var n=e[ee];n===q&&(n=e[ee]=[]),n.push(t)}function Le(e,t,n,i,o,r){var a=t[Z];if(a!==q){var s="/"+n;if(a===s||a.indexOf(s)>-1)return!0}return B(e,i!==q?o?"Invalid I/O binding expression on "+i+" (@defaultParam is not an @io param)":r?"Invalid I/O binding expression on "+i+"@paramValue (not an @io param)":"Invalid I/O binding expression on "+i+"."+n+" (not an @io param)":"Invalid I/O binding expression on '"+n+"' (not an @io param)"),!1}function We(e,t,n){t.appendChild(e)}function Be(e,t,n,i){n.insertBefore(e,t)}var qe="-------------------------------------------------------------------------------";var Ue,_e="value",ze="checked",Ye="data",Ge=["text","radio","checkbox","number","range"],Je={passive:!0},Qe=function(){function n(){this.ΔΔevents="input",this.ΔΔdebounce=0}return n.prototype.ΔDefault=function(e){switch(e){case"events":return"input";case"debounce":return 0}return Se},e([Me,Ke,Xe,t("design:type",Object)],n.prototype,"ΔΔdata",void 0),e([Ve(),t("design:type",Object)],n.prototype,"data",void 0),e([Me,t("design:type",Object)],n.prototype,"ΔΔ$targetElt",void 0),e([Ve(),t("design:type",Object)],n.prototype,"$targetElt",void 0),e([Ve(Ee),t("design:type",String)],n.prototype,"events",void 0),e([Ve(0,2),t("design:type",Object)],n.prototype,"input2data",void 0),e([Ve(0,2),t("design:type",Object)],n.prototype,"data2input",void 0),e([Ve(Re),t("design:type",Number)],n.prototype,"debounce",void 0),n=e([Te],n)}(),Ze=((Ue=function(e){var t,n,i="",o="",r="",a={};function s(t){if("number"===i&&"input"===t.type){var o=t[Ye];if("e"===o||"E"===o||"-"===o||"+"===o)return}e.debounce<=0?d():(n||(n=new et("@value error")),n.duration=e.debounce,n.process(d))}function d(){var n;if("text"===i||"number"===i)n=t[_e];else if("range"===i){var o=t[_e];if(""===o)n=0;else if(n=parseInt(o),isNaN(n))throw"Invalid input value '"+o+"': value of input type range shall be an integer"}else if("checkbox"===i)n=t[ze];else if("radio"===i){if(!t[ze])return;n=t[_e]}e.data=e.input2data(n)}return{$init:function(){if("INPUT"!==(t=e.$targetElt).tagName&&"TEXTAREA"!==t.tagName&&"SELECT"!==t.tagName)throw"@value can only be used on input, textarea and select elements";if(i="text","INPUT"===t.tagName&&(i=t.getAttribute("type"),-1===Ge.indexOf(i)))throw"Invalid input type '"+i+"': @value can only be used on types '"+Ge.join("', '")+"'";t.addEventListener("change",s,Je)},$render:function(){if(void 0===e.input2data&&(e.input2data=function(e){if("number"===i){if(""===e)return 0;try{e=parseFloat(e)}catch(e){return console.log("@value conversion error: ",e),0}}return e}),void 0===e.data2input&&(e.data2input=nt),o!==e.data){o=e.data;var n=e.data2input(o);if("text"===i||"number"===i)t[_e]=n;else if("range"===i){if(!Number.isInteger(n))throw"Invalid input value '"+n+"': value of input type range shall be an integer";t[_e]=""+n}else"checkbox"===i?t[ze]=!!n:"radio"===i&&(t[ze]=n===t[_e])}if(r!==e.events){for(var d=e.events.split(";"),l=0,c=r.split(";");l<c.length;l++)"change"!==(v=c[l])&&d.indexOf(v)<0&&a[v]&&(t.removeEventListener(v,s,Je),a[v]=!1);for(var u=0,f=d;u<f.length;u++){var v;"change"!==(v=f[u])&&(a[v]||(t.addEventListener(v,s,Je),a[v]=!0))}r=e.events}},$dispose:function(){if(t){if(t.removeEventListener("change",s),""!==r)for(var e=0,i=r.split(";");e<i.length;e++){var o=i[e];"change"!==o&&t.removeEventListener(o,s,Je)}r="",n=void 0}}}}).$apiClass=Qe,Ue.$isDecorator=!0,Ue),et=function(){function e(e){void 0===e&&(e="Error in callback"),this.errContext=e,this.timeoutId=null,this.duration=100}return e.prototype.process=function(e){var t=this;this.duration<=0?tt(e,this.errContext):(null!==this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.timeoutId=null,tt(e,t.errContext)}),this.duration))},e}();function tt(e,t){try{e()}catch(e){throw"Debounce - "+t+"\n"+(e.message?e.message:e)}}function nt(e){return e}var it,ot,rt,at,st,dt,lt,ct,ut,ft,vt,pt,ht,mt,gt,bt,wt=function(){function n(){}return e([I(O),t("design:type",String)],n.prototype,"comment",void 0),e([I(O),t("design:type",String)],n.prototype,"color",void 0),n=e([k],n)}(),Nt=["WH","BK","RD","BL"],yt={WH:"white",BK:"black",RD:"red",BL:"blue"},xt=(dt={},lt=["class","comment"],ct=["class","color"],ut=["",""],ft=["class","output"],vt=["class","lbl"],pt=["",""],ht=["class","lbl"],mt=["",""],gt=[9],bt=function(){function n(){}return e([Ve(je(wt)),t("design:type",wt)],n.prototype,"d",void 0),n=e([$e],n)}(),it="main",ot="select/select.ts",rt=dt,at=function(e,t,n){var i,o,r,a,s,d=n.d,l=0,c=(a=20,(s=(r=e).cm)?(r.nodes=new Array(a),r.cmAppends||(r.cmAppends=[],r.anchorNode&&(r.cmAppends[0]=function(e,t){e.domNode?Be(e.domNode,r.anchorNode,r.rootDomNode):e.domNode=r.rootDomNode}))):r.cmAppends=null,s);!function(e,t,n,i){if(t){var o={kind:"#fragment",uid:"fra"+ ++L,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=o;var r=e.cmAppends[i];r(o,!1),e.cmAppends[i+1]=function(e,t){r(e,!0),t||me(o,e)}}}(e,c,0,0),he(e,c,1,1,"div",1),ge(e,c,0,2,2,0,"Multi-line text (textarea): ",0),he(e,c,3,1,"textarea",0,0,lt),Ce(e,c,0,4,3,"value",Ze,2),xe(e,c,0,4,0,0,d,"comment"),Oe(e,c,0,4),he(e,c,5,1,"div",1),ge(e,c,0,6,2,0,"Color (select): ",0),he(e,c,7,1,"select",1,0,ct),Ce(e,c,0,8,7,"value",Ze,2),xe(e,c,0,8,0,0,d,"color"),Ne(e,c,9,2,1);for(var u=0,f=Nt;u<f.length;u++){var v=f[u];he(i=ue(e,0,9,2,++l),o=i.cm,0,0,"option",1),ye(i,0,0,"value",be(i,0,v)),ge(i,o,0,1,1,0,ut,1,be(i,1,yt[v])),pe(i)}Oe(e,c,0,8),he(e,c,10,1,"div",1,0,ft),ge(e,c,0,11,2,0," Data model values: ",0),he(e,c,12,1,"div",1),he(e,c,13,2,"div",1,0,vt),ge(e,c,0,14,3,0," comment: ",0),ge(e,c,0,15,2,0,pt,1,be(e,0,d.comment.replace(/\n/g,"\\n"))),he(e,c,16,1,"div",1),he(e,c,17,2,"div",1,0,ht),ge(e,c,0,18,3,0," color: ",0),ge(e,c,0,19,2,0,mt,1,be(e,1,d.color)),pe(e,0,gt)},st=bt,function(){return new ie(it,ot,rt,at,st)}),Ct=new wt;Ct.comment="line1\nline2",Ct.color="BL",xt().attach(document.body).render({d:Ct})}();
