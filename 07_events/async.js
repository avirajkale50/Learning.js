//Async Code


//Notes :

//Javascript is a synchronous and single threaded by default
//Synchronous : Code execute one by one 
//we can modify this behaviour but we can change it

//Execution context : execute one line of code at a time 
//each operation waits for the last one to complete before executing
console.log("one")
console.log("two")//this wait for last statement to execute

//Blocking Code V/S Non Blocking Code
//Blocking Code - Block the flow of the program. ex. (Read File Sync) 
//Non Blocking Code - Does not block execution. ex. (Read File Async)


//There are different scenario to use the blocking and non blocking code

//example :
console.log(1)
setTimeout(() => {
    console.log(2);
  },0);//it still execute last as we need to make the call stack for it
console.log(3)

//fetch - read about it



