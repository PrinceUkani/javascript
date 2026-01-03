const array = [9,2,7,3,84,4]
const array2 = new Array(2,5,2)
console.log(array[2])

//shallow copy  => same references  
//deep copy    => different location


const heros = ["bheem" , "shiva "]


//-------------methods------------
array.push(5)
array.pop()
console.log(array)


array.unshift(13) //bad time consuming 
console.log(array.includes(13));
console.log(array.indexOf(13));


console.log(array)

array.shift()
console.log(array);

const array3 = array.join();
console.log(typeof(array3)); // string 

//-------slice----------spice -----------imp

const myarray1 = [1,2,3,4,5,6]
console.log("A " , myarray1)    

const mya1 = myarray1.slice(2,5)
console.log(mya1);

console.log("B ",myarray1);

const mya2 = myarray1.splice(1,3)
console.log(mya2);

console.log("C ",myarray1)


// slice only copy the value and range-1
//splices do cut that portion from the original array



