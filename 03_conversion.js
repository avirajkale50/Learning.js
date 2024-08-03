
//let score = 33

//typeof use to check the type of the variable in normal way
//console.log(typeof score);

//typeof can use as function
//console.log(typeof (score));

// conversion of the into number

//normal conversion
//let score = "33"

//console.log(typeof score,score)//score as number
//score = Number(score) //String converted to Number
//console.log(typeof score,score)//score as string

//corner case
//let score = "33abc"

//console.log(typeof score,score)//score as number
//score = Number(score) //String converted to Number
//console.log(typeof score,score)//score as string

//Note : The string is not a actual number so it get converted in NaN which have the data type number

//for null
//let n = null
//n = Number(n)
//console.log(typeof n,n)//nul get converted to the 0

//conversion into String

//let  score = 33;
//console.log( typeof score,score)//score as the number 
//score = String(score)//conversion of Number to string
//console.log( typeof score,score)//score as the String

//conversion into boolean
 
//let isLoggedIn = true;
//console.log(typeof isLoggedIn,isLoggedIn)//normal type checking

//let a = "avi"
//a = Boolean(a);
//console.log(typeof a,a)//if string get converted it also returns the true

//let yes = 1,no = 0;//we can declare more variable at a time
//console.table([yes,typeof yes,no,typeof no])

//yes = Boolean(yes)
//no = Boolean(no)

//console.table([yes,typeof yes,no,typeof no])

//Hence in this lecture how to convert datatype mainly the Number,Boolean and String and there different variation



//************************************************Operations**********************************************************//

//Arithmatic Operator
// console.log(2+2); summation
// console.log(2-2); subtraction
// console.log(2*2); multiplication
// console.log(2/2); division
// console.log(2**2); power
// console.log(2%2); modulus

//string concatination

// let str1 = "Hii "
// let str2 = "Kumar"
// let str3 = str1 + str2
// console.log(str3);

//trick questions

// console.log("1" + 2 );//output 12 as string
// console.log(1 + "2" );//output 12 as string
// console.log("1" + 2  + 2);//output 122 as a string
// console.log(1 + 2 + "2");//output 32 as a string

//Note : The associaty in the javascript is left to right
//>>refer this code to check
// function echo(pharse , num){
//  console.log(pharse,num)
// }
// console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));

//NOTE : Your code should be clean and add parenthesis where ever necessary

// console.log(+true);//output - 1
// console.log(+"");//output - 0


//post and pre increment
let gameCounter = 3;
console.log(gameCounter++)//increment value after use 
console.log(++gameCounter)//increment value before use
console.log(gameCounter--)//increment value after use
console.log(--gameCounter)//increment value before use