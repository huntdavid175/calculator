const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector("#equal")
console.log(equal)
let temp;
let op;

numbers.forEach(function(number){
    number.addEventListener("click",function(e){
        displayToScreen(e)
        
    })
});

operators.forEach(function(operator){
    operator.addEventListener("click",function(e){
        calc(e)
    })
})

equal.addEventListener("click",function(e){
    operate(temp,op)
    // console.log(op)
})


// Display to screen function 
function displayToScreen(e){
    if(display.textContent == "0"){
        display.textContent = ""
        display.textContent += e.target.textContent
    }
    else{
        display.textContent += e.target.textContent
    }
}

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



function calc(e){
   temp = display.textContent;
   op = e.target.textContent;
   display.textContent = ""
}

function operate(temp,op){
    temp = parseInt(temp);
    if (op == "x"){
        display.textContent = multiply(temp,parseInt(display.textContent))
    }
    if(op == "+"){
        display.textContent = add(temp,parseInt(display.textContent))
    }
    if(op == "-"){
        display.textContent = subtract(temp,parseInt(display.textContent))
    }
    if(op == "/"){
        display.textContent = divide(temp,parseInt(display.textContent))
    }
}