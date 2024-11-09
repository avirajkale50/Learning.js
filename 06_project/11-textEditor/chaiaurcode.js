let outputField = document.getElementById("output-field");


//test function
function uppercase(){
    let inputField = document.getElementById("input-field");
    console.log(inputField)
    inputValue = inputField.value;
    console.log(inputValue);
    outputField.innerHTML = inputValue.toUpperCase();
    console.log(outputField)
}

function lowercase(){
    let inputField = document.getElementById("input-field");
    inputValue = inputField.value;
    outputField.innerHTML = inputValue.toLowerCase();
}

function capitlize(){
    let inputField = document.getElementById("input-field");
    inputValue = inputField.value;
    outputField.innerHTML = capitalizeWords(inputValue);
}

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


function bold(){
    let inputField = document.getElementById("input-field");
    inputValue = inputField.value;
    outputField.innerHTML =  "<b>" + inputValue + "</b>";
}

function italic(){
    let inputField = document.getElementById("input-field");
    inputValue = inputField.value;
    outputField.innerHTML =  "<i>" + inputValue + "</i>";
}

function underline(){
    let inputField = document.getElementById("input-field");
    inputValue = inputField.value;
    outputField.innerHTML =  "<u>" + inputValue + "</u>";
}