montageDefine("2ba644c","ui/textarea.reel/textarea",{dependencies:["montage","ui/component","ui/native/textarea.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/textarea.reel").Textarea;t.Textarea=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-Textarea")}}})}})