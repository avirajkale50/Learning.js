//high order loop
//these types of loops mainly used for the array but it can also use for other objects
//for of

//array ["","",""]
//object inside the array [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}
const greetings = "Hello Worlds";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();
map.set('IN',"India")
map.set('BR',"Brazil")
map.set('FR',"France")

// console.log(map);

for (const key of map) {
    // console.log(key);
}//it returns the arrays of the key value pairs
for (const [key,value] of map) {
    // console.log(key,"-",value);   
}


//for objects

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
// for (const [key,value] of myObjectṇ) {
//     console.log(key,"-",value);   
// }
//this gives you error as the object is not iteratable with the forof loop


