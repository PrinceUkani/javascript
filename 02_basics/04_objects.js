// const { use } = require("react")

// const tinderuser = {}
const tinderuser = new Object()

tinderuser.id= "123abc"
tinderuser.name="John"
tinderuser.isloggedin = true


// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// hasownproperty

const regularuser = {
    email : "john@yahoo.com",
    fullname : {
        firstname : "john",
        lastname  : "sina"
    }

}

// console.log(tinderuser)
// console.log(regularuser.fullname.firstname)

const obj1 ={
 1  : 'a',
    2 : 'b'
}

const obj2 = { 3 : "c" , 4: "d "}
const obj4 = { 5 : "c" , 4: "d "}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2,obj4)
const obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3);


const user = [
    {
        id:"11",
        name:"rohit"
    },
    {
        id:"12",
        name:"raj"
    },
    {
        id:"13",
        name:"rohan"
    }
]
// console.log(user[2].id)


// ----------------05_objects-------------------


const course = {
    name :"js_hindi",
    price : 999,
    courseteacher : "hitesh"
}
// course.courseteacher
const  { courseteacher : teacher } = course //destucture of the object  
console.log(teacher)


// json object format
// {
//     "name" : "Prince",
//     "age" : 23
// }

// [
//     {},
//     {},

// ]