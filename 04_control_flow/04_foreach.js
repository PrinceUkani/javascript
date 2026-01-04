const plateform = ["facebook" , "instagram" , "telegram" , "whatsapp", "AMTS" , "twitter"] ;

// plateform.forEach(function (item) {
//     console.log(item)
// });


plateform.forEach( (item) => {
    // console.log(item)
});

// function printme(lol){
//     console.log(lol)
// }
// plateform.forEach( printme);


plateform.forEach( (item,index , arr)=> {
    // console.log(item , index , arr)
})


const user = [
    {
        name : "ramesh",
        age :35
    },
     {
        name : "mahesh",
        age :31
    },
     {
        name : "suresh",
        age :29
    },
     {
        name : "karmesh",
        age :90
    }
   
]

user.forEach((item)=>{
    console.log(`${item.name} is ${item.age} years old`);
    

})



