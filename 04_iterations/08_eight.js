//reduce 
//reduce with normal fuction
const myNums = [ 1,2,3]

// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`accumulator ${acc} and curval : ${curval}`)
//     return acc + curval;
// },0)//here 0 is the initial value for the accumaltor

//reduce with arrow fuction
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "mobile dev course",
        price:5999
    },
    {
        itemName : "python course",
        price:2999
    },
    {
        itemName : "js course",
        price:0
    },
    {
        itemName : "data science",
        price:12999
    }
]

const totalprice = shoppingCart.reduce((acc, curr) => acc + curr.price,0)
console.log(totalprice);
