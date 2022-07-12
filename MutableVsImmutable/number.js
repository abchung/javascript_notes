integers = 1
float1 = 0.5
float2 = 5e2



console.log("**********************")
console.log(`Integer: ${integers}`)
console.log(`typeof: ${typeof intgers}`)
console.log("**********************")
console.log(`float1: ${float1}`)
console.log(`typeof: ${typeof float1}`)
console.log("**********************")
console.log(`float2: ${float2}`)
console.log(`typeof: ${typeof float2}`)
console.log("**********************")



a = 1
b = -1

aDividedByZero = a/0
bDividedByZero = b/0

console.log(`aDividedByZero: ${aDividedByZero}`)
console.log(`typeof: ${typeof aDividedByZero}`)
console.log('*****************')
console.log(`bDividedByZero: ${bDividedByZero}`)
console.log(`typeof: ${typeof bDividedByZero}`)
console.log('***********************')


infinityDividedByinfinity = aDividedByZero/aDividedByZero

console.log(`infinity divided by infinity: ${infinityDividedByinfinity}`)
console.log(`typeof: ${typeof infinityDividedByinfinity}`)
console.log('*******************')

zeroDividedByPositiveInifinity = 0/aDividedByZero

console.log(`zero divided by positive infinity: ${zeroDividedByPositiveInifinity}`)
console.log(`typeof: ${typeof zeroDividedByPositiveInifinity}`)
console.log('**********************************')

zeroDividedByNegativeInfinity = 0/bDividedByZero

console.log(`zero divided by negative infinity: ${zeroDividedByNegativeInfinity}`)
console.log(`typeof: ${typeof zeroDividedByNegativeInfinity}`)

c = bDividedByZero/3
console.log(c)
console.log(typeof c)