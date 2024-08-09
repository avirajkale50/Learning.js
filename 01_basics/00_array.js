//array 

//() - parenthesis, {} - braces, [] - brackets

//defing the array
//Note : In Javascript we can store the different datatypes in the same array also we can store non primitive datatype like object,fuction, and arrays as well inside the arrays
//shallow copy <- it takes refernce of original object so change in copy affect the original one
//deep copy <- it makes the actual copy so the change in the copy does not affect the original one



//defining the array
const myArr = [1,2,3,4]
// console.log(myArr);
//accessing the particular element in array also below both ways are correct to access element
// console.log(myArr[0]);
// console.log(myArr['0'])

//string array
const myHero = ["shaktiman","iron-man"]

//anothe way to make a array is 
const newArray = new Array(0,1,2,3)
// console.log(newArray);

//Different Methods of Arrays

newArray.push(4)//add element at last
// console.log(newArray);//note the actual array got change
newArray.pop()//pop the last element 
// console.log(newArray);//note the actual array got change
newArray.unshift(-1)//add the values at start .. but in take to much time as we need to switch or move all value
// console.log(newArray);
newArray.shift()//remove element at start
// console.log(newArray)

//questionire methods
// console.log(newArray.includes(9));//returns the boolean value
// console.log(newArray.indexOf(3))//gives the index of the element and if element is not present then return -1

const myNewArray = newArray.join()
// console.log(myNewArray);//this is in string format as the join returns a binded string
// console.log(newArray);//regular array

//Difference in the slice and splice

console.log("A",newArray);

const myn1 = newArray.slice(1,3)//slice return the element of array form the index we mention to other index and exclude last index
console.log(myn1);
console.log("B",newArray);//original array not get change


const myn2 = newArray.splice(1,3)// also acts like slice but include both the index
console.log(myn2);
console.log("C",newArray);//original array get change
