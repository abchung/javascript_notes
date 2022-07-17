const arr = [1, 2];

arr[2] = 5;
console.log(arr);

let a = 1;

for (let i = 0; i < 10; i++) {
  console.log(a);
  let c = 3;
  var d = 4;
  console.log(c);
  console.log(d);
}

//error: out of scope.
//console.log(c);
console.log(d);
