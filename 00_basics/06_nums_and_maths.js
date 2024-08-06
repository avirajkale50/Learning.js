const score = 400;//Simple way of define number 
console.log("score")

//to define the number object
const gameScore = new Number(1234)
console.log(gameScore);

//Different methods for number objects

//to fixed the number after the decimal also it returns the string
console.log(gameScore.toFixed(2));
//if fixed the number of the precision value and if the value is bigger then it round it also the return value is string
console.log(gameScore.toPrecision(3));
//convert the number of string
console.log(gameScore.toString());
//add the commas for neat display
console.log(gameScore.toLocaleString('en-IN'));
//to find value of the number
console.log(gameScore.valueOf());



//****************************************************Maths************************************************************

console.log(Math);
//Math is the libary in the javascript which have the differnt math releted fuction and the constant


console.log(Math.abs(-5))//absolute value
console.log(Math.sqrt(36))//square root
console.log(Math.pow(7,2))//power
console.log(Math.round(9.458))//rounded value
console.log(Math.min(10,20,30))//minimum value
console.log(Math.max(10,20,30))//maximum vlaue


//There are also other fuctions in the libray like trignometric and other math releted fuction ,you can refer them in chrome or in mdn




