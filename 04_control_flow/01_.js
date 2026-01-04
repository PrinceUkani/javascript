const username = "admin";

if(username){

    console.log("Hello")

}

const month = 1;

switch (month) {
    case 1:
        console.log("one");
        break;

    default:
        break;
}

//truthy and falsy values

//falsy   : false , 0 , -0 , "" , null , undefined , NaN
//truthy : " " , "hello" , [] , {} , function(){} , "0"

// turnary operator

const age = 18;

// if(age>=18){
//     console.log("you can vote")
// }else{
//     console.log("you cant vote")
// }            
age >= 18 ? console.log("you can vote") : console.log("you cant vote");
// ----------------04_control_flow-------------------


