const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift by apple"
}

//for in loop
for (const key in myObject) {
   //console.log(key ," shortcut is for ",myObject[key]);//to print the keys and value
}
//this will work for object and for of is not work

let myArray = ['js','cpp','java','rb','py','swift']
for (const key in myArray) {
    //console.log(key);//it output the index of the element 
    // console.log(myArray[key]);
    
}

//Maps
const map = new Map();
map.set('IN',"India")
map.set('BR',"Brazil")
map.set('FR',"France")

for (const key in map) {
    console.log(key); 
}//for in is not itertable on the map

