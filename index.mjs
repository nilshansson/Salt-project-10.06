import { Command } from "commander";
import inquirer from "inquirer";

const program = new Command();

program
  .description("My first CLI application")
  .command("sayHello")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message:
            "Hey there cowboy! I'm the sheriff in town, could I ask for your name?",
        },
      ])
      .then((answer) => {
        console.log(`Howdy ${answer.name}! Welcome to Amarillo, Texas!`);
      });
  });

program.parse(process.argv);
