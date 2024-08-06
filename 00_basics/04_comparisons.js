//Simple comparisons
// console.log(2 > 1)//greater than
// console.log(2 >= 1)//greater than equal 
// console.log(2 <= 1)//less than equal
// console.log(2 < 1)//less than
// console.log(2 == 1)//equal to
// console.log(2 != 1)//not equal to

//trick comparisons

// console.log("2" == 2);//true
// console.log("2" > 2 );//false
// console.log("2" >= 2);//true

//As the operator convert two in to number 

//But there is the slight difference in the case of null

console.log(null == 0)//false
console.log(null > 0)//false 
console.log(null >= 0)//true

//notice in the case of the null == operator works differently than the other operator it dose not convert the null into 0 other like >,<,<=,>= convert it

//in case of undefine it gives falls in all comparisons

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);


//IMP ---------->>>> === strict equality operator

//it not only check the equlity of the value it also check the data type
console.log("2" === 2);//false
console.log(2 === 2);//true



