import { useContext } from "react";
import { TareasContenido} from "../context/ContenidoDeTarjetas";

function CartadeTareas({ tareas }) {

  const {BorrarTareas} = useContext(TareasContenido);



  return (
    <div className="bg-gray-800 text-white p-4  rounded-md" >
      <h1 className="text-xl font-bold capitalize">{tareas.titulo}</h1>
      <p className="text-gray-500 text-sm">{tareas.descripcion}</p>
      <button  className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => BorrarTareas(tareas.id)} > Eliminar</button>
    </div>
  );
}

export default CartadeTareas;
