montageDefine("57c4172","dom",{dependencies:["collections/listen/property-changes"],factory:function(e){function t(e){r.dispatchOwnPropertyChange(e.target,"checked",e.target.checked)}function n(e){r.dispatchOwnPropertyChange(e.target,"value",e.target.value)}function a(e){"checked"===e?this.addEventListener("change",t):"value"===e&&(this.addEventListener("change",n),("text"===this.type||"TEXTAREA"===this.nodeName)&&this.addEventListener("keyup",n))}function s(e){"checked"===e?this.removeEventListener("change",t):"value"===e&&(this.removeEventListener("change",n),("text"===this.type||"TEXTAREA"===this.nodeName)&&this.removeEventListener("keyup",n))}var r=e("collections/listen/property-changes"),i=Object.getPrototypeOf(document.createElement("input"));i.makePropertyObservable=a,i.makePropertyUnobservable=s;var o=Object.getPrototypeOf(document.createElement("textarea"));o.makePropertyObservable=a,o.makePropertyUnobservable=s}});