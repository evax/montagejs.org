montageDefine("2ba644c","ui/input-date.reel/input-date",{dependencies:["montage","ui/component","ui/native/input-date.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/input-date.reel").InputDate;t.InputDate=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-InputDate"),this.element.classList.add("montage-InputText")}}})}})