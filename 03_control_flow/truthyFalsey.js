//example of the truthy ,here we consider string as the true value
const userEmail = "a@google.com";
if(userEmail){
    console.log("Got the user email");
}else{
    console.log("Don't have the user email"); 
}

//flasy values : 
/*
false,
0,
-0,
BigInt 0n,
"",//empty string
null,
undefined,
NaN
*/


//truthy values : 
/*
true,
"0",//as it is a string,
'false'//as it is a string,
" "//string with space,
[],
{},
function(){},
also all other value than falsy value
*/

//how to check the empty array
const myEmail = []
if (myEmail.length === 0) {
    console.log("array is empty");
}

//how to check for the empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){//here Object.keys returning the array of the keys
    console.log("Object is empty");   
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);//5 first valid value

//for the special case like if we get null or undefined value form the server

val1 = null ?? 10;
console.log(val1);//10 valid value


val1 = undefined ?? 15;
console.log(val1);//15 valid value




val1 = 5 ?? 10 ?? 15;
console.log(val1);//5  first valid value


//IMP
//Ternary Operator
//syntax
//conditon ? true : false
//Example
const icePrice = 100;
icePrice<90?console.log("Price less than 90"):console.log("Price more than 90");
