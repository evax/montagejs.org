montageDefine("6d7a904","core/serialization/serializer/self-serializer",{dependencies:["montage"],factory:function(e,n){var s=e("montage").Montage,a=s.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function a(){}},initWithMalkerAndVisitorAndObject:{value:function(e,n,s){return this._malker=e,this._visitor=n,this._object=s,this}},getObjectLabel:{value:function(e){return this._visitor.labeler.getObjectLabel(e)}},addObject:{value:function(e){return"object"==typeof e?(this._malker.visit(e),e):void 0}},addObjectReference:{value:function(e){var n=this._visitor.builder,s=this._visitor.labeler,a=s.getObjectLabel(e);return{thisIsAReferenceCreatedByMontageSerializer:!0,reference:n.createObjectReference(a)}}},setProperty:{value:function(e,n,s){var a,t=this._visitor.builder;a=t.top.getProperty("properties"),t.push(a),this._visitor.setProperty(this._malker,e,n,s),t.pop()}},setAllProperties:{value:function(){var e,n=this._visitor.builder;e=n.top.getProperty("properties"),n.push(e),this._visitor.setSerializableObjectProperties(this._malker,this._object),n.pop()}},setUnit:{value:function(e){this._visitor.setObjectCustomUnit(this._malker,this._object,e)}},setAllUnits:{value:function(){this._visitor.setObjectCustomUnits(this._malker,this._object)}}});n.SelfSerializer=a}});