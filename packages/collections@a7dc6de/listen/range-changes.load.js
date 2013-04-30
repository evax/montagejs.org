montageDefine("a7dc6de","listen/range-changes",{dependencies:["../weak-map","../dict"],factory:function(e,t,n){"use strict";function o(){throw new Error("Can't construct. RangeChanges is a mixin.")}var r=e("../weak-map"),i=e("../dict"),s=new r;n.exports=o,o.prototype.getAllRangeChangeDescriptors=function(){return s.has(this)||s.set(this,i()),s.get(this)},o.prototype.getRangeChangeDescriptor=function(e){var t=this.getAllRangeChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{isActive:!1,changeListeners:[],willChangeListeners:[]}),t.get(e)},o.prototype.addRangeChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var r=this.getRangeChangeDescriptor(t),i;n?i=r.willChangeListeners:i=r.changeListeners,i.push(e),this.dispatchesRangeChanges=!0;var s=this;return function(){if(!s)return;s.removeRangeChangeListener(e,t,n),s=null}},o.prototype.removeRangeChangeListener=function(e,t,n){var r=this.getRangeChangeDescriptor(t),i;n?i=r.willChangeListeners:i=r.changeListeners;var s=i.lastIndexOf(e);if(s===-1)throw new Error("Can't remove listener: does not exist.");i.splice(s,1)},o.prototype.dispatchRangeChange=function(e,t,n,r){var i=this.getAllRangeChangeDescriptors(),s="Range"+(r?"WillChange":"Change");i.forEach(function(i,o){if(i.isActive)return;i.isActive=!0;var u;r?u=i.willChangeListeners:u=i.changeListeners;var a="handle"+(o.slice(0,1).toUpperCase()+o.slice(1))+s;try{u.forEach(function(i){if(i[a])i[a](e,t,n,this,r);else{if(!i.call)throw new Error("Handler "+i+" has no method "+a+" and is not callable");i.call(this,e,t,n,this,r)}},this)}finally{i.isActive=!1}},this)},o.prototype.addBeforeRangeChangeListener=function(e,t){return this.addRangeChangeListener(e,t,!0)},o.prototype.removeBeforeRangeChangeListener=function(e,t){return this.removeRangeChangeListener(e,t,!0)},o.prototype.dispatchBeforeRangeChange=function(e,t,n){return this.dispatchRangeChange(e,t,n,!0)}}})