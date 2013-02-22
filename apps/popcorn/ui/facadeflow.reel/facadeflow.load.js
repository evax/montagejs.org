montageDefine("b1dc0f8","ui/facadeflow.reel/facadeflow",{dependencies:["montage","montage/ui/component","montage/ui/controller/array-controller"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component,s=e("montage/ui/controller/array-controller").ArrayController;t.Facadeflow=r.create(i,{didCreate:{value:function(){var e=s.create();e.automaticallyOrganizeObjects=!0,Object.defineBinding(e,"content",{boundObject:this,boundObjectPropertyPath:"category",oneway:!0}),this.buttonController=e,this.application.addEventListener("dataReceived",this,!1)}},selectedMovie:{value:null},_scroll:{value:null},scroll:{set:function(e){this._scroll=e,e%1==0&&this.category?(this.selectedMovie=this.category[e],this.detailsFadeIn=!0,this.detailsFadeOut=!1,this.needsDraw=!0):e%1!=0&&this.category&&(this.detailsFadeOut=!0,this.detailsFadeIn=!1,this.needsDraw=!0)},get:function(){return this._scroll}},_fadeIn:{value:!1},_fadeOut:{value:!1},latestBoxofficeMovies:{value:null},upcomingMovies:{value:null},inTheaters:{value:null},topDvdRentals:{value:null},category:{value:null},buttonController:{value:null},_switchValue:{value:null},switchValue:{set:function(e){this._switchValue=e},get:function(){return this._switchValue}},_categoryId:{value:null},categoryId:{get:function(){return this._categoryId},set:function(e){e&&(this._categoryId=e,this._changeCategory(e))}},pointInCircleAt:{value:function(e){return[Math.cos(e),Math.sin(e)]}},tangentInCircleAt:{value:function(e){return[-Math.sin(e),Math.cos(e)]}},scaleVector:{value:function(e,t){return[e[0]*t,e[1]*t]}},_changeCategory:{value:function(e){var t=this;this.detailsFadeOut=!0,this._fadeOut=!0,this.needsDraw=!0,setTimeout(function(){t.templateObjects&&t.templateObjects.flow&&(t.templateObjects.flow.scroll=0),t.category=t[e],t.selectedMovie=t.category[0],t._fadeIn=!0,t._fadeOut=!1,t.detailsFadeIn=!0,t.detailsFadeOut=!1,t.needsDraw=!0},500)}},handleDataReceived:{value:function(e){this.category=this.latestBoxofficeMovies,this.selectedMovie=this.category[0],this.detailsFadeIn=!0,this._fadeIn=!0,this.needsDraw=!0}},draw:{value:function(e){var t=this.templateObjects.flow,n=this.templateObjects.details;this._fadeIn&&(t.element.classList.remove("flow-fade-out"),this._fadeIn=!1),this._fadeOut&&(t.element.classList.add("flow-fade-out"),this._fadeOut=!1),this.detailsFadeIn&&(n.element.classList.remove("details-fade-out"),this.detailsFadeIn=!1),this.detailsFadeOut&&(n.element.classList.contains("details-fade-out")==0&&n.element.classList.add("details-fade-out"),this.detailsFadeOut=!1)}},prepareForDraw:{value:function(){var e=[],t,n,r,i=480,s=.130976446,o,u=this.templateObjects.flow;for(o=0;o<=8;o++)r=Math.PI-o*Math.PI/8,t=this.scaleVector(this.pointInCircleAt(r),i),n=this.scaleVector(this.tangentInCircleAt(r),i*s),e.push({knotPosition:[t[0],0,-t[1]],previousHandlerPosition:[t[0]+n[0],0,-t[1]-n[1]],nextHandlerPosition:[t[0]-n[0],0,-t[1]+n[1]],previousDensity:1,nextDensity:1,rotateY:r-Math.PI/2});e[4].knotPosition[2]=-200,e[4].nextHandlerPosition[2]=-200,e[4].previousHandlerPosition[2]=-200,u.cameraPosition=[0,0,400];var a=0,f=0;u.paths=[{knots:e,headOffset:4,tailOffset:4,units:{rotateY:"rad"}}]}}})}})