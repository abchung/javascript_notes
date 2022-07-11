// Mutable vs Immutable.
// Immutable:
//  variable a points to an address in memory call it address_a
//  variable b is equal to a but the value of a is stored at a different address for b.
//  that is why when we change the value of b,
//  value of a does not change.
//
// Mutable:
//  object_a points to an address call it address_a
//  object_b equals to object_a.
//  however, object_b is pointing to the same address_a
//  therefore if we change the value of object_b, 
//  the value of object_a also changes.

console.log("hello world");

a = 1;
b = a;

console.log(`typeof a: ${typeof a}`)
console.log(`typeof b: ${typeof b}`)

console.log(`a: ${a}`)
console.log(`b: ${b}`)
console.log('***********************')
console.log('now make b = 2')
b = 2;
console.log(`a: ${a}`)
console.log(`b: ${b}`)

// now let's try an array which is mutable

array_a = [1,2,3,4]
array_b = array_a

console.log(`typeof aray_a: ${typeof array_a}`)
console.log(`typeof array_b ${typeof array_b}`)

console.log(`array_a[0]: ${array_a[0]}`)
console.log(`array_b[0]: ${array_b[0]}`)
console.log('********************************')

array_b[0] = 22

console.log(`array_a[0]: ${array_a[0]}`)
console.log(`array_b[0]: ${array_b[0]}`)

// now let's try an object.

class myname{
    constructor(name) {
        this.name = name
    }
}


class_a = new myname('anthony')
class_b = class_a

console.log(`typeof class_a: ${typeof class_a}`)
console.log(`typeof class_b: ${typeof class_b}`)

console.log(`class_a.name: ${class_a.name}`)
console.log(`class_b.name: ${class_b.name}`)
console.log('*******************************')

class_b.name = 'benny'

console.log(`class_a: ${class_a.name}`)
console.log(`class_b: ${class_b.name}`)