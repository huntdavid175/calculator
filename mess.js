const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector("#equal");
const clear = document.querySelector(".clear");
const boxes = document.querySelectorAll(".box");
let temp;
let op;

numbers.forEach(function (number) {

	number.addEventListener("click", function (e) {
		removeSelected()
		e.target.classList.add("selected")
		displayToScreen(e);
	});
});

operators.forEach(function (operator) {
	operator.addEventListener("click", function (e) {
		removeSelected();
		e.target.classList.add("selected")
		chooseOperator(e);
	});
});

equal.addEventListener("click", function (e) {
	operate(temp, op);
});

clear.addEventListener("click", clearchooseOperator);

// Display to screen function
function displayToScreen(e) {

	if (e.target.textContent != "."){
		if (display.textContent == "0") {
			display.textContent = "";
			display.textContent += e.target.textContent;
			// if(op){
			// 	operate(temp,op)
			// 	// // console.log(op)
			// }
		} else {
			display.textContent += e.target.textContent;
			// if(op){
			// 	operate(temp,op)
			// 	// console.log(op)
			// 	// console.log(temp)
			// }
		}
	}
	
	if (e.target.textContent == "."){
		if(!display.textContent.includes(".")){
			display.textContent += e.target.textContent
		}
		else{
			return
		}
	}
}

// functions for operations
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function chooseOperator(e) {
	temp = display.textContent;
	op = e.target.textContent;
	display.textContent = "";
	console.log(op,temp)
}

function operate(temp, op) {
	temp = parseFloat(temp);
	if (op == "x") {
		display.textContent = multiply(temp, parseFloat(display.textContent));
		console.log(temp,display.textContent,op)
	}
	if (op == "+") {
		display.textContent = add(temp, parseFloat(display.textContent));
		console.log(temp,display.textContent,op)
	}
	if (op == "-") {
		display.textContent = subtract(temp, parseFloat(display.textContent));
		console.log(temp,display.textContent,op)
	}
	if (op == "/") {
		display.textContent = divide(temp, parseFloat(display.textContent));
		console.log(temp,display.textContent,op)
	}

}

// function to clear

function clearchooseOperator() {
	display.textContent = 0;
	temp = undefined;
	op = undefined;
	removeSelected()
}

// function to remove selected class 

function removeSelected(){
	boxes.forEach(function(box){
		box.classList.remove("selected")
	})
}

// console.log(add(1.3,1))