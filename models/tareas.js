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

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => (this._listado[tarea.id] = tarea));
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this._showTareas(this.listadoArr);
  }

  listarPendientesCompletadas(completadas = true) {
    var tareas = completadas
      ? this.listadoArr.filter((t) => t.completadoEn)
      : this.listadoArr.filter((t) => !t.completadoEn);

    this._showTareas(tareas, completadas);
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }

  _showTareas(tareas, completadas = false) {
    console.log("");
    tareas.forEach((tarea, i) => {
      const idx = `${i + 1}.`.cyan;
      const estado = tarea.completadoEn
        ? `${"Completada".green}`
        : `${"Pendiente".red}`;
      const tareaName = `${idx} ${tarea.desc} :: ${
        completadas ? tarea.completadoEn.cyan : estado
      }`;
      console.log(tareaName);
    });
  }
}

module.exports = Tareas;
