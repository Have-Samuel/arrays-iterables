// const ids = new Set(['Hi', 'from', 'Sets']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }
// console.log(ids);

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: 'Have' };
// const person2 = { name: 'Justine' };

// const personalData = new Map([[person1, [{ date: 'yesterday', price: 100 }]]]);
// personalData.set(person2, [{ date: 'two weeks ago', price: 500 }]);

// console.log(personalData);
// console.log(personalData.get(person1));

// // Three ways oays of output
// for (const entry of personalData.entries()) { // => 1
//   console.log(entry);
// }

// for (const [key, value] of personalData.entries()) { // => 2
//   console.log(key, value);
// }

// for (const key of personalData.keys()) { // => 3
//   console.log(key);
// }

// for (const value of personalData.values()) { // => 2
//   console.log(value);
// }

// // Shows how many items we have i the map
// console.log(personalData.size);

let person = { name: 'Have' };

const persons = new WeakSet();
persons.add(person);

// ...some operations
// person = null;
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra Info');

person = null;

console.log(personData);