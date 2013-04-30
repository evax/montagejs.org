var Montage=require("montage").Montage,Template=require("ui/template").Template,Gate=require("core/gate").Gate,Promise=require("core/promise").Promise,logger=require("core/logger").logger("component"),drawLogger=require("core/logger").logger("drawing"),defaultEventManager=require("core/event/event-manager").defaultEventManager,Component=exports.Component=Montage.create(Montage,{delegate:{value:null},templateObjects:{serializable:!1,value:null},parentProperty:{value:"parentComponent"},_dispatchActionEvent:{value:function(){this.dispatchEvent(this.createActionEvent())},enumerable:!1},createActionEvent:{value:function(){var e=document.createEvent("CustomEvent");return e.initCustomEvent("action",!0,!0,null),e}},canDrawGate:{get:function(){return this._canDrawGate||(this._canDrawGate=Gate.create().initWithDelegate(this),this._canDrawGate.setField("componentTreeLoaded",!1)),this._canDrawGate},enumerable:!1},_blockDrawGate:{value:null},blockDrawGate:{enumerable:!1,get:function(){return this._blockDrawGate||(this._blockDrawGate=Gate.create().initWithDelegate(this),this._blockDrawGate.setField("element",!1),this._blockDrawGate.setField("drawRequested",!1)),this._blockDrawGate}},_firstDraw:{enumerable:!1,value:!0},_completedFirstDraw:{enumerable:!1,value:!1},_element:{enumerable:!1,value:null},element:{get:function(){return this._element},set:function(e){if(e==null){console.warn("Tried to set element of ",this," to ",e);return}if(this.isDeserializing)this.eventManager.registerEventHandlerForElement(this,e),this._isTemplateInstantiated?this._templateElement||(this._templateElement=e):(this._element=e,!this.blockDrawGate.value&&this._element&&this.blockDrawGate.setField("element",!0));else{if(!this._firstDraw){console.error("Cannot change element of ",this," after it has been set");return}this.eventManager.registerEventHandlerForElement(this,e),this._element=e,!this.blockDrawGate.value&&this._element&&this.blockDrawGate.setField("element",!0)}}},setElementWithParentComponent:{value:function(e,t){this._alternateParentComponent=t,this.element!=e&&(this.element=e)}},application:{enumerable:!1,get:function(){return document.application}},eventManager:{enumerable:!1,get:function(){return defaultEventManager}},rootComponent:{enumerable:!1,get:function(){return rootComponent}},acceptsDirectFocus:{enumerable:!1,value:function(){return!1}},elementControllerFromEvent:{enumerable:!1,value:function(e,t){return t}},_alternateParentComponent:{value:null},_cachedParentComponent:{value:null},parentComponent:{enumerable:!1,get:function(){var e=this._cachedParentComponent;return e==null?this._cachedParentComponent=this.findParentComponent():e}},findParentComponent:{value:function(){var e=this.element,t,n=this.eventManager;if(e){while((t=e.parentNode)!=null&&n.eventHandlerForElement(t)==null)e=t;return t?n.eventHandlerForElement(t):this._alternateParentComponent}}},querySelectorComponent:{value:function(e){if(typeof e!="string")throw"querySelectorComponent: Selector needs to be a string.";var t=e.match(/^\s*(?:@([^>\s]+))?(?:\s*(>)?\s*@([^>\s]+)(.*))?$/);if(!t)throw'querySelectorComponent: Syntax error "'+e+'"';var n=this.childComponents,r=t[1],i=t[2]||" ",s=t[3],o=t[4],u;if(r){o=s?"@"+s+o:"";for(var a=0,f;f=n[a];a++){if(r===Montage.getInfoForObject(f).label)return o?f.querySelectorComponent(o):f;u=f.querySelectorComponent(e);if(u)return u}}else for(var a=0,f;f=n[a];a++)if(s===Montage.getInfoForObject(f).label)return o?f.querySelectorComponent(o):f;return null}},querySelectorAllComponent:{value:function(e,t){if(typeof e!="string")throw"querySelectorComponent: Selector needs to be a string.";var n=e.match(/^\s*(?:@([^>\s]+))?(?:\s*(>)?\s*@([^>\s]+)(.*))?$/);if(!n)throw'querySelectorComponent: Syntax error "'+e+'"';var r=this.childComponents,i=n[1],s=n[2]||" ",o=n[3],u=n[4],a=[];if(i){u=o?"@"+o+u:"";for(var f=0,l;l=r[f];f++)i!==Montage.getInfoForObject(l).label||!!t&&t!==l.ownerComponent?a=a.concat(l.querySelectorAllComponent(e,t)):u?a=a.concat(l.querySelectorAllComponent(u)):a.push(l)}else for(var f=0,l;l=r[f];f++)o===Montage.getInfoForObject(l).label&&(!t||t===l.ownerComponent)&&(u?a=a.concat(l.querySelectorAllComponent(u,t)):a.push(l));return a}},template:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!0},_templateModuleId:{serializable:!1,value:null},_template:{value:null},_treeLevel:{value:0},_addChildComponent:{value:function(e){this.childComponents.indexOf(e)==-1&&(this.childComponents.push(e),e._cachedParentComponent=this)}},attachToParentComponent:{value:function(){this._cachedParentComponent=null;var e=this.parentComponent,t,n;if(e){t=e.childComponents;for(var r=0;n=t[r];r++){var i=n.findParentComponent();i===this&&(e.removeChildComponent(n),i._addChildComponent(n))}e._addChildComponent(this)}}},detachFromParentComponent:{value:function(){var e=this.parentComponent;e&&e.removeChildComponent(this)}},removeChildComponent:{value:function(e){var t=this.childComponents,n=e._element,r=t.indexOf(e);r>-1&&(t.splice(r,1),e._cachedParentComponent=null,e._alternateParentComponent=null)}},childComponents:{enumerable:!1,distinct:!0,value:[]},ownerComponent:{enumerable:!1,value:null},components:{enumerable:!1,value:{}},_isComponentExpanded:{enumerable:!1,value:null},_isTemplateLoaded:{enumerable:!1,value:null},_isTemplateInstantiated:{enumerable:!1,value:null},cleanupDeletedComponentTree:{value:function(e){e&&Object.deleteBindings(this),this.needsDraw=!1,this.traverseComponentTree(function(t){e&&Object.deleteBindings(t),t.needsDraw=!1})}},originalContent:{serializable:!1,value:null},_newDomContent:{enumerable:!1,value:null},domContent:{serializable:!1,get:function(){return this._element?Array.prototype.slice.call(this._element.childNodes,0):null},set:function(e){function s(e){var t=e.controller;if(t)t.detachFromParentComponent(),n.push(t);else{var r=e.childNodes;for(var i=0,o;o=r[i];i++)s(o)}}var t,n=[];this._newDomContent=e,this.needsDraw=!0,this._newDomContent===null&&(this._shouldClearDomContentOnNextDraw=!0),typeof this.contentWillChange=="function"&&this.contentWillChange(e),t=this.childComponents;for(var r=0,i;i=t[r];r++)i.detachFromParentComponent(),i.cleanupDeletedComponentTree();if(e instanceof Element)s(e);else if(e)for(var r=0;r<e.length;r++)s(e[r]);for(var r=0,i;i=n[r];r++)this._addChildComponent(i)}},_shouldClearDomContentOnNextDraw:{value:!1},clonesChildComponents:{writable:!1,value:!1},deserializedFromSerialization:{value:function(){this.attachToParentComponent(),this._element&&(this._newDomContent?this.originalContent=this._newDomContent:this.originalContent=Array.prototype.slice.call(this._element.childNodes,0)),this.hasOwnProperty("identifier")||(this.identifier=Montage.getInfoForObject(this).label)}},serializeProperties:{value:function(e){e.setAll();var t=this.childComponents;for(var n=0,r=t.length;n<r;n++)e.addObject(t[n])}},canDraw:{value:function(){return this._canDraw}},_canDraw:{get:function(){return!this._canDrawGate||this._canDrawGate.value},set:function(e){rootComponent.componentCanDraw(this,e)},enumerable:!1},_prepareCanDraw:{enumerable:!1,value:function(){this._isComponentTreeLoaded||this.loadComponentTree()}},_loadComponentTreeCallbacks:{enumerable:!1,value:null},_isComponentTreeLoaded:{enumerable:!1,value:null},_isComponentTreeLoading:{enumerable:!1,value:null},loadComponentTree:{value:function(t){function i(){var e,t=n._loadComponentTreeCallbacks;n._isComponentTreeLoading=!1,n._isComponentTreeLoaded=!0,r.setField("componentTreeLoaded",!0);if(t){for(var i=0;e=t[i];i++)e(n);n._loadComponentTreeCallbacks=t=null}}var n=this,r=this.canDrawGate;if(this._isComponentTreeLoaded){t&&t(this);return}t&&(this._loadComponentTreeCallbacks==null?this._loadComponentTreeCallbacks=[t]:this._loadComponentTreeCallbacks.push(t));if(this._isComponentTreeLoading)return;r.setField("componentTreeLoaded",!1);if(this.needsDraw||this.hasTemplate)this._canDraw=!1;this._isComponentTreeLoading=!0,this.expandComponent(function(){var e,t=n.childComponents,r=t.length,s=0,o;if(r===0){i();return}for(o=0;e=t[o];o++)e.loadComponentTree(function(){++s===r&&i()})})}},traverseComponentTree:{value:function(t,n){function i(){var e=r.childComponents,i,s;if(t&&t(r)===!1){n&&n();return}if((s=e.length)===0){n&&n();return}for(var o=0;i=e[o];o++)i.traverseComponentTree(t,function(){--s===0&&n&&n()})}var r=this;this._isComponentExpanded?i():this.expandComponent(function(){i()})}},expandComponent:{value:function(t){var n=this;this.hasTemplate&&!this._isTemplateInstantiated?this.loadTemplate(function(){n._isComponentExpanded=!0,t&&t()}):(n._isComponentExpanded=!0,t&&t())}},_loadTemplateCallbacks:{enumerable:!1,value:null},loadTemplate:{value:function(t){var n=this;this._isTemplateInstantiated||this._loadTemplate(function(e){var r=n.templateObjects;r?r.owner=n:n.templateObjects=r={owner:n},n._isTemplateInstantiated=!0,e.instantiateWithInstancesAndDocument(r,n._element.ownerDocument,function(){t&&t()})})}},_loadTemplate:{value:function(t){if(this._isTemplateLoaded){t&&t(this._template);return}t&&(this._loadTemplateCallbacks===null?this._loadTemplateCallbacks=[t]:this._loadTemplateCallbacks.push(t));if(this._isTemplateLoading)return;this._isTemplateLoading=!0;var n=this,r,i,s=function(e){var r=n._loadTemplateCallbacks;n._template=e,n._isTemplateLoaded=!0,n._isTemplateLoading=!1;if(r){for(var i=0;t=r[i];i++)t(e);n._loadTemplateCallbacks=r=null}};r=Montage.getInfoForObject(this),logger.isDebug&&logger.debug(this,"Will load "+this.templateModuleId),Template.templateWithModuleId(r.require,this.templateModuleId,s)}},templateModuleId:{get:function(){return this._templateModuleId||this._getDefaultTemplateModuleId()}},_getDefaultTemplateModuleId:{value:function(){var e,t,n,r;return r=Montage.getInfoForObject(this),n=r.moduleId,t=n.lastIndexOf("/"),e=n+"/"+n.slice(t===-1?0:t+1,-5)+".html",e}},_deserializedFromTemplate:{value:function(e){this.ownerComponent||(Component.isPrototypeOf(e)?this.ownerComponent=e:this.ownerComponent=this.rootComponent)}},blueprintModuleId:{serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=Montage.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=r===-1?0:r+1,i=i===-1?n.length:i,i=i<r?n.length:i;var s;i<n.length&&n.slice(i,n.length)==".reel"?s=n+"/"+n.slice(r,i)+"-blueprint.json":s=n.slice(0,i)+"-blueprint.json",Montage.defineProperty(t,"_blueprintModuleId",{value:s})}return t._blueprintModuleId}},blueprint:require("montage")._blueprintDescriptor,gateDidBecomeTrue:{value:function(e){e==this._canDrawGate?this._canDraw=!0:e==this._blockDrawGate&&(rootComponent.componentBlockDraw(this),this._prepareCanDraw())},enumerable:!1},_canDrawGate:{enumerable:!1,value:null},_preparedForActivationEvents:{enumerable:!1,value:!1},_drawIfNeeded:{enumerable:!1,value:function(t){var n,r,i,s;this._treeLevel=t,this.needsDraw&&!this._addedToDrawCycle&&rootComponent.addToDrawCycle(this),drawLogger.isDebug&&drawLogger.debug(this,"drawList: "+(this._drawList||[]).length+" of "+this.childComponents.length);if(this._drawList!==null&&this._drawList.length>0){r=this._drawList,this._drawList=[],s=r.length;for(i=0;i<s;i++)n=r[i],drawLogger.isDebug&&drawLogger.debug("Parent Component "+(this.element!=null?this.element.id:"")+" drawList length: "+r.length),n._addedToDrawList=!1,drawLogger.isDebug&&drawLogger.debug(this,"childComponent: "+n.element+"; canDraw: "+n.canDraw()),n.canDraw()&&n._drawIfNeeded(t+1)}}},_updateComponentDom:{value:function(){var e,t,n,r;if(this._firstDraw){this.parentComponent&&typeof this.parentComponent.childComponentWillPrepareForDraw=="function"&&this.parentComponent.childComponentWillPrepareForDraw(this),this._willPrepareForDraw(),typeof this.willPrepareForDraw=="function"&&this.willPrepareForDraw(),this._prepareForDraw(),this.prepareForDraw&&this.prepareForDraw(),n=this.composerList.length;for(r=0;r<n;r++)t=this.composerList[r],t.lazyLoad||t._load();this._firstDraw=!1}if(this._newDomContent!==null||this._shouldClearDomContentOnNextDraw)drawLogger.isDebug&&logger.debug("Component content changed: component ",this._montage_metadata.objectName,this.identifier," newDomContent",this._newDomContent),this._performDomContentChanges()}},_replaceElementWithTemplate:{enumerable:!1,value:function(){var e=this.element,t=this._templateElement,n=this.element.attributes,r,i,s,o;for(s=0;o=n[s];s++)r=o.nodeName,r==="id"||r==="data-montage-id"?i=o.nodeValue:i=(t.getAttribute(r)||"")+(r==="style"?"; ":" ")+o.nodeValue,t.setAttribute(r,i);e.parentNode?e.parentNode.replaceChild(t,e):console.warn("Warning: Trying to replace element ",e," which has no parentNode"),this.eventManager.unregisterEventHandlerForElement(e),this.eventManager.registerEventHandlerForElement(this,t),this._element=t,this._templateElement=null,this._newDomContent&&(this._newDomContent=null,this._shouldClearDomContentOnNextDraw=!1)}},_prepareForDraw:{value:function(){logger.isDebug&&logger.debug(this,"_templateElement: "+this._templateElement),this._templateElement&&this._replaceElementWithTemplate();var t=this.childComponents;for(var n=0,r;r=t[n];n++)drawLogger.isDebug&&drawLogger.debug(this,"needsDraw = true for: "+r._montage_metadata.exportedSymbol),r.needsDraw=!0},enumerable:!1},prepareForActivationEvents:{enumerable:!1,value:null},_prepareForActivationEvents:{value:function(){var e=this.composerList.length,t;for(e=0;e<this.composerList.length;e++)t=this.composerList[e],t.lazyLoad&&t._load();typeof this.prepareForActivationEvents=="function"&&this.prepareForActivationEvents()}},_performDomContentChanges:{value:function(){var e=this._newDomContent,t=this._element.childNodes[0],n;if(e||this._shouldClearDomContentOnNextDraw){n=this._element,n.innerHTML="";if(e instanceof Element)n.appendChild(e);else if(e!==null)for(var r=0,i;i=e[r];r++)n.appendChild(i);this._newDomContent=null,typeof this.contentDidChange=="function"&&this.contentDidChange(this._element.childNodes[0],t),this._shouldClearDomContentOnNextDraw=!1}}},draw:{enumerable:!1,value:function(){}},willDraw:{enumerable:!1,value:null},didDraw:{enumerable:!1,value:function(){}},_addedToDrawList:{value:!1},_addToParentsDrawList:{enumerable:!1,value:function(){if(!this._addedToDrawList){var e=this.parentComponent;e?e._addToDrawList(this):drawLogger.isDebug&&drawLogger.debug(this,"parentComponent is null"),drawLogger.isDebug&&drawLogger.debug("drawList -- childComponent",this._montage_metadata.objectName," added to ",e._montage_metadata.objectName)}}},_needsDraw:{enumerable:!1,value:!1},needsDraw:{enumerable:!1,get:function(){return!!this._needsDraw},set:function(e){if(this.isDeserializing)return;this._needsDraw!==e&&(drawLogger.isDebug&&drawLogger.debug("NEEDS DRAW TOGGLED "+e+" FOR "+this._montage_metadata.objectName),this._needsDraw=!!e,e&&(this.canDrawGate.value?this._addToParentsDrawList():this.blockDrawGate.setField("drawRequested",!0)))}},_drawList:{value:null},__addToDrawList:{enumerable:!1,value:function(e){this._drawList===null?(this._drawList=[e],e._addedToDrawList=!0):this._drawList.indexOf(e)===-1&&(this._drawList.push(e),e._addedToDrawList=!0)}},_addToDrawList:{enumerable:!1,value:function(e){this.__addToDrawList(e),this._addToParentsDrawList()}},_templateElement:{enumerable:!1,value:null},surrenderPointer:{value:function(e,t){return!0}},composerList:{value:[],distinct:!0,serializable:!1},addComposer:{value:function(e){this.addComposerForElement(e,e.element)}},addComposerForElement:{value:function(e,t){e.component=this,e.element=t,this.composerList.push(e),this._firstDraw||(e.lazyLoad?this._preparedForActivationEvents&&e._load():e._load())}},scheduleComposer:{value:function(e){this.rootComponent.addToComposerList(e)}},removeComposer:{value:function(e){var t,n;n=this.composerList.length;for(t=0;t<n;t++)if(this.composerList[t].uuid===e.uuid){this.composerList[t].unload(),this.composerList.splice(t,1);break}}},clearAllComposers:{value:function(){var e,t,n=this.composerList;t=n.length;for(e=0;e<t;e++)n[e].unload();n.splice(0,t)}},localizer:{value:null},_waitForLocalizerMessages:{value:!1},waitForLocalizerMessages:{enumerable:!1,get:function(){return this._waitForLocalizerMessages},set:function(e){if(this._waitForLocalizerMessages!==e)if(e===!0&&!this.localizer.messages){if(!this.localizer)throw"Cannot wait for messages on localizer if it is not set";this._waitForLocalizerMessages=!0;var t=this;logger.debug(this,"waiting for messages from localizer"),this.canDrawGate.setField("messages",!1),this.localizer.messagesPromise.then(function(e){logger.isDebug&&logger.debug(t,"got messages from localizer"),t.canDrawGate.setField("messages",!0)})}else this._waitForLocalizerMessages=!1,this.canDrawGate.setField("messages",!0)}},_elementAttributeValues:{value:null},_elementAttributeDescriptors:{value:null},_getElementAttributeDescriptor:{value:function(e){var t,n=this;while(n&&n._elementAttributeDescriptors){t=n._elementAttributeDescriptors[e];if(t)break;n=Object.getPrototypeOf(n)}return t}},defineAttribute:{value:function(e,t){t=t||{};var n="_"+e,r={configurable:typeof t.configurable=="undefined"?!0:t.configurable,enumerable:typeof t.enumerable=="undefined"?!0:t.enumerable,set:function(e,t){return function(n){var r=this._getElementAttributeDescriptor(e,this);r&&"boolean"===r.dataType&&(n=n||n===""?!0:!1),typeof n!="undefined"&&this[t]!==n&&(this[t]=n,this._elementAttributeValues===null&&(this._elementAttributeValues={}),this._elementAttributeValues[e]=n,this.needsDraw=!0)}}(e,n),get:function(e,t){return function(){return this[t]}}(e,n)};Montage.defineProperty(this,n,{value:null}),Montage.defineProperty(this,e,r)}},addAttributes:{value:function(e){var t,n,r,i;this._elementAttributeDescriptors=e;for(r in e)e.hasOwnProperty(r)&&(i=e[r],i===null||String.isString(i)?(n={value:i,dataType:"string"},e[r]=n):n=i,typeof this[r]=="undefined"&&this.defineAttribute(r,n))}},_willPrepareForDraw:{value:function(){var e,t,n,r,i,s,o;e=this.element.attributes;if(e){n=e.length;for(t=0;t<n;t++){r=e[t].name,i=e[t].value,o=this._getElementAttributeDescriptor(r,this);if(o||typeof this[r]!="undefined"){this._elementAttributeValues===null&&(this._elementAttributeValues={});if(typeof this._elementAttributeValues[r]=="undefined"){this._elementAttributeValues[r]=i;if(typeof this[r]=="undefined"||this[r]==null)this[r]=i}}}}o=this._getElementAttributeDescriptor("textContent",this);if(o){var u=this.element.textContent;typeof this._elementAttributeValues.textContent=="undefined"&&(this._elementAttributeValues.textContent=u,this.textContent==null&&(this.textContent=u))}if(this._elementAttributeDescriptors)for(s in this._elementAttributeDescriptors){o=this._elementAttributeDescriptors[s];var a="_"+s;this[a]===null&&o!==null&&"value"in o&&(this[a]=this._elementAttributeDescriptors[s].value)}}},_draw:{value:function(){var e=this.element,t;for(var n in this._elementAttributeValues)if(this._elementAttributeValues.hasOwnProperty(n)){var r=this[n];t=this._getElementAttributeDescriptor(n,this),t&&(t.dataType==="boolean"?r===!0?(e[n]=!0,e.setAttribute(n,n.toLowerCase())):(e[n]=!1,e.removeAttribute(n)):typeof r!="undefined"&&(n==="textContent"?e.textContent=r:e.setAttribute(n,r))),delete this._elementAttributeValues[n]}}}}),rootComponent=Montage.create(Component,{init:{value:function(){return this}},needsDraw:{enumerable:!0,get:function(){return!1},set:function(e){if(this._needsDraw!==e){this._needsDraw=!!e;if(e){var t=this.childComponents;for(var n=0,r;r=t[n];n++)drawLogger.isDebug&&drawLogger.debug(this,"needsDraw = true for: "+r._montage_metadata.exportedSymbol),r.needsDraw=!0}}}},canDrawGate:{get:function(){return this._canDrawGate||(this._canDrawGate=Gate.create().initWithDelegate(this))}},_clearNeedsDrawTimeOut:{value:null},_needsDrawList:{value:[]},_cannotDrawList:{value:null},componentBlockDraw:{value:function(e){this._cannotDrawList=this._cannotDrawList?this._cannotDrawList:{},this._cannotDrawList[e.uuid]=e,this._clearNeedsDrawTimeOut&&(window.clearTimeout(this._clearNeedsDrawTimeOut),this._clearNeedsDrawTimeOut=null)}},componentCanDraw:{value:function(e,t){if(t){delete this._cannotDrawList[e.uuid],this._needsDrawList.push(e);if(Object.keys(this._cannotDrawList).length===0&&this._needsDrawList.length>0&&!this._clearNeedsDrawTimeOut){var n=this;this._clearNeedsDrawTimeOut=window.setTimeout(function(){n._clearNeedsDrawList()},0)}}else this._clearNeedsDrawTimeOut&&(window.clearTimeout(this._clearNeedsDrawTimeOut),this._clearNeedsDrawTimeOut=null)}},_clearNeedsDrawList:{value:function(){var e,t,n,r=this._needsDrawList;n=r.length;for(t=0;t<n;t++)e=r[t],e.needsDraw&&e._addToParentsDrawList();this._clearNeedsDrawTimeOut=null,r.splice(0,n)}},removeFromCannotDrawList:{value:function(e){delete this._cannotDrawList[e];if(Object.keys(this._cannotDrawList).length===0&&this._needsDrawList.length>0&&!this._clearNeedsDrawTimeOut){var t=this;this._clearNeedsDrawTimeOut=window.setTimeout(function(){t._clearNeedsDrawList()},0)}}},_cancelDrawIfScheduled:{value:function(){var e=this.requestedAnimationFrame,t=this.cancelAnimationFrame;e!==null&&(this._frameTime||(logger.isDebug&&logger.debug(this,"clearing draw"),t?t.call(window,e):window.clearTimeout(e),this.requestedAnimationFrame=null))}},_addToDrawList:{value:function(e){this.__addToDrawList(e),drawLogger.isDebug&&drawLogger.debug(this,this.canDrawGate.value,this.requestedAnimationFrame),this.drawTree()},enumerable:!1},addToComposerList:{value:function(e){this.composerList.push(e),drawLogger.isDebug&&drawLogger.debug(this,e,"Added to composer list"),this._scheduleComposerRequest=!0,this.drawTree()}},composerListSwap:{value:[],distinct:!0},_scheduleComposerRequest:{value:!1},requestedAnimationFrame:{value:null,enumerable:!1},requestAnimationFrame:{value:window.webkitRequestAnimationFrame?window.webkitRequestAnimationFrame:window.mozRequestAnimationFrame,enumerable:!1},cancelAnimationFrame:{value:window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame:window.mozCancelRequestAnimationFrame,enumerable:!1},_frameTime:{value:null},_oldSource:{value:null},_diff:{value:function(e,t){var n={},r={};for(var i=0;i<t.length;i++)n[t[i]]==null&&(n[t[i]]={rows:[],o:null}),n[t[i]].rows.push(i);for(i=0;i<e.length;i++)r[e[i]]==null&&(r[e[i]]={rows:[],n:null}),r[e[i]].rows.push(i);for(i in n)n[i].rows.length==1&&typeof r[i]!="undefined"&&r[i].rows.length==1&&(t[n[i].rows[0]]={text:t[n[i].rows[0]],row:r[i].rows[0]},e[r[i].rows[0]]={text:e[r[i].rows[0]],row:n[i].rows[0]});for(i=0;i<t.length-1;i++)t[i].text!=null&&t[i+1].text==null&&t[i].row+1<e.length&&e[t[i].row+1].text==null&&t[i+1]==e[t[i].row+1]&&(t[i+1]={text:t[i+1],row:t[i].row+1},e[t[i].row+1]={text:e[t[i].row+1],row:i+1});for(i=t.length-1;i>0;i--)t[i].text!=null&&t[i-1].text==null&&t[i].row>0&&e[t[i].row-1].text==null&&t[i-1]==e[t[i].row-1]&&(t[i-1]={text:t[i-1],row:t[i].row-1},e[t[i].row-1]={text:e[t[i].row-1],row:i-1});return{o:e,n:t}}},_previousDrawDate:{enumerable:!1,value:0},drawTree:{value:function(){if(this.requestedAnimationFrame===null){drawLogger.isDebug&&drawLogger.debug(this,"requesting a draw");var t=this,n=this.requestAnimationFrame,r=function(e){t._frameTime=e?e:Date.now(),t._clearNeedsDrawTimeOut&&t._clearNeedsDrawList();if(drawLogger.isDebug){var n=document.documentElement.innerHTML;if(t._oldSource&&n!==t._oldSource){var r=["DOM modified outside of the draw loop"],i=t._diff(t._oldSource.split("\n"),n.split("\n"));for(var s=0;s<i.n.length;s++)if(i.n[s].text==null)r.push("+ "+i.n[s]);else for(var o=i.n[s].row+1;o<i.o.length&&i.o[o].text==null;o++)r.push("- "+i.o[o]);console.warn(r.join("\n"))}console.group((e?drawLogger.toTimeString(new Date(e))+" ":"")+"Draw Fired")}t.drawIfNeeded(),drawLogger.isDebug&&(console.groupEnd(),t._oldSource=document.documentElement.innerHTML),t._frameTime=null,t._scheduleComposerRequest&&t.drawTree()};if(n)this.requestedAnimationFrame=n.call(window,r);else{var i=Date.now(),s=17-i+this._previousDrawDate;s<0&&(s=0),this.requestedAnimationFrame=setTimeout(r,s),this._previousDrawDate=i+s}this._scheduleComposerRequest=!1}},enumerable:!1},_readyToDrawList:{enumerable:!1,value:[]},_readyToDrawListIndex:{enumerable:!1,value:null},addToDrawCycle:{value:function(e){var t=this._readyToDrawListIndex,n,r;if(t.hasOwnProperty(e.uuid)){drawLogger.isDebug&&drawLogger.debug("components should not be added to the draw cycle twice");return}this._readyToDrawList.push(e),this._readyToDrawListIndex[e.uuid]=!0,e._updateComponentDom()}},drawIfNeeded:{value:function(){var t=this._readyToDrawList,n,r,i,s=0,o,u=this.composerList,a,f;t.length=0,f=u.length,this._readyToDrawListIndex={};if(f>0){this.composerList=this.composerListSwap;for(r=0;r<f;r++)a=u[r],a.needsFrame=!1,a.frame(this._frameTime);u.splice(0,f),this.composerListSwap=u}this._drawIfNeeded(0),i=t.length;while(s<i){for(r=s;r<i;r++)n=t[r],typeof n.willDraw=="function"&&n.willDraw(this._frameTime),drawLogger.isDebug&&drawLogger.debug(n._montage_metadata.objectName," willDraw treeLevel ",n._treeLevel);this._drawIfNeeded(0),s=i,i=t.length}var l=function(e,t){return e._treeLevel-t._treeLevel};t.sort(l);for(r=0;r<i;r++)n=t[r],n.needsDraw=!1;this.requestedAnimationFrame=null;for(r=i-1;r>=0;r--)n=t[r],n._draw(this._frameTime),n.draw(this._frameTime),drawLogger.isDebug&&drawLogger.debug(n._montage_metadata.objectName," draw treeLevel ",n._treeLevel);for(r=0;r<i;r++)n=t[r],n.didDraw(this._frameTime),n._completedFirstDraw||(o=document.createEvent("CustomEvent"),o.initCustomEvent("firstDraw",!0,!1,null),n.dispatchEvent(o),n._completedFirstDraw=!0),drawLogger.isDebug&&drawLogger.debug(n._montage_metadata.objectName," didDraw treeLevel ",n._treeLevel);return!!t.length}},element:{get:function(){return this._element},set:function(e){defaultEventManager.registerEventHandlerForElement(this,e),this._element=e}}});rootComponent.init(),exports.__root__=rootComponent