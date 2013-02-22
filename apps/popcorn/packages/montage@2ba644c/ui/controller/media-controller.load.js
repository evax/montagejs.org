montageDefine("2ba644c","ui/controller/media-controller",{dependencies:["montage","ui/component","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("core/logger").logger("mediacontroller"),o=t.MediaController=r.create(r,{STOPPED:{enumerable:!0,value:0,writable:!1},PLAYING:{enumerable:!0,value:1,writable:!1},PAUSED:{enumerable:!0,value:2,writable:!1},EMPTY:{enumerable:!0,value:3,writable:!1},_TIMEUPDATE_FREQUENCY:{value:.25},_mediaElement:{value:null,enumerable:!1},mediaElement:{get:function(){return this._mediaElement},set:function(e){this._mediaElement=e},enumerable:!1},_mediaSrc:{value:null,enumerable:!1},mediaSrc:{get:function(){return this._mediaSrc},set:function(e){this._mediaSrc=e}},_status:{enumerable:!1,value:3},status:{enumerable:!1,get:function(){return this._status},set:function(e){e!==this._status&&(this._status=e,this._dispatchStateChangeEvent())}},_position:{value:null,enumerable:!1},position:{set:function(e,t){this._position=e,t||(this.currentTime=e)},get:function(){return this._position}},_duration:{value:null,enumerable:!1},duration:{set:function(e){if(isNaN(e)){s.isDebug&&s.debug("MediaController:setDuration: duration is not valid");return}s.isDebug&&s.debug("MediaController:setDuration: duration="+e),this._duration=e},get:function(){return this._duration}},autoplay:{enumerable:!1,value:!0},play:{value:function(){s.isDebug&&s.debug("MediaController:play()"),this.mediaElement.play()}},pause:{value:function(){s.isDebug&&s.debug("MediaController:pause()"),this.mediaElement.pause()}},playPause:{value:function(){s.isDebug&&s.debug("MediaController:playPause");var e=this.status===this.PLAYING;return this.playbackRate=this.mediaElement.defaultPlaybackRate,e?this.pause():this.play(),!e}},_playbackRate:{value:1,enumerable:!1},playbackRate:{get:function(){return this._playbackRate},set:function(e){this._playbackRate!==e&&(this._playbackRate=e,this.mediaElement.playbackRate=this._playbackRate)}},_currentTime:{value:0,enumerable:!1},_updateCurrentTime:{value:!1,enumerable:!1},currentTime:{get:function(){return this.mediaElement.currentTime},set:function(e){try{if(isNaN(this.mediaElement.duration)){s.error("MediaController:set currentTime: duration is not valid");return}s.isDebug&&s.debug("current time:"+this.mediaElement.currentTime+" new time is"+e),this.mediaElement.currentTime=e}catch(t){s.error("MediaController:Exception in set currentTime"+this.mediaElement.currentTime)}}},rewind:{value:function(){this.status===this.PLAYING&&(s.isDebug&&s.debug("MediaController:rewind"),this.playbackRate=-4)}},fastForward:{value:function(){this.status===this.PLAYING&&(s.isDebug&&s.debug("MediaController:fastForward"),this.playbackRate=4)}},stop:{value:function(){s.isDebug&&s.debug("MediaController:stop"),this.status===this.PLAYING&&(s.isDebug&&s.debug("MediaController:stop while PLAYING: will pause"),this.pause()),this.status=this.STOPPED}},reset:{value:function(){s.isDebug&&s.debug("MediaController:reset"),this.status!==this.STOPPED&&this.stop(),this.mediaElement.removeAttribute("src")}},loadMedia:{value:function(){s.isDebug&&s.debug("MediaController:loadMedia"),this.mediaElement.src=this.mediaSrc,this.mediaElement.load()}},toggleRepeat:{value:function(){this.repeat=!this.repeat}},_repeat:{value:!1,enumerable:!1},repeat:{get:function(){return this._repeat},set:function(e){e!==this._repeat&&(this._repeat=e,e?this.mediaElement.setAttribute("loop","true"):this.mediaElement.removeAttribute("loop"),this._dispatchStateChangeEvent())}},volume:{get:function(){return this.mediaElement.volume*100},set:function(e){var t=e;typeof t=="undefined"?t=50:t>100?t=100:t<0&&(t=0),this.mediaElement.volume=t/100,this._dispatchStateChangeEvent()}},volumeIncrease:{value:function(){this.volume+=10}},volumeDecrease:{value:function(){this.volume-=10}},toggleMute:{value:function(){this.mute=!this.mute}},mute:{get:function(){return this.mediaElement.muted},set:function(e){e!==this.mediaElement.muted&&(this.mediaElement.muted=e)}},handleLoadedmetadata:{value:function(){s.isDebug&&s.debug("MediaController:handleLoadedmetadata: PLAYING="+(this.status===this.PLAYING)+" duration="+this.mediaElement.duration);if(isNaN(this.mediaElement.duration)){s.isDebug&&s.debug("MediaController:handleLoadedmetadata: duration is not valid");return}this.duration=this.mediaElement.duration,this.autoplay?this.play():this.status=this.PAUSED}},_lastCurrentTime:{value:0},handleTimeupdate:{value:function(){if(this.status!==this.STOPPED){var e=this.mediaElement.currentTime;Math.abs(this._lastCurrentTime-e)>=this._TIMEUPDATE_FREQUENCY&&(this._lastCurrentTime=e,Object.getPropertyDescriptor(this,"position").set.call(this,e,!0))}}},handlePlay:{value:function(){s.isDebug&&s.debug("MediaController:Play"),this.status=this.PLAYING}},handlePlaying:{value:function(){s.isDebug&&s.debug("MediaController:handlePlaying: PLAYING"),this.status=this.PLAYING}},handlePause:{value:function(){this.status!==this.STOPPED?(s.isDebug&&s.debug("MediaController:handlePause: PAUSED"),this.status=this.PAUSED):s.isDebug&&s.debug("MediaController:handlePause: STOPPED")}},handleEnded:{value:function(){s.isDebug&&s.debug("MediaController:handleEnded"),this.status=this.STOPPED,this.mediaElement.pause()}},handleAbort:{value:function(){s.isDebug&&s.debug("MediaController:handleAbort: STOPPED"),this.status=this.STOPPED}},handleError:{value:function(e){s.isDebug&&s.debug("MediaController:handleError: STOPPED");var t=e.target.error;this.status=this.STOPPED;if(t)switch(t.code){case t.MEDIA_ERR_ABORTED:console.error("You aborted the video playback.");break;case t.MEDIA_ERR_NETWORK:console.error("A network error caused the video download to fail part-way.");break;case t.MEDIA_ERR_DECODE:console.error("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");break;case t.MEDIA_ERR_SRC_NOT_SUPPORTED:this.mediaElement.src.length>0?console.error("The video at "+this.mediaElement.src+" could not be loaded, either because the server or network failed or because the format is not supported."):console.error("No video has been selected.");break;default:console.error("An unknown error occurred.")}this._isFullScreen=!1}},handleEmptied:{value:function(){s.isDebug&&s.debug("MediaController:handleEmptied: STOPPED"),this.status=this.STOPPED}},_dispatchStateChangeEvent:{value:function(){var e=window.document.createEvent("CustomEvent");e.initCustomEvent("mediaStateChange",!0,!0,null),this.dispatchEvent(e)}},_installControlEventHandlers:{value:function(){this.mediaElement.addEventListener("loadedmetadata",this,!1),this.mediaElement.addEventListener("timeupdate",this,!1),this.mediaElement.addEventListener("play",this,!1),this.mediaElement.addEventListener("playing",this,!1),this.mediaElement.addEventListener("pause",this,!1),this.mediaElement.addEventListener("abort",this,!1),this.mediaElement.addEventListener("error",this,!1),this.mediaElement.addEventListener("emptied",this,!1),this.mediaElement.addEventListener("ended",this,!1)},enumerable:!1}})}})