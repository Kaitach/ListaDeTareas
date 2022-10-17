import { useState, useContext } from "react";
import { TareasContenido} from "../context/ContenidoDeTarjetas";

export default function FormularioTareas() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const {CrearTarea} = useContext(TareasContenido);

  

  const manejoFormulario = (e) => {
    if (titulo === "" || descripcion === "") {
      alert("No puedes dejar campos vacios");
    } else {
      e.preventDefault();
      CrearTarea({
        titulo,
        descripcion,
      });
      setTitulo("");
      setDescripcion("");
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejoFormulario} className="bg-slate-900  p-10 mb-4">
        <h1
          className="text-2xl font-bold text-center text-white mb-4"
        >Crear Tareas</h1>
        <input
        className="bg-slate-800 text-white w-full p-2 rounded-md mb-4 text-center"
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitulo(e.target.value);
        }}
        value={titulo}
        autoFocus={true}
      />
        <textarea
      className="bg-slate-800 text-white w-full p-2 rounded-md mb-4 text-center"
        placeholder="Escribe una descripcion"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
        ></textarea>
        
        
        <button
         className="bg-red-600 px-8 py-1 rounded-md mt-1 hover:bg-red-300 text-center col-span-3"
        >Agregar</button>
    </form>
    </div>
  );
}
