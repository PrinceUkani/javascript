const heros = ["Shaktiman" , "Duba-Duba" , "Bheem"]
const willans = ["ironman" , "wakanda" , "jiyan"]

// heros.push(willans)
// console.log(heros);

// const all = heros.concat(heros)
// console.log(all)

const all = [...heros , ...willans] //for multiple combine {spread}
console.log(all)

//multiple array
const newarray = [2,5,[45,3,6] , 6,[4,64,4,[46,6]]];
console.log(newarray.flat(Infinity))

//imp
console.log(Array.isArray("Prince"))
console.log(Array.from("Prince"))

console.log(Array.from({name : "Prince" , age:23})  )


let score =123
let score1 =148
let score2 = 900

console.log(Array.of(score,score1,score2));

