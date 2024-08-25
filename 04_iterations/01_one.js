//there are different types of the loop like for , while and do_while

//for loop
//syntax 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
// }

//example
for (let index = 0; index <= 10; index++) {
    // console.log(index);      
}//{} this represent the scope ,hence the element inside it not access outside of it
//first the index get intialized 
//then the condition get check
//then loop get executed and then the statment for the increment or decrement get executed


//example
// for (let i = 0; i < 10; i++) {
//     if (i == 5 ) {
//         console.log("5 is best number");
//     }
//     console.log(i);
// }

//nested loop
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and Outer loop valuer ${i}`);
        //padhe
        //console.log(`${i} * ${j} = ${i*j}`);
        
    }
}


let myArray = ["ironman","thor","hulk","spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
//note : if you try to access the element index which is not in the array then you get undefined not like element out of bound which are there in other programming languages
//Also be aware about the infinite loop , that's why increment or decrement important

//IMP keywords
// 1. break
// 2. continue
//example for the break
//get out of the loop or we can say that break the loop
for (let i = 1; i < 20; i++) {
    if(i == 5) {
        console.log('5 detected');
        break
    };
    console.log(`value of i is ${i}`)
}

//example for the continue
//skip one iteration 
for (let i = 1; i < 20; i++) {
    if(i == 5) {
        console.log('5 detected');
        continue
    };
    console.log(`value of i is ${i}`)
}


