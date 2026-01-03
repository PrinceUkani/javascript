//singleton
// Object.create

//object literal

const mysym = Symbol ("key1")

const jsuser ={
    name : "Prince",                 // string 
    "Full_name" : "ukani Prince",   //as a string
    [mysym] : "simba",     //symbol syntax
    age : 34,
    gmail : "Prince@gmail.com",
    active : true,
    friends : ["Rahul" , "Ankit" , "Mohit", "vikas"]
}

console.log(jsuser.name)
// console.log(jsuser.Full_name)
console.log(jsuser["Full_name"]) //prefer
// console.log(jsuser.mysym)
console.log(jsuser[mysym]) // string
console.log(typeof jsuser[mysym]);


jsuser.active = false;
console.log(jsuser);

// Object.freeze(jsuser);

jsuser.greetings = function(){
    console.log("Hello How are you ?")
}
jsuser.greetings2 = function(){
    console.log(`Hello ${this.Full_name} `)
}


console.log(jsuser.greetings())
console.log(jsuser.greetings2())







