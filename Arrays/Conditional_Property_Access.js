let obj_1 = {
  name: 'anthony',
  age: 25,
  city: null,
  shape: { height: 169, weight: 70 },
};

let obj_2 = {
  name: 'bernard',
  age: 24,
  city: null,
  shape: { weight: 50 },
};

console.log(obj_1.name);
console.log(obj_1.shape.height);

console.log(obj_1.shape.height);
console.log(obj_2.shape?.height);
