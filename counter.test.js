const {getOutputArray, getSingleOutput} = require('./counter');


describe('It should return values for all numbers from 1 to 100', () => {
  let outputArray;
  
  beforeAll(() => {
    outputArray = Object.freeze(getOutputArray());
  })
  
  test('Output consists of 100 elements', () => {
    expect(outputArray.length).toBe(100);
  })
  
  test('First element is the appropiate value for 1', () => {
    expect(outputArray[0]).toBe(getSingleOutput(1));
  })
  
  test('Last element is the appropiate value for 100', () => {
    expect(outputArray[outputArray.length - 1]).toBe(getSingleOutput(100));
  })
})

describe('Individual values should be correct', () => {
  test('Numbers divisible by 3 and not 5 should return "Foo"', () => {
    const testValuesLength = 5;
    const numbersArray = getDivisibleNumbersArray(testValuesLength, 100, 3, [5]);
    const valuesArray = numbersArray.map(getSingleOutput);
    const expectedArray = Array(testValuesLength).fill('Foo');
    expect(valuesArray).toEqual(expectedArray);
  })
  
  test('Numbers divisible by 5 and not 3 should return "Bar"', () => {
    const testValuesLength = 5;
    const numbersArray = getDivisibleNumbersArray(testValuesLength, 100, 5, [3]);
    const valuesArray = numbersArray.map(getSingleOutput);
    const expectedArray = Array(testValuesLength).fill('Bar');
    expect(valuesArray).toEqual(expectedArray);
  })
  
  test('Numbers divisible by 5 and 3 should return "FooBar"', () => {
    const testValuesLength = 5;
    const numbersArray = getDivisibleNumbersArray(testValuesLength, 100, 15);
    const valuesArray = numbersArray.map(getSingleOutput);
    const expectedArray = Array(testValuesLength).fill('FooBar');
    expect(valuesArray).toEqual(expectedArray);
  })
  
  test('Numbers not divisible by 5 or 3 should return themselves', () => {
    const testValuesLength = 5;
    const numbersArray = getDivisibleNumbersArray(testValuesLength, 100, 1, [3, 5]);
    const valuesArray = numbersArray.map(getSingleOutput);
    expect(valuesArray).toEqual(numbersArray);
  })
})


/**
 * Generates an array of numbers divisable by divider, optionally excluding ones divisable by excludeDividers
 */
const getDivisibleNumbersArray = (length, max, divider, excludeDividers) => {
  const divisibleNumbersArray = [];
  for (i = 0; i < length; i++) {
    let number = Math.round(Math.random() * (max / divider)) * divider;

    while (excludeDividers && checkDivisibleByMultipleDividers(number, excludeDividers)) {
      number += divider;
    }
    divisibleNumbersArray.push(number);
  }
  return divisibleNumbersArray;
}

const checkDivisibleByMultipleDividers = (number, dividers) => {
  for (const divider of dividers) {
    if (number % divider === 0) {
      return true;
    }
  }
  return false;
}