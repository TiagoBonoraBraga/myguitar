import "./Navbar.css";
// import sacola from "assets/icons/sacola.svg";
import mais from "assets/icons/mais.svg"

function Navbar({createBanda}) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <span className="Logo__titulo"> My Guitar - Bands Store</span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button type="button" className="Opções__banda Banda" onClick={() => createBanda()}>
            <img src={mais} width="40px" className="Banda__icone" alt="Adicionar Banda" />
          </button>
          {/* <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
