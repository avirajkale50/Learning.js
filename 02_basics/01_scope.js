
if(true){
let a = 10
const b = 20 
var c = 30//var created problem as it always have the global scope
//also without any type of if the variable is there ,it also create a problem
}
//as the a and b are not outside so they give error but var c is not give error
// console.log(a);
// console.log(b);
// console.log(c);


// this mainly used to define the scope expect object
// {

// }


//let obeys the rule of scope

//here the outside variable can be used inside as well if you not declare the same --imp
let a = 300;
if(true){
    let a = 30;
    console.log("Inner a : ",a);
}
console.log("Outer a : ",a);