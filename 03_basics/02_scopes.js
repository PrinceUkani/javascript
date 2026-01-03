// issue with var
//block scope and global scope 
if(true){
    let a=10
    const b = 20
    var c = 30
}
// console.log(c) 
// why this runs if scope of c is ends in a if condition 

let d= 10
if(true){
    let d =100;
    console.log("Inner" , d)
}
console.log(d)



console.log(addtwo(5))

const addtwo = function(num){
    return num+2
}

// this will not work 
// function addone(num){ return } , this will work 