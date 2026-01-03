function myname(){
    console.log("P")
    console.log("r")
    console.log("i")
    console.log("n")
    console.log("c")
    console.log("e")
}
// myname()


function addnum(num1 , num2 ){  // num1 and num2 are parameter
    // console.log(num1+num2)
    return num1+num2
    console.log("Say my name");
    
}
const result = addnum(2,4) // 2 and 4 are argument
// console.log(result);

function userlogin_msg (username  = "SAm"){
    if(username){
         return `${username} just logged in `
    }
    return `please enter your name`
}

const msg = userlogin_msg()
// console.log(msg);

function cartprice(...num1){
    return num1
}
// console.log(cartprice(100,300,200))

const user = {
    name : "Prince",
    price : 300
}
function handleobject (myobj) {
    console.log(`hell0 , My name is ${myobj.name}  and price = ${myobj.price}`) //error if else for handling
}
// handleobject(user)
handleobject({
    name : "Hitesh_sharma",
    price : 935
})

const array = [
    {
        name : "sagar",
        price : 344
    },
    {
        name : "rohan",
        price : 21
    }
]

function returnprice(array){
    console.log( `${array[0].price}` )
}
returnprice(array)


 

