montageDefine("e3acbc9","ui/features.reel/features",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.Features=r.create(i,{hasTemplate:{value:!0},convert:{value:function(e){return Number(Math.round(e)).toString()}},revert:{value:function(e){return Number(Math.round(e)).toString()}}})}})