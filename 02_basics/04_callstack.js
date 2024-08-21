//imp for the interview
//JavaScript Execution Context -- means how your js file going to execute
//when you run your js file there will be a
//Global Execution context which get store in the .this object
//the value of this for node env is {}
//the value of this for GC in browser is window object
//this object value is differen for different execution context


//Different Excution Context
// 1.Global Execution Context
// 2.Fuction Execution Context
// 3.Eval Execution Context

//Program Excution Phase
// it done in two phase 
// 1. Memory Creation Phase - The memory get allocated for the variable
// 2. Excution Phase - The acutal execution part

// Example
let val1 = 10;
let val2 = 20;
function addNum(num1,num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,5)

// here are the steps , how the program get excuted

/*
1.Global Excution Context get set up {this}
2.Memory Phase {cycle}//note the first cycle is mandetary
    val1 -> undefined
    val2 -> undefined
    addNum -> fuction defination
    result1 -> undefined
    result2 -> undefined
3.Excution Phase
    val1 <- 10
    val2 <- 5
    addNum not get ignore at the start 
    but when you encounter the use of the fuction it create
    add Num -> new variable environment + excution phase
        memory phase for the for addNum
            num1 -> undefined
            num2 -> undefined
            total -> undefined
        excution context
            num1 -> 10
            num -> 5
            total -> 15
        as the total get return , so it get return in the global excution context or parent excution context
        this context  get delete after excution
    now for the next line the same process get excuted

*/

//Call Stack 
// This is the stack to maintain the excution of the program //it is stack so lifo is applied here
// note : at the botton of the stack the Global Excution context is there


// Simple code to to try out the call stack
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()

