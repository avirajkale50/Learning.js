const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"] 

//here the array get push inside the array ..try to avoid this kind of opration
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
//still we can access the value inside array which is already indside the array
// console.log(marvel_heros[3][1]);


//it will merge elements in array up single level of depth and it return the new array but not change the existing array
// const resultArray=marvel_heros.concat(dc_heros)
// console.log(resultArray);

//concat element with spread opreator ,it get prefered as we can deal with more than two arrays
const allNewHero = [...marvel_heros,...dc_heros]
// console.log(allNewHero);


const anotherArray = [1,2,3,[4,5,[6,7],8],9]
//flat is use to take out the element which is inside array in another arrray as argument to flat we can provide the no. of depth
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

//some other methodes
console.log(Array.isArray("Aviraj"))//to check the parameter is array or not
console.log(Array.from("Hitesh"));//to convert the parameter into the array
console.log(Array.from({name : "Hitesh"}));//it directly cannot convert into array we need to specify the to make array form values or keys

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))//to make the array form the parameter





//


