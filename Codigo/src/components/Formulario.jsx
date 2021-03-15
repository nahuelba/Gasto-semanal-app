import {Fragment, useState} from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';



const Formulario = ({setGasto, guardarCrearGasto}) => {

    const [nombregasto, setNombregasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    



    //cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //validar
        if(cantidad<1 || isNaN(cantidad) || nombregasto.trim()===''){
            setError(true);
            return;
        }

        setError(false);

        //construir gasto
        const gasto = {
            nombregasto,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        setGasto(gasto);
        guardarCrearGasto(true);

        //resetear el form
        setNombregasto('');
        setCantidad(0);
        


    }

    return ( 
        <Fragment>
            <h1>Agrega tus gastos aquí</h1>

            <form onSubmit={agregarGasto}>
                {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}
            <div className="form-group">
                <label htmlFor="">Nombre gasto</label>

                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ej. Transporte"
                    value={nombregasto}
                    onChange={e =>setNombregasto(e.target.value)}
                />
            
            </div>
            <div className="form-group">
                <label htmlFor="">Cantidad Gasto</label>

                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e =>setCantidad(parseInt(e.target.value))}                    
                />
            
            </div>

            <input type="submit" className="btn btn-primary" value="Agregar gasto"/>
            </form>

        </Fragment>



     );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;