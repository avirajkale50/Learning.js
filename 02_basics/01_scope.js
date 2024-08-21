
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
// let a = 300;
// if(true){
//     let a = 30;
//     console.log("Inner a : ",a);
// }
// console.log("Outer a : ",a);



//here we are going to see more about scope and basic overview of closure

function one(){
    const  username = "Aviraj"

    function two(){
        const website = "Google.com"
        // console.log(username);//here we can see that we can access the variable which are in the bigger scope
    }
    // console.log(website);//here it cause error as the website variable is not in the scope of fuction one 
    two()
}
one()


//note : when we call the fuction the stack is created for them


//form this example the scope concept is same in the conditionals or loops as well
if(true){
    const username = "Aviraj"
    if(username === "Aviraj"){
        const website = " google.com"
        // console.log(username + website)
    }
    // console.log(website);//this will create a error
}
// console.log(username);//also this will create a error


//************************************interesting**************************************
//some more ways to write a fuction

console.log(addOne(5));//here in this type of fuction even if the defination of the fuction is later in the scope the fuction call is executed
function addOne(num){
    return num + 1
}
console.log(addOne(5));//this will works as intended



//this type of function is also called as expression as they are in variable
// console.log(addTwo(5));//this will give you a error as you calling it before the defination
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));//this will also work as intended

//hoisting is the concept behind this behaviour

