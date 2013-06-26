montageDefine("036393f","ui/text-input",{dependencies:["ui/native-control"],factory:function(e,t){var n=e("ui/native-control").NativeControl,a=t.TextInput=n.specialize({_hasFocus:{enumerable:!1,value:!1},_value:{enumerable:!1,value:null},_valueSyncedWithInputField:{enumerable:!1,value:!1},value:{get:function(){return this._value},set:function(e,t){if(e!==this._value){if(this.converter){var n;try{n=this.converter.revert(e),this.error=null,this._value=n}catch(a){this._value=e,this.error=a}}else this._value=e;t?this._valueSyncedWithInputField=!0:(this._valueSyncedWithInputField=!1,this.needsDraw=!0)}}},_setValue:{value:function(){var e=this.element.value;Object.getPropertyDescriptor(this,"value").set.call(this,e,!0)}},converter:{value:null},_error:{value:null},error:{get:function(){return this._error},set:function(e){this._error=e,this.errorMessage=this._error?this._error.message:null,this.needsDraw=!0}},_errorMessage:{value:null},errorMessage:{get:function(){return this._errorMessage},set:function(e){this._errorMessage=e}},_updateOnInput:{value:!0},updateOnInput:{get:function(){return!!this._updateOnInput},set:function(e){this._updateOnInput=e}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},enterDocument:{value:function(e){if(e){var t=this.element;t.addEventListener("focus",this),t.addEventListener("input",this),t.addEventListener("change",this),t.addEventListener("blur",this)}}},_setElementValue:{value:function(e){this.element.value=null==e?"":e}},draw:{enumerable:!1,value:function(){this.super();var e=this.element;this._valueSyncedWithInputField||this._setElementValue(this.converter?this.converter.convert(this._value):this._value),this.error?(e.classList.add("montage--invalidText"),e.title=this.error.message||""):(e.classList.remove("montage--invalidText"),e.title="")}},didDraw:{enumerable:!1,value:function(){if(this._hasFocus&&null!=this._value){var e=(""+this._value).length;this.element.setSelectionRange(e,e)}this.needsDraw||(this._valueSyncedWithInputField=!0)}},handleInput:{enumerable:!1,value:function(){this.converter?this.converter.allowPartialConversion===!0&&this.updateOnInput===!0&&this._setValue():this._setValue()}},handleChange:{enumerable:!1,value:function(){this._setValue(),this._hasFocus=!1}},handleBlur:{enumerable:!1,value:function(){this._hasFocus=!1}},handleFocus:{enumerable:!1,value:function(){this._hasFocus=!0}}});a.addAttributes({accept:null,alt:null,autocomplete:null,autofocus:{dataType:"boolean"},checked:{dataType:"boolean"},dirname:null,disabled:{dataType:"boolean"},form:null,formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,height:null,list:null,maxlength:null,multiple:{dataType:"boolean"},name:null,pattern:null,placeholder:null,readonly:{dataType:"boolean"},required:{dataType:"boolean"},size:null,src:null,width:null})}});