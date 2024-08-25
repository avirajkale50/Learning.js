//all parts of the code should not get excuted so we go with the conditional statements

//if 
// syntax
// if(condtion){

// }
// if the condition is true it get execute other wise not

//note : for the comparision we do with the different type of the operator

/*
> - greater than
< - less than
<= - less than equal
>= - greater than equal
== - check the equlity
!= - not equal
=== - check the equality with the datatype
 */

// // example for == and ===
// if(2=="2"){
//     console.log("executed ==")
// }//gets execute
// if(2!="2"){
//     console.log("executed !=")
// }//not get excute
// if(2!=="2"){
//     console.log("executed !==")
// }//gets excute


// if else
// syntax
// if(condition){
//     condition is true
// }else{
//     condition is false
// }

// simple example

// let temp = 50
// if(temp > 40){
//     console.log("temperature greater than 40");  
// }else{
//     console.log("temperature less than 40"); 
// }


// note - {} of the if else also defy the scope
//but if you use the var as it have the scope global so we can use it out side but it is not a good practice

// shorthand notation

let balance = 2000
// if(balance >500) console.log("test");//it get executed as one line is permitted after if without {} the concept called as the implicit scope

//note you can add more statement with the semicolon --- but it is very bad practice as it create confusion and a very bad practice

// if(balance >500) console.log("test"),console.log("test2");

//if else if
// syntax
// if(condition1){
//     condition1 is true
// }else if(condition2){
//     condition2 is ture
// }else{
//      no condition is true
// }

let score = 1500

// if(score < 200){
//     console.log("less than 200");
// }else if(score < 500){
//     console.log("less than 500");
// }else if(score < 1000){
//     console.log("less than 1000");
// }else if(score < 2000){
//     console.log("less than 2000");
// }else{
//     console.log("much much higher");
// }

// logical operator
/*
&& - and (both statement should be true)
|| - or (one of the statements should be true)
! - not (invert the value of the statement)
?? - Nullish coalescing operator ( returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operan)
 */

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("You allowed to buy the course");
}

const loggedInFormGoogle = true;
const loggedInFormEmail = false;

if (loggedInFormGoogle || loggedInFormEmail) {
    console.log("User Logged In");
}