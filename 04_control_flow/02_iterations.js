for (let id = 0; id < 10; id++) {
    const element = 5* id;
    // console.log(element);
}

// ----------------02_iterations-------------------

let superman = ["Shaktiman" , "dabang" , "krrish" , "ironman" , "batman"];

for(let i=0 ;i<superman.length ; i++){
    // console.log(superman[i]);
}
let score = 110;
while (score>100) {
    score--;
    // console.log(score)
}


// -------more loops---------------

//for each

const array = [2,4,6,3,8,3,4,2]

for (const num of array) {
    // console.log(num)
    
}
const greeting = "Hello world"

for (const char of greeting) {
    if(char==' ') continue;
    // console.log(`each character is ${char}`)
}



//maps


const map = new Map()
map.set('H' , 9)
map.set('i' , 3)
map.set('t' , 5)
map.set('t' , 6)
map.set('e' , "qwoie")
map.set('f' , "qwoie")

// console.log(map)

for (const [key,valu] of map) {  // destructuring of a map
    // console.log(key +" => " +valu)
}

const user = {
    game : 'Nfs',
    sunway : 'aiu' 
}

for (const [key,valu] of user) {  
    console.log(key +" => " +valu)
}

