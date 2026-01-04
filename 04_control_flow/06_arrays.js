const mynumbers = [1,2,3,4,5,6,7,8,9,10]

const nums = mynumbers.map( (num) => num+10 )
// console.log(nums);

const numa = mynumbers.map((num)=> num*5)
                        .map((num) => num+2)
                        .filter((num) => num>35)
// console.log(numa);


//-------------------reduce method----------

const myarr= mynumbers

const news=  myarr.reduce( (acc,currval)=>{
    return acc+currval
},0) // zero initial value 0+1+2+3....   ..+10
console.log(news);


//task make a shoping cart array and give total by reduce function


// myarr.reduce( (acc,item) => (acc+item.price) , 0)