const { command } = require("commander");
const { default: inquirer } = require("inquirer");
const program = command();

program.description("My first Cli-application");
program.command("sayHello").action(() => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Hello there fellow developer! Could I ask for your name?",
    },
  ]);
});
