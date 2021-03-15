import Gasto from "./Gasto";
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return ( 
        <div>
        <h1>Listado</h1>
        <ul class="list-group">

        {gastos.map(gasto =>(
            <Gasto
                key={gasto.id}
                gasto={gasto}
            />
        ))}
        </ul>
    </div>
     );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;