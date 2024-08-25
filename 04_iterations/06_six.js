//different operation in the javascript
let coding = ['js','cpp','java','rb','py','swift']

//for each is not return anything like if we want
// const value = coding.forEach((item)=>{
//     return item;
// })
//this code is not valid as value still contain undefined in it

//so to get return value in an array

const myNums = [ 1,2,3,4,5,6,7,8,9,10]

//filter with the without return as we dont open scope(implicit return)
//const number = myNums.filter((num)=> num > 4)//here we use the call back and the condition
//console.log(number);//return the array of value greater than 4 

//the filter with the return as we define the scope know as explicit return
// const newNums = myNums.filter((item)=>{
//     return item > 4
// })
// console.log(newNums);


//the code for the same operation as above with the forEach loop
const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);



//example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter((bk)=> bk.genre === "History")//userBooks store the objects for which the given condition is true
userBooks = books.filter((bk)=>{return bk.publish >= 1995 && bk.genre === "History"})//userBooks store the objects for which the given condition is true
console.log(userBooks);

//we can do more practice here 

