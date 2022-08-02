import "./Navbar.css";
import sacola from "assets/icons/sacola.svg";

function Navbar() {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <span className="Logo__titulo"> My Guitar - Bands Store</span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
