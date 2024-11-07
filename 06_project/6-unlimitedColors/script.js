

//here we are making the project in which we are changing the background color with the ramdom color constantly(at the gap of one sec)
const randomColor = function(){
    const hex = "01234567890ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color+= hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){ document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null;
};
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)