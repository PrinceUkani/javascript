// Dates
let Dates = new Date()
// console.log(Dates)

// console.log(Dates.toString())
// console.log(Dates.getFullYear())
// console.log(Dates.getMonth()+1)
// console.log(Dates.toLocaleString())
// console.log(Dates.toLocaleDateString())

// let createdate = new Date(2025 , 3,25)
// console.log(createdate.toLocaleDateString())
let createdate = new Date("2032-06-24")
// console.log(createdate.toLocaleDateString())
let timestamp = Date.now()
console.log(timestamp)
console.log(createdate.getTime())     // mili seconds

console.log(Math.floor((Date.now()/1000)))


let newdate = new Date();
console.log(`today is your lucky day and month is ${createdate.getMonth()+1} `)

newdate.toLocaleString('default' , {
    weekday:   "short" ,
    
})
console.log(newdate.toLocaleString())
