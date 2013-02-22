montageDefine("2ba644c","ui/toggle-switch.reel/toggle-switch",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=t.ToggleSwitch=r.create(i,{_value:{enumerable:!1,value:!1},value:{enumerable:!0,get:function(){return this._value},set:function(e){this._pressed||(e=!!e,this._value!==e&&(this._value=e,window.clearInterval(this._animation),this._animation=null,this._speed=0,this.needsDraw=!0))}},_toggle:{enumerable:!1,value:null},_scroll:{enumerable:!1,value:null},_circle:{enumerable:!1,value:null},_handlerBg:{enumerable:!1,value:null},_handler:{enumerable:!1,value:null},_handlerOnBg:{enumerable:!1,value:null},_handlerOn:{enumerable:!1,value:null},_handlerDragArea:{enumerable:!1,value:null},_pressed:{enumerable:!1,value:!1},_cursorPosition:{enumerable:!1,value:null},_width:{enumerable:!1,value:38},_scrollTo:{enumerable:!1,value:null},_touchIdentifier:{enumerable:!1,value:null},_speed:{enumerable:!1,value:0},handleTouchstart:{enumerable:!1,value:function(e){e.target===this._toggle?this.value=!this.value:(this._touchIdentifier=e.targetTouches[0].identifier,document.addEventListener("touchmove",this,!1),document.addEventListener("touchend",this,!1),this._cursorPosition=e.targetTouches[0].clientX,this._scrollTo<0?this._scrollTo=0:this._scrollTo>this._width&&(this._scrollTo=this._width),window.clearInterval(this._animation),this._animation=null,this._pressed=!0,this.needsDraw=!0),e.preventDefault(),e.stopPropagation()}},handleMousedown:{enumerable:!1,value:function(e){e.target===this._toggle?this.value=!this.value:(document.addEventListener("mousemove",this,!1),document.addEventListener("mouseup",this,!1),this._cursorPosition=e.clientX,this._scrollTo<0?this._scrollTo=0:this._scrollTo>this._width&&(this._scrollTo=this._width),window.clearInterval(this._animation),this._animation=null,this._pressed=!0,this.needsDraw=!0),e.preventDefault(),e.stopPropagation()}},handleTouchmove:{enumerable:!1,value:function(e){if(this._pressed){var t=0,n=e.changedTouches,r=n.length;while(t<r&&n[t].identifier!==this._touchIdentifier)t++;t<r&&(this._scrollTo=this._scrollTo+(e.changedTouches[t].clientX-this._cursorPosition),this._cursorPosition=e.changedTouches[t].clientX,e.preventDefault(),this.needsDraw=!0)}}},handleMousemove:{enumerable:!1,value:function(e){this._pressed&&(this._scrollTo=this._scrollTo+(e.clientX-this._cursorPosition),this._cursorPosition=e.clientX,e.preventDefault(),e.stopPropagation(),this.needsDraw=!0)}},handleTouchend:{enumerable:!1,value:function(e){var t=0,n=e.changedTouches.length;while(t<n&&e.changedTouches[t].identifier!==this._touchIdentifier)t++;t<n&&(this._pressed=!1,this._scrollTo>this._width/2?this.value=!0:this.value=!1,this._speed=e.changedTouches[t].velocity.x,document.removeEventListener("touchmove",this,!1),document.removeEventListener("touchend",this,!1),this.needsDraw=!0)}},handleMouseup:{enumerable:!1,value:function(e){this._pressed=!1,this._scrollTo>this._width/2?this.value=!0:this.value=!1,this._speed=e.velocity.x,document.removeEventListener("mousemove",this,!1),document.removeEventListener("mouseup",this,!1),this.needsDraw=!0}},prepareForActivationEvents:{enumerable:!1,value:function(){window.Touch?(this._handlerDragArea.addEventListener("touchstart",this,!1),this._toggle.addEventListener("touchstart",this,!1)):(this._handlerDragArea.addEventListener("mousedown",this,!1),this._toggle.addEventListener("mousedown",this,!1)),this.eventManager.isStoringPointerEvents=!0}},prepareForDraw:{enumerable:!1,value:function(){this._element.classList.add("montage-ToggleSwitch"),this._toggle=document.createElement("div"),this._scroll=document.createElement("div"),this._circle=document.createElement("div"),this._handlerBg=document.createElement("div"),this._handler=document.createElement("div"),this._handlerOnBg=document.createElement("div"),this._handlerOn=document.createElement("div"),this._handlerDragArea=document.createElement("div"),this._toggle.className="toggle",this._scroll.className="scroll",this._circle.className="circle",this._handlerBg.className="handlerbg",this._handler.className="handler",this._handlerOnBg.className="handleronbg",this._handlerOn.className="handleron",this._handlerDragArea.className="handlerdragarea",this._element.appendChild(this._toggle),this._toggle.appendChild(this._scroll),this._scroll.appendChild(this._handlerBg),this._handlerBg.appendChild(this._circle),this._handlerBg.appendChild(this._handler),this._handlerBg.appendChild(this._handlerOnBg),this._handlerBg.appendChild(this._handlerDragArea),this._handlerOnBg.appendChild(this._handlerOn),this._toggle.style.width=this._width+20+"px",this._scrollTo=this._value?this._width:0}},_animation:{enumerable:!1,value:null},draw:{enumerable:!1,value:function(){var e=this._scrollTo;if(this._pressed)this.element.classList.add("pressed"),this._circle.style.webkitTransition="-webkit-transform 150ms";else{this.element.classList.remove("pressed");if(this._animation===null)if(this._value&&this._scrollTo<this._width||!this._value&&this._scrollTo>0){var t=(new Date).getTime(),n=this._scrollTo,r=this;this._animation=window.setInterval(function(){var e=(new Date).getTime()-t;r._value&&r._scrollTo<r._width||!r._value&&r._scrollTo>0?(r._value?r._speed>0?r._scrollTo=n+r._speed*e/1e3+e*e/750:r._scrollTo=n+e*e/750:r._speed<0?r._scrollTo=n+r._speed*e/1e3-e*e/750:r._scrollTo=n-e*e/750,r.needsDraw=!0):(this._scrollTo=this._value?this._width:0,window.clearInterval(r._animation),r._animation=null,r.needsDraw=!0)},16)}}e<0?e=0:e>this._width&&(e=this._width),this._scroll.style.webkitTransform="translate3d("+e+"px,0,0)",this._handlerOnBg.style.opacity=e/this._width}}})}})