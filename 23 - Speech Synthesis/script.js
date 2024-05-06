const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();

  const voiceOptions = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`
    )
    .join("");

  voicesDropdown.innerHTML = voiceOptions;
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

voicesDropdown.addEventListener("change", setVoice);

function toggle(startOver = true) {
  speechSynthesis.cancel();

  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
