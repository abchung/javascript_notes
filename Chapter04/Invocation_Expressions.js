// Invocation Expressions.
// Syntax for calling a function or method.
// A function returns a value using a 'return' statement.
// Otherwise it will be undefined.

myFunc = (firstName) => {
  return `Hello ${firstName}`;
};

myFunc1 = (firstName) => {
  `Hello ${firstName}`;
};

//returns Hello
console.log(myFunc('Anthony'));

console.log(myFunc1('Bernard'));

// Conditional Invocation.
class car {
  sound = () => {
    return 'vroom';
  };

  nosound = () => {};
}

myCar = new car();

console.log(myCar.sound());

// There is no quiet method/function.
// question : no error is thrown.
console.log(myCar.quiet?.());
