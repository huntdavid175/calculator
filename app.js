const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

numbers.forEach(function(number){
    number.addEventListener("click",function(e){
        display.textContent += e.target.textContent
    })
});




// functions for operations  

function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    return (a / b);
}