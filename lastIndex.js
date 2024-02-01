function customLastIndexOf(array, searchElement, fromIndex) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }

  fromIndex = fromIndex || array.length - 1;

  if (fromIndex < 0) {
    fromIndex = Math.max(0, array.length + fromIndex);
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

const myArray = [1, 2, 3, 4, 2, 5];
const searchElement = 2;
const lastIndex = customLastIndexOf(myArray, searchElement);

console.log('Original array:', myArray);
console.log(`Last index of ${searchElement}:`, lastIndex);
