const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("current-time");
const durationTimeDisplay = document.getElementById("duration-time");
window.onload = () => {
	
	audioPlayer.play();
};
playPauseBtn.addEventListener("click", () => {
	
	if (audioPlayer.paused) {
		audioPlayer.play();
		playPauseBtn.innerHTML = "&#10074;&#10074;";
		
	} else {
	
		audioPlayer.pause();
		playPauseBtn.innerHTML = "&#9654;";

	}
});
audioPlayer.addEventListener("loadedmetadata", () => {
	durationTimeDisplay.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("timeupdate", () => {
	const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
	progressBar.value = progress;
	progressBar.style.setProperty("--progress-percentage", `${progress}%`);
	currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});
progressBar.addEventListener("input", () => {
	const seekTime = (progressBar.value / 100) * audioPlayer.duration;
	audioPlayer.currentTime = seekTime;
});
function formatTime(time) {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


const nextBtn = document.getElementById("next-btn")

