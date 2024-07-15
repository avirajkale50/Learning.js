"use strict"; // to ebable the strict mode
//by default these days the javascript is in strict mode 

const accountId = 1234
let accountEmail = "aviraj@google.com"
var accountPassword = "2453"
accountCity = "jaipur" //if we not mentioning the var or let the variable will have the global scope

console.table([accountId,accountEmail,accountPassword,accountCity])


//reassigning the values to the variables
//accountId = 235 // the const can not get reassign beacause its a constant value


//let and var get reassign
accountEmail = "avi@google.com"
accountPassword = "3520"
// the main difference in the let and var is 
/*
1.The var is old js which have the problem of the scope 
2.The var have the gobal scope so if in any file the variable get repeat the value change at all places
3.So to solve this issue the let is introduced by ECMA organization which set rule for the javascript
4.Majority time we are only using let keyword
*/

//this is gobal so it can be also get reassign
accountCity ="mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity])

//variables done keep going