arr = ['a', 'b', , 'd'];

console.log(arr);

arr.forEach((element) => {
  console.log(element);
});

console.log('*********************');

console.log(`arr[0]: ${arr[0]}`);
console.log(`arr[1]: ${arr[1]}`);
console.log(`arr[2]: ${arr[2]}`);
console.log(`arr[3]: ${arr[3]}`);

console.log('*********** THE SPREAD OPERATOR **************');

sArray = [1, 2, 3, 4];
copyArray = [...sArray];
console.log(`copyArray[0]: ${copyArray[0]}`);
copyArray[0] = 'hello';
console.log('after modification');
console.log(`copyArray[0]: ${copyArray[0]}`);
console.log(`sArray[0]: ${sArray[0]}`);
console.log(sArray);
console.log(copyArray);

let myString = 'hello world';
let myArray = [...myString];

console.log(myArray);

let aConstructor = new Array(5, 4, 3, 2, 1, 'testing, testing');

console.log(aConstructor);

let ofArr = Array.of(10);

console.log(ofArr);

console.log('****************************************');

console.log('***** Array.of() *****');
let original = Array.of(10, 20, 30, 40);
let copy = Array.from(original);

console.log('original');
console.log(original);
console.log('copy');
console.log(copy);

copy[0] = 'changed';
console.log('original');
console.log(original);
console.log('copy');
console.log(copy);

const myfunction = (element) => {
  return 3 * element;
};
modified = Array.from(original, myfunction);
console.log('modified');
console.log(modified);
console.log('*********** Array.of()**************');
let bArr = Array.of(10, 20, 30, 'hello');

console.log(bArr);

console.log('****************');
console.log(`arr: ${arr}`);
console.log('arr.length:');
console.log(arr.length);

console.log('**************************');

let obj_o = {};
obj_o[1] = 'one';
console.log(obj_o['1']);

console.log('*****************');
obj_o[-1.35] = 'it is cold';

console.log(obj_o);
console.log(obj_o[-1.35]);

console.log(`arr: ${arr}`);
arr.push('hello');
console.log(`after push: ${arr}`);
arr.unshift('world');
console.log(`after unshirt: ${arr}`);
console.log('******************');
console.log(arr.length);

console.log(arr);

delete arr[5];

console.log(arr);
console.log(arr.length);

console.log('****************************');
arr = [1, 2, 3, 4, 5];
// console.log(`arr:`);
// console.log(arr);

// arr.splice(1, 2, 'hello', 'world');
// console.log(arr);
arr.splice(2, 0, 'before');
console.log(arr);

arrDeclare = new Array('4');
console.log(arrDeclare.length);

console.log('********************');

arr = ['hello', 'world', 'this', 'is', 'men'];
const arr2 = [];
const testingFunc = (element, index, myArray) => {
  arr2.push(index + `. ${element}`);
};

console.log(arr);
arr.forEach((element, index, myArray) => testingFunc(element, index, myArray));
console.log(arr2);

arr = [1, 2, 3];
console.log(arr);
arrMap = arr.map((x) => x * x);
console.log(arrMap);
