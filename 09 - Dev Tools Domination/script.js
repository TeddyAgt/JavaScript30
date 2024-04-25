const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

const p = document.querySelector("p");
function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello world");

// Interpolated
console.log("hello I am a %s !", "🐈");

// Styled
console.log("%c I am some great text", "color:red;");

// warning!
console.warn("OH NOOOOO ! 😰");

// Error :|
console.error("Ow shit !");

// Info
console.info("FYI I'm a 🍌");

// Testing
const user = "Teddy";
console.assert(user === "banana", "That is wrong, %s is NOT a banana.", user);

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`); // or groupCollapsed if large number of item
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(
    `${dog.name} is ${dog.age * 7} in the dog-to-human convertion years old`
  );
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Teddy");
console.count("Teddy");
console.count("Cosmo");
console.count("Teddy");
console.count("Cosmo");
console.count("Cosmo");
console.count("Cosmo");

// timing
console.time("fetching data");
// operation that makes time
fetch("https://api.github.com/users/wesbros")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
// console.timeEnd("fetching data");
// table
console.table(dogs);
