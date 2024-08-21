//Immediately Invoked Fuction Expression(IIFE)

//this use to in fuctions where we require them to immdeate calling ex. as connecting with the database
//also to avoid the pollution form the global object

//way to write the iife
//this is also a named iife as it have name chai
(function chai(){
    console.log(`DB connected`);
})();//this semicolon is imp so the iife know when to stop the context
//syntax == (function defination)(function call)

//example with the arrow fuction with the parameter
//unnamed iife..as it don't have the name
((name) => {
    console.log(`DB connexted two ${name}`)
})("Oracle")

