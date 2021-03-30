var video = document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool")
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	var slider = this.value
	video.volume = slider /100;
	document.querySelector('#volume').innerHTML=video.volume*100+"%"
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted");
	video.volume = 0;
	document.querySelector('#mute').innerHTML="Unmute"
	
});

document.querySelector("#skip").addEventListener("click", function() {
	// console.log("Muted");
	// video.volume = 0;
	// document.querySelector('#mute').innerHTML="Unmute"
});