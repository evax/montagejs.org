montageDefine("b8d1a32","core/localizer",{dependencies:["montage","core/messageformat","core/logger","core/serialization","core/promise","core/bindings","collections/listen/property-changes","frb/bindings","frb/stringify","frb/expand","frb/scope","core/messageformat-locale"],factory:function(e,n){var s=e("montage").Montage,t=e("core/messageformat"),a=e("core/logger").logger("localizer"),o=e("core/serialization").Serializer,i=e("core/serialization").Deserializer,r=e("core/promise").Promise,l=e("core/bindings").Bindings,p=(e("collections/listen/property-changes"),e("frb/bindings")),c=e("frb/stringify"),d=e("frb/expand"),h=e("frb/scope");t.locale=e("core/messageformat-locale");var u="key",m="default",g="montage_locale",f="locale",v="messages",b="manifest.json",y=function(){return""},w=/^[a-zA-Z]+(?:-[a-zA-Z0-9]+)*$/,_=n.Localizer=s.specialize({init:{value:function(e){return this.locale=e||j.locale,this}},initWithMessages:{value:function(e,n){return this.locale=e,this.messages=n,this}},messageFormat:{serializable:!1,value:null},_messages:{value:null},messages:{get:function(){return this._messages},set:function(e){if(this._messages!==e){if(null!=e&&"object"!=typeof e)throw new TypeError(e," is not an object");this._messages=e}}},messagesPromise:{serializable:!1,value:null},_locale:{value:null},locale:{get:function(){return this._locale},set:function(e){if(!w.test(e))throw new TypeError("Language tag '"+e+"' is not valid. It must match http://tools.ietf.org/html/rfc5646 (alphanumeric characters separated by hyphens)");this._locale!==e&&(this._locale=e,this.messageFormat=new t(e))}},_availableLocales:{value:null},availableLocales:{get:function(){return this._availableLocales?this._availableLocales:this._availableLocales=this._manifest.get("files").get(f).get("files").then(function(e){return Object.keys(e)})}},_require:{value:"undefined"!=typeof global?global.require:"undefined"!=typeof window?window.require:null},require:{serializable:!1,get:function(){return this._require},set:function(e){this._require!==e&&(this.__manifest=null,this._require=e)}},__manifest:{value:null},_manifest:{depends:["require"],get:function(){var e=this.require;return e.packageDescription.manifest===!0?this.__manifest?this.__manifest:this.__manifest=e.async(b):r.reject(Error("Package has no manifest. "+e.location+'package.json must contain "manifest": true and '+e.location+b+" must exist"))}},loadMessages:{value:function(e,n){if(!this.require)throw Error("Cannot load messages as",this,"require is not set");null===e&&(e=5e3),this.messages=null;var s=this;this.require;var t=this._manifest;return e&&(t=t.timeout(e)),this.messagesPromise=t.get("files").then(function(e){return s._loadMessageFiles(e)}).then(function(e){return s._collapseMessages(e)}).fail(function(e){throw console.error("Could not load messages for '"+s.locale+"': "+e),e}).then(function(e){return"function"==typeof n&&n(e),e})}},_loadMessageFiles:{value:function(e){var n=this.require;if(!e)return r.reject(Error(n.location+b+" does not contain a 'files' property"));var s,t,o,i,l=[];if(!(f in e))return r.reject(Error("Package does not contain a '"+f+"' directory"));for(s=e[f].files,t=this._locale;""!==t;)s.hasOwnProperty(t)&&(o=s[t].files,(i=v+".js")in o||(i=v+".json")in o?l.push(n.async(f+"/"+t+"/"+i)):a.isDebug&&a.debug(this,"Warning: '"+f+"/"+t+"/' does not contain '"+v+".json' or '"+v+".js'")),t=t.substring(0,t.lastIndexOf("-"));if(!l.length)return r.reject(Error("Could not find any "+v+".json or "+v+".js files"));var p=r.all(l);if(a.isDebug){var c=this;p=p.then(function(e){return a.debug(c,"loaded "+e.length+" message files"),e})}return p}},_collapseMessages:{value:function(e){for(var n={},s=0,t=e.length;t>s;s++){var a=e[s];for(var o in a)o in n||(n[o]=a[o])}return this.messages=n,n}},_compiledMessageCache:{value:Object.create(null)},localizeSync:{value:function(e,n){var s,a,o;if(!e&&!n)throw Error("Key or default message must be truthy, not "+e+" and "+n);if(this._messages&&e in this._messages){if(s=this._messages[e],a=typeof s,"function"===a)return s;if("object"===a){if(!("message"in s))throw Error(s,"does not contain a 'message' property");s=s.message}}else s=n;if(s||(console.warn("No message or default message for key '"+e+"'"),s=e),s in this._compiledMessageCache)return this._compiledMessageCache[s];var i=this.messageFormat.parse(s);return i.program&&i.program.statements&&1===i.program.statements.length&&"string"===i.program.statements[0].type?(o=function(){return s},o.toString=o):o=Function("MessageFormat","return "+this.messageFormat.precompile(i))(t),this._compiledMessageCache[s]=o,o}},localize:{value:function(e,n,s,t){var a,o=this;if(s=s===void 0?!0:s,!this.messagesPromise)return a=r.resolve(this.localizeSync(e,n)),a.then(t),a;var i=function(){var s=o.localizeSync(e,n);return"function"==typeof t&&t(s),s};return s?this.messagesPromise.then(i,i):this.messagesPromise.then(i)}}}),x=_.specialize({init:{value:function(){var e=this.callDelegateMethod("getDefaultLocale");return e||"undefined"==typeof window||(window.localStorage&&(e=window.localStorage.getItem(g)),e=e||window.navigator.userLanguage||window.navigator.language),e=e||"en",this.locale=e,this.loadMessages().done(),this}},_delegate:{value:null},delegate:{get:function(){return this._delegate},set:function(e){this._delegate!==e&&(this._delegate=e,this.init())}},locale:{get:function(){return this._locale},set:function(e){try{Object.getPropertyDescriptor(_,"locale").set.call(this,e)}catch(n){e="en",Object.getPropertyDescriptor(_,"locale").set.call(this,e)}"undefined"!=typeof window&&window.localStorage&&window.localStorage.setItem(g,e)}},reset:{value:function(){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.removeItem(g),this.init(),this._locale}}}),j=n.defaultLocalizer=(new x).init();n.localize=j.localize.bind(j);var E=n.Message=s.specialize({constructor:{value:function(){this.defineBinding("_data",{"<-":"_dataObject.toMap()"}),this._data.addMapChangeListener(this,"data")}},init:{value:function(e,n,s){return e&&(this.key=e),n&&(this.defaultMessage=n),s&&(this.data=s),this}},_localizer:{value:j},localizer:{get:function(){return this._localizer},set:function(e){this._localizer!=e&&(this._localizer=e,this._localize())}},_key:{value:null},key:{get:function(){return this._key},set:function(e){this._key!==e&&(this._key=e,this._localize())}},_defaultMessage:{value:null},defaultMessage:{get:function(){return this._defaultMessage},set:function(e){this._defaultMessage!==e&&(this._defaultMessage=e,this._localize())}},_isLocalizeQueued:{value:!1},_localize:{value:function(){if(!this._isLocalizeQueued){this._isLocalizeQueued=!0;var e=this,n=r.defer();this._messageFunction=n.promise,this.localized=this._messageFunction.then(function(n){return n(e._data.toObject())}),r.nextTick(function(){return e._isLocalizeQueued=!1,e._key||e._defaultMessage?(n.resolve(e._localizer.localize(e._key,e._defaultMessage)),void 0):(console.warn("Both key and default message are falsey for",e,"If this is in a repetition this warning can be ignored"),n.resolve(y),void 0)})}}},_messageFunction:{value:r.resolve(y)},_dataObject:{value:null},_data:{value:null},data:{get:function(){return this._data},set:function(e){this._dataObject!==e&&(this._dataObject=e)}},__localizedResolved:{value:""},_localizedDeferred:{value:r.defer()},localized:{get:function(){return this._localizedDeferred.promise},set:function(e){if(e!==this._localized){var n=this,s=r.defer();this._localizedDeferred.resolve(s.promise),e.then(s.resolve,s.reject),s.promise.then(function(e){return n.__localizedResolved=e}).done(),this._localizedDeferred=s}}},handleDataMapChange:{value:function(){this.localized=this._messageFunction.fcall(this._data.toObject())}},serializeSelf:{value:function(){var e={_bindingDescriptors:this._bindingDescriptors};return e.key=this._key,e.defaultMessage=this._defaultMessage,this._localizer!==j&&(e.localizer=this._localizer),e}},serializeForLocalizations:{value:function(e){var n,s,t={};s=p.getBindings(this),s&&s.key?(t[u]={},this._serializeBinding(this,t[u],s.key,e)):t[u]=this._key,s&&s.defaultMessage?(t[m]={},this._serializeBinding(this,t[m],s.defaultMessage,e)):t[m]=this._defaultMessage;var a=p.getBindings(this._data);n=this._data.toObject();for(var o in n)!n.hasOwnProperty(o)||a&&a[".get('"+o+"')"]||(t.data||(t.data={}),t.data[o]=n[o]);for(var i in a){var r=/\.get\('([^']+)'\)/.exec(i)[1];t.data||(t.data={}),t.data[r]={},this._serializeBinding(this._data,t.data[r],a[i],e)}return t}},_serializeBinding:{value:function(e,n,s,t){if(!("serializable"in s)||s.serializable){var a=s.sourceSyntax;if(s.source!==e){var o=t.addObjectReference(s.source),i=new h({type:"component",label:o["@"]});i.components=t,a=d(a,i)}var i=new h;i.components=t;var r=c(a,i);s.twoWay?n["<->"]=r:n["<-"]=r,s.converter?n.converter=s.converter:(n.convert=s.convert,n.revert=s.revert),s.trace&&(n.trace=!0)}}}}),k=function(e,n,s,t,a,o){var i=new E;for(var r in a)"string"==typeof a[r]?i.data.set(r,a[r]):l.defineBinding(i.data,".get('"+r+"')",a[r],{components:o});"object"==typeof s?l.defineBinding(i,"key",s,{components:o}):i.key=s,"object"==typeof t?l.defineBinding(i,"defaultMessage",t,{components:o}):i.defaultMessage=t,l.defineBinding(e,n,{"<-":"__localizedResolved",source:i,serializable:!1})};o.defineSerializationUnit("localizations",function(e,n){var s=p.getBindings(n);if(s){var t;for(var a in s){var o=s[a];if(E.prototype.isPrototypeOf(o.source)){t||(t={});var i=o.source;t[a]=i.serializeForLocalizations(e)}}return t}}),i.defineDeserializationUnit("localizations",function(e,n,s){for(var t in s){var o,i,r=s[t];u in r?(!a.isDebug||m in r||a.debug(this,"Warning: localized property '"+t+"' does not contain a default message property ("+m+"), in ",n),o=r[u],i=r[m],k(n,t,o,i,r.data,e)):console.error("localized property '"+t+"' must contain a key property ("+u+"), in ",s[t])}})}});