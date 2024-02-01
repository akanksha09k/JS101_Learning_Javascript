//Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.
let Input = [2, 3, 4, 6, 7]
let outputArray = Input.map(element => Math.pow(element, 5));

console.log("Input Array:", Input);
console.log("Output Array (each element raised to the power of 5):", outputArray);