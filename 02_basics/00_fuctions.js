//fuctions are package to repeat your code


//simple way to define a fuction
function sayMyname(){
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyname//fuction reference..useful for react and dom manipulation
// sayMyname()//fuction calling


//when the fuction defination is writen then input are parameters
function addTwoNumbers(number1,number2){
    return (number1+number2);//this value get return to environment
    console.log("Aviraj")//unreachable code --never going to excute because of return

    //you can also write the defination in different ways
    //let result = number1 + number2;
    //return result;
    //note : this result is different form the result we declare outside because of the concept of scope
}

const result = addTwoNumbers(3,4)//input here is arguments 
// console.log("Result : ",result);

function loginUserMessage(username){
    return `${username} just logged in...`
}

// console.log(loginUserMessage("Aviraj"));//fuction with arguments 
// console.log(loginUserMessage());//fuction without arguments //output : undefined just logged in...


function loginUserMessage1(username){
    if(username === undefined){
        console.log("Please enter a Username");
        return
    }
    //above code is equivalent to this one as when username is undefiend then it consider it as false and we use not so the if get excute at that condition
    // if(!username){
    //     console.log("Please enter a Username");
    //     return
    // }
    //Note : In Javascript the some values consider as the false value like ""(empty string),undefined
    return `${username} just logged in...`
}

// console.log(loginUserMessage1("Aviraj"));//simple execution
// console.log(loginUserMessage1());//warning message and also return a undefine as we are not returning anything in the retrun

//fuction with the defalut value of parameter
function message(username = "World"){
    return ("Hello, ",username);
}

// console.log(message())
// console.log(message("Aviraj"));


//**************************************************************************************************************************

//use of rest operator to handle a situation like where we don't know the number of arguments for the fuction
//... = rest op, note it looks same as spread , it get differ by their usecase

//number consist a array of number in it for any number of arguments greater than 0
// function calculateCartPrice(...number){
//     return number;
// }
// console.log(calculateCartPrice(200,300,400,500))


//in this case the value first value get in val1, then in val2 and lastly rest of the value in number
function calculateCartPrice(val1,val2,...number){

    return number;
}
// console.log(calculateCartPrice(200,300,400,500))


//passing object in the fuction
//in this kind of the function you need to check the price
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price of item in the cart is ${anyObject.price}`);
    
}

const user = {
    username : "Aviraj",
    price : 100
}

// handleObject(user)//passing a object which made outside
//directly passing the object
// handleObject({
//     username : "Aviraj",
//     price : 100
// })



//passing the array in the function
function returnSecondValue(getArray){
    return getArray[1]
}

//passing a predefine fuction
const myNewArray = [100,200,300,400]
console.log(returnSecondValue(myNewArray))
//directly passing a array
console.log(returnSecondValue([100,300,200]));

