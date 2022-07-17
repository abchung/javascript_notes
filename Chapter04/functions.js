function myfunc1() {
  console.log(arguments);
}

/*myfunc = () => {
  console.log(arguments);
};
*/

myfunc1(1, 2, 3, 4);
//myfunc(1, 2, 3, 4);

// ...args
function argsFunc(x, y, ...args) {
  console.log(x, y, args);
  return args[0];
}

argsFunc(1, 2, 3, 4, 5, 6, 7, 8);
// will console.log 1 2 [3,4,5,6,7,8]

console.log(argsFunc(1, 2, 3, 4, 5, 6, 7));

// anonymous functions.
myArray = [1, 2, 3, 4, 5, 6];

const myIncrement = myArray.map(function (item) {
  console.log('inside');
  return item + 1;
});

console.log(myIncrement);

// callback functions.

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const calculate = (callback, a, b) => {
  return callback(a, b);
};

console.log(calculate(add, 5, 4));

console.log(calculate(subtract, 5, 10));
