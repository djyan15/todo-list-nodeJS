const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".cyan} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".cyan} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".cyan} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".cyan} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".cyan} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".cyan} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".cyan} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".cyan);
  console.log("  Seleccione una opción".white);
  console.log("=========================\n".cyan);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const pausa = async () => {
  console.log("\n");
  await inquirer.prompt([
    {
      type: "input",
      name: "continuar",
      message: `\n Presione ${"ENTER".cyan} para continuar`,
    },
  ]);
};

const leerInput = async (message) => {
  const question = {
    type: "input",
    name: "desc",
    message,
    validate(value) {
      if (value.length === 0) {
        return "Por favor ingrese un valor";
      }
      return true;
    },
  };

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = { inquirerMenu, pausa, leerInput };
