#!/usr/bin/env node

const inquirer = require("inquirer");

function addition(a, b) {
  console.log(`result: ${a + b}`);
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "continue",
        message: "Do you want to continue with this result?",
        default: true,
      },
    ])
    .then((answer) => {
      if (answer.continue) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "num3",
              message: "Enter the number:",
              validate: function (value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";
              },
              filter: Number,
            },
          ])
          .then((answer) => {
            addition(a + b, answer.num3);
          });
      }
    });
}

function subtraction(a, b) {
  console.log(`result: ${a - b}`);
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "continue",
        message: "Do you want to continue with this result?",
        default: true,
      },
    ])
    .then((answer) => {
      if (answer.continue) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "num3",
              message: "Enter the number:",
              validate: function (value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";
              },
              filter: Number,
            },
          ])
          .then((answer) => {
            subtraction(a - b, answer.num3);
          });
      }
    });
}

function multiplication(a, b) {
  console.log(`result: ${a * b}`);
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "continue",
        message: "Do you want to continue with this result?",
        default: true,
      },
    ])
    .then((answer) => {
      if (answer.continue) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "num3",
              message: "Enter the number:",
              validate: function (value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";
              },
              filter: Number,
            },
          ])
          .then((answer) => {
            multiplication(a * b, answer.num3);
          });
      }
    });
}

function division(a, b) {
  if (b === 0) {
    console.log("invalid input cant divide by zero");
    return;
  }

  console.log(`result: ${a / b}`);
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "continue",
        message: "Do you want to continue with this result?",
        default: true,
      },
    ])
    .then((answer) => {
      if (answer.continue) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "num3",
              message: "Enter the number:",
              validate: function (value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";
              },
              filter: Number,
            },
          ])
          .then((answer) => {
            division(a / b, answer.num3);
          });
      }
    });
}


function calculator() {
  console.log("Hi Welcome");
  inquirer
    .prompt([
      {
        type: "input",
        name: "num1",
        message: "Enter the first number:",
        validate: function (value) {
          const valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number";
        },
        filter: Number,
      },
      {
        type: "list",
        name: "operation",
        message: "Choose operation:",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      },
      {
        type: "input",
        name: "num2",
        message: "Enter the second number:",
        validate: function (value) {
          const valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number";
        },
        filter: Number,
      },
    ])
    .then((answers) => {
      switch (answers.operation) {
        case "Addition":
          addition(answers.num1, answers.num2);
          break;

        case "Subtraction":
          subtraction(answers.num1, answers.num2);
          break;

        case "Multiplication":
          multiplication(answers.num1, answers.num2);
          break;

        case "Division":
          if (answers.num2 === 0) {
            result = "Cannot divide by zero";
          } else {
            division(answers.num1, answers.num2);
          }
          break;

        default:
          console.log("Invalid operation");
      }
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    });
}

calculator();
