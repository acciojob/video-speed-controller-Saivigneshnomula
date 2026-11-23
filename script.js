
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const playButton = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const volume = player.querySelector('input[name="volume"]');
const playbackSpeed = player.querySelector('input[name="playbackSpeed"]');
const skipButtons = player.querySelectorAll("[data-skip]");

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

    progressBar.style.flexBasis = percent + "%";
}

// Volume Control
function changeVolume() {
    video.volume = volume.value;
}

// Playback Speed
function changeSpeed() {
    video.playbackRate = playbackSpeed.value;
}

// Skip Video
function skipVideo() {
    video.currentTime += Number(this.dataset.skip);
}

// Seek Video
function scrubVideo(event) {
    const scrubTime =
        (event.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
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

// Initial update
updateButton();
updateProgress();
