//What is the Synchronous and Asynchronous part in the javascript 

//Synchronous
//The line of code which execute one after another , that means next line wait for previous line to execute(Blocking in nature)
//There is a main stack for execution of this type of code where these operation are store and executed one by one
console.log("Hey,")
console.log("Hello,Buddy")

//Asynchronous
//The line of code is not execute one by one , also it is non blocking in nature 
//There is side stack for this kind of the operation 

setTimeout(()=>{
    console.log("This execute after a sec")
},1000)

setTimeout(()=>{
    console.log("This still execute later even timeout is 0")
},0)
console.log("This still execute early")

//UX/UI tips : Be aware about the trends in the industry. You can refer different websites and the youtube channels which follow and inform about these types of trends like,https://www.webfx.com/blog/web-design/modern-web-design/

//Some incredible website to refer : https://showcase.refokus.com/,https://www.refokus.com/