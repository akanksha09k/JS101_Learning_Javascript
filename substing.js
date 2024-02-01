function customSubstring(inputString, start, end) {
  if (typeof inputString !== 'string') {
    throw new Error('Input is not a string');
  }

  start = start || 0;

  end = end === undefined ? inputString.length : end;

  start = Math.max(0, start);

  end = Math.max(0, end);

  let result = '';
  for (let i = start; i < end && i < inputString.length; i++) {
    result += inputString[i];
  }

  return result;
}

// Example usage
const myString = 'Hello, World!';
const substringResult = customSubstring(myString, 7, 12);

// Output using console.log
console.log('Original string:', myString);
console.log('Substring result:', substringResult);
