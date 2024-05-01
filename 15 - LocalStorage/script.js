const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", addInput);
itemsList.addEventListener("click", toggleDone);

function addInput(e) {
  e.preventDefault();
  const name = this.querySelector("[name=item").value;
  const item = {
    name, // using ES6 property
    isDone: false,
  };
  items.push(item);

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
}

function populateList(plates = [], platesList) {
  // plates = [] => sécurité, au cas où on oublie de passer un tableau, on ne casse pas le script
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
        <li>
            <input type="checkbox" data-item="${index}" id="item-${index}" ${
        plate.done ? "checked" : ""
      }>
            <label for="item-${index}">${plate.name}</label>
        </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.item;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
}

populateList(items, itemsList);
