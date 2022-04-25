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

//Function that takes three parameters
function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "&radic") {
    return Math.pow(num1, 1 / 2);
  } else {
    return "error";
  }
}

console.log(calculator(1, "+", 2));
