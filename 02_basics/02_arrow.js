//to understand the arrow fuction and this keyword

const user = {
    username : "Aviraj",
    price:99,
    //without this the fuction gives the error
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        //this show you the current context
    }
}

// user.welcomeMessage();//here this refer the current context that is the scope of the that object,this also same for the fuction and if else
//note : the this keyword we not use in the arrow fuction
user.username = "Kanu";//here we change the value so in current context the vaule get change.
// user.welcomeMessage();

//IMP
// console.log(this)//{} - this get return because we are in the node enviroment , but we in browser this return the Window object which is a global object


//note in the fuction we not use this , we mostly used it in objects

function chai(){
    console.log(this);
}
// chai();
//output : 
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */


const chai1 = function(){
    let username = "Aviraj"
    console.log(this.username);  
}
// chai1() // output - undefined as this is not use in the fuctions

//Arrow functions

// const arrow = () => {
//     let username = "Aviraj";
//     console.log(this);//{}
//     console.log(this.username)//undefined
// }
// arrow()

//syntax = () =>

//example 
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4));

//inplicit return
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4));
//implicit mean i assume


//if you {} you need to write the writen keyword
const addTwo = (num1,num2) => {return num1 + num2}
console.log(addTwo(3,4));


//to return the object we use ()
const returnObject = () => ({username : "Aviraj"})
console.log(returnObject());

const myArray = [2,3,4,5,6]
