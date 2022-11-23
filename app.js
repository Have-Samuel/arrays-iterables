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

const hobbies = ['Cooking', 'Popping'];
hobbies.unshift('Knitting');
hobbies.push('Dancing');
hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[0] = 'Mopping';
console.log(hobbies);

hobbies.splice(0);
console.log(hobbies);