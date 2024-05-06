window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const words = document.querySelector(".words");
let p = document.createElement("p");

words.appendChild(p);

recognition.interimResults.true;

recognition.addEventListener("result", (e) => {
  console.log(e);
});

recognition.start();
