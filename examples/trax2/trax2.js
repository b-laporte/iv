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
    ***************************************************************************** */function t(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}var n="ΔTrackable",r="ΔChangeVersion",i="ΔFactory",o="ΔDefFactories",s="ΔIsFactory",a="ΔΔProxy",u="ΔIsProxy",c="ΔCreateProxy",f="ΔnewItem",d="Δdispose",v="Δjson",l=!1;function h(t){return t&&t.ΔTrackable?t.ΔMd?t.ΔMd:t.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var p=Array.isArray;function m(t,e){t&&(p(t)&&!t[u]?t.forEach(e):e(t))}function y(t,e){if(t&&e){if(t===e)return;if(p(t)){var n=t;if(1===n.length){if(n[0]===e)return}else{var r=n.indexOf(e);if(r>-1)return n.splice(r,1),1===n.length?n[0]:n}}}return t}function g(t,e){return t?p(t)&&!t[u]?(t.push(e),t):[t,e]:e}function b(t){return t&&!0===t[n]?t[r]:0}function w(t,e){if(void 0===e&&(e=!1),j(t)){t[d]?t[d](e):L(t,(function(n,r){$(t,r),t["ΔΔ"+n]=void 0,e&&w(r,!0)}));var n=t.ΔMd;if(n){var r=[];m(n.parents,(function(t){r.push(t)}));for(var i=function(e){L(e,(function(n,r){r===t&&($(e,t),e["ΔΔ"+n]=void 0)})),z(e)},o=0,s=r;o<s.length;o++){i(s[o])}}}}function L(t,e){if(j(t)){var n=t.constructor.prototype["ΔDefFactories"];for(var r in n)n.hasOwnProperty(r)&&e(r,t["ΔΔ"+r],n[r])}}function j(t){return!(!t||!0!==t[n])}function x(t){return b(t)%2==1}function I(t){var e,n=t.ΔMd;return n&&(e=n.watchers)?p(e)&&!e[u]?e.length:1:0}var C=function(){var t,e,n=[],r=[],i={getDefaultConversion:function(){return o(t,i)},getPreviousConversion:function(){return t.ΔtoJsResult}};function o(t,n){var r=n.getPreviousConversion();if(r)return r;var i=void 0;if(t.Δconvert)i=t.Δconvert(e);else{if(t["Δjson"])return t["Δjson"];i={},L(t,(function(t,n){j(n)&&(n=s(n,e)),void 0!==n&&(i[t]=n)}))}return i}function s(s,a){var u=0===n.length,c=s;if(s&&j(s)&&(n.push(s),c=void 0,r.push(s),t=s,a?(e=a,c=a(s,i)):c=o(s,i),s.ΔtoJsResult=c,r.pop(),t=r[r.length-1]),u){for(var f=n.length;f--;)n[f]["ΔtoJsResult"]=void 0;t=null,n=[],e=void 0}return c}return s}();function N(t,e){var n,r;e&&L(t,(function(i,o,s){var a=s===V;if(n=e[i],r="ΔΔ"+i,void 0===n)a&&(t[r]=void 0);else{var u=typeof n;if(null===n)(a||s===R)&&(t[r]=null);else if("object"===u){var c=function(t,e){if(t&&void 0!==e){if(t[f])return t[f](e);l=!0;var n=t[e];return l=!1,n}}(t,i);c?c[v]=n:a&&(t[r]=n)}else"string"===u?(a||s===k)&&(t[r]=n):"number"===u?(a||s===B)&&(t[r]=n):"boolean"===u?(a||s===D)&&(t[r]=n):a&&(t[r]=n)}}));t[v]=void 0}function P(t){var e=t.prototype;e[n]=!0,e[r]=0}function E(t,e){return t||(t=O,e=3),function(n,r){var i="ΔΔ"+r,s=n[o];s||(s=n[o]={}),s[r]=e?1===e?O:A:t,n[i]=void 0,function(t,e,n,r){r&&delete t[e]&&Object.defineProperty(t,e,r)}(n,r,0,{get:function(){return function(t,e,n,r,i){t.ΔComputeDependencies&&(t.ΔComputeDependencies[n]=!0);!l&&t[v]&&N(t,t[v]);var o=t[e];(void 0===o||l&&null===o)&&(o=t[e]=!l&&i?i>1?void 0:null:r(),q(t,o));return o}(this,i,r,t,e)},set:function(e){J(this,r,i,e,t,this)},enumerable:!0,configurable:!0})}}function S(t){var e=t.ΔFactory;if(e)return e;function n(){return new t}return n[s]=!0,t[i]=n,n}function M(){return""}M[s]=!0;var k=M;function F(){return 0}F[s]=!0;var B=F;function T(){return!1}T[s]=!0;var D=T;function O(){return null}O[s]=!0;var R=O;function A(){}A[s]=!0;var V=A;function J(t,e,n,r,i,o){var s=j(r),a=i===V;if(!t.ΔComputeDependencies){r&&!s&&i.ΔCreateProxy&&(s=j(r=i.ΔCreateProxy(r)||r));var u=!1,c=o[n];return x(t)?u=c!==r:c!==r&&(z(t),u=!0),u&&(s&&void 0===r&&(r=null),(s||c&&j(c))&&function(t,e,n,r){$(t,e),r||q(t,n)}(t,c,r,a),o[n]=r,H(t,"set",e,c,r)),r}console.error("[Trax] @computed properties must not mutate the Data object when calculated")}function H(t,e,n,r,i){var o=t?t.ΔMd:void 0;if(o&&o.trackers){var s=t[a]||t;m(o.trackers,(function(t){t(s,e,n,r,i)}))}}function z(t){if(j(t)){var e=!0;if(x(t)?e=!1:t.ΔChangeVersion+=1,U.register(t),e){var n=t.ΔMd;n&&n.parents&&m(n.parents,(function(t){z(t)}))}}}function $(t,e){if(e){var n=e.ΔMd;n&&n.parents&&(n.parents=y(n.parents,t))}}function q(t,e){if(e){var n=h(e);n&&(n.parents=g(n.parents,t))}}var G=0,K=function(){function t(){this.id=++G}return t.prototype.register=function(t){var e=this,n=h(t);n&&!n.refreshCtxt&&(this.objects?this.objects.push(t):(this.objects=[t],Promise.resolve().then((function(){e.refresh()}))),n.refreshCtxt=this)},t.prototype.refresh=function(t){void 0===t&&(t=!0);var e=this.objects,n=e?e.length:0;if(n){W();for(var r,i,o=[],s=0;n>s;s++)(i=(r=e[s]).ΔMd).refreshCtxt&&(r.ΔChangeVersion%2&&(r.ΔChangeVersion+=1),i.refreshCtxt&&i.watchers&&o.push({dataNode:r,watchers:i.watchers})),i.refreshCtxt=void 0;this.objects=void 0,o.length&&(t?Q(o):Promise.resolve().then((function(){Q(o)})))}},t}();function Q(t){for(var e=function(t){m(t.watchers,(function(e){e(t.dataNode)}))},n=0,r=t;n<r.length;n++){e(r[n])}}var U=new K;function W(){U.objects&&(U=new K)}var X=["push","pop","shift","unshift","splice"],Y=/^\d+$/,Z=/^\Δ/,_=function(){function t(t){this.ΔTrackable=!0,this.ΔDataFactory=!0,this.ΔChangeVersion=0,this.ΔMd=void 0,this.ΔΔSelf=this,this.ΔIsProxy=!1,this.ΔItemFactory=t}return t.ΔNewProxy=function(e){var n=new Proxy([],new t(e));return n[a]=n,n},t.ΔCreateProxy=function(e,n){if(p(e)){var r=new Proxy(e,new t(n)),i=e.length;for(z(r);i--;)q(r,e[i]);return r}return null},t.prototype.ΔnewItem=function(t){var e=this.ΔItemFactory();return void 0===t&&(t=this.ΔΔList.length),t>-1&&J(this.ΔΔSelf,t,t,e,this.ΔItemFactory,this.ΔΔList),e},t.prototype.Δdispose=function(t){void 0===t&&(t=!1);for(var e,n=this.ΔΔList,r=n.length;r--;)e=n[r],$(this.ΔΔSelf,e),n[r]=void 0,t&&w(e,!0);return n},t.prototype.Δconvert=function(t){for(var e=[],n=this.ΔΔList,r=n.length;r--;)e[r]=C(n[r],t);return e},t.prototype.ΔToString=function(){return"Trax List ["+this.ΔΔList.join(", ")+"]"},t.prototype.ΔinitFromJson=function(){var t=this["Δjson"];if(t){if(t.constructor!==Array)console.error("[Trax] Invalid json type: Lists can only be initialized from Arrays");else for(var e=t.length,n=void 0,r=this.ΔΔList,i=void 0;e--;)if(i=n=t[e],n){var o=this.ΔItemFactory();j(o)&&(o["Δjson"]=n,i=o),r[e]=i}else null===n&&(r[e]=null);this["Δjson"]=void 0}},t.prototype.set=function(t,e,n){if(this.ΔΔList||(this.ΔΔList=t),e.match(Y)){var r=parseInt(e,10);J(this.ΔΔSelf,r,r,n,this.ΔItemFactory,this.ΔΔList)}else e.match(Z)&&(this[e]=n);return!0},t.prototype.get=function(t,e){if(this.ΔΔList||(this.ΔΔList=t),e===u)return!0;var n=typeof e;if(this["Δjson"]&&this.ΔinitFromJson(),"string"===n){if(e.match(Z))return this[e];if(e.match(Y))return this.ΔΔList[parseInt(e,10)];if("length"===e)return this.ΔΔList.length;if("push"===e)return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=this,i=e.length,o=r.ΔΔList.length,s=0;i>s;s++)r.set(t,o+s+"",e[s])};if("toString"===e)return this.ΔToString;if("function"==typeof t[e])return function(){var t=this,n=X.indexOf(e)>-1;if(n){z(t);for(var r=t.ΔΔList,i=0;r.length>i;i++)$(t,r[i])}var o=t.ΔΔList,s=o[e].apply(o,arguments);if(n){for(r=t.ΔΔList,i=0;r.length>i;i++)q(t,r[i]);H(this,e)}return s}}return e===Symbol.iterator?this.ΔΔList[Symbol.iterator]:this[e]},t}();var tt=function(t){function e(){return _.ΔNewProxy(t)}return t=t||R,e[s]=!0,e[c]=function(e){return _.ΔCreateProxy(e,t)},e},et=function(){function n(){}return t([E(k),e("design:type",String)],n.prototype,"firstName",void 0),t([E(k),e("design:type",String)],n.prototype,"lastName",void 0),t([E(B),e("design:type",Number)],n.prototype,"id",void 0),n=t([P],n)}(),nt=function(){function n(){}return t([E(S(et)),e("design:type",et)],n.prototype,"leader",void 0),t([E(k),e("design:type",String)],n.prototype,"name",void 0),t([E(tt(S(et))),e("design:type",Array)],n.prototype,"members",void 0),t([E(),e("design:type",Object)],n.prototype,"data",void 0),n=t([P],n)}(),rt=new et;rt.firstName="Marge",rt.lastName="Simpson",rt.id=1;var it=new et;it.firstName="Homer",it.lastName="Simpson",it.id=1;var ot=new nt;ot.name="The Simpsons",ot.leader=rt,ot.members[0]=rt,ot.members.push(it),ot.data={value1:"v1",value2:"v2"},ct("init complete (watch not activated)"),ft();var st=0;document.getElementById("update1-btn").addEventListener("click",(function(){rt.firstName+="+"+ ++st})),document.getElementById("update2-btn").addEventListener("click",(function(){it.firstName+="+"+ ++st,it.lastName+="+"+st})),document.getElementById("update3-btn").addEventListener("click",(function(){ot.data.value1+="+"+ ++st})),document.getElementById("add-btn").addEventListener("click",(function(){var t=new et;t.firstName="Bart"+ ++st,t.lastName="Simpson",t.id=st,ot.members.push(t)})),document.getElementById("remove-btn").addEventListener("click",(function(){ot.members.splice(0,1)})),document.getElementById("new-data-btn").addEventListener("click",(function(){ot.data={value1:"VAL1-"+ ++st,value2:"VAL2-"+st}}));var at,ut=null;function ct(t){var e=(at=at||[]).length+1;at.push("<b>"+e+". </b>"+t),document.getElementById("logs").innerHTML=["<b>logs:</b> <br/>",at.join(", ")].join("")}function ft(){document.getElementById("data").innerHTML=['<div class="group">',"<b>name:</b> ",ot.name,", ","<b>leader:</b> ",ot.leader.firstName," / ",ot.leader.lastName,", ","<b>number of members:</b> ",ot.members.length,", ","<div><b>members:</b>",ot.members.map((function(t,e){return"\n            <b>"+(e+1)+".</b> "+t.firstName+" / "+t.lastName+"\n        "})).join(""),"</div><b>data:</b> ",JSON.stringify(ot.data),"</>","</div>"].join("")}document.getElementById("watch-btn").addEventListener("click",(function(){var t,e,n;0===I(ot)?(e=function(){ct("group changed - versions: \n                g="+b(ot)+" \n                user1="+b(rt)+" \n                user2="+b(it)),ft()},n=h(t=ot),ut=n&&e?(n.watchers=g(n.watchers,e),x(t)&&U.register(t),e):null,ct("group watch <b>activated</b>")):ct("group watch <b>already activated</b>")})),document.getElementById("unwatch-btn").addEventListener("click",(function(){var t,e,n;e=ut,(n=(t=ot)?t.ΔMd:void 0)&&e&&(n.watchers=y(n.watchers,e)),ct("group watch <b>deactivated</b>")}))}();