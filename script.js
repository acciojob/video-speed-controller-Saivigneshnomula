
const video = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button.toggle");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const volume = document.querySelector('input[name="volume"]');
const playbackSpeed = document.querySelector('input[name="playbackSpeed"]');

const skipButtons = document.querySelectorAll("[data-skip]");

// Play and Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update Button Icon
function updateButton() {
    playButton.textContent = video.paused ? "►" : "❚ ❚";
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;

    progressBar.style.setProperty("flex-basis", `${percent}%`);
}
// Volume Control
function changeVolume() {
    video.volume = Number(volume.value);
}

// Playback Speed
function changeSpeed() {
    video.playbackRate = Number(playbackSpeed.value);
}

// Skip Forward and Rewind
function skipVideo() {
    video.currentTime += Number(this.dataset.skip);
}

// Progress Bar Seek
function scrubVideo(event) {
    const percent = event.offsetX / progress.offsetWidth;

    video.currentTime = percent * video.duration;
}

// Event Listeners
video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("ended", updateButton);

video.addEventListener("timeupdate", updateProgress);

volume.addEventListener("input", changeVolume);
playbackSpeed.addEventListener("input", changeSpeed);

skipButtons.forEach(button => {
    button.addEventListener("click", skipVideo);
});

progress.addEventListener("click", scrubVideo);

// Initial State
updateButton();
