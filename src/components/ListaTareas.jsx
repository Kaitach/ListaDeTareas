import CartadeTareas from './CartadeTareas'
import { useContext } from "react";
import { TareasContenido} from "../context/ContenidoDeTarjetas";


export default function ListaTareas() { 
   
   const {tareas } = useContext(TareasContenido);

    if (tareas.length === 0) {
        return <h1
            className="text-white text-2xl font-bold text-center mt-4"
        >No tenemos nada para hacer?</h1>
    }

  return (
      <div className='grid grid-cols-4 gap-2'>
          {tareas.map((tareas) => (
             
              <CartadeTareas key={tareas.id} tareas={tareas} />

          ))}
    </div>
  )
}
