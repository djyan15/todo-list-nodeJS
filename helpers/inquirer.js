const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "rawlist",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: ["opt1", "opt2", "opt3"],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".cyan);
  console.log("  Seleccione una opción".cyan);
  console.log("=========================\n".cyan);

  const opt = await inquirer.prompt(menuOpts);

  return opt;
};

module.exports = inquirerMenu;
