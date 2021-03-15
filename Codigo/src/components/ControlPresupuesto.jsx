import { Fragment } from "react";
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({cantidad, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${cantidad}
            </div>
            <div className={revisarPresupuesto(cantidad, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>


     );
}

ControlPresupuesto.propTypes = {
    cantidad: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;