const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
let isMouseDown = false;

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
progress.addEventListener("click", updateProgress);
progress.addEventListener("mousedown", () => (isMouseDown = true));
progress.addEventListener("mouseup", () => (isMouseDown = false));
progress.addEventListener("mousemove", (e) => {
  if (isMouseDown) updateProgress(e);
  //en une ligne on peut aussi faire:
  // e => isMouseDown && updateProgress(e)
});

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  //   Une autre façon de remplacer le if statement d'au dessus, juste pour flex:
  //   const method = video.paused ? "play" : "pause";
  //   video[method]();
}

function updateButton() {
  const icon = this.paused ? "▶️" : "⏸️";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateProgress(e) {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
}
