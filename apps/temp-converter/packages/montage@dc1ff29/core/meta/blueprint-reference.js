"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,BlueprintModule=require("core/meta/blueprint"),BinderModule=require("core/meta/binder"),RemoteReference=require("core/meta/remote-reference").RemoteReference,BinderReference=require("core/meta/binder-reference").BinderReference,logger=require("core/logger").logger("blueprint");exports.BlueprintReference=RemoteReference.specialize({constructor:{value:function(){this.super()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",(this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e){e.blueprintName;var t=e.blueprintModule;e.prototypeName,e.moduleId;var n=e.binderReference,r=Promise.resolve(BinderModule.Binder.manager.defaultBinder);return n&&(r=BinderReference.valueFromReference(n,require)),r.then(function(e){return e?BlueprintModule.Blueprint.getBlueprintWithModuleId(t.id,t.require).then(function(n){if(n)return e.addBlueprint(n),n;throw Error("Error cannot find Blueprint "+t)}):BlueprintModule.Blueprint.getBlueprintWithModuleId(t,require)})}},referenceFromValue:{value:function(e){var t={};return t.blueprintName=e.name,t.blueprintModule=e.blueprintInstanceModule,e.binder&&!e.binder.isDefault&&(t.binderReference=BinderReference.referenceFromValue(e.binder)),t}}});