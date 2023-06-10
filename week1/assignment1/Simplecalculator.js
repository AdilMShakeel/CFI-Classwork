var readlineSync = require('readline-sync');

// Only ask one input when performing root

console.log("(:__________Simple_Calculator__________:)");
console.log("Select the operation you want to perform");
console.log("press + for addition\n press - for subraction\n press % for modulus\n press * for multiplication\n press / for division\n press ** to add power\n press r for root");

var c = 1 / 2;

//Switch case used inorder to ask only required question according to operation being performed

var operator = readlineSync.question("Please enter what operation you want to perform:");
switch (operator) {
    case "r":
        var a = readlineSync.questionInt("Please enter the value")
        break;
    case "/":
        var a = readlineSync.questionInt("Please enter first number:")
        var b = readlineSync.questionInt("Please enter the second number:")
        break;
    case "+":
        var a = readlineSync.questionInt("Please enter first number:")
        var b = readlineSync.questionInt("Please enter the second number:")
        break;
    case "%":
        var a = readlineSync.questionInt("Please enter first number:")
        var b = readlineSync.questionInt("Please enter the second number:")
        break;
    case "*":
        var a = readlineSync.questionInt("Please enter first number:")
        var b = readlineSync.questionInt("Please enter the second number:")
        break;
    case "-":
        var a = readlineSync.questionInt("Please enter first number:")
        var b = readlineSync.questionInt("Please enter the second number:")
        break;
    case "**":
        var a = readlineSync.questionInt("Please enter first number:")
        var b = readlineSync.questionInt("Please enter the second number:")
        break;
    default:
        console.log("Invalid input")
        break;
}

//After taking input answers are again delcared using switch case again

switch (operator) {
    case "r":
        console.log(`Root of ${a} is ${a ** c} is `);
        break;
    case "+":
        console.log(`Sum of ${a} and ${b} is ${a + b}`);
        break;
    case "*":
        console.log(`Product of ${a} and ${b} is ${a * b}`);
        break;
    case "-":
        console.log(`Difference of ${b} from ${a} is ${a - b}`);
        break;
    case "/":
        console.log(`Quotient of ${a} by ${b} is ${a / b}`);
        break;
    case "**":
        console.log(`${a} power ${b} is ${a ** b}`);
        break;
    case "%":
        console.log(`Remainder of ${a} by ${b} is ${a % b} `);
        break;
    default:
        console.log("Invalid input")
        break;
}

