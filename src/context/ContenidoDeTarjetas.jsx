import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tareas";

export const TareasContenido = createContext();

export  function TareasContenidoProvider(props) {
  const [tareas, setTareas] = useState([]);

  function CrearTarea(titulo) {
    setTareas([
      ...tareas,
      {
        titulo: titulo.titulo,
        id: tareas.length + 1,
        descripcion: titulo.descripcion,
        prioridad: titulo.prioridad,
      },
    ]);
  }

  function BorrarTareas(tareaId) {
    let borrar = prompt("¿Estas seguro de eliminar esta tarea?");
    if (borrar === "si" || borrar === "Si" || borrar === "SI") {
      setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
    }


  }

  useEffect(() => {
    setTareas(data);
  }, []);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  return (
    <TareasContenido.Provider
      value={{
        tareas,
        CrearTarea,
        BorrarTareas,
      }}
    >
      {props.children}
    </TareasContenido.Provider>
  );
  
}
