const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) =>
      listado.push(this._listado[key])
    );
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => (this._listado[tarea.id] = tarea));
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    // const listadoFormateado = [];
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.cyan;
      const estado = tarea.completadoEn
        ? `${"Completada".green}`
        : `${"Pendiente".red}`;
      const tareaName = ` ${idx} ${tarea.desc} :: ${estado}`;
      // listadoFormateado.push(tareaName);
      console.log(tareaName);
    });
  }
}

module.exports = Tareas;
