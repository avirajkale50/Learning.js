//map
//basic example
const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]
//const newNums = myNumbers.map((num)=> num +10)//like filter and for each but return the value and perform the operation
//console.log(newNums);

//chaining
const newNums = myNumbers
                    .map((num) => num *10)//here we chain another map to it
                        .map((num)=>num +1)//it takes input form the function before it
                            .filter((num)=> num >50)
//we can also add other fuction like filter
console.log(newNums);
//it use in various places


