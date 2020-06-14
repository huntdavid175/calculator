const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector("#equal");
const clear = document.querySelector(".clear");
const boxes = document.querySelectorAll(".box");
let state = 0;
let temp;
let op;
let sol;

numbers.forEach(function (number) {
	number.addEventListener("click", function (e) {
		removeSelected();
		e.target.classList.add("selected");
		showDisplay(e);
	});
});

operators.forEach(function (operator) {
	operator.addEventListener("click", function (e) {
		removeSelected();
		e.target.classList.add("selected");
		chooseOperator(e);
		console.log(op);
	});
});

clear.addEventListener("click", clearCalc);
equal.addEventListener("click", function () {
	if (sol) {
		operate(sol, op);
		display.textContent = sol;
		op = undefined;
	} else {
		operate(temp, op);
		display.textContent = sol;
		op = undefined;
	}
});

// show display function

function showDisplay(e) {
	if (e.target.textContent == ".") {
		if (!display.textContent.includes(".")) {
			display.textContent += e.target.textContent;
		}
	}
	if (e.target.textContent != ".") {
		if (state == 0) {
			state++;
			display.textContent = "";
			display.textContent = e.target.textContent;
		} else {
			display.textContent += e.target.textContent;
			state++;
		}
	}
}

// choose operator function

function chooseOperator(e) {
	if (sol) {
		operate(sol, op);
		display.textContent = sol;
		op = e.target.textContent;
		state = 0;
	} else {
		if (temp) {
			operate(temp, op);
			op = e.target.textContent;
			display.textContent = sol;
			state = 0;
		} else {
			op = e.target.textContent;
			temp = display.textContent;
			state = 0;
			// display.textContent = ""
		}
	}
}
//
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

function operate(temp, op) {
	temp = parseFloat(temp);
	if (op == "x") {
		sol = multiply(temp, parseFloat(display.textContent));
		console.log(sol);
		// console.log(temp,display.textContent,op)
	}
	if (op == "+") {
		sol = add(temp, parseFloat(display.textContent));
		console.log(sol);
		// console.log(temp,display.textContent,op)
	}
	if (op == "-") {
		sol = subtract(temp, parseFloat(display.textContent));
		console.log(sol);
		// console.log(temp,display.textContent,op)
	}
	if (op == "/") {
		sol = divide(temp, parseFloat(display.textContent));
		console.log(sol);
		// console.log(temp,display.textContent,op)
	}
}

// function to clear

function clearCalc() {
	display.textContent = 0;
	temp = undefined;
	op = undefined;
	state = 0;
	sol = undefined;
	removeSelected();
}

// function to remove selected class

function removeSelected() {
	boxes.forEach(function (box) {
		box.classList.remove("selected");
	});
}
