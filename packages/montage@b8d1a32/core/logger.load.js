montageDefine("b8d1a32","core/logger",{dependencies:["montage"],factory:function(e,n){var s,t,a,o,i,r,l,p,c,d=e("montage").Montage;t=n.loggers={},r=function(){var e,n=r.caller.caller;return e=n.name,""===e&&(e="anonymous"),e},l=function(e){if(e.getHours){var n=e.getHours(),s=e.getMinutes(),t=e.getSeconds();return(1===n.length?"0"+n:n)+":"+(1===s.length?"0"+s:s)+":"+(1===t.length?"0"+t:t)+"."+e.getMilliseconds()}},i=function(){},a=function(){console.log(arguments)},o=function(){var e=arguments[0],n=e._montage_metadata;new Date,n?([].shift.call(arguments),[].unshift.call(arguments,n.objectName+"."+r(e)+"()"),this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)):this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)},s=n.Logger=d.specialize({init:{value:function(e,n,s){if(this.name=e,this._onStateChange=n,this._storeState=!s,this._storeState&&c){var t=c.getItem("_montage_logger_"+e);t&&(this.isDebug="true"===t)}return n&&this._onStateChange("true"===t),this.isError=!0,this}},name:{value:null},buffer:{value:[],distinct:!0},buffered:{value:!1},flush:{value:function(){var e,n,s=this.buffer;for(n=0;e=s[n];n++)console.debug.apply(console,e);this.buffer.length=0}},isDebug:{get:function(){return this.debug!==i},set:function(e){this.debug=e?o:i}},isError:{get:function(){return this.error!==i},set:function(e){this.error=e?o:i}},debug:{value:i},error:{value:i},toTimeString:{value:l},_storeState:{value:null},_onStateChange:{value:null}}),n.logger=function(e,n,a){var o;return null==(o=t[e])&&(o=(new s).init(e,n,a),d.defineProperty(t,e,{value:o})),o},p=d.specialize({init:{value:function(){return document.nativeAddEventListener?(document.nativeAddEventListener("keyup",this,!1),document.nativeAddEventListener("keydown",this,!1)):(document.addEventListener("keyup",this,!1),document.addEventListener("keydown",this,!1)),this}},inspectorElement:{value:null},m_dontRemove:{value:null},titleHeader:{value:null},shown:{value:!1},isCtrl:{value:!1},isAlt:{value:!1},keyup:{value:function(e){17==e.which&&(this.isCtrl=!1),18==e.which&&(this.isAlt=!1)}},keydown:{value:function(e){return 17==e.which&&(this.isCtrl=!0),18==e.which&&(this.isAlt=!0),76==e.which&&this.isCtrl===!0&&this.isAlt===!0?(this.shown?this.hideInspector():this.showInspector(),!1):void 0}},change:{value:function(e){var n=e.target.checked,s=e.target.value,a=t[s];a.isDebug=n,a._onStateChange&&a._onStateChange(n),a._storeState&&c&&c.setItem("_montage_logger_"+s,n)}},mouseup:{value:function(){this.hideInspector()}},showInspector:{value:function(){if(!this.inspectorElement){var e,n,s,a,o,i,r,l,p,d,h,u=0;for(this.m_dontRemove=document.getElementsByTagName("body")[0],this.inspectorElement=document.createElement("div"),this.inspectorElement.id="_montage_logger_inspector",n=document.createElement("div"),this.inspectorElement.appendChild(n),a=document.createElement("div"),n.appendChild(a),s=document.createElement("h1"),s.className="_montage_logger_inspector-title",s.textContent="Logger Inspector",this.titleHeader=s,a.appendChild(s),p=Object.keys(t),u=0;e=t[p[u]];u++)o=document.createElement("label"),i=document.createElement("input"),h=document.createElement("span"),o.className="_montage_logger_inspector-content",h.textContent=e.name,o.appendChild(i),o.appendChild(h),i.value=e.name,i.type="checkbox",i.checked=!!e.isDebug,l="_montage_logger_"+e.name,e._storeState&&c&&(r=c.getItem(l),null==r&&c.setItem(l,e.isDebug)),a.appendChild(o);d=document.createElement("style");var m="#_montage_logger_inspector {";m+="    border: 1px solid rgba(15,15,15,0.4);",m+="    position: fixed;",m+="    right: 25px;",m+="    top: 25px;",m+="    -webkit-border-radius: 5px;",m+="    color: #dddddd;",m+='    font: 10px "Lucida Grande","Lucida Sans", sans;',m+="    background:-webkit-gradient(linear, left top, left bottom, from(rgba(15,15,15,0.75)), to(rgba(15,15,15,0.95)) );",m+="    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.3);",m+="    width: 250px;",m+="}",m+="#_montage_logger_inspector div {",m+="    -webkit-border-radius: 5px;",m+="    background: -webkit-gradient(radial, 100 -60, 0, 125 -50, 125, from(rgba(255,255,255,0.00)), to(rgba(0,0,0,.2)), color-stop(1, rgba(0,0,0,.2)));",m+="}",m+="#_montage_logger_inspector div div {",m+="    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), to(rgba(0,0,0,.1)), color-stop(0.33, rgba(255,255,255,.01)), color-stop(0.33, rgba(50,50,50,1)) );",m+="    padding: 7px 10px;",m+="    -webkit-border-radius: 3px;",m+="    overflow-x: hidden;",m+="}",m+="._montage_logger_inspector-title {",m+="    color: rgba(255,255,255,0.9);",m+="    font-size: 13px;",m+="    margin: 0 0 11px 0;",m+="    padding: 0 0 0 5px;",m+="}",m+="._montage_logger_inspector-content {",m+="    padding: 0 0 0 20px;",m+="    margin: 0;",m+="    display: block;",m+="}",d.textContent=m,document.head.appendChild(d)}this.shown=!0,this.m_dontRemove.appendChild(this.inspectorElement),this.titleHeader.nativeAddEventListener("mouseup",this,!1),this.inspectorElement.nativeAddEventListener("change",this,!1)}},hideInspector:{value:function(){document.getElementById("_montage_logger_inspector")&&(this.shown=!1,this.m_dontRemove.removeChild(this.inspectorElement),this.titleHeader.nativeRemoveEventListener("mouseup",this,!1),this.inspectorElement.nativeRemoveEventListener("change",this,!1))}},handleEvent:{enumerable:!1,value:function(e){this[e.type]&&this[e.type](e)}}});var h=function(){(new p).init()};"undefined"!=typeof window&&(c=window.localStorage,window.loggers=t,window.localStorage&&h())}});