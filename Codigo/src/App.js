import {useState, useEffect} from 'react';
import Pregunta from "./components/pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";



function App() {
  
  const [cantidad, guardarCantidad] = useState(0);
  
  const [restante, setRestante] = useState(0);


  const [mostrarpregunta, setMostrarpregunta] = useState(true);


  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante

  useEffect(() => {
    if(crearGasto){
      //agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //resetear a false
      guardarCrearGasto(false);
    }
    
    
  }, [gasto, crearGasto, gastos, restante])




  return (
    <div className="jumbotron bg-info">
      <h1 className="text-white text-center">Gasto semanal</h1>
    <div className="container bg-white border-radius py-3">
    
  
      
      {mostrarpregunta ? 
      (
      <Pregunta 
        guardarCantidad={guardarCantidad}
        setRestante={setRestante}
        setMostrarpregunta={setMostrarpregunta}
      />
      ) 
      :
  (
      
      

      <div className="row">
        <div className="col">
        <Formulario
          setGasto={setGasto}
          guardarCrearGasto={guardarCrearGasto}
        />
        </div>
        <div className="col">
        <Listado
           gastos={gastos}
        />

        <ControlPresupuesto 
          cantidad={cantidad}
          restante={restante}
        />
        </div>
      </div>
)
}
    </div>
    </div>
    
  );
}

export default App;
