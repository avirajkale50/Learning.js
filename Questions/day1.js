//What is a Closure?
// the closure is a function which return a fuction , and the returned fuction use the variable of parent function
function x(){
    let x = 123;
    return ()=>{
        console.log(x);
    }
} 

let y = x();
y();

//UI/UX principle

/*
Fonts play a mojor role in you website , which effect website theme and fill

Types of Fonts:
1.Sans Serif - Professional use fonts / Curve Edges
2.Serif - Sharp Edge /Ancient Use
3.HandWritten - Handwritten
4.Script - Looks like handwritten
5.Display - Looks like handwritten
6.Monospaced - Constant Spacing
*/

// A cool website to refer - https://www.rejouice.com/