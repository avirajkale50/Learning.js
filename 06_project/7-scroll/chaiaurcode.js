//here we implementing the scroll animation on our page

//here we have the progress bar and we want to change its width as we scroll

//find track the scroll event 
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
let currentScrollPosition = 0;
let totalScrollableHeight = getScrollHeight() - window.innerHeight;
let ratioOftatolbyCurrent = 0;

//selecting the div
let progressbar = document.querySelector(".progress")
console.log(progressbar)
addEventListener("scroll", (event) => {
    currentScrollPosition = window.scrollY;
    // console.log(currentScrollPosition);
    // console.log(totalScrollableHeight);
    ratioOftatolbyCurrent = (currentScrollPosition/totalScrollableHeight) * 100;
    // console.log(ratioOftatolbyCurrent)
    progressbar.style.width = ratioOftatolbyCurrent + "%";
    // console.log(progressbar.style.width)
});



//find the scroll position and postion off actual scrollabe width and set the width of scrollbar