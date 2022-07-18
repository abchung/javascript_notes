console.log('start');

myArray = ['hello', 'world', 'this', 'is', 'good'];

console.log(myArray);

console.log('**********************************');

// create a function that takes in a word and uppercase the first letter.

const upCaseFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

// create a function that takes in an array and upcase all first letter of word.

const upCaseElement = (wordArray) => {
  uppedWords = wordArray.map((element) => upCaseFirstLetter(element));
};

upCaseElement(myArray);
