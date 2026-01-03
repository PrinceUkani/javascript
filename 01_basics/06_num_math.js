const score = 299
console.log(score);

const score2 = new Number(200)
console.log(score2)
console.log(typeof(score2))


console.log(score2.toString())
console.log(typeof(score2))

balance=9129.12232
console.log(balance.toFixed(2))
console.log(balance.toPrecision(2))


const hundreds = 9000002
console.log(hundreds.toLocaleString('en-IN'))


//-----------**Maths**--------------


// console.log(Math.abs(-127))
// console.log(Math.round(187.49990))
// console.log(Math.ceil(8.1))
// console.log(Math.floor(1.9))
// console.log(Math.sqrt(89))

// usage

console.log(Math.random())

console.log(Math.floor(Math.random()*100) +1)

const min =18
const max = 25

console.log( Math.floor( (Math.random() * (max - min +1))  + min ) )

