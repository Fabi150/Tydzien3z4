// JavaScript Document
(function(){

	function VideoPlayer (attribiutes){
		
		var video = document.createElement("video");
		this.playPauseButton;
		this.videoRangeSlider;
		this.videoTimeViewer;
		
		this.playPause();
		this.getPosition();
		this.setPosition();
		this.getVideoTime();
		this.rolle();
		
	};
	
	
	$(document).ready(function(){
	
		var playerInstance = new VideoPlayer({
			sourceOgg: "https://www.w3schools.com/html/mov_bbb.ogg",
			sourceMp4: "https://www.w3schools.com/html/mov_bbb.mp4",
			width: "860px"
		});
		
	});
//	document.getElementById("video1") = playerInstance;
	
})();