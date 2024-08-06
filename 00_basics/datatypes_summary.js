//there are two types main types of the data types in the Java Script
//Primitive and Reference(Non - Primitive)

//Primitive 
//7 types : String , Number , Null , Undefined , Symbol , BigInt , Boolean

//Examples 
let score = 123 //number
let name  = "abc"//String
let temp = null //Null
let work;//undefined
let id = Symbol('abc')//Symbol
let isLoggedIn = true//Boolean
let largeValue = 546545466438761238794324n;


//Now check the datatypes
// console.log(typeof score)//number
// console.log(typeof name)//string
// console.log(typeof temp)//object
// console.log(typeof work)//undefined
// console.log(typeof id)//symbol
// console.log(typeof isLoggedIn)//boolean
// console.log(typeof largeValue)//bigint

//Note : The typeof null is object

//not the symbol give the unique value to the character
let newId = Symbol('123')
let anotherId = Symbol('123')

// console.log(newId === anotherId)


//Refernce (Non Primitive ) data types

// Arrays,Objects,Functions

//Note : All the reference type have the datatype as object but in case of the fuction it return fuction but in actully function-object

let heros = ["shaktiman","hero","iron man"]

let myObj = {
    id : "avi",
    age : 21,
};

const myFunction = function(){
    console.log("Hello World");
};

//now testing the type with the typeof 
// console.log(typeof heros);//object
// console.log(typeof myObj);//object
// console.log(typeof myFunction);//function (function-object)


//Here we learn the basics of data types which are imp in the interview and also the typeof and some simple exceptions in JS


//********************************************************Stack and Heap***************************************************

// The memory in JavaScript allocated in the Stack or Heap

//The primitive data type is stored in the stack and if we copy them into other variable there copy get copied not the actual data type 

//Example 
// let firstVariable = "nice";
// let secondVariable = firstVariable
// console.log(firstVariable,secondVariable);
// secondVariable = "not nice"
// console.log(firstVariable,secondVariable);

//The non primitive datatypes is stored in the heap there name is in stack and the they refer the location at heap , and if we copy them the same location got refer so if we change the second variable the first variable also get change

//Example 

let oneObj ={
    speed : 200,
    bike : "discover"
}
let twoObj = oneObj
console.log(oneObj,twoObj);

twoObj.bike = "splender"
console.log(oneObj,twoObj);


