montageDefine("2ba644c","core/converter/new-line-to-br-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/converter/converter").Converter,s=function(e){return e.replace(/(\r\n|\r|\n)/g,"<br />")};t.NewLineToBrConverter=r.create(i,{_convert:{value:function(e){return e&&typeof e=="string"?s(e):e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}})