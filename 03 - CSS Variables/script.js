const inputs = document.querySelectorAll("input");
inputs.forEach((input) => input.addEventListener("change", handleInput));

function handleInput(e) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
