$(document).ready(function(){
	var video = $('#video')[0];
	$(document).keydown(function(evt) {
		switch(evt.keyCode) {
			case 32:
				evt.preventDefault();
				if (video.paused) video.play();
				else video.pause();
				break;
			case 38:
				evt.preventDefault();
				setVolume(0.1,'up');
				break;
			case 40:
				evt.preventDefault();
				setVolume(0.1);
				break;
			case 39:
				evt.preventDefault();
				setPosition(10,'forward');
				break;
			case 37:
				evt.preventDefault();
				setPosition(10);
				break;
			case 83:
				evt.preventDefault();
				showHideSubs();
				break;
			case 13:
				evt.preventDefault();
				fullScreen();
				break;
		}
	});
	function setVolume(value,type) {
		var vol = video.volume;
		if(type == 'up') vol += value;
		else vol -= value;
		if (vol >= 0 && vol <= 1) {
			video.volume = vol;
		} else {
			video.volume = (vol < 0) ? 0 : 1;                        
		}
	}
	function setPosition(value,type) {
		var time = video.currentTime;
		var length = video.duration.toFixed(1);
		if(type == 'forward') time += value;
		else time -= value;
		if (time >= 0 && time <= length) {
			video.currentTime = time;
		} else {
			video.currentTime = (time < 0) ? 0 : length;
		}
	}
	function showHideSubs(){
		if(video.textTracks[0].mode == 'showing') video.textTracks[0].mode = 'hidden'; else video.textTracks[0].mode = 'showing';
	}
	function fullScreen() {
		var isFull = (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen) ? true : false;
		if(!isFull) {
			if(video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen();
			} else if (video.webkitRequestFullscreen) {
				video.webkitRequestFullscreen();
			}
		}
		else {
			if(document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}
});
