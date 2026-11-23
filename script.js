const video = document.querySelector(".player__video");

const playButton = document.querySelector(".player__button");

const progress = document.querySelector(".progress");

const progressBar = document.querySelector(".progress__filled");

const volume = document.querySelector('input[name="volume"]');

const playbackSpeed = document.querySelector('input[name="playbackSpeed"]');

const skipButtons = document.querySelectorAll("[data-skip]");


// 1. Play and Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


// Change button symbol
function updateButton() {
    const icon = video.paused ? "►" : "❚ ❚";

    playButton.textContent = icon;
}


// 2. Update progress bar
function updateProgress() {
    const percentage = (video.currentTime / video.duration) * 100;

    progressBar.style.width = `${percentage}%`;
}


// 3. Control volume
function changeVolume() {
    video.volume = volume.value;
}


// 4. Control playback speed
function changeSpeed() {
    video.playbackRate = playbackSpeed.value;
}


// 5. Skip forward or backward
function skipVideo() {
    video.currentTime += Number(this.dataset.skip);
}


// 6. Click progress bar to seek
function scrubVideo(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
}


// Event listeners

video.addEventListener("click", togglePlay);

playButton.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);

video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", updateProgress);

volume.addEventListener("input", changeVolume);

playbackSpeed.addEventListener("input", changeSpeed);

skipButtons.forEach(button => {
    button.addEventListener("click", skipVideo);
});

progress.addEventListener("click", scrubVideo);