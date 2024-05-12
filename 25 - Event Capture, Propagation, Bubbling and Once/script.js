const divs = document.querySelectorAll("div");

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: true })
);

function logText(e) {
  console.log(this, this.classList.value);
  // e.stopPropagation();
}
