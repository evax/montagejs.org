montageDefine("76567f7","q",{dependencies:[],factory:function(e,t,n){(function(e){if(typeof bootstrap=="function")bootstrap("promise",e);else if(typeof t=="object")e(void 0,t);else if(typeof define=="function")define(e);else if(typeof ses!="undefined"){if(!ses.ok())return;ses.makeQ=function(){var t={};return e(void 0,t)}}else e(void 0,Q={})})(function(e,t){"use strict";function b(e){return y(e)==="[object StopIteration]"||e instanceof w}function S(e,t){t.stack&&typeof e=="object"&&e!==null&&e.stack&&e.stack.indexOf(E)===-1&&(e.stack=x(e.stack)+"\n"+E+"\n"+x(t.stack))}function x(e){var t=e.split("\n"),n=[];for(var r=0;r<t.length;++r){var i=t[r];!N(i)&&!T(i)&&n.push(i)}return n.join("\n")}function T(e){return e.indexOf("(module.js:")!==-1||e.indexOf("(node.js:")!==-1}function N(e){var t=/at .+ \((.*):(\d+):\d+\)/.exec(e);if(!t)return!1;var i=t[1],s=t[2];return i===r&&s>=n&&s<=Nt}function C(){if(Error.captureStackTrace){var e,t,n=Error.prepareStackTrace;return Error.prepareStackTrace=function(n,r){e=r[1].getFileName(),t=r[1].getLineNumber()},(new Error).stack,Error.prepareStackTrace=n,r=e,t}}function k(e,t,n){return function(){return typeof console!="undefined"&&typeof console.warn=="function"&&console.warn(t+" is deprecated, use "+n+" instead.",(new Error("")).stack),e.apply(e,arguments)}}function L(){function u(r){if(!e)return;n=U(r),p(e,function(e,t){o(function(){n.promiseSend.apply(n,t)})},void 0),e=void 0,t=void 0}var e=[],t=[],n,r=m(L.prototype),i=m(O.prototype);return i.promiseSend=function(r,i,s,u){var a=h(arguments);e?(e.push(a),r==="when"&&u&&t.push(u)):o(function(){n.promiseSend.apply(n,a)})},i.valueOf=function(){return e?i:n.valueOf()},Error.captureStackTrace&&(Error.captureStackTrace(i,L),i.stack=i.stack.substring(i.stack.indexOf("\n")+1)),s(i),r.promise=i,r.resolve=u,r.reject=function(e){u(R(e))},r.notify=function(n){e&&p(t,function(e,t){o(function(){t(n)})},void 0)},r}function A(e){var t=L();return st(e,t.resolve,t.reject,t.notify).fail(t.reject),t.promise}function O(e,t,n,r){t===void 0&&(t=function(e){return R(new Error("Promise does not support operation: "+e))});var i=m(O.prototype);return i.promiseSend=function(n,r){var s=h(arguments,2),o;try{e[n]?o=e[n].apply(i,s):o=t.apply(i,[n].concat(s))}catch(u){o=R(u)}r&&r(o)},n&&(i.valueOf=n),r&&(i.exception=r),s(i),i}function M(e){return _(e)?e.valueOf():e}function _(e){return e&&typeof e.promiseSend=="function"}function D(e){return e&&typeof e.then=="function"}function P(e){return H(e)||B(e)}function H(e){return!D(M(e))}function B(e){return e=M(e),_(e)&&"exception"in e}function q(){!I&&typeof window!="undefined"&&!window.Touch&&window.console&&console.log("Should be empty:",F),I=!0}function R(e){var t=O({when:function(t){if(t){var n=d(j,this);n!==-1&&(F.splice(n,1),j.splice(n,1))}return t?t(e):R(e)}},function(){return R(e)},function n(){return this},e);return q(),j.push(t),F.push(e),t}function U(e){if(_(e))return e;e=M(e);if(D(e)){var t=L();return e.then(t.resolve,t.reject,t.notify),t.promise}return O({when:function(){return e},get:function(t){return e[t]},put:function(t,n){return e[t]=n,e},del:function(t){return delete e[t],e},post:function(t,n){return e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},fapply:function(t){return e.apply(void 0,t)},viewInfo:function(){function r(e){n[e]||(n[e]=typeof t[e])}var t=e,n={};while(t)Object.getOwnPropertyNames(t).forEach(r),t=Object.getPrototypeOf(t);return{type:typeof e,properties:n}},keys:function(){return g(e)}},void 0,function n(){return e})}function z(e){return O({isDef:function(){}},function(){var n=h(arguments);return Y.apply(void 0,[e].concat(n))},function(){return M(e)})}function W(e,t){return e=U(e),t?O({viewInfo:function(){return t}},function(){var n=h(arguments);return Y.apply(void 0,[e].concat(n))},function(){return M(e)}):Y(e,"viewInfo")}function X(e){return W(e).when(function(t){var n;t.type==="function"?n=function(){return nt(e,void 0,arguments)}:n={};var r=t.properties||{};return g(r).forEach(function(t){r[t]==="function"&&(n[t]=function(){return tt(e,t,arguments)})}),U(n)})}function V(e,t,n,r){function u(e){try{return typeof t=="function"?t(e):e}catch(n){return R(n)}}function a(e){if(typeof n=="function"){S(e,l);try{return n(e)}catch(t){return R(t)}}return R(e)}function f(e){return typeof r=="function"?r(e):e}var i=L(),s=!1,l=U(e);return o(function(){l.promiseSend("when",function(e){if(s)return;s=!0,i.resolve(u(e))},function(e){if(s)return;s=!0,i.resolve(a(e))})}),l.promiseSend("when",void 0,void 0,function(e){i.notify(f(e))}),i.promise}function $(e,t,n){return V(e,function(e){return at(e).then(function(e){return t.apply(void 0,e)},n)},n)}function J(e){return function(){function t(e,t){var s;try{s=n[e](t)}catch(o){return b(o)?o.value:R(o)}return V(s,r,i)}var n=e.apply(this,arguments),r=t.bind(t,"send"),i=t.bind(t,"throw");return r()}}function K(e){throw new w(e)}function Q(e){return function(){return at([this,at(arguments)]).spread(function(t,n){return e.apply(t,n)})}}function G(e){return function(t){var n=h(arguments,1);return Y.apply(void 0,[t,e].concat(n))}}function Y(e,t){var n=L(),r=h(arguments,2);return e=U(e),o(function(){e.promiseSend.apply(e,[t,n.resolve].concat(r))}),n.promise}function Z(e,t,n){var r=L();return e=U(e),o(function(){e.promiseSend.apply(e,[t,r.resolve].concat(n))}),r.promise}function et(e){return function(t){var n=h(arguments,1);return Z(t,e,n)}}function it(e,t){var n=h(arguments,2);return nt(e,t,n)}function st(e){var t=h(arguments,1);return rt(e,t)}function ot(e,t){var n=h(arguments,2);return function(){var i=n.concat(h(arguments));return nt(e,t,i)}}function ut(e){var t=h(arguments,1);return function(){var r=t.concat(h(arguments));return rt(e,r)}}function at(e){return V(e,function(e){var t=e.length;if(t===0)return U(e);var n=L();return p(e,function(r,i,s){H(i)?(e[s]=M(i),--t===0&&n.resolve(e)):V(i,function(r){e[s]=r,--t===0&&n.resolve(e)}).fail(n.reject)},void 0),n.promise})}function ft(e){return V(e,function(e){return V(at(v(e,function(e){return V(e,i,i)})),function(){return v(e,U)})})}function lt(e,t){return V(e,void 0,t)}function ct(e,t){return V(e,void 0,void 0,t)}function ht(e,t){return V(e,function(e){return V(t(),function(){return e})},function(e){return V(t(),function(){return R(e)})})}function pt(e,n,r,i){function s(n){o(function(){S(n,e);if(!t.onerror)throw n;t.onerror(n)})}var u=n||r||i?V(e,n,r,i):e;lt(u,s)}function dt(e,t){var n=L(),r=setTimeout(function(){n.reject(new Error("Timed out after "+t+" ms"))},t);return V(e,function(e){clearTimeout(r),n.resolve(e)},function(e){clearTimeout(r),n.reject(e)}),n.promise}function vt(e,t){t===void 0&&(t=e,e=void 0);var n=L();return setTimeout(function(){n.resolve(e)},t),n.promise}function mt(e,t){var n=h(t),r=L();return n.push(r.makeNodeResolver()),rt(e,n).fail(r.reject),r.promise}function gt(e){var t=h(arguments,1),n=L();return t.push(n.makeNodeResolver()),rt(e,t).fail(n.reject),n.promise}function yt(e){var t=h(arguments,1);return function(){var n=t.concat(h(arguments)),r=L();return n.push(r.makeNodeResolver()),rt(e,n).fail(r.reject),r.promise}}function bt(e,t,n){return Et(e,t).apply(void 0,n)}function wt(e,t){var n=h(arguments,2);return bt(e,t,n)}function Et(e){if(arguments.length>1){var t=arguments[1],n=h(arguments,2),r=e;e=function(){var e=n.concat(h(arguments));return r.apply(t,e)}}return function(){var t=L(),n=h(arguments);return n.push(t.makeNodeResolver()),rt(e,n).fail(t.reject),t.promise}}function St(e,t,n){var r=h(n),i=L();return r.push(i.makeNodeResolver()),tt(e,t,r).fail(i.reject),i.promise}function xt(e,t){var n=h(arguments,2),r=L();return n.push(r.makeNodeResolver()),tt(e,t,n).fail(r.reject),r.promise}function Tt(e,t){if(!t)return e;e.then(function(e){o(function(){t(null,e)})},function(e){o(function(){t(e)})})}var n=C(),r,i=function(){},s=Object.freeze||i;typeof cajaVM!="undefined"&&(s=cajaVM.def);var o;if(typeof process!="undefined")o=process.nextTick;else if(typeof setImmediate=="function")o=setImmediate;else if(typeof MessageChannel!="undefined"){var u=new MessageChannel,a={},f=a;u.port1.onmessage=function(){a=a.next;var e=a.task;delete a.task,e()},o=function(e){f=f.next={task:e},u.port2.postMessage(0)}}else o=function(e){setTimeout(e,0)};var l;if(Function.prototype.bind){var c=Function.prototype.bind;l=c.bind(c.call)}else l=function(e){return function(){return e.call.apply(e,arguments)}};var h=l(Array.prototype.slice),p=l(Array.prototype.reduce||function(e,t){var n=0,r=this.length;if(arguments.length===1)do{if(n in this){t=this[n++];break}if(++n>=r)throw new TypeError}while(1);for(;n<r;n++)n in this&&(t=e(t,this[n],n));return t}),d=l(Array.prototype.indexOf||function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1}),v=l(Array.prototype.map||function(e,t){var n=this,r=[];return p(n,function(i,s,o){r.push(e.call(t,s,o,n))},void 0),r}),m=Object.create||function(e){function t(){}return t.prototype=e,new t},g=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t},y=Object.prototype.toString,w;typeof ReturnValue!="undefined"?w=ReturnValue:w=function(e){this.value=e};var E="From previous event:";t.nextTick=o,t.defer=L,L.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve(h(arguments,1)):e.resolve(n)}},L.prototype.node=k(L.prototype.makeNodeResolver,"node","makeNodeResolver"),t.promise=A,t.makePromise=O,O.prototype.then=function(e,t,n){return V(this,e,t,n)},O.prototype.thenResolve=function(e){return V(this,function(){return e})},p(["isResolved","isFulfilled","isRejected","when","spread","send","get","put","del","post","invoke","keys","apply","call","bind","fapply","fcall","fbind","all","allResolved","view","viewInfo","timeout","delay","catch","finally","fail","fin","progress","end","done","nfcall","nfapply","nfbind","ncall","napply","nbind","npost","ninvoke","nend","nodeify"],function(e,n){O.prototype[n]=function(){return t[n].apply(t,[this].concat(h(arguments)))}},void 0),O.prototype.toSource=function(){return this.toString()},O.prototype.toString=function(){return"[object Promise]"},s(O.prototype),t.nearer=M,t.isPromise=_,t.isPromiseAlike=D,t.isResolved=P,t.isFulfilled=H,t.isRejected=B;var j=[],F=[],I;t.reject=R,t.begin=U,t.resolve=U,t.ref=k(U,"ref","resolve"),t.master=z,t.viewInfo=W,t.view=X,t.when=V,t.spread=$,t.async=J,t["return"]=K,t.promised=Q,t.sender=k(G,"sender","dispatcher"),t.Method=k(G,"Method","dispatcher"),t.send=k(Y,"send","dispatch"),t.dispatch=Z,t.dispatcher=et,t.get=et("get"),t.put=et("put"),t["delete"]=t.del=et("del");var tt=t.post=et("post");t.invoke=function(e,t){var n=h(arguments,2);return tt(e,t,n)};var nt=t.apply=k(et("apply"),"apply","fapply"),rt=t.fapply=et("fapply");t.call=k(it,"call","fcall"),t["try"]=st,t.fcall=st,t.bind=k(ot,"bind","fbind"),t.fbind=ut,t.keys=et("keys"),t.all=at,t.allResolved=ft,t["catch"]=t.fail=lt,t.progress=ct,t["finally"]=t.fin=ht,t.end=k(pt,"end","done"),t.done=pt,t.timeout=dt,t.delay=vt,t.nfapply=mt,t.nfcall=gt,t.nfbind=yt,t.napply=k(bt,"napply","npost"),t.ncall=k(wt,"ncall","ninvoke"),t.nbind=k(Et,"nbind","nfbind"),t.npost=St,t.ninvoke=xt,t.nend=k(Tt,"nend","nodeify"),t.nodeify=Tt;var Nt=C()})}})