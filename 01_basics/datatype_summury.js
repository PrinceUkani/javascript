/* return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/ 
let studentid = ""
let name = "Prince"
let age = 23
let success = true


let myobj = {
    name : "Prin",
    age: 23,
}
   

console.log(typeof myobj)


// stack(primitive) , heap memory (non premitive )
let numbers = "good "

// stack make a new copy of a variable 
// where the heap stores tha acctual value 
// if you make a copy then modify then both will update same time 