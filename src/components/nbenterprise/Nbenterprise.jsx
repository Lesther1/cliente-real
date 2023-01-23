import { NavLink } from "react-router-dom";
import "./Nbenterprise.css";

function Nbenterprise() {
  return (
    <div className="main-container">
      <div className="container-explain">
        <h4>Soportes de tv</h4>
      </div>
      <div className="container-item">
        <NavLink to="/condicionview">Equipo</NavLink>
        <NavLink to="/condicionview">Nosotros</NavLink>
      </div>
    </div>
  );
}

export default Nbenterprise;
