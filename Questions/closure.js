// the closure is a function which return a fuction , and the returned fuction use the variable of parent function
function x(){
    let x = 123;
    return ()=>{
        console.log(x);
    }
} 

let y = x();
y();