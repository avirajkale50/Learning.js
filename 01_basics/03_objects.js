//Define object with constructor
const tinderUser = new Object();//singleton object
// console.log(tinderUser);

//object can also define in this way with no difference except of singleton and non-singleton
tinderUser.id = "user123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//Nested object
const regularUser = {
    email :"avi@google.com",
    fullname :{
        userfullname:{
            firstname : "Aviraj",
            lastname : "Kale"
        }
    }
}

//to access nested values
// console.log(regularUser.fullname?.userfullname.firstname);// ? this syntax is for checking value is there or not


const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}


//combine object

//store the object inside the object
// const obj3 ={obj1,obj2}
// console.log(obj3);

//to merge the values in the single object

//in this syntax obj1 is also get change
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

//in this syntax object not get change as it is not target object
//const obj3 = Object.assign({},obj1,obj2)//{} - target , obj1,obj2- source
// console.log(obj3);

//with the spread operator ...
const obj3 = {...obj1,...obj2}
// console.log(obj3);

//Note : mostly database return the array of the object

const user = [
    {
        id : 1,
        email:"avi@google.com"
    },
    {
        id : 1,
        email:"avi@google.com"
    },
    {
        id : 1,
        email:"avi@google.com"
    },
    {
        id : 1,
        email:"avi@google.com"
    }
]
//to access the this kind of object in the array
// console.log(user[1].email);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));//returns the array of the key
// console.log(Object.values(tinderUser));//returns array of the values
// console.log(Object.entries(tinderUser))// output : [ [ 'id', 'user123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLogged'))

//destructring of object

const course ={
    coursename : "JS in hindi",
    price :  999,
    courseInstructor : "hitesh"
}

//this is use to make your code more clean
//so you dont need to write course.courseInstructor or other element to access there values so many time
const {courseInstructor} = course
console.log(courseInstructor);
//to shorten its name
const {courseInstructor:instrctor} = course
console.log(instrctor)
//this is called destructring ,used in react

//API - application programming interface

//JSON - java script object notation

// {
//     "name":"hitesh",
//     "price":"free"
// }


//api response can also in the array format
//we can use the json formator to easily understand the api response

