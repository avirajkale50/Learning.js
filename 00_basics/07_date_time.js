//Dates

let myDate = new Date();
// console.log(myDate);

//Different methods

//this return the string in the India Standard Time format
// console.log(myDate.toString());

//differnt ways to display dates
//console.log(myDate.toLocaleString());//6/8/2024, 8:56:17 pm
//console.log(myDate.toDateString());//Tue Aug 06 2024


//this return the stirng int the ISO format ...not so readable
// console.log(myDate.toISOString());

//this retrun the date in the UTC format more readable
// console.log(myDate.toUTCString());

//find more about this
// console.log(myDate.toJSON());
// Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.

//returns the year
//console.log(myDate.getFullYear())

//returns the index of the month count start form the 0 that's why we add one 
//console.log(myDate.getMonth()+1)

//also other methods are there to get the month , day , date , year , time in seconds and so many other things

//typeof date is object in JS


//how can we create the date
let myCreatedDate = new Date(2023,0,23)//Mon Jan 23 2023..notice the month start form the 0
// console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date(2023,0,23,5,3,3)//23/1/2023, 5:03:00 am..notice the month start form the 0
// console.log(myCreatedDate1.toLocaleString());

//yy/mm/dd format month declearation
let myNewDate = new Date("2023-01-20")//here month start form the 01
// console.log(myNewDate.toDateString());

//mm/dd/yy format month declearation
let myNewDate1 = new Date("02-20-2024")//here month start form the 01
// console.log(myNewDate1.toDateString());


//to get the exact time in miliseconds
let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1722958693677
// console.log(myCreatedDate.getTime());//1674412200000


//this time is measure form the date 1, 1970, UTC 

//to find the date value in seconds
// console.log(Math.floor(Date.now()/1000))


//string interpolation is used to print the date in the desired way
let newDate = new Date()
console.log(` today is ${newDate.getDay()}`)//// Sunday - Saturday : 0 - 6 for the days

console.log(newDate.toLocaleString('default',{
    weekday : "long",
    timeZone:"UTC" ,
}))