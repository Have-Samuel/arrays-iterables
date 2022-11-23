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

// const testResult = [1, 5.7, 0.998, 9.1, 7.5, 70, 3.9];
// // const storedResult = testResult.slice(-3);
// const storedResult = testResult.concat([2.55, 6.898, 5.87]);

// testResult.push(99.5);
// console.log(testResult.includes(0.998));
// console.log(testResult.indexOf(0.998) !== -1);

// console.log(storedResult, testResult);

// console.log(testResult.lastIndexOf(7.5));

// const personalData = [{ name: 'Justine' }, { name: 'Have' }];
// console.log(personalData.indexOf({ name: 'Have' }));

// const have = personalData.find((person, idx, persons) => {
//   return person.name === 'Have';
// });

// have.name = 'Shannel';

// console.log(have, personalData);

// const justineIndex = personalData.findIndex((person, idx, persons) => {
//   return person.name === 'Justine';
// });

// console.log(justineIndex);

// const prices = [1.99, 2.99, 3.99, 4.99];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// // for (const price of prices ) {
// //   taxAdjustedPrice.push(price * (1 + tax));
// // }

// // console.log(taxAdjustedPrice);

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrice.push(priceObj);
// });

// console.log(taxAdjustedPrice);

const prices = [1.99, 11.78, 5.1, 10.09, 2.99, 3.99, 4.99];
const tax = 0.19;

const taxAdjustableValue = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustableValue);

const sortedPrices = prices.sort((x, y) => {
  if (x > y) {
    return -1;
  }else if (x === y) {
    return 0;
  } else {
    return 1;
  }
});

// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredPrices = prices.filter((price) => price > 7);

console.log(filteredPrices);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

const sum = prices.reduce((preValue, currValue) => preValue + currValue, 0);

console.log(sum);
