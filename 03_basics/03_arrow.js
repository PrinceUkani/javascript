const user = {
    username : "Prince",
    price : 900,

    welcomemsg : function() {
        console.log(`${this.username} , welcome to the world`)
        console.log(this)
    }
}

// console.log(user.welcomemsg())
user.username="same"
// console.log(user.welcomemsg())

// console.log(this);


// function one(){
//     let username = "Prince"
//     console.log(this.username);
// }
// one()


// const addition = (num1,num2) => {
//     return num1%num2
// }

const addition = (num1,num2) =>  ( num1%num2 )
console.log(addition(5,2))


const addition1 = (num1,num2) =>  ({username : "Hitesh" })
console.log(addition1())


const globalfunction = {
    username : "Prince"
}
const globals = function(){
    console.log("Hello! mayur")
}

const gayab = (num1,num2) => ({usernamew:"adsa"})
console.log(gayab())

const onet = function(num){
    console.log(num)
}
onet(5)

