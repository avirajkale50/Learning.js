//for each loop

let coding = ['js','cpp','java','rb','py','swift']
//higher order fuction 

//here the fuction is callback function so the name is not there
//simple example of for each loop
coding.forEach(function(item){
    // console.log(item);
})

//for each with the arrow function
coding.forEach((value)=>{
    // console.log(value);
})

//using the external fuction as a parameter
function printMe(item){
    console.log(item);    
}
//here we pass the referece of the fuction
// coding.forEach(printMe)

//in for each loop the fuction not only get the item it also get index and array
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFile :"js"
    },
    {
        languageName : "C++",
        languageFile :"cpp"
    },
    {
        languageName : "java",
        languageFile :"java"
    },
    {
        languageName : "python",
        languageFile :"py"
    }
]


//to accessing the object inside the array with the for each loop
myCoding.forEach((item)=>{
    console.log(item.languageNameṇ)
})
//imp for the database
