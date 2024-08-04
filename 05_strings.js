//different ways to difine the string in the Javascript

const stringOne = "this is a string"
const stringTwo = 'this is also a string'
const stringThree = `and this is also a string`

//morden ways of defining the string , it define it as string and provide the various methods for it and the type of the string now is object

const newString = new String("morden way of define string")//String() is the constructor which return the string

// console.log(newString)
// console.log(typeof newString)



//note : JS have the 0 base indexing


//accessing the character at the particular loction
// console.log(newString[2])
// console.log(newString.charAt(2))

let name = "Avi",age = 20;
//prefered way of writing the string or concat the string
// console.log(`hi my name is ${name} and my age is ${age}`)

//we can also use the plus(+) and comma(,) but it is not prefered
// console.log(name+age);
// console.log(name,age);

//length
// console.log(newString.length);//lenght is not a function


//Now let see the string methods

let randomString = new String("hill-climbing-racing")


console.log(randomString.at(1));//accepts negative integer which count form the back
console.log(randomString.charAt(1));//return character at specific index
console.log(randomString.charCodeAt(1));//returns the unicode of the charater which at the index

console.log(randomString.concat("-2"));//two concat the string

console.log(randomString.endsWith("racing"));//return the boolean value wheather the string present or not at end
console.log(randomString.startsWith("h"));//return the boolean value wheather the string present or not at start
console.log(randomString.includes("racing"));//return the boolean value wheather the string is there or not in the string

console.log(randomString.indexOf("i"))//return the index of the particular character in the string and if not present returns the -1

console.log(randomString.replace("-"," "));//takes two argument and replace the first matching character with the second input we pass
console.log(randomString.replaceAll("-"," "));//takes two argument and replace the first matching character with the second input we pass


console.log(randomString.split("-"));//slice the string at the seprator and returns the array

console.log(randomString.slice(5));//slice the first n character ( the input which you enter ) and returns the remaining part

console.log(randomString.toLowerCase())
console.log(randomString.toUpperCase())

console.log(randomString.trim())//remove the extra whitespace and newline characters in the string

console.log(randomString.substring(1,4))//return substring form 1 to 3 .. remember not include the 4