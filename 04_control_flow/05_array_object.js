const plateform = ["facebook" , "instagram" , "telegram" , "whatsapp", "AMTS" , "twitter"] ;

// foreach does not return anything
// const value = plateform.forEach( (item)=> {
//     // console.log(item)
//     return item
// });
// console.log(value)


const numbers = [1,5,2,7,25,9,4,3]

// const num = numbers.filter( (num) => (num >5))
// console.log(num)

// const newarr = []
// numbers.forEach((num)=>{
//     if(num>5) newarr.push(num)
// })
// console.log(newarr);

const books = [
    { title : "one" , genre :'science' , publish : 2008 , edition :1998 },
    { title : "two" , genre :'friction' , publish : 2018 , edition :1998 },
    { title : "three" , genre :'non-friction' , publish : 2003 , edition :1998 },
    { title : "four" , genre :'history' , publish : 2007 , edition :1998 },
    { title : "five" , genre :'biology' , publish : 2009 , edition :1998 },
    { title : "six" , genre :'fake' , publish : 2016 , edition :1998 },
    { title : "seven" , genre :'science' , publish : 2000 , edition :1998 },
    { title : "eight" , genre :'friction' , publish : 2001 , edition :1998 },
    { title : "nine" , genre :'history' , publish : 2010 , edition :1998 },
    { title : "tem" , genre :'fake' , publish : 2012 , edition :1998 },
    
] 

const userbooks = books.filter((bk) => bk.genre==='science');

console.log(userbooks);

