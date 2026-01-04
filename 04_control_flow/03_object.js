const fullname = {
    js : "Javascript",
    phy : 'Python',
    cpp : 'c++',

}


for (const key in fullname) {
    // console.log(`${key} is short form of ${fullname[key]}`  );
}

const array =  ["ramesh" , "suresh" , "Mohan" , "Chagan" , "jaggu"]
for (const key in array) {
    // console.log(key);

}

const map = new Map()
map.set('H' , 9)
map.set('i' , 3)
map.set('t' , 5)
map.set('t' , 6)
map.set('e' , "qwoie")
map.set('f' , "qwoie")

for (const key in map) {
    
    console.log(map[key]);
    
    
}