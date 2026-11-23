const video = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button");
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

// Update Play/Pause Button Text
function updateButton() {
    if (video.paused) {
        playButton.textContent = "►";
    } else {
        playButton.textContent = "❚ ❚";
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    document.querySelector(".progress__filled").style.flexBasis = `${percent}%`;
}

// Change Volume
function changeVolume() {
    video.volume = volume.value;
}

// Change Playback Speed
function changeSpeed() {
    video.playbackRate = playbackSpeed.value;
}

// Skip Video
function skipVideo() {
    video.currentTime += Number(this.dataset.skip);
}

// Click Progress Bar to Seek
function scrubVideo(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
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

// Initial Button State
updateButton();