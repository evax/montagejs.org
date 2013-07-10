montageDefine("120b0c7","ui/repetition.reel/repetition",{dependencies:["montage","ui/component","ui/template","core/logger","core/gate","core/change-notification"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/template").Template,o=e("core/logger").logger("repetition"),u=e("core/gate").Gate,a=e("core/change-notification").ChangeNotification,f=e("core/change-notification").PropertyChangeNotification,l=r.create(Object.prototype,{_repetition:{value:null},_fakeIndex:{value:null},_unusedIndexes:{value:null},initWithRepetition:{value:function(e){return this._repetition=e,this._fakeIndex=[],this._unusedIndexes=[],this}},automaticallyDispatchPropertyChangeListener:{value:function(){return!1}},undefinedGet:{value:function(e){if(this._repetition.objects)return this._repetition.objects[this._fakeIndex.indexOf(e)]}},0:{set:function(){throw'You cannot use a two-way binding on the "objectAtCurrentIteration" or "current" property.'},get:function(){if(this._repetition.objects)return this._repetition.objects[this._fakeIndex.indexOf("0")]}},addFakeObjectAtPosition:{value:function(e){var t;return this._unusedIndexes.length>0?t=this._unusedIndexes.pop():t=String(this._fakeIndex.length),this._fakeIndex.splice(e,0,t),t}},resetFakeObjects:{value:function(){var e=this._repetition.objects;this._fakeIndex.length=0;if(e)for(var t=0,n=e.length;t<n;t++)this._fakeIndex[t]=String(t)}},removeFakeObjectAtPosition:{value:function(e){var t;return this._unusedIndexes.unshift(this._fakeIndex.splice(e,1)[0]),this._unusedIndexes[0]}},_dispatchFakePropertyChange:{value:function(e,t){var n,r;n=a.getPropertyChangeDescriptor(this,e),n&&(r=Object.create(f),r.target=this,r.propertyPath=e,r.minus=t,r.plus=this.undefinedGet(e),t!==r.plus&&n.handleChange(r))}}}),c=t.Repetition=r.create(i,{hasTemplate:{value:!1},didCreate:{value:function(){this.addPropertyChangeListener("objects",this),this._fakeObjects=Object.create(l).initWithRepetition(this)}},clonesChildComponents:{value:!0},_emptyFunction:{value:function(){}},_updateItems:{value:function(e,t,n){var r=this._fakeObjects,i,s=e?e.length:0,o=t?t.length:0,u,a,f;u=Math.max(s,o),a=Math.min(s,o),f=o-s;for(var l=0;l<a;l++)r._dispatchFakePropertyChange(r._fakeIndex[n+l],e[n+l]);if(f>0){this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*f,this.canDrawGate.setField("iterationLoaded",!1);for(;l<u;l++)r.addFakeObjectAtPosition(n+l),this._addItem({index:n+l,insertionIndex:n+l})}else if(f<0){var c=n+a;for(;l<u;l++)i=r.removeFakeObjectAtPosition(c),r._dispatchFakePropertyChange(i,e[l]),this._deleteItem(c)}}},handleChange:{enumerable:!1,value:function(e){"objects"===e.currentPropertyPath&&this._isComponentExpanded&&this._updateItems(e.minus,e.plus,e.index||0)}},_fakeObjects:{value:null},_hasBeenDeserialized:{value:!1,enumerable:!1},_nextDeserializedItemIx:{enumerable:!1,value:0,distinct:!0},init:{enumerable:!1,value:function(){return this._items=[],this._itemsToAppend=[],this._nextDeserializedItemIx=0,this._itemsToRemove=[],this._deletedItems=[],this}},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){if(this._contentController===e)return;this._contentController&&(Object.deleteBinding(this,"objects"),Object.deleteBinding(this,"selectedIndexes")),this._contentController=e;if(this._contentController){this._bindingDescriptors&&Object.deleteBinding(this,"objects");var t,n;t={boundObject:this._contentController,boundObjectPropertyPath:"organizedObjects",oneway:!0},n={boundObject:this._contentController,boundObjectPropertyPath:"selectedIndexes"},this._hasBeenDeserialized?(Object.defineBinding(this,"objects",t),Object.defineBinding(this,"selectedIndexes",n)):(this._controllerBindingsToInstall||(this._controllerBindingsToInstall={}),this._controllerBindingsToInstall.objects=t,this._controllerBindingsToInstall.selectedIndexes=n)}}},_objects:{enumerable:!1,value:null},_mappedObjects:{enumerable:!1,value:null},objects:{dependencies:["indexMap","indexMapEnabled"],enumerable:!1,serializable:!0,get:function(){return!this.indexMap||!this.indexMapEnabled?this._objects:(this._objects&&!this._mappedObjects&&(this._mappedObjects=this.indexMap.map(function(e){return isNaN(e)?undefined:this._objects.getProperty(e)},this)),this._mappedObjects)},set:function(e){o.isDebug&&o.debug(this," set objects:",e?e.length:null,e,"same objects?",e===this._objects),this._mappedObjects=null,this._objects=e,this.contentController||(this.selectedIndexes=null)}},_isSelectionEnabled:{enumerable:!1,value:!1},isSelectionEnabled:{get:function(){return this._isSelectionEnabled},set:function(e){if(e===this._isSelectionEnabled)return;this._isSelectionEnabled=e,this._isComponentExpanded&&this._refreshSelectionTracking()}},_childLoadedCount:{enumerable:!1,value:0},_iterationChildComponentsCount:{enumerable:!1,value:null},_expectedChildComponentsCount:{enumerable:!1,value:null},_indexMap:{enumerable:!1,value:null},indexMap:{get:function(){return this._indexMap}},_indexMapEnabled:{enumerable:!1,value:!1},indexMapEnabled:{get:function(){return this._indexMapEnabled},set:function(e){if(e===this._indexMapEnabled)return;!this._indexMap&&e&&(this._indexMap=[]),this._indexMapEnabled=e,this.refreshIndexMap()}},_drawnIndexMap:{enumerable:!1,value:null},drawnIndexMap:{get:function(){return this._drawnIndexMap}},mapIndexToIndex:{value:function(e,t,n){this._indexMap||(this._indexMap=[]);if(t===this._indexMap[e]||!isNaN(t)&&this._indexMap.indexOf(t)>-1)return;this._indexMap[e]=t,this._indexMapAffectedIndexes[e]=!0,this._indexMapChanged=!0,(n||typeof n=="undefined")&&this.refreshIndexMap()}},clearIndexMap:{value:function(){this._indexMap.clear()}},refreshIndexMap:{value:function(){var e=this._mappedObjects;this._mappedObjects=null,this._isComponentExpanded&&(this._updateItems(e,this.objects,0),this.needsDraw=!0)}},_indexMapChanged:{enumerable:!1,value:!1},_indexMapAffectedIndexes:{enumerable:!1,distinct:!0,value:{}},_dirtyIndexes:{enumerable:!1,distinct:!0,value:{}},_items:{enumerable:!1,value:[],distinct:!0},_itemsToAppend:{enumerable:!1,value:[],distinct:!0},_itemsToRemove:{enumerable:!1,value:[],distinct:!0},_deletedItems:{enumerable:!1,value:[],distinct:!0},_updatingItems:{value:!1},_refreshItems:{value:function(){if(this._updatingItems)return;this._updatingItems=!0;var e=this._objects?this._objects.length:0,t=this._items.length+this._itemsToAppend.length,n,r,i=this._addItem,s=this._deleteItem;this._objects&&this.indexMap&&this._indexMapEnabled&&(e=this.indexMap.length),n=e-t,0!==n&&(this.needsDraw=!0);if(n>0){this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*n,this.canDrawGate.setField("iterationLoaded",!1);for(r=0;r<n;r++)i.call(this)}else if(n<0)for(r=n;r<0;r++)s.call(this);this._updatingItems=!1}},_addItems:{value:function(e,t){var n=e.length;if(this._updatingItems)return;this._updatingItems=!0,this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*n,this.canDrawGate.setField("iterationLoaded",!1);for(var r=0;r<n;r++)this._addItem({index:t+r,insertionIndex:t+r});this._updatingItems=!1}},_addItem:{value:function(e){var t=this,n=this._items,r,i,s,o,u=this._itemsToAppend,a,f,l,c=t.canDrawGate,h;e||(e={}),a=u.push(e)-1,o=n.length+a;if("index"in e)for(h=0;h<a;h++){var p=u[h];p.index>=e.index&&p.index++}t._canDraw=!1,s=this._iterationChildComponentsCount,this._iterationTemplate.instantiateWithComponent(this,function(){if(s===0)++t._childLoadedCount===t._expectedChildComponentsCount&&(c.setField("iterationLoaded",!0),t.needsDraw=!0);else{r=t.childComponents,f=o*t._iterationChildComponentsCount,l=f+s;for(h=f;h<l;h++)i=r[h],i.needsDraw=!0,i.loadComponentTree(function(){++t._childLoadedCount===t._expectedChildComponentsCount&&(c.setField("iterationLoaded",!0),t.needsDraw=!0)})}})}},_deleteItem:{value:function(e){var t,n=e,r,i=this.childComponents,s=this._iterationChildComponentsCount,o=this._itemsToAppend,u=o.length,a=!1,f=0;for(var l=0;l<u;l++){var c=o[l];c.index>e?c.index--:c.index<e?f++:a=c.removed=!0}if(!a){if(!(this._items.length>0))throw"BUG: _deleteItem was called on the repetition but no elements exist to be removed";n=e-f,t=this._items.splice(n,1)[0],t.removalIndex=n,this._itemsToRemove.push(t),this._removeIterationChildComponents(t.childComponentsIndex)}this.needsDraw=!0}},_removeIterationChildComponents:{value:function(e){var t=this.childComponents,n=this._iterationChildComponentsCount,r,i,s;if(n>0){r=t.splice(e,n),this._childLoadedCount-=n,this._expectedChildComponentsCount-=n;for(var o=0,u=r.length;o<u;o++)r[o].cleanupDeletedComponentTree(!0);i=this._items;for(var o=0;s=i[o];o++)s.childComponentsIndex>e&&(s.childComponentsIndex-=n);i=this._itemsToAppend;for(var o=0;s=i[o];o++)s.childComponentsIndex>e&&(s.childComponentsIndex-=n)}else this._childLoadedCount--,this._expectedChildComponentsCount--}},_iterationTemplate:{enumerable:!1,value:null},expandComponent:{value:function(e){this._updatingItems||this._setupIterationTemplate(),this._isComponentExpanded=!0,e&&e()}},templateDidDeserializeObject:{value:null},_setupIterationTemplate:{value:function(){var e=this._element,t=this.childComponents,n;this.setupIterationSerialization(),this.setupIterationDeserialization(),this._iterationChildComponentsCount=t.length,this._iterationChildCount=e.childNodes.length,this._iterationChildElementCount=e.children.length,this._iterationChildComponentsCount>0?(this._templateId=t[0]._suuid||t[0].uuid,this._iterationTemplate=s.templateWithComponent(this,this._templateDelegate)):(this._iterationTemplate=s.create(),this._iterationTemplate.delegate=this._templateDelegate,this._iterationTemplate.initWithComponent(this)),this._iterationTemplate.optimize(),this._removeOriginalContent=!0,o.isDebug&&o.debug(this._iterationTemplate.exportToString()),this.removeIterationSerialization();while(n=t.shift())n.needsDraw=!1;this.objects&&this.objects.length!==this._items.length&&this._updateItems([],this.objects,0)}},_templateDelegate:{value:{serializeObjectProperties:function(e,t){e.set("ownerComponent",t.ownerComponent,"reference")}}},templateDidLoad:{value:function(){var e=this._deserializedItem,t;if(e){t=e.element.childNodes,e.fragment=document.createDocumentFragment(),e.childComponentsIndex=this.childComponents.length-this._iterationChildComponentsCount;while(t.length>0)e.fragment.appendChild(t[0]);delete e.element}}},contentWillChange:{value:function(e){this._updatingItems=!0,this.reset()}},contentDidChange:{value:function(){this._updatingItems=!1,this._setupIterationTemplate()}},reset:{value:function(){this._items.clear(),this._itemsToAppend.clear(),this._nextDeserializedItemIx=0,this._itemsToRemove.clear(),this._deletedItems.clear()}},deserializedFromTemplate:{value:function(){this._isComponentExpanded&&this.setupIterationSerialization();var e=this._controllerBindingsToInstall,t;if(e){for(t in e)Object.defineBinding(this,t,e[t]);delete this._controllerBindingsToInstall}this._hasBeenDeserialized=!0}},canDraw:{value:function(){var e=this.canDrawGate.value,t,n,r=this.childComponents.length;if(e)for(n=0;n<r;n++)if(!this.childComponents[n].canDraw()){e=!1;break}return e}},prepareForDraw:{value:function(){this._refreshSelectionTracking()}},_selectedIndexesToDeselectOnDraw:{value:null},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes},set:function(e){this._selectedIndexes=e,this._markIndexesDirty(e),this._isComponentExpanded&&(this.needsDraw=!0)}},_activeIndexes:{value:null},activeIndexes:{get:function(){return this._activeIndexes},set:function(e){this._activeIndexes=e,this._markIndexesDirty(e),this._isComponentExpanded&&(this.needsDraw=!0)}},_markIndexesDirty:{value:function(e){if(e)for(var t=0,n=e.length;t<n;t++)this._dirtyIndexes[this._indexMap?this._indexMap.indexOf(e[t]):e[t]]=!0}},_refreshSelectionTracking:{value:function(){this.isSelectionEnabled?window.Touch?this.element.addEventListener("touchstart",this,!0):this.element.addEventListener("mousedown",this,!0):window.Touch?this.element.removeEventListener("touchstart",this,!0):this.element.removeEventListener("mousedown",this,!0)}},_itemIndexOfElement:{value:function(e){var t=e,n=null,r,i;if(t===this.element)return n;while(t&&t.parentNode!==this.element)t=t.parentNode;return t?(i=this.element.ownerDocument.createRange(),i.setStart(this.element,0),i.setEndAfter(t),r=this._iterationChildCount>1?1:0,n=(i.endOffset+r)/this._iterationChildCount-1,this.indexMap?this.indexMap[n]:n):null}},captureTouchstart:{value:function(e){if(this._selectionPointer||0===this._selectionPointer)return;this._observeSelectionPointer(e.changedTouches[0].identifier);var t=this._itemIndexOfElement(e.target);null!==t?this.activeIndexes=[t]:this._ignoreSelectionPointer()}},handleTouchend:{value:function(e){var t=0,n;while(t<e.changedTouches.length&&e.changedTouches[t].identifier!==this._selectionPointer)t++;t<e.changedTouches.length&&(this.eventManager.isPointerClaimedByComponent(this._selectionPointer,this)&&(n=this._itemIndexOfElement(e.target),null!==n&&(this.selectedIndexes=[n])),this._ignoreSelectionPointer())}},handleTouchcancel:{value:function(){this._ignoreSelectionPointer()}},captureMousedown:{value:function(e){this._observeSelectionPointer("mouse");var t=this._itemIndexOfElement(e.target);null!==t?this.activeIndexes=[t]:this._ignoreSelectionPointer()}},handleMouseup:{value:function(e){var t=this._itemIndexOfElement(e.target);null!==t&&(this.selectedIndexes=[t]),this._ignoreSelectionPointer()}},surrenderPointer:{value:function(e,t){return this._ignoreSelectionPointer(),!0}},_selectionPointer:{value:null},_observeSelectionPointer:{value:function(e){this._selectionPointer=e,this.eventManager.claimPointer(e,this),window.Touch?(document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)):document.addEventListener("mouseup",this,!1)}},_ignoreSelectionPointer:{value:function(){this.eventManager.forfeitPointer(this._selectionPointer,this),this._selectionPointer=null,this.activeIndexes=[],window.Touch?(document.removeEventListener("touchend",this,!1),document.removeEventListener("touchcancel",this,!1)):document.removeEventListener("mouseup",this,!1)}},_iterationChildCount:{value:null},_iterationChildElementCount:{value:null},draw:{value:function(){var e,t,n,r,i=this._items.length,s,o=this.element,u=o.ownerDocument,a,f,l,c,h,p,d,v,m=this._indexMapChanged,g,y,b=this._iterationChildCount,w;if(!this.canDrawGate.value)return;this._removeOriginalContent&&(this._removeOriginalContent=!1,o.innerHTML="");if(1===this._iterationChildElementCount){l=o.children;for(e=0;e<l.length;e++)d=l.item(e),d&&this._dirtyIndexes[e]&&(v=d.classList,v.remove("active"),v.remove("selected"),v.remove("no-transition"),m&&this._indexMapAffectedIndexes[e]&&(v.add("no-transition"),this._dirtyIndexes[e]=!1))}m&&(this._indexMapAffectedIndexes.clear(),this._indexMapChanged=!1,this.needsDraw=!0);var E;if(this._itemsToRemove.length>0){f=document.createRange();for(e=0;t=this._itemsToRemove[e];e++)E=t.removalIndex,f.setStart(o,E*b),f.setEnd(o,E*b+b),f.extractContents();this._itemsToRemove.clear()}var S;if(this._itemsToAppend.length>0){for(e=0;t=this._itemsToAppend[e];e++){if(t.removed){this._removeIterationChildComponents(t.childComponentsIndex);continue}n=t.fragment,S=t.insertionIndex,delete t.fragment,delete t.insertionIndex,delete t.index,isNaN(S)?o.appendChild(n):o.insertBefore(n,o.childNodes[S*this._iterationChildCount]),this._items.splice(S,0,t)}i=this._items.length,this._itemsToAppend.clear(),this._nextDeserializedItemIx=0}if(null!==this.selectedIndexes&&this.selectedIndexes.length>0&&1===this._iterationChildElementCount){l=o.children,a=this.selectedIndexes.length,c=Math.min(a,l.length);for(e=0;e<c;e++)y=this.indexMap?this.indexMap.indexOf(this.selectedIndexes[e]):this.selectedIndexes[e],d=l.item(y),d&&(d.classList.add("selected"),this._dirtyIndexes[y]=!0)}if(null!==this._activeIndexes&&this._activeIndexes.length>0&&1===this._iterationChildElementCount){l=this.element.children,h=this._activeIndexes.length,p=Math.min(h,l.length);for(e=0;e<p;e++)g=this.indexMap?this.indexMap.indexOf(this._activeIndexes[e]):this._activeIndexes[e],d=l.item(g),d&&(d.classList.add("active"),this._dirtyIndexes[g]=!0)}this._drawnIndexMap=this._indexMap?this.indexMap.slice(0):null}},setupIterationSerialization:{value:function(){r.defineProperty(this,"serializeSelf",{value:this.serializeIteration})}},setupIterationDeserialization:{value:function(){this.deserializeProperties=this.deserializeIteration}},removeIterationSerialization:{value:function(){delete this.serializeSelf}},propertyChangeBindingListener:{value:function(e,t,n,r,i,s,o){var u=o,a=e,f,l,c,h,p,d;if(o&&o.boundObjectPropertyPath.match(/objectAtCurrentIteration/)){if(!this._deserializedItem)return null;l=this._fakeObjects._fakeIndex[this._deserializedItem.index],u={},c=Object.keys(o),h=c.length;for(var v=0;v<h;v++)p=c[v],u[p]=o[p];d=o.boundObjectPropertyPath.replace(/objectAtCurrentIteration/,"_fakeObjects."+l),u.boundObjectPropertyPath=d,a=e.replace(/objectAtCurrentIteration/,"_fakeObjects."+l)}else if(o&&o.boundObjectPropertyPath.match(/selectionAtCurrentIteration/)){if(!this._deserializedItem)return null;l=this._fakeObjects._fakeIndex[this._deserializedItem.index],u={},c=Object.keys(o),h=c.length;for(var v=0;v<h;v++)p=c[v],u[p]=o[p];d=o.boundObjectPropertyPath.replace(/selectionAtCurrentIteration/,"contentController.selections."+l),u.boundObjectPropertyPath=d,a=e.replace(/selectionAtCurrentIteration/,"contentController.selections."+l)}return u.boundObject===this?Object.prototype.propertyChangeBindingListener.call(this,a,t,n,r,i,s,u):u.boundObject.propertyChangeBindingListener(a,t,n,r,i,s,u)}},serializeIteration:{value:function(e){e.setProperty("element",this.element);var t=this.childComponents,n=e.addObject,r,i=t.length;for(r=0;r<i;r++)n.call(e,t[r]);e.setProperty("_isComponentExpanded",!0)}},deserializeIteration:{value:function(e){var t=this._itemsToAppend[this._nextDeserializedItemIx++];t?(this._deserializedItem=t,t.element=e.get("element"),this.eventManager.registerEventHandlerForElement(this,t.element),o.debug&&o.debug(this._montage_metadata.objectName+":deserializeIteration","childNodes: ",t.element)):this._deserializedItem=null}}})}}),montageDefine("120b0c7","ui/native/button.reel/button",{dependencies:["montage","ui/component","ui/native-control","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native-control").NativeControl,o=e("ui/composer/press-composer").PressComposer,u=t.Button=r.create(s,{_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){e===!0?this._preventFocus=!0:this._preventFocus=!1}},enabled:{dependencies:["disabled"],get:function(){return!this._disabled},set:function(e){this.disabled=!e}},converter:{value:null},_labelNode:{value:undefined,enumerable:!1},_label:{value:undefined,enumerable:!1},label:{get:function(){return this._label},set:function(e){if(e&&e.length>0&&this.converter)try{e=this.converter.convert(e),this.error&&(this.error=null)}catch(t){this.error=t}this._label=e,this._isInputElement&&(this._value=e),this.needsDraw=!0}},setLabelInitialValue:{value:function(e){this._label===undefined&&(this._label=e)}},holdThreshold:{get:function(){return this._pressComposer.longPressThreshold},set:function(e){this._pressComposer.longPressThreshold=e}},_pressComposer:{enumberable:!1,value:null},_active:{enumerable:!1,value:!1},active:{get:function(){return this._active},set:function(e){this._active=e,this.needsDraw=!0}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},didCreate:{value:function(){this._pressComposer=o.create(),this.addComposer(this._pressComposer)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(e,t,n){s.addEventListener.call(this,e,t,n),e==="hold"&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(e){this.active=!1,this._dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(e){e.keyCode===32&&(this.active=!1,this._dispatchActionEvent())}},handleLongPress:{value:function(e){this._pressComposer.cancelPress();var t=document.createEvent("CustomEvent");t.initCustomEvent("hold",!0,!0,null),this.dispatchEvent(t)}},handlePressCancel:{value:function(e){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},_isInputElement:{value:!1,enumerable:!1},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this._element.setAttribute("role","button"),this._isInputElement=this._element.tagName==="INPUT",this._isInputElement?(Object.defineProperty(this,"value",{get:function(){return this._label},set:function(e){this.label=e}}),this._label===undefined&&(this._label=this._element.value)):(this._element.firstChild||this._element.appendChild(document.createTextNode("")),this._labelNode=this._element.firstChild,this.setLabelInitialValue(this._labelNode.data),this._label===undefined&&(this._label=this._labelNode.data)),this.needsDraw=!0}},prepareForDraw:{value:function(){this._element.addEventListener("keyup",this,!1)}},_drawLabel:{enumerable:!1,value:function(e){this._isInputElement?this._element.setAttribute("value",e):this._labelNode.data=e}},draw:{value:function(){Object.getPrototypeOf(u).draw.call(this),this._disabled?this._element.classList.add("disabled"):this._element.classList.remove("disabled"),this._active?this._element.classList.add("active"):this._element.classList.remove("active"),this._drawLabel(this.label)}},_detail:{value:null},detail:{get:function(){return this._detail===null&&(this._detail=a.create()),this._detail}},createActionEvent:{value:function(){var e=document.createEvent("CustomEvent"),t,n;if(t=this._detail)n=t._data;return e.initCustomEvent("action",!0,!0,n),e}}});u.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},form:null,formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,type:{value:"button"},name:null,value:null});var a=r.create(r,{didCreate:{value:function(){this._data=Object.create(null)}},initWithReservedAndOptions:{value:function(e,t){Map.call(this,e,t)}},get:{value:function(e){return this.undefinedGet(e)}},set:{value:function(e,t){this.undefinedSet(e,t)}},_data:{value:null},_defineProperty:{value:function(e,t){t=typeof t!="undefined"?t:null,r.defineProperty(this,e,{get:function(){return this._data[e]},set:function(t){this._data[e]=t}}),this._data[e]=t}},undefinedGet:{value:function(e){return typeof this._data[e]=="undefined"&&this._defineProperty(e),this._data[e]}},undefinedSet:{value:function(e,t){typeof this._data[e]=="undefined"?this._defineProperty(e,t):this._data[e]=t}}})}}),montageDefine("87344ee","list",{dependencies:["./shim","./generic-collection","./generic-order","./listen/property-changes"],factory:function(e,t,n){"use strict";function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);var i=this.head=new this.Node;i.next=i,i.prev=i,this.contentEquals=t||Object.equals,this.getDefault=n||Function.noop,this.length=0,this.addEach(e)}function i(e){this.head=e,this.at=e.next}function s(e){this.value=e,this.prev=null,this.next=null}n.exports=r;var o=e("./shim"),u=e("./generic-collection"),a=e("./generic-order"),f=e("./listen/property-changes");Object.addEach(r.prototype,u.prototype),Object.addEach(r.prototype,a.prototype),Object.addEach(r.prototype,f.prototype),r.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.getDefault)},r.prototype.find=function(e,t){t=t||this.contentEquals;var n=this.head,r=n.next;while(r!==n){if(t(r.value,e))return r;r=r.next}},r.prototype.findLast=function(e,t){t=t||this.contentEquals;var n=this.head,r=n.prev;while(r!==n){if(t(r.value,e))return r;r=r.prev}},r.prototype.has=function(e,t){return!!this.find(e,t)},r.prototype.get=function(e,t){var n=this.find(e,t);return n?n.value:this.getDefault(e)},r.prototype["delete"]=function(e,t){var n=this.findLast(e,t);return n?(n["delete"](),this.length--,!0):!1},r.prototype.clear=function(){var e;this.head.next=this.head.prev=this.head,this.length=0},r.prototype.add=function(e){return this.head.addBefore(new this.Node(e)),this.length++,!0},r.prototype.push=function(){var e=this.head;for(var t=0;t<arguments.length;t++){var n=arguments[t],r=new this.Node(n);e.addBefore(r),this.length++}},r.prototype.unshift=function(){var e=this.head;for(var t=0;t<arguments.length;t++){var n=arguments[t],r=new this.Node(n);e.addAfter(r),this.length++,e=r}},r.prototype.pop=function(){var e,t=this.head;return t.prev!==t&&(e=t.prev.value,t.prev["delete"](),this.length--),e},r.prototype.shift=function(){var e,t=this.head;return t.prev!==t&&(e=t.next.value,t.next["delete"](),this.length--),e},r.prototype.peek=function(){if(this.head!==this.head.next)return this.head.next.value},r.prototype.poke=function(e){this.head!==this.head.next?this.head.next.value=e:this.push(e)},r.prototype.one=function(){return this.peek()},r.prototype.scan=function(e,t){var n=this.head;if(typeof e=="number"){var r=e;if(r>=0){e=n.next;while(r){r--,e=e.next;if(e==n)break}}else{e=n;while(r<0){r++,e=e.prev;if(e==n)break}}return e}return e||t},r.prototype.slice=function(e,t){var n=[],r=this.head;e=this.scan(e,r.next),t=this.scan(t,r);while(e!==t&&e!==r)n.push(e.value),e=e.next;return n},r.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},r.prototype.swap=function(e,t,n){var r=[],i=e;e=this.scan(e,this.head),t===undefined&&(t=Infinity);while(t--&&t>=0&&e!==this.head)r.push(e.value),e["delete"](),e=e.next,this.length--;if(n){i===null&&e===this.head&&(e=this.head.next);for(var s=0;s<n.length;s++){var o=new this.Node(n[s]);e.addBefore(o)}this.length+=n.length}return r},r.prototype.reverse=function(){var e=this.head;do{var t=e.next;e.next=e.prev,e.prev=t,e=e.next}while(e!==this.head);return this},r.prototype.reduce=function(e,t){var n=arguments[2],r=this.head,i=r.next;while(i!==r)t=e.call(n,t,i.value,i,this),i=i.next;return t},r.prototype.reduceRight=function(e,t){var n=arguments[2],r=this.head,i=r.prev;while(i!==r)t=e.call(n,t,i.value,i,this),i=i.prev;return t},r.prototype.iterate=function(){return new i(this.head)},i.prototype.next=function(){if(this.at===this.head)throw StopIteration;var e=this.at.value;return this.at=this.at.next,e},r.prototype.Node=s,s.prototype["delete"]=function(){this.prev.next=this.next,this.next.prev=this.prev},s.prototype.addBefore=function(e){var t=this.prev;this.prev=e,e.prev=t,t.next=e,e.next=this},s.prototype.addAfter=function(e){var t=this.next;this.next=e,e.next=t,t.prev=e,e.prev=this}}}),montageDefine("120b0c7","core/converter/number-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/converter/converter").Converter,s=e("core/converter/converter").Validator,o=e("core/converter/converter").isNumber,u=e("core/converter/converter").isDef,a=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,f=["P","T","B","M","K","","m","u","n"],l=t.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},c=t.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},h=t._numericValueToString=function(e,t,n,r,i){i=i||f;var s=e,o="",a=1;e<0&&(e=-e);for(var l=0;l<i.length;l++){var c=i[l];a=t[c];if(e>=a||a<=1&&e>.1*a){o=c;break}}o?r&&(o+=r):a=1;var h=Math.pow(10,u(n)?n:2);return Math.round(s/a*h)/h+o},p=function(e,t){var n=e.match(a);return n?n[1]*t[n[2]]:NaN},d=function(e){return a.test(e)},v=t.stringToNumericValue=function(e){return e.endsWith("B")?p(e,c):p(e,l)},m=t.numericValueToString=function(e,t){return h(e,l,t)},g=t.NumberValidator=r.create(s,{allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(e){var t;return e=e||"",e=e.replace(/,/g,""),o(e)?t=e:t=this.allowFloat===!0?parseFloat(e,10):parseInt(e,10),isNaN(t)?{message:"Invalid Number"}:t}}}),y=t.NumberConverter=r.create(i,{allowPartialConversion:{value:!1},validator:{value:r.create(g)},shorten:{value:null},decimals:{value:2},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(e,t,n){t=t||",",n=n||".";var r=e.toString().split("."),i=r[0],s=r.length>1?n+r[1]:"";while(this._reg.test(i))i=i.replace(this._reg,"$1"+t+"$2");return i+s}},convert:{value:function(e){if(this.shorten)return m(e,this.decimals);var t;if(this.round)t=Number(Math.round(e)).toString();else{var n=Math.pow(10,this.decimals||2),r=1;t=Number(Math.round(e/r*n)/n)}return this._makeReadable(t)}},revert:{value:function(e){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var t=this.validator.validate(e);if(o(t))return t;throw new Error(t.message)}}})}}),montageDefine("a005228","ui/effects-panel.reel/effects-panel.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta http-equiv=Content-Type content="text/html; charset=utf-8">\n    <title>EffectsPanel</title>\n    <link rel=stylesheet type="text/css" href=effects-panel.css>\n\n    <script type="text/montage-serialization">{"invertToggle":{"prototype":"montage/ui/toggle-button.reel","properties":{"element":{"#":"invertToggle"},"pressedClass":"success","pressedLabel":"ON","unpressedLabel":"OFF"},"bindings":{"pressed":{"<->":"@owner.editor.inverted"}}},"desaturateToggle":{"prototype":"montage/ui/toggle-button.reel","properties":{"element":{"#":"desaturateToggle"},"pressedClass":"success","pressedLabel":"ON","unpressedLabel":"OFF"},"bindings":{"pressed":{"<->":"@owner.editor.desaturated"}}},"multiplyControl":{"prototype":"ui/value-based-effect.reel","properties":{"element":{"#":"multiplyControl"},"name":"ON","minValue":1,"maxValue":20},"bindings":{"enabled":{"<->":"@owner.editor.multiplyEffect"},"value":{"<->":"@owner.editor.multiplyMultiplier"}}},"colorInfoPanel":{"prototype":"ui/color-info-panel.reel","properties":{"element":{"#":"colorInfoPanel"}},"bindings":{"editor":{"<-":"@owner.editor"}}},"photoInfoPanel":{"prototype":"ui/photo-info-panel.reel","properties":{"element":{"#":"photoInfoPanel"}},"bindings":{"photo":{"<->":"@owner.editor.photo"}}},"owner":{"properties":{"element":{"#":"EffectsPanel"}}}}</script>\n\n</head>\n<body>\n\n    <div data-montage-id=EffectsPanel class=EffectsPanel>\n        <ul class=effectsList>\n            <li>Invert Colors<button data-montage-id=invertToggle class="btn effect-toggle-switch" style="width: 60px">ON</button></li>\n            <li>Desaturate<button data-montage-id=desaturateToggle class="btn effect-toggle-switch" style="width: 60px">ON</button></li>\n            <li>Multiply<div data-montage-id=multiplyControl></div></li>\n        </ul>\n        <div data-montage-id=colorInfoPanel></div>\n        <div data-montage-id=photoInfoPanel></div>\n    </div>\n\n</body>\n</html>'}),montageDefine("a005228","ui/search-panel.reel/search-panel",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.SearchPanel=r.create(i,{photoListController:{value:null},queryParameter:{value:null},resultCount:{value:20},searchForm:{value:null},searchResultsList:{value:null},prepareForDraw:{value:function(){this.searchForm.identifier="searchForm",this.searchForm.addEventListener("submit",this,!1)}},_isSearching:{value:!1},isSearching:{get:function(){return this._isSearching},set:function(e){if(e===this._isSearching)return;this._isSearching=e,this.needsDraw=!0}},handleSearchFormSubmit:{value:function(e){e.preventDefault(),this.performSearch()}},performSearch:{value:function(){if(this.isSearching){console.log("already searching!");return}this.isSearching=!0,this.searchResults=null;var e="http://picasaweb.google.com/data/feed/base/all?visibility=public&alt=json&max-results="+this.resultCount+"&kind=photo&prettyprint=true&imgmax=720u&q=",t=e+this.queryParameter,n=new XMLHttpRequest;n.identifier="searchRequest",n.open("GET",t),n.addEventListener("load",this,!1),n.addEventListener("error",this,!1),n.send()}},handleSearchRequestLoad:{value:function(e){var t=JSON.parse(e.target.responseText);this.searchResults=t.feed.entry,this.isSearching=!1}},handleSearchRequestError:{value:function(e){console.error("handleSearchRequestError",e),this.isSearching=!1}},searchResults:{value:null},draw:{value:function(){this.isSearching?this.element.classList.add("searching"):this.element.classList.remove("searching")}}})}}),montageDefine("a005228","ui/photo-info-panel.reel/photo-info-panel",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.PhotoInfoPanel=r.create(i,{_photo:{value:null},photo:{get:function(){return this._photo},set:function(e){if(e===this._photo)return;this._photo=e,this._photoChanged=!0,this.needsDraw=!0}},_dragProxy:{value:null},_canvas:{value:null},_modifiedCanvas:{value:null},handleImagemodified:{value:function(e){this._modifiedCanvas=e.detail.editor._canvas,this.needsDraw=!0}},prepareForDraw:{value:function(){this.element.addEventListener("mouseover",this,!1),document.application.addEventListener("imagemodified",this,!1)}},handleMouseover:{value:function(){this.photo&&this._prepareDownload()}},willDraw:{value:function(){this._modifiedCanvas&&(this._canvasWidth=this._modifiedCanvas.offsetWidth,this._canvasHeight=this._modifiedCanvas.offsetHeight)}},_prepareDownload:{value:function(){this._dragProxy.setAttribute("src",this._canvas.toDataURL())}},draw:{value:function(){if(this._modifiedCanvas){var e=this._modifiedCanvas.getContext("2d"),t=e.getImageData(0,0,this._canvasWidth,this._canvasHeight);this._canvas.width=this._canvasWidth,this._canvas.height=this._canvasHeight;var n=this._canvas.getContext("2d");n.putImageData(t,0,0),this._modifiedCanvas=null}this._photoChanged&&(this.photo?this._dragProxy.setAttribute("alt",this.photo.title):this._dragProxy.removeAttribute("src"),this._photoChanged=!1)}}})}}),montageDefine("a005228","ui/grid-magnifier.reel/grid-magnifier.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta http-equiv=Content-Type content="text/html; charset=utf-8">\n    <title>GridMagnifier</title>\n    <link rel=stylesheet type="text/css" href=grid-magnifier.css>\n\n    <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"GridMagnifier"},"_loupe":{"#":"loupe"},"_canvas":{"#":"canvas"}}},"colorPickerCondition":{"prototype":"montage/ui/condition.reel","properties":{"element":{"#":"colorPickerCondition"},"removalStrategy":"hide"},"bindings":{"condition":{"<-":"@owner.colorPickerEnabled"}}},"colorPicker":{"prototype":"ui/color-picker.reel","properties":{"element":{"#":"colorPicker"}},"bindings":{"currentColor":{"<-":"@owner.color"},"x":{"<-":"@owner.x"},"y":{"<-":"@owner.y"}}}}</script>\n\n</head>\n<body>\n\n    <div data-montage-id=GridMagnifier class=GridMagnifier>\n        <div data-montage-id=loupe class=loupe>\n            <canvas data-montage-id=canvas width=200 height=200></canvas>\n        </div>\n        <div data-montage-id=colorPickerCondition>\n            <div data-montage-id=colorPicker></div>\n        </div>\n    </div>\n\n</body>\n</html>'}),montageDefine("120b0c7","ui/list.reel/list.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <script type="text/montage-serialization">{"repetition1":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"repetition"}},"bindings":{"domContent":{"<-":"@owner.originalContent"},"objects":{"<-":"@owner.objects"},"contentController":{"<-":"@owner.contentController"},"isSelectionEnabled":{"<-":"@owner.isSelectionEnabled"}}},"scroller1":{"prototype":"ui/scroller.reel","properties":{"element":{"#":"scroller"}},"bindings":{"axis":{"<-":"@owner.axis"}}},"owner":{"prototype":"ui/list.reel","properties":{"element":{"#":"EA5D3E95-BA4E-4696-BBBE-B4DE2F6ED6C9"},"_repetition":{"@":"repetition1"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=EA5D3E95-BA4E-4696-BBBE-B4DE2F6ED6C9>\n        <div data-montage-id=scroller class=montage-List-Scroller>\n            <div data-montage-id=repetition></div>\n        </div>\n    </div>\n</body>\n</html>'}),montageDefine("a005228","ui/point-marker.reel/point-marker",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.PointMarker=r.create(i,{_x:{value:null},x:{get:function(){return this._x},set:function(e){if(e===this._x)return;this._x=e,this.needsDraw=!0}},_y:{value:null},y:{get:function(){return this._y},set:function(e){if(e===this._y)return;this._y=e,this.needsDraw=!0}},willDraw:{value:function(){this._width=this.element.offsetWidth,this._height=this.element.offsetHeight}},draw:{value:function(){null===this.x||null===this.y?this.element.classList.add("montage-invisible"):this.element.classList.remove("montage-invisible"),this.element.style.left=Math.floor(this.x-this._width/2)+"px",this.element.style.top=Math.floor(this.y-this._height/2)+"px"}}})}}),montageDefine("a005228","ui/color-picker.reel/color-picker",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.ColorPicker=r.create(i,{x:{value:null},y:{value:null},_currentColor:{value:null},currentColor:{get:function(){return this._currentColor},set:function(e){if(e===this._currentColor)return;this._currentColor=e,this.needsDraw=!0}},colorWell:{value:null},draw:{value:function(){var e=this.colorWell.style,t;this.currentColor?(t=this._currentColor,e.backgroundColor="rgb("+t[0]+","+t[1]+","+t[2]+")"):e.backgroundColor="rgb(0,0,0)"}}})}}),montageDefine("120b0c7","ui/input-text.reel/input-text",{dependencies:["montage","ui/component","ui/native/input-text.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/input-text.reel").InputText;t.InputText=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-InputText")}}})}}),montageDefine("120b0c7","ui/image.reel/image",{dependencies:["montage","ui/component","ui/native/image.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/image.reel").Image;t.Image=r.create(s,{willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-image")}}})}}),montageDefine("a005228","core/effect/invert-effect",{dependencies:["montage","core/effect/effect"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/effect/effect").Effect;t.InvertEffect=r.create(i,{applyEffect:{value:function(e,t){var n;for(n=0;n<t;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2]}}})}}),montageDefine("120b0c7","ui/toggle-button.reel/toggle-button.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href="../button.reel/button.css">\n    <link rel=stylesheet href=toggle-button.css>\n</head>\n<body>\n</body>\n</html>'}),montageDefine("a005228","core/point-monitor",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage;t.PointMonitor=r.create(r,{color:{value:null},x:{value:null},y:{value:null}})}})
bundleLoaded(undefined)