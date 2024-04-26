const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheckboxes)
);
// checkboxes.forEach((checkbox) =>
//   checkbox.addEventListener("change", handleCheckboxes)
// );

function handleCheckboxes(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // if the shift key is down when clicking on that checkbox
    // and we're acually CHECKING the checkbox (not UNchecking it)
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this; // in this case, remember that this -> e.target 🧠
}
