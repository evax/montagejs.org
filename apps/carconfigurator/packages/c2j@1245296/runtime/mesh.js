require("runtime/dependencies/gl-matrix");var Base=require("runtime/base").Base,Utilities=require("runtime/utilities").Utilities;exports.Mesh=Object.create(Base,{PRIMITIVES:{value:"primitives"},_verticesBuffer:{value:null,writable:!0},verticesBuffer:{enumerable:!0,get:function(){return this._verticesBuffer},set:function(e){this._verticesBuffer=e}},_hidden:{value:null,writable:!0},hidden:{get:function(){return this._hidden},set:function(e){this._hidden=e}},_primitives:{value:null,writable:!0},primitives:{enumerable:!0,get:function(){return this._primitives||(this._primitives=[]),this._primitives},set:function(e){this._primitives=e}},_id:{value:null,writable:!0},id:{enumerable:!0,get:function(){return this._id},set:function(e){this._id=e}},_name:{value:null,writable:!0},name:{enumerable:!0,get:function(){return this._name},set:function(e){this._name=e}},_computeBBOXIfNeeded:{enumerable:!1,value:function(){if(!this._boundingBox&&this.primitives){var e=this.primitives.length;if(e>0){var t=this.primitives[0].boundingBox;if(t){var n;for(n=1;n<e;n++)this.primitives[n].boundingBox&&(t=Utilities.mergeBBox(t,this.primitives[n].boundingBox));this._boundingBox=t}}}}},_boundingBox:{value:null,writable:!0},boundingBox:{enumerable:!0,get:function(){return this._computeBBOXIfNeeded(),this._boundingBox},set:function(e){this._boundingBox=e}},init:{value:function(){return this.__Base_init(),this}}})