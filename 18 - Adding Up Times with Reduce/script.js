const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    // returning the time in seconds
    return mins * 60 + secs;
  })
  .reduce((acc, curr) => (acc += curr), 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
