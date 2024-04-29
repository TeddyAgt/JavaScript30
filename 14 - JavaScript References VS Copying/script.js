// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

// console.log(players, team);
// You might think we can just do something like this:
team[3] = "Cosmo";

// however what happens when we update that array?
// console.log(players, team);

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
// console.log(players, team2);
team2[3] = "Teddy";
// console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
// console.log(players, team3);
team3[3] = "Rooky";
// console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
// console.log(players, team4);
team4[3] = "Princess";
// console.log(players, team4);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const person2 = person;
// console.log(person, person2);
// person2.age = 99;
// console.log(person, person2);

// how do we take a copy instead?
const person3 = Object.assign({}, person, { age: 99 });
console.log(person, person3);

// We will hopefully soon see the object ...spread
const person4 = { ...person };
console.log(person4);
person4.age = 12;
console.log(person, person4);

// Things to note - this is only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
