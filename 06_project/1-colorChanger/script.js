const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    // console.log(button)
    button.addEventListener('click',(e)=>{
        //returning the pointer event
        console.log(e)
        //return the element of the event
        console.log(e.target)
        //this way we can also apply the fuctionality of changing color of the background
        //the way i applied it

        // body.style.backgroundColor = e.target.id;


        //the chai or code applied it

        

    })
})