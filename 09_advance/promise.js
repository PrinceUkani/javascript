// const { use } = require("react");

fetch("https://google.com").then().catch().finally();

const promise1 = new Promise(function (resolve, reject) {
    // Do an  async task
    setTimeout(function () {
        console.log("1 sec completed")
    }, 1000);

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asynch task 2 completed")
        resolve()
    }, 1000);

}).then(function () {
    console.log("Asych 2 resolved")
})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "Prince ", email: "Princeukani@gmail.com" })
    }, 1000);
})

promise3.then(function (user) {
    console.log(user)
})


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ name: "Prince ", email: "Princeukani@gmail.com" })
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 2000)
})

promise4.then((user) => {
    return user.name
})
.then((username) => {
    console.log("this is the username " + username )
})
.catch((Error)=>{
    console.log(Error)
})

async function promise5(){
    const resolve = await promise5 
}