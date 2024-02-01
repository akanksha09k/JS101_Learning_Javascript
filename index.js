//Problem 1: Find the average of elements present at odd index of the following array.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let oddIndexElements = arr.filter((element, index) => index % 2 !== 0);
let sum = oddIndexElements.reduce((acc, item) => acc + item, 0);
console.log("Array:", arr);
console.log("Elements at odd indices:", oddIndexElements);
console.log("Average of elements at odd indices:", sum);
