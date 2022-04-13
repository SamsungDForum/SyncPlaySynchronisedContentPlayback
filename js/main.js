/* ! Copyright (c) 2021, Samsung Electronics Co., Ltd


* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
 

* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
 

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */
var path = "";

var playlist = ["red.mp4", "yellow.mp4"];
var playduration = [5, 5];

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log('init() called');
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		webapisSyncPlay.makeSyncPlayList();
    		break;
    	case 38: //UP arrow
    		webapisSyncPlay.startSyncPlay();
    		break;
    	case 39: //RIGHT arrow
    		webapisSyncPlay.stopSyncPlay();
    		break;
    	case 40: //DOWN arrow
    		webapisSyncPlay.clearSyncPlayList();
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
    
    
    var PackageId = tizen.application.getCurrentApplication().appInfo.packageId;
    var sharedDir = tizen.application.getAppSharedURI(PackageId);
    path = sharedDir + "../res/wgt/images/";

    
};
// window.onload can work without <body onload="">
window.onload = init;


var webapisSyncPlay = {
		makeSyncPlayList: function() {
			console.log("[makeSyncPlayList] call syncFunction ");
			
			var onSuccess = function (){		
				console.log("[makeSyncPlayList] call success");
			}
			var onError = function (e){
				
				console.log("[makeSyncPlayList] call asyncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
			}
			
			var syncPlayContents = [];
			for (var i=0 ; i<playduration.length ; i++ )
			{
				syncPlayContents[i] = {
						path : path + playlist[i],
						duration : playduration[i]
				}
			}
			console.log(syncPlayContents);
			try {
				webapis.syncplay.createPlaylist(syncPlayContents,onSuccess,onError);
			} catch (e) {		
				console.log("[start] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
			}
		},
		clearSyncPlayList: function() {
			console.log("[clearSyncPlayList] call syncFunction ");
			
			var onSuccess = function (){
				
				console.log("[clearSyncPlayList] call success");
			}
			var onError = function (e){
				
				console.log("[clearSyncPlayList] call asyncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
			}
			try {
				webapis.syncplay.removePlaylist(onSuccess, onError);
			}catch (e) {
			   console.log("[removePlaylist] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
			}
		},
		startSyncPlay: function() {
			
			var start = null;
			var syncinfo = {
			   "rectX"     : 0,
			   "rectY"	   : 0,
			   "rectWidth" : 1920,
			   "rectHeight": 1080,
			   "groupID"   : 5,
			   "rotate"    : "OFF"
			};
			var onlistener = function(data) {
			    console.log("[start]data:" + data + "changed");
			};
			
			try {			
			    start = webapis.syncplay.start(syncinfo,onlistener);
			} catch (e) {		
			    console.log("[start] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
			}
		},
		stopSyncPlay: function() {
			var stopSyncPlay = null;
			var onChange = function(data)
			{
				console.log("[stopSyncPlay]data: " + data);
			
			}
			try {				
				stopSyncPlay = webapis.syncplay.stop(onChange);
			} catch (e) {		
				console.log("[stopSyncPlay] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
			}
		}
};