import { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';




const Pregunta = ({guardarCantidad, setRestante, setMostrarpregunta}) =>{

    //creamos el state
    const [presupuesto, setPresupuesto] = useState(0)

    //actualizamos state
    const actualizarPresupuesto = e =>{

        setPresupuesto(parseInt(e.target.value));

    }

    //errores
    const [errores, setErrores] = useState(false)
    
    const submitPregunta = e => {
        e.preventDefault();

        
        //validar presupuesto
        if(presupuesto<1 || isNaN(presupuesto)){
            setErrores(true);
            return;
        }
        //si se pasa la validación
        setErrores(false);
        
        //pasamos a App.js
        guardarCantidad(presupuesto);
        setRestante(presupuesto);
        setMostrarpregunta(false);

        }
    
    

    

    return (

    <div className="row">
        <div className="col-md-8 offset-md-2 text-center">

            <div className="container py-3">

    {errores ? <Error mensaje="El presupuesto es incorrecto"/> : null}
            
                <h2>Coloca tu presupuesto</h2>

                <form
                    onSubmit={submitPregunta}
                >
                    <div className="form-group">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Coloca tu presupuesto" 
                            onChange={actualizarPresupuesto}
                        
                        />
                        
                    </div>

                    <input type="submit" className="btn btn-primary mb-3" value="Definir presupuesto" />


                </form>
            </div>

        </div>
    </div>


    );
}


Pregunta.propTypes = {
    guardarCantidad: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarpregunta: PropTypes.func.isRequired
}
 

export default Pregunta;