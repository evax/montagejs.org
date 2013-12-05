var Montage=require("montage").Montage,UUID=require("core/uuid"),MutableEvent=require("core/event/mutable-event").MutableEvent,Serializer=require("core/serialization").Serializer,Deserializer=require("core/serialization").Deserializer,defaultEventManager;if("undefined"!=typeof window){window.Touch===void 0&&"ontouchstart"in window&&(window.Touch=function(){},function(){var e;document.addEventListener("touchstart",e=function(t){window.Touch=t.touches[0].constructor,document.nativeRemoveEventListener?document.nativeRemoveEventListener("touchstart",e,!0):document.removeEventListener("touchstart",e,!0),defaultEventManager&&defaultEventManager.isStoringPointerEvents&&(defaultEventManager.isStoringPointerEvents=!1,defaultEventManager.isStoringPointerEvents=!0)},!0)}());var EventListenerDescriptor=Montage.specialize({type:{value:null},listener:{value:null},capture:{value:null}});Serializer.defineSerializationUnit("listeners",function(e,t){var n,r,i,a=defaultEventManager,o=t.uuid,s=[];for(var u in a.registeredEventListeners)if(n=a.registeredEventListeners[u],r=n&&n[o])for(var l in r.listeners)i=r.listeners[l],s.push({type:u,listener:e.addObjectReference(i.listener),capture:i.capture});return s.length>0?s:void 0}),Deserializer.defineDeserializationUnit("listeners",function(e,t,n){for(var r,i=0;r=n[i];i++)t.addEventListener(r.type,r.listener,r.capture)});var NONE=Event.NONE,CAPTURING_PHASE=Event.CAPTURING_PHASE,AT_TARGET=Event.AT_TARGET,BUBBLING_PHASE=Event.BUBBLING_PHASE,FUNCTION_TYPE="function",EventManager=exports.EventManager=Montage.specialize({eventDefinitions:{value:{abort:{bubbles:!1,cancelable:!1},beforeunload:{bubbles:!1},blur:{bubbles:!1,cancelable:!1},change:{bubbles:!0,cancelable:!1},click:{bubbles:!0,cancelable:!0},close:{bubbles:!1,cancelable:!1},compositionend:{bubbles:!0,cancelable:!1},compositionstart:{bubbles:!0,cancelable:!0},compositionupdate:{bubbles:!0,cancelable:!1},contextmenu:{bubbles:!0,cancelable:!0},copy:{bubbles:!0,cancelable:!0},cut:{bubbles:!0,cancelable:!0},dblclick:{bubbles:!0,cancelable:!1},DOMActivate:{bubbles:!0,cancelable:!0,deprecated:!0},DOMMouseScroll:{bubbles:!0},drag:{bubbles:!0,cancelable:!0},dragend:{bubbles:!0,cancelable:!1},dragenter:{bubbles:!0,cancelable:!0},dragleave:{bubbles:!0,cancelable:!1},dragover:{bubbles:!0,cancelable:!0},dragstart:{bubbles:!0,cancelable:!0},drop:{bubbles:!0,cancelable:!0},error:{bubbles:function(e){return!(XMLHttpRequest.prototype.isPrototypeOf(e)||e.tagName&&"VIDEO"===e.tagName.toUpperCase()||e.tagName&&"AUDIO"===e.tagName.toUpperCase())},cancelable:!1},focus:{bubbles:!1,cancelable:!1},focusin:{bubbles:!0,cancelable:!1},focusout:{bubbles:!0,cancelable:!1},input:{bubbles:!0,cancelable:!1},keydown:{bubbles:!0,cancelable:!1},keypress:{bubbles:!0,cancelable:!1},keyup:{bubbles:!0,cancelable:!1},load:{bubbles:!1,cancelable:!1},loadend:{bubbles:!1,cancelable:!1},loadstart:{bubbles:!1,cancelable:!1},message:{bubbles:!1,cancelable:!1},mousedown:{bubbles:!0,cancelable:!0},mouseenter:{bubbles:!1,cancelable:!1},mouseleave:{bubbles:!1,cancelable:!1},mousemove:{bubbles:!0,cancelable:!0},mouseout:{bubbles:!0,cancelable:!0},mouseover:{bubbles:!0,cancelable:!0},mouseup:{bubbles:!0,cancelable:!0},mousewheel:{bubbles:!0},orientationchange:{bubbles:!1},paste:{bubbles:!0,cancelable:!0},progress:{bubbles:!1,cancelable:!1},reset:{bubbles:!0,cancelable:!1},resize:{bubbles:!1,cancelable:!1},scroll:{bubbles:function(e){return!!e.defaultView},cancelable:!1},select:{bubbles:!0,cancelable:!1},submit:{bubbles:!0,cancelable:!0},touchcancel:{bubbles:!0,cancelable:!1},touchend:{bubbles:!0,cancelable:!0},touchmove:{bubbles:!0,cancelable:!0},touchstart:{bubbles:!0,cancelable:!0},unload:{bubbles:!1,cancelable:!1},wheel:{bubbles:!0,cancelable:!0}}},_DOMPasteboardElement:{value:null,enumerable:!1},_delegate:{value:null,enumerable:!1},delegate:{enumerable:!1,get:function(){return this._delegate},set:function(e){this._delegate=e}},_application:{value:null,enumerable:!1},application:{enumerable:!1,get:function(){return this._application},set:function(e){this._application=e}},_registeredWindows:{value:null,enumerable:!1},_windowsAwaitingFinalRegistration:{value:{},enumerable:!1},initWithWindow:{enumerable:!1,value:function(e){if(this._registeredWindows)throw"EventManager has already been initialized";return this.registerWindow(e),this}},registerWindow:{enumerable:!1,value:function(e){if(e.defaultEventManager&&e.defaultEventManager!==this)throw"EventManager cannot register a window already registered to another EventManager";if(this._registeredWindows&&this._registeredWindows.indexOf(e)>=0)throw"EventManager cannot register a window more than once";if(this._registeredWindows||(this._registeredWindows=[]),e.uuid&&0!==e.uuid.length||(e.uuid=UUID.generate()),this._windowsAwaitingFinalRegistration[e.uuid]!==e){if(e.Element.prototype.nativeAddEventListener=e.Element.prototype.addEventListener,Object.defineProperty(e,"nativeAddEventListener",{configurable:!0,value:e.addEventListener}),Object.getPrototypeOf(e.document).nativeAddEventListener=e.document.addEventListener,e.XMLHttpRequest.prototype.nativeAddEventListener=e.XMLHttpRequest.prototype.addEventListener,e.Worker&&(e.Worker.prototype.nativeAddEventListener=e.Worker.prototype.addEventListener),e.MediaController&&(e.MediaController.prototype.nativeAddEventListener=e.MediaController.prototype.addEventListener),e.Element.prototype.nativeRemoveEventListener=e.Element.prototype.removeEventListener,Object.defineProperty(e,"nativeRemoveEventListener",{configurable:!0,value:e.removeEventListener}),Object.getPrototypeOf(e.document).nativeRemoveEventListener=e.document.removeEventListener,e.XMLHttpRequest.prototype.nativeRemoveEventListener=e.XMLHttpRequest.prototype.removeEventListener,e.Worker&&(e.Worker.prototype.nativeRemoveEventListener=e.Worker.prototype.removeEventListener),e.MediaController&&(e.MediaController.prototype.nativeRemoveEventListener=e.MediaController.prototype.removeEventListener),Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.addEventListener=e.Element.prototype.addEventListener=Object.getPrototypeOf(e.document).addEventListener=function(t,n,r){return e.defaultEventManager.registerEventListener(this,t,n,!!r)}}),e.Worker&&(e.Worker.prototype.addEventListener=e.addEventListener),e.MediaController&&(e.MediaController.prototype.addEventListener=e.addEventListener),Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.removeEventListener=e.Element.prototype.removeEventListener=Object.getPrototypeOf(e.document).removeEventListener=function(t,n,r){return e.defaultEventManager.unregisterEventListener(this,t,n,!!r)}}),e.Worker&&(e.Worker.prototype.removeEventListener=e.removeEventListener),e.MediaController&&(e.MediaController.prototype.removeEventListener=e.removeEventListener),e.HTMLDivElement.prototype.addEventListener!==e.Element.prototype.nativeAddEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var t,n;for(t in Components.interfaces)t.match(/^nsIDOMHTML\w*Element$/)&&(t=t.replace(/^nsIDOM/,""),(t=window[t])&&(n=t.prototype,n.nativeAddEventListener=n.addEventListener,n.addEventListener=e.Element.prototype.addEventListener,n.nativeRemoveEventListener=n.removeEventListener,n.removeEventListener=e.Element.prototype.removeEventListener))}Montage.defineProperty(e.Element.prototype,"eventHandlerUUID",{value:void 0,enumerable:!1}),Montage.defineProperty(e.Element.prototype,"component",{get:function(){return defaultEventManager._elementEventHandlerByUUID[this.eventHandlerUUID]},enumerable:!1}),defaultEventManager=e.defaultEventManager=exports.defaultEventManager=this,this._registeredWindows.push(e),this._windowsAwaitingFinalRegistration[e.uuid]=e,/loaded|complete|interactive/.test(e.document.readyState)?this._finalizeWindowRegistration(e):e.document.addEventListener("DOMContentLoaded",this,!0)}}},_finalizeWindowRegistration:{enumerable:!1,value:function(e){if(this._windowsAwaitingFinalRegistration[e.uuid]!==e)throw"EventManager wasn't expecting to register this window";delete this._windowsAwaitingFinalRegistration[e.uuid],this._listenToWindow(e)}},unregisterWindow:{enumerable:!1,value:function(e){if(0>this._registeredWindows.indexOf(e))throw"EventManager cannot unregister an unregistered window";if(this._registeredWindows=this._registeredWindows.filter(function(t){return e!==t}),delete e.defaultEventManager,e.Element.prototype.addEventListener=e.Element.prototype.nativeAddEventListener,Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.nativeAddEventListener}),Object.getPrototypeOf(e.document).addEventListener=e.document.nativeAddEventListener,e.XMLHttpRequest.prototype.addEventListener=e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&(e.Worker.prototype.addEventListener=e.Worker.prototype.nativeAddEventListener),e.Element.prototype.removeEventListener=e.Element.prototype.nativeRemoveEventListener,Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.nativeRemoveEventListener}),Object.getPrototypeOf(e.document).removeEventListener=e.document.nativeRemoveEventListener,e.XMLHttpRequest.prototype.removeEventListener=e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&(e.Worker.prototype.removeEventListener=e.Worker.prototype.nativeRemoveEventListener),e.HTMLDivElement.prototype.nativeAddEventListener!==e.Element.prototype.addEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var t,n;for(t in Components.interfaces)t.match(/^nsIDOMHTML\w*Element$/)&&(t=t.replace(/^nsIDOM/,""),(t=window[t])&&(n=t.prototype,n.addEventListener=n.nativeAddEventListener,delete n.nativeAddEventListener,n.removeEventListener=n.nativeRemoveEventListener,delete n.nativeRemoveEventListener))}delete e.Element.prototype.nativeAddEventListener,delete e.nativeAddEventListener,delete Object.getPrototypeOf(e.document).nativeAddEventListener,delete e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&delete e.Worker.prototype.nativeAddEventListener,delete e.Element.prototype.nativeRemoveEventListener,delete e.nativeRemoveEventListener,delete Object.getPrototypeOf(e.document).nativeRemoveEventListener,delete e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&delete e.Worker.prototype.nativeRemoveEventListener,delete e.Element.prototype.eventHandlerUUID,delete e.Element.prototype.component,this._stopListeningToWindow(e)}},unregisterWindows:{enumerable:!1,value:function(){this._registeredWindows.forEach(this.unregisterWindow)}},registeredEventListeners:{enumerable:!1,value:{}},registeredEventListenersForEventType_:{value:function(e){var t,n,r,i,a=this.registeredEventListeners[e];if(!a)return null;i={};for(t in a){n=a[t].listeners;for(r in n)i[r]=n[r]}return i}},registeredEventListenersForEventType_onTarget_:{enumerable:!1,value:function(e,t,n){var r,i;return r=t===n?n.eventManager.registeredEventListeners[e]:this.registeredEventListeners[e],r?(i=r[t.uuid],i?i.listeners:null):null}},registeredEventListenersOnTarget_:{value:function(e){var t,n,r=[];for(t in this.registeredEventListeners)n=this.registeredEventListeners[t],e.uuid in n&&r.push(n);return r}},registerEventListener:{enumerable:!1,value:function(e,t,n,r){var i,a,o,s=this.registeredEventListeners[t],u=!1,l=!1;if(e.uuid===void 0)throw Error("EventManager cannot observe a target without a uuid: "+(e.outerHTML||e));return s?((i=s[e.uuid])||(i=s[e.uuid]={target:e,listeners:{}},u=!0),a=i.listeners[n.uuid],o=r?"capture":"bubble",a?(a[o]=!0,l=!0):(a={listener:n,capture:r,bubble:!r},i.listeners[n.uuid]=a,l=!0)):(s=this.registeredEventListeners[t]={},s[e.uuid]={target:e,listeners:{}},s[e.uuid].listeners[n.uuid]={listener:n,capture:r,bubble:!r},u=!0,l=!0),u&&"function"==typeof e.nativeAddEventListener&&this._observeTarget_forEventType_(e,t),l}},unregisterEventListener:{enumerable:!1,value:function(e,t,n,r){var i,a,o,s,u,l=this.registeredEventListeners[t];if(l&&(i=l[e.uuid])){if(a=i.listeners[n.uuid],!a){for(s in i.listeners)if(u=i.listeners[s].listener,u.originalListener&&u.originalListener.uuid===n.uuid){a=i.listeners[s],n=u;break}if(!a)return}o=r?"capture":"bubble",a[o]=!1,a.bubble||a.capture||(delete i.listeners[n.uuid],0===Object.keys(i.listeners).length&&(delete l[e.uuid],0===Object.keys(l).length&&(delete this.registeredEventListeners[t],this._stopObservingTarget_forEventType_(e,t))))}}},actualDOMTargetForEventTypeOnTarget:{value:function(e,t){if(t.nativeAddEventListener){if(t.defaultView)return t;var n,r=this.eventDefinitions[e];return r?(n=typeof r.bubbles===FUNCTION_TYPE?r.bubbles(t):r.bubbles,n?t.screen?t.document:t.ownerDocument:t):t}return null}},_observedTarget_byEventType_:{value:{}},_observeTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;!(n=this.actualDOMTargetForEventTypeOnTarget(t,e))||this._observedTarget_byEventType_[t]&&this._observedTarget_byEventType_[t][n.uuid]||(this._observedTarget_byEventType_[t]||(this._observedTarget_byEventType_[t]={}),this._observedTarget_byEventType_[t][n.uuid]=this,n.nativeAddEventListener(t,this,!0))}},_stopObservingTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;n=this.actualDOMTargetForEventTypeOnTarget(t,e),n&&(delete this._observedTarget_byEventType_[t][n.uuid],n.nativeRemoveEventListener(t,this,!0))}},_activationHandler:{enumerable:!0,value:null},_listenToWindow:{enumerable:!1,value:function(e){if(!this._activationHandler){var t=this;this._activationHandler=function(e){var n,r=e.type;if("focus"===r||"mousedown"===r||"touchstart"===r)if(e.changedTouches){n=e.changedTouches.length;for(var i=0;n>i;i++)t._prepareComponentsForActivation(e.changedTouches[i].target)}else t._prepareComponentsForActivation(e.target)}}if(e.Touch?e.document.nativeAddEventListener("touchstart",this._activationHandler,!0):e.document.nativeAddEventListener("mousedown",this._activationHandler,!0),e.document.nativeAddEventListener("focus",this._activationHandler,!0),this.application){var n,r=this.registeredEventListenersOnTarget_(this.application);for(n in r)this._observeTarget_forEventType_(e,n)}}},_stopListeningToWindow:{enumerable:!1,value:function(e){var t,n=this.registeredEventListenersOnTarget_(this.application),r=this.registeredEventListenersOnTarget_(e);for(t in n)this._stopObservingTarget_forEventType_(e,t);for(t in r)this._stopObservingTarget_forEventType_(e,t)}},reset:{enumerable:!1,value:function(){var e,t,n,r;for(e in this.registeredEventListeners){t=this.registeredEventListeners[e];for(n in t.targets)r=t.targets[n],this._stopObservingTarget_forEventType_(r.target,e)}this.registeredEventListeners={},this._claimedPointers={}}},unload:{enumerable:!1,value:function(){this._stopListening()}},methodNameForBubblePhaseOfEventType:{enumerable:!1,value:function(e){return function(t,n){var r=n?t+"+"+n:t;return e[r]||(e[r]="handle"+(n?n.toCapitalized():"")+t.toCapitalized())}}({})},_methodNameForCapturePhaseByEventType_:{value:{}},methodNameForCapturePhaseOfEventType:{enumerable:!1,value:function(e){return function(t,n){var r=n?t+"+"+n:t;return e[r]||(e[r]="capture"+(n?n.toCapitalized():"")+t.toCapitalized())}}({})},_claimedPointers:{enumerable:!1,distinct:!0,value:{}},componentClaimingPointer:{value:function(e){return this._claimedPointers[e]}},isPointerClaimedByComponent:{value:function(e,t){if(!t)throw"Must specify a valid component to see if it claims the specified pointer, '"+t+"' is not valid.";return this._claimedPointers[e]===t}},claimPointer:{value:function(e,t){if(!e&&0!==e)throw"Must specify a valid pointer to claim, '"+e+"' is not valid.";if(!t)throw"Must specify a valid component to claim a pointer, '"+t+"' is not valid.";var n=this._claimedPointers[e];return n===t?!0:n?n.surrenderPointer(e,t)?(this._claimedPointers[e]=t,!0):!1:(this._claimedPointers[e]=t,!0)}},forfeitPointer:{value:function(e,t){if(t!==this._claimedPointers[e])throw"Not allowed to forfeit pointer '"+e+"' claimed by another component";delete this._claimedPointers[e]}},forfeitAllPointers:{value:function(e){var t,n;for(t in this._claimedPointers)n=this._claimedPointers[t],e===n&&delete this._claimedPointers[t]}},_isStoringPointerEvents:{enumerable:!1,value:!1},isStoringPointerEvents:{enumerable:!0,get:function(){return this._isStoringPointerEvents},set:function(e){e===!0?this._isStoringPointerEvents||(this._isStoringPointerEvents=!0,window.Touch&&Object.defineProperty(Touch.prototype,"velocity",{get:function(){return defaultEventManager.pointerMotion(this.identifier).velocity},set:function(){}})):(this._isStoringPointerEvents=!1,this._pointerStorage.memory={},this._isMouseDragging=!1)}},_isStoringMouseEventsWhileDraggingOnly:{enumerable:!1,value:!0},isStoringMouseEventsWhileDraggingOnly:{enumerable:!0,get:function(){return this._isStoringMouseEventsWhileDraggingOnly},set:function(e){this._isStoringMouseEventsWhileDraggingOnly=e===!0?!0:!1}},_isMouseDragging:{enumerable:!1,value:!1},_pointerStorage:{enumerable:!1,value:{memory:{},add:function(e,t){this.memory[e]||(this.memory[e]={data:Array(32),size:0,pos:0}),this.memory[e].data[this.memory[e].pos]=t,this.memory[e].size<this.memory[e].data.length&&this.memory[e].size++,this.memory[e].pos=(this.memory[e].pos+1)%this.memory[e].data.length},remove:function(e){delete this.memory[e]},clear:function(e){this.memory[e]&&(this.memory[e].size=0)},getMemory:function(e){return this.memory[e]},isStored:function(e){return this.memory[e]&&this.memory[e].size>0},storeEvent:function(e){var t;switch(e.type){case"mousedown":defaultEventManager._isMouseDragging=!0;case"mousemove":defaultEventManager._isStoringMouseEventsWhileDraggingOnly?defaultEventManager._isMouseDragging&&(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return defaultEventManager.pointerMotion("mouse").velocity},set:function(){}})):(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return defaultEventManager.pointerMotion("mouse").velocity},set:function(){}}));break;case"mouseup":this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return defaultEventManager.pointerMotion("mouse").velocity},set:function(){}});break;case"touchstart":case"touchmove":for(t=0;e.touches.length>t;t++)this.add(e.touches[t].identifier,{clientX:e.touches[t].clientX,clientY:e.touches[t].clientY,timeStamp:e.timeStamp});break;case"touchend":for(t=0;e.changedTouches.length>t;t++)this.add(e.changedTouches[t].identifier,{clientX:e.changedTouches[t].clientX,clientY:e.changedTouches[t].clientY,timeStamp:e.timeStamp})}},removeEvent:function(e){var t;switch(e.type){case"mouseup":defaultEventManager._isMouseDragging=!1,defaultEventManager._isStoringMouseEventsWhileDraggingOnly&&this.clear("mouse");break;case"touchend":for(t=0;e.changedTouches.length>t;t++)this.remove(e.changedTouches[t].identifier)}}}},_getPointerVelocityData:{enumerable:!1,value:function(e){var t,n,r,i,a,o,s,u,l,c=0,h=!0,d={x:[],y:[],time:[]};for(t=defaultEventManager._pointerStorage.getMemory(e),n=t.data.length,r=t.data[(t.pos-1+n)%n],i=a=o=r.timeStamp,s=r.clientX,u=r.clientY;h&&a>i-350&&t.size>c;)r=t.data[(t.pos-c-1+n)%n],a=r.timeStamp,l=s*s+u*u,l>2&&50>=o-a?(d.x.push(r.clientX),d.y.push(r.clientY),d.time.push(a),o=a,s=r.clientX,u=r.clientY,c++):h=!1;return d}},_fitPointerCurve:{enumerable:!1,value:function(e,t){var n,r,i,a,o,s,u,l,c,h,d,m,p,v,f,g,y,_,b,M,T,E,w,P,D,O,C,S,L,x,A,N,I,Y,k,z,j,R,F=1e-4,X=t.length;do{for(d=0,m=0,p=0,v=0,f=0,g=0,_=0,b=0,M=0,T=0,E=0,w=0,D=0,O=0,C=0,S=0,L=0,x=0,N=0,I=0,Y=0,k=0,z=0,j=0,h=0;X>h;h++)o=t[h],s=o.t,l=s*s,c=l*s,u=o.v,y=F*(6*(l-s)-c+2),P=6*F*(c-2*l+s),A=6*F*(l-c),R=2*F*c,g+=y*y,w+=P*P,x+=A*A,j+=R*R,d+=u*y,_+=u*P,D+=u*A,N+=u*R,p-=y,M-=P,C-=A,Y-=R,m-=y*s,b-=P*s,O-=A*s,I-=R*s,v-=y*l,T-=P*l,S-=A*l,k-=R*l,f-=y*c,E-=P*c,L-=A*c,z-=R*c;F*=2}while(0===g||0===w||0===x||0===j);for(s=F/g,d*=s,m*=3*s,p*=s,v*=3*s,f*=s,s=F/w,_*=s,b*=3*s,M*=s,T*=3*s,E*=s,s=F/x,D*=s,O*=3*s,C*=s,S*=3*s,L*=s,s=F/j,N*=s,I*=3*s,Y*=s,k*=3*s,z*=s,g=e[0],w=e[1],x=e[2],j=e[3],n=3*(w-x)+j-g,r=g+x-2*w,i=w-g,a=g,h=0;20>h;h++)s=d+a*p+i*m+r*v+n*f,g+=s,a+=s,n-=s,r+=s,i-=s,s=_+a*M+i*b+r*T+n*E,w+=s,n+=3*s,r-=s+s,i+=s,s=D+a*C+i*O+r*S+n*L,x+=s,n-=3*s,r+=s,s=N+a*Y+i*I+r*k+n*z,j+=s,n+=s;e[0]=g,e[1]=w,e[2]=x,e[3]=j}},_pointerBezierValue:{enumerable:!1,value:function(e,t){var n=1-e;return n*n*n*t[0]+3*n*n*e*t[1]+3*n*e*e*t[2]+e*e*e*t[3]}},_calculatePointerVelocity:{enumerable:!1,value:function(e,t){var n,r,i=e.length,a=e[0],o=e[0],s=0;for(r=1;i>r;r++)a>e[r]&&(a=e[r],s=r);if(n=o-a){if(i>5){var u,l,c,h=[];for(r=0;i>r;r++)h[r]={v:t[r],t:(e[r]-a)/n};return u=h[s].v,l=h[0].v,c=[u,(2*u+l)/3,(u+2*l)/3,l],this._fitPointerCurve(c,h),5e3*(this._pointerBezierValue(.8,c)-this._pointerBezierValue(.6,c))/n}return i>1?1e3*(t[0]-t[s])/n:0}return 0}},pointerMotion:{value:function(e){if(defaultEventManager._pointerStorage.isStored(e)){var t={};return Object.defineProperties(t,{_data:{enumerable:!1,writable:!0,value:null},_x:{enumerable:!1,writable:!0,value:null},_y:{enumerable:!1,writable:!0,value:null},_speed:{enumerable:!1,writable:!0,value:null},_angle:{enumerable:!1,writable:!0,value:null},x:{get:function(){return null===this._x&&(null===this._data&&(this._data=defaultEventManager._getPointerVelocityData(e)),this._x=defaultEventManager._calculatePointerVelocity(this._data.time,this._data.x)),this._x},set:function(){}},y:{get:function(){return null===this._y&&(null===this._data&&(this._data=defaultEventManager._getPointerVelocityData(e)),this._y=defaultEventManager._calculatePointerVelocity(this._data.time,this._data.y)),this._y},set:function(){}},speed:{get:function(){return null===this._speed&&(this._speed=Math.sqrt(this.x*this.x+this.y*this.y)),this._speed},set:function(){}},angle:{get:function(){return null===this._angle&&(this._angle=Math.atan2(this.y,this.x)),this._angle},set:function(){}}}),{velocity:t}}return void 0}},monitorDOMModificationInEventHandling:{value:!1},domModificationEventHandler:{value:Montage.specialize({handleEvent:{value:function(){throw"DOM Modified"}},captureDOMSubtreeModified:{value:function(){throw"DOMSubtreeModified"}},captureDOMAttrModified:{value:function(){throw"DOMAttrModified"}},captureDOMCharacterDataModified:{value:function(){throw"DOMCharacterDataModified"}}})},handleEvent:{enumerable:!1,value:function(e){this.monitorDOMModificationInEventHandling&&(document.body.addEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0));var t,n,r,i,a,o,s,u,l,c,h,d,m,p,v=e.type,f=e.bubbles;for("DOMContentLoaded"===v&&(t=e.target.defaultView,t&&this._windowsAwaitingFinalRegistration[t.uuid]&&(this._finalizeWindowRegistration(t),e.target.removeEventListener("DOMContentLoaded",this,!0))),p="boolean"!=typeof e.propagationStopped?MutableEvent.fromEvent(e):e,l=Element.isElement(p.target)||p.target instanceof Document||p.target instanceof Window?this._eventPathForDomTarget(p.target):this._eventPathForTarget(p.target),d=p.target.identifier?this.methodNameForCapturePhaseOfEventType(v,p.target.identifier):null,m=p.target.identifier?this.methodNameForBubblePhaseOfEventType(v,p.target.identifier):null,c=this.methodNameForCapturePhaseOfEventType(v),h=this.methodNameForBubblePhaseOfEventType(v),this.delegate&&typeof this.delegate.willDistributeEvent===FUNCTION_TYPE&&this.delegate.willDistributeEvent(p),this._isStoringPointerEvents&&this._pointerStorage.storeEvent(p),p.eventPhase=CAPTURING_PHASE,n=l.length-1;!p.propagationStopped&&(r=l[n]);n--)if(p.currentTarget=r,i=this.registeredEventListenersForEventType_onTarget_(v,r))for(s=Object.keys(i),a=0;i&&!p.immediatePropagationStopped&&(o=i[s[a]]);a++)o.capture&&(u=o.listener,d&&typeof u[d]===FUNCTION_TYPE?u[d](p):typeof u[c]===FUNCTION_TYPE?u[c](p):typeof u.handleEvent===FUNCTION_TYPE?u.handleEvent(p):typeof u!==FUNCTION_TYPE||u.__isConstructor__||u.call(r,p));if(!p.propagationStopped&&(p.eventPhase=AT_TARGET,p.currentTarget=r=p.target,i=this.registeredEventListenersForEventType_onTarget_(v,r)))for(s=Object.keys(i),a=0;i&&!p.immediatePropagationStopped&&(o=i[s[a]]);a++)u=o.listener,o.capture&&(d&&typeof u[d]===FUNCTION_TYPE?u[d](p):typeof u[c]===FUNCTION_TYPE?u[c](p):typeof u.handleEvent===FUNCTION_TYPE?u.handleEvent(p):typeof u===FUNCTION_TYPE&&u.call(r,p)),o.bubble&&(m&&typeof u[m]===FUNCTION_TYPE?u[m](p):typeof u[h]===FUNCTION_TYPE?u[h](p):typeof u.handleEvent===FUNCTION_TYPE?u.handleEvent(p):typeof u===FUNCTION_TYPE&&u.call(r,p));for(p.eventPhase=BUBBLING_PHASE,n=0;f&&!p.propagationStopped&&(r=l[n]);n++)if(p.currentTarget=r,i=this.registeredEventListenersForEventType_onTarget_(v,r))for(s=Object.keys(i),a=0;i&&!p.immediatePropagationStopped&&(o=i[s[a]]);a++)o.bubble&&(u=o.listener,m&&typeof u[m]===FUNCTION_TYPE?u[m](p):typeof u[h]===FUNCTION_TYPE?u[h](p):typeof u.handleEvent===FUNCTION_TYPE?u.handleEvent(p):typeof u===FUNCTION_TYPE&&u.call(r,p));p.eventPhase=NONE,p.currentTarget=null,this._isStoringPointerEvents&&this._pointerStorage.removeEvent(e),this.monitorDOMModificationInEventHandling&&(document.body.removeEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0))}},_prepareComponentsForActivation:{value:function(e){var t,n,r=e,i=r&&r.defaultView?r.defaultView:window,a=i.document?i.document:document,o=!1,s=null;do switch(r&&(n=this.eventHandlerForElement(r),n&&(o||(o=!0,s=this._findActiveTarget(n)),n._preparedForActivationEvents||(n._prepareForActivationEvents(),n._preparedForActivationEvents=!0))),t=r,r){case i:r=null;break;case a:r=i;break;case a.documentElement:r=a;break;default:r=r.parentNode}while(r&&t!==r);this.activeTarget=s}},_findActiveTarget:{value:function(e){for(var t=null,n={};!t&&e&&!(e.uuid in n);)n[e.uuid]=e,e.acceptsActiveTarget?t=e:e=e.nextTarget;return t}},_eventPathForTarget:{enumerable:!1,value:function(e){if(!e)return[];var t=e,n=this.application,r=[],i={};i[e.uuid]=e;do t.uuid in i||(r.push(t),i[t.uuid]=t),t=t.nextTarget,(!t||t.uuid in i)&&(t=n),t&&t.uuid in i&&(t=null);while(t);return r}},_eventPathForDomTarget:{enumerable:!1,value:function(e){if(!e)return[];var t,n=e,r=n&&n.defaultView?n.defaultView:window,i=r.document?r.document:document,a=this.application,o=[];do switch(n!==e&&o.push(n),t=n,n){case a:n=n.parentApplication,n&&(a=n);break;case r:n=a;break;case i:n=r;break;case i.documentElement:n=i;break;default:n=n.parentNode,n||(n=a)}while(n&&t!==n);return o}},_elementEventHandlerByUUID:{enumerable:!1,value:{}},registerEventHandlerForElement:{enumerable:!1,value:function(e,t){var n=this.eventHandlerForElement(t);n&&this.unregisterEventHandlerForElement(t),this._elementEventHandlerByUUID[t.eventHandlerUUID=e.uuid]=e}},unregisterEventHandlerForElement:{enumerable:!1,value:function(e){delete this._elementEventHandlerByUUID[e.eventHandlerUUID],delete e.eventHandlerUUID}},eventHandlerForElement:{enumerable:!1,value:function(e){return this._elementEventHandlerByUUID[e.eventHandlerUUID]}},_activeTarget:{value:null},activeTarget:{get:function(){return this._activeTarget||this.application},set:function(e){e||(e=this.application),e===this._activeTarget||this.activeTarget&&!this.activeTarget.surrendersActiveTarget(e)||(e.willBecomeActiveTarget(this.activeTarget),this._activeTarget=e,e.didBecomeActiveTarget())}}})}