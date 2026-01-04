//Imidiately Invoked Function Expression
//why we are using iife 
// glbal scope ke pollution se bachne k liye and imidiately execution k liye    
(function chai(){
    //named iife , name : chai
    console.log("DB connected")
})();

( () => {
    //without name
    console.log("How are you?")
} )();


((num1,num2) => {
    console.log(num1+num2)
})(3,6);

