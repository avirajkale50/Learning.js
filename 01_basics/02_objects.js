//object made by constructor is singleton and object made by simple method is not singleton
//a singleton is an object that is instantiated only once throughout the lifetime of the application. It ensures that there is only one instance of the object, and it provides a global point of access to that instance.

//Object. create --constructor method
//object literals
//regular method to declare array

const mySym = Symbol("key");

const JsUser = {
    name : "Aviraj",
    "full name":"Aviraj Popat Kale",//different
    [mySym]:"mikey",//[] is use to use the symbol as the key
    age : 18,
    loction : "Mumbai",
    email : "aviraj@google.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Friday"]
}

//different ways to access the elements in the object
// console.log(JsUser.name);//with . operator
// console.log(JsUser["name"]);//with [] notaion ..note here the key is passed as string

//the array method is use when the key have values like full name which have the space in them then we can access them only with [ ] method

// console.log(JsUser["full name"]);
//[] is use to retrive the symbol
// console.log(typeof JsUser[mySym]);



//confusion in symbol form
//but the square bracket is use to assign the dynamic key

//some basics concept

//changing the value
JsUser.age = 21;
console.log(JsUser);

//to freeze the value in the object , the values not get change
// Object.freeze(JsUser)
// JsUser.age = 22;
// console.log(JsUser);

//one method
// JsUser.greeting = function(name = "User"){
//     console.log("Hello,",name)
// }
//another method
JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
    
}

// console.log(JsUser.greeting)//[Function (anonymous)]
// console.log(JsUser.greeting("Aviraj"))//return the name and undefined is because it does not return anything
console.log(JsUser.greeting2());

//most of the time we can access value with . but [] is also imp

