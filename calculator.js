import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "num1", },
    { message: "Enter second number", type: "number", name: "num2", },
    {
        message: "Select an operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addtion", "Subtraction", "Multiplication", "Division"],
    }
]);
console.log(answers);
if (answers.operator == "Addtion") {
    console.log(answers.num1 + answers.num2);
}
else if (answers.operator == "Subtraction") {
    console.log(answers.num1 - answers.num2);
}
else if (answers.operator == "Multiplication") {
    console.log(answers.num1 * answers.num2);
}
else if (answers.operator == "Division") {
    console.log(answers.num1 / answers.num2);
}
else {
    console.log("Enter valid operator!");
}
