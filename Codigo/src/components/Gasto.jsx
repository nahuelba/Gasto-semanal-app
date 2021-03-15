import PropTypes from 'prop-types';


const Gasto = ({gasto}) => {
    return ( <li className="list-group-item d-flex justify-content-between align-items-center">
        <p>{gasto.nombregasto}</p>
        <span class="badge badge-primary badge-pill">${gasto.cantidad}</span>
    </li> );
}
 
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto;