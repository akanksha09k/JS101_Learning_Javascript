function customSlice(array, start, end) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }

  start = start || 0;

  end = end === undefined ? array.length : end;

  if (start < 0) {
    start = Math.max(0, array.length + start);
  }

  if (end < 0) {
    end = Math.max(0, array.length + end);
  }

  const result = [];
  for (let i = start; i < end && i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const slicedArray = customSlice(myArray, 1, 4);

// Output using console.log
console.log('Original array:', myArray);
console.log('Sliced array:', slicedArray);
