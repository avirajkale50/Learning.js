const typedTextSpan = document.querySelector('.typed-text');
console.log(typedTextSpan)
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'Mast', 'Dhinchak', 'Weird'];
//we are writing function whihch will type the letter one by one and when the word is done typing the it will transition to erase function
let wordIndex = 0;
let letterIndex = 0;
function type() {
    word = words[wordIndex];
    typedTextSpan.innerHTML += word[letterIndex++];
    if(letterIndex <= word.length - 1){
        setTimeout(type,100)
    }else{
        console.log(word[letterIndex])
        setTimeout(erase,500);
        
    }

}
//this function will erase the word and transition to next word
function erase() {
    //if condition for removing the letter one by here the logic is like we are substituted the word by its substring so it appear like we removed the letter
    if(letterIndex > 0){
        letterIndex--;
        typedTextSpan.innerHTML = word.substring(0, letterIndex);
        setTimeout(erase,100)
    }else{
        //checking for the Array size and incrementing the next word and if we encounter the end trastion back to the first word
        if(wordIndex < words.length - 1){
            wordIndex++;
        }else{
            wordIndex = 0;
        }
        setTimeout(type,500);
    }
}

type()

//even we can try implementing this with setInterval
//The main difference in the setInterval and setTimeout is , the setInterval execute function after a specific interval repeatedly and setTimeout execute the function after a specific time