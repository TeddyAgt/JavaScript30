window.addEventListener("keydown", handleKeyDown);
const keys = document.querySelectorAll(".key");

function handleKeyDown(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;

  audio.currentTime = 0; // On rembobine ! Sinon ca ne re-jouera pas le son tant qu'il n'est pas terminé (si on appuies plusieurs fois de suite sur la même touche)
  audio.play();

  key.classList.add("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransision));

function removeTransision(e) {
  this.classList.remove("playing");
}
