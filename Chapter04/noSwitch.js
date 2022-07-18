const addTwo = (num1, num2) => {
  let ans = num1 + num2;
  try {
    if (ans == NaN) throw 'invalid operation';
    return ans;
  } catch (err) {
    console.log(err);
  }
};

const subtractTwo = (num1, num2) => {
  let ans = num1 - num2;
  try {
    if (ans == NaN) throw 'invalid operation';
    return ans;
  } catch (err) {
    console.log(err);
  }
};

const divideTwo = (num1, num2) => {
  let ans = num1 / num2;
  try {
    if (num2 == 0) throw 'invalid operation';
    if (ans == NaN) throw 'invalid operation';
    return ans;
  } catch (err) {
    console.log(err);
  }
};

const multiplyTwo = (num1, num2) => {
  ans = num1 * num2;
  try {
    if (ans == NaN) throw 'invalid operation';
    return ans;
  } catch (err) {
    console.log(err);
  }
};

const calculate = (num1, num2, operation) => {
  const extensionObj = {
    add: addTwo(num1, num2),
    subtract: subtractTwo(num1, num2),
    divide: divideTwo(num1, num2),
    multiply: multiplyTwo(num1, num2),
  };

  let ans = extensionObj[operation];
  if (ans != undefined) {
    return ans;
  } else {
    throw new Error('invalid operation');
  }
};

module.exports = {
  calculate,
  addTwo,
  subtractTwo,
  divideTwo,
  multiplyTwo,
};
