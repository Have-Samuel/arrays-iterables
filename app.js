// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Reading'];
// const personalData = [30, 'Have', { moreDetail: [] }];

// const analyticsData = [[1, 3, 5], [8, 9, 30]];

// for (const data of analyticsData) {
//   for (dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[2]);

// const hobbies = ['Cooking', 'Popping'];
// hobbies.unshift('Knitting');
// hobbies.push('Dancing');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[0] = 'Mopping';
// console.log(hobbies);

// hobbies.splice(0);
// console.log(hobbies);

const testResult = [1, 5.7, 0.998, 9.1, 7.5, 70, 3.9];
// const storedResult = testResult.slice(-3);
const storedResult = testResult.concat([2.55, 6.898, 5.87]);

testResult.push(99.5);

console.log(storedResult, testResult);

console.log(testResult.lastIndexOf(7.5));

const personalData = [{ name: 'Justine' }, { name: 'Have' }];
console.log(personalData.indexOf({ name: 'Have' }));

const have = personalData.find((person, idx, persons) => {
  return person.name === 'Have';
});

have.name = 'Shannel';

console.log(have, personalData);

const justineIndex = personalData.findIndex((person, idx, persons) => {
  return person.name === 'Justine';
});

console.log(justineIndex);