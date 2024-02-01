function customIncludes(array, searchElement, fromIndex) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }

  fromIndex = fromIndex || 0;

  if (fromIndex < 0) {
    fromIndex = Math.max(0, array.length + fromIndex);
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }

  return false;
}

const myArray = [1, 2, 3, 4, 5];
const searchElement = 3;

// Output using console.log
console.log('Original array:', myArray);
console.log(`Array includes ${searchElement}:`, customIncludes(myArray, searchElement));
