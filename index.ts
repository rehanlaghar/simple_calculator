#! /usr/bin/env node
import inquirer from "inquirer";

//Asking Questions from Users through Inquirer

let answers = await inquirer.prompt([
    {message :"Enter Your First Number",type: "number",name:"firstNumber"},
    {message :"Enter Your Second Number",type: "number",name:"secondNumber"},

    {   message : "Select one operator to perform operators",
         type:"list",
         name:"operator",
         choices:["Addition","Subtraction","Multiplication","Division"],
},
]);
// conditional statements If-Else

if(answers.operator === "Addition"){
console.log(answers.firstNumber+ answers.secondNumber);
}
else if(answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber);
}
console.log(answers);
