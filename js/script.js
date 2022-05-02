/*
			1. User enters the first number (could be multi-digit)
				a. String concatenation
			2. User presses an operation (addition, subtraction, multiplication, or division)
			3. User enters the second number (could be multi-digit)
			4. User presses = button to see the result
			5. User presses AC button to clear the display (show 0)
		    */

/*
			1. Make 'display' variable
			2. Save 'display' into 'num1' 
			3. Clear 'display' variable
		    */

//Select elements
const output = document.querySelector("#text-output");
let clear = document.getElementById("clear");

function display(x) {
  output.innerHTML += x;
}

function calculate() {
  let screen = [];

  if (output.innerHTML.includes("+")) {
    screen = output.innerHTML.split("+");
    return Number(screen[0]) + Number(screen[1]);
  }
  if (output.innerHTML.includes("-")) {
    screen = output.innerHTML.split("-");
    return Number(screen[0]) - Number(screen[1]);
  }
  if (output.innerHTML.includes("*")) {
    screen = output.innerHTML.split("*");
    return Number(screen[0]) * Number(screen[1]);
  }
  if (output.innerHTML.includes("/")) {
    screen = output.innerHTML.split("/");
    return Number(screen[0]) / Number(screen[1]);
  }
  if (output.innerHTML.includes("√")) {
    screen = output.innerHTML.split("√");
    return Math.sqrt(Number(screen[0]));
  }
}

function equal() {
  let x = calculate();
  output.innerHTML = x;
}

//Clear function
clear.addEventListener("click", () => {
  output.innerHTML = "";
});



// let buttons = document.querySelectorAll(".btn");
// let operator = document.querySelectorAll('.btn1');

// //Calculator display
// let display = [];

// // // //Clear function
// clear.addEventListener("click", () => {
//   display = [""];
//   output.innerHTML = 0;
// });

// //Display the value of each button on click

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.className.match("btn2")) {
//       display.push(button.value);
//       output.innerHTML = display.join("");
//       console.log(output.innerHTML);
//     }

//   });
// });

//Function that takes three parameters
// function calculator(num1, operator, num2) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else if (operator === "&radic") {
//     return Math.pow(num1, 1 / 2);
//   } else if (operator === "^") {
//     return Math.pow(num1, num2);
//   } else {
//     return "Please provide the correct operator";
//   }
// }

// console.log(calculator(1, "+", 2));
