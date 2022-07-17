let directions = {};

direction = {
  n: 1,
};
let a = 'north';

console.log(direction.hasOwnProperty(a));
direction[a] = 1;
console.log(direction.hasOwnProperty(a));
if (direction?.s == undefined) {
  console.log("don't have ");
}

element = 'north';
console.log(direction);
direction['n'] += 1;
direction[element] += 1;
direction[element] += 1;
console.log(direction);
