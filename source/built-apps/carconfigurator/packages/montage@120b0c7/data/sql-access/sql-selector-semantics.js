var Montage=require("montage").Montage,Semantics=require("core/selector/semantics").Semantics,SqlBinderMapping=require("data/sql-access/sql-mapping").SqlBinderMapping,SqlBlueprintMapping=require("data/sql-access/sql-mapping").SqlBlueprintMapping,SqlAttributeMapping=require("data/sql-access/sql-mapping").SqlAttributeMapping,SqlAssociationMapping=require("data/sql-access/sql-mapping").SqlAssociationMapping,logger=require("core/logger").logger("sql-selector-semantics"),SqlSemantics=exports.SqlSemantics=Semantics.create(Semantics,{_store:{value:null,serializable:!0},store:{get:function(){return this._store}},_transactionID:{value:null,serializable:!0},transactionID:{get:function(){return this._transactionID}},initWithStore:{value:function(e,t){return this._store=e,this._transactionID=t,this}}})