import{T as e,_ as t,Δ as n,r as i,b as o,s as r,a,u as s,c,d as l,f as u,h as p,w as d,l as f,m as g,i as m,j as v,q as y,k as h,n as _,L as b,M as P}from"./index-cae20ea6.js";var j=function(){function e(e,t,n,i){this._defaultPrevented=!1,this._immediatePropagationStopped=!1,this._type=e,this._target=t,this._cancelable=n,this.data=i||null}return Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"target",{get:function(){return this._target},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cancelable",{get:function(){return this._cancelable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"defaultPrevented",{get:function(){return this._defaultPrevented},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"immediatePropagationStopped",{get:function(){return this._immediatePropagationStopped},enumerable:!0,configurable:!0}),e.prototype.preventDefault=function(){this._cancelable&&(this._defaultPrevented=!0)},e.prototype.stopImmediatePropagation=function(){this._immediatePropagationStopped=!0},e}(),C=function(){function e(){this._cancelableEvents=!1,this._target=null,this._eventType=""}return e.prototype.init=function(e,t){this._eventType||(this._eventType=e,this._target=t||null)},Object.defineProperty(e.prototype,"listenerCount",{get:function(){return this._listeners?this._listeners.length:0},enumerable:!0,configurable:!0}),e.prototype.addListener=function(e){return this._listeners?this._listeners.push(e):this._listeners=[e],e},e.prototype.removeListener=function(e){var t=this._listeners;if(t)if(1===t.length&&t[0]===e)this._listeners=void 0;else{var n=t.indexOf(e);n>-1&&t.splice(n,1)}},e.prototype.removeAllListeners=function(){this._listeners=void 0},e.prototype.emit=function(e){if(this._listeners){for(var t=new j(this._eventType,this._target,this._cancelableEvents,e||null),n=!0,i=0,o=this._listeners;i<o.length;i++){if((0,o[i])(t),t.defaultPrevented&&(n=!1),t.immediatePropagationStopped)break}return n}return!0},e}(),O=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n}(C),E=(function(t){function n(){var e=t.call(this)||this;return e._cancelableEvents=!0,e}e(n,t)}(C),function(){function e(){}return t([n(i),o("design:type",String)],e.prototype,"categoryCode",void 0),t([n(i),o("design:type",String)],e.prototype,"itemCode",void 0),e=t([r],e)}());function S(e,t,n,i){void 0===i&&(i=!0);for(var o="",r="",a=0,s=n.categories;a<s.length;a++){var c=s[a];""===o&&(o=c.code);for(var l=0,u=c.items;l<u.length;l++){var p=u[l];if(""===r&&(r=p.code),p.code===t)return i&&(e.itemCode=t,e.categoryCode=c.code),p}}return i?(e.categoryCode=o,void(e.itemCode=r)):{title:"",code:"error",content:""}}var L,T,k,x,M,w,A,q,D,I=(L={},T=["class","main_menu"],k=["class","title"],x=[" ",""," "],M=["class","content"],w=[" ",""," "],A=[2],q=[4],D=function(){function e(){}return t([a(),o("design:type",Object)],e.prototype,"content",void 0),t([a(s(E)),o("design:type",E)],e.prototype,"state",void 0),t([a(s(O)),o("design:type",O)],e.prototype,"selectEmitter",void 0),e=t([c],e)}(),l("menu",".../doc/menu-layout.ts",L,(function(e,t,n){var i,o,r,a,s=n.content,c=n.state,l=(n.selectEmitter,0),_=0,b=u(e,L,3);p(e,b,0,0,"div",1,0,T),d(e,b,1,0,"click",(function(e){return function(e,t){var n=e.target.dataset;n.page&&t.selectEmitter.emit(n.page)}(e,n)})),f(e,b,2,1,1);for(var P=s.categories,j=P?P.length:0,C=0;j>C;C++){var O=P[C],E=C,S=C===j-1;_=0,o=(i=g(e,0,2,5,++l)).cm;var D=O.code===c.categoryCode?" selected":"",I=0===E?" first":"",z=S?" last":"";p(i,o,0,0,"div",1),m(i,0,0,"class",v(i,0,"menu cat container"+D+I+z)),p(i,o,1,1,"div",1,0,k),y(i,o,0,2,2,0,x,1,v(i,1,O.title)),p(i,o,3,1,"ul",1,0,M),f(i,o,4,2,1);for(var B=0,F=O.items;B<F.length;B++){var G=F[B];a=(r=g(i,0,4,2,++_)).cm,p(r,a,0,0,"li",1),m(r,0,0,"data-page",v(r,0,G.code)),m(r,0,0,"class",v(r,1,G.code===c.itemCode?"selected":"")),y(r,a,0,1,1,0,w,1,v(r,2,G.title)),h(r)}h(i,o,q)}h(e,b,A)}),D));var z=function(){var e={},n=["class","examples layout layout2"],i=["class","blockA2"],r=["class","menu"],m=["class","mainpanel"],y=[6,7],j=function(){function e(){}return t([a(s(E)),o("design:type",E)],e.prototype,"state",void 0),t([a(),o("design:type",Object)],e.prototype,"content",void 0),t([a(s(O)),o("design:type",O)],e.prototype,"changeEmitter",void 0),e=t([c],e)}();return l("menuLayout",".../doc/menu-layout.ts",e,(function(t,o,a){var s,c,l=a.state,j=a.content,C=a.changeEmitter,O=0,E=u(t,e,8),L=S(l,l.itemCode,j);p(t,E,0,0,"div",1,0,n),p(t,E,1,1,"div",1,0,i),p(t,E,2,2,"div",1,0,r),_(t,E,0,3,3,v(t,0,I),0),b(t,E,0,3,"content",v(t,1,j)),b(t,E,0,3,"state",v(t,2,l)),d(t,E,4,3,"select",(function(e){return C.emit(e.data)})),P(t,3),p(t,E,5,2,"div",1,0,m),f(t,E,6,3,1),f(t,E,7,3,1),L&&L.content?(c=(s=g(t,0,6,1,++O)).cm,_(s,c,0,0,0,v(s,0,L.content),1),h(s)):L||console.log("[*menuLayout] Menu item not found"),h(t,E,y)}),j)}();export{E as M,z as m,S as r};