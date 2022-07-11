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