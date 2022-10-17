import ListaTareas from "./components/ListaTareas";
import FormularioTareas from "./components/FormularioTareas";

function App() { 
  return (
    < main className="bg-zinc-900 h-screen" >
      <div className="container mx-auto p-4">
      <FormularioTareas  />
        <ListaTareas />
      </div>

     
    </main >
  );
}

export default App;
