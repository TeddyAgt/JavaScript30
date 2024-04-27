const pressed = [];
const secretCode = "teddy";
// const konamiSequence = [
//   "ArrowUp",
//   "ArrowUp",
//   "ArrowDown",
//   "ArrowDown",
//   "ArrowLeft",
//   "ArrowRight",
//   "ArrowLeft",
//   "ArrowRight",
//   "b",
//   "a",
// ];

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  //   pressed.slice(
  //     -konamiSequence.length - 1,
  //     pressed.length - konamiSequence.length
  //   );
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("") === secretCode) {
    console.log("Would you mary me ?");
    cornify_add();
  }
  //   if (pressed.join("") === konamiSequence.join("")) console.log("coucou");
});
