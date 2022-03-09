const runCounter = () => {
  const outputArray = getOutputArray();
  printOutputArray(outputArray);
}

const getOutputArray = () => {
  const outputArray = [];
  for (i = 1; i <= 100; i++) {
    outputArray.push(getSingleOutput(i));
  }
  return outputArray;
}

const getSingleOutput = (number) => {
  let text = '';
    if (number % 3 === 0) {
      text += 'Foo';
    }
    if (number % 5 === 0) {
      text += 'Bar';
    }
    return(text || number);
}

const printOutputArray = (outputArray) => {
  for (const output of outputArray) {
    console.log(output);
  }
}

module.exports = {runCounter, getOutputArray, getSingleOutput, printOutputArray};