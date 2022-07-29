import { bandas } from "../mocks/bandas.js";
import "./BandaLista.css";
function BandaLista() {
  return (
    <div className="BandaLista">
      {bandas.map((banda, index) => (
        <div className="BandaListaItem">
          <div>
            <div className="BandaListaItem__titulo">{banda.titulo}</div>
            <div className="BandaListaItem__descricao">
              {banda.descricao}
            </div>
            <div className="BandaListaItem__acoes Acoes">
              <button className="Acoes__adicionar Acoes__adicionar--preencher">
                adicionar
              </button>
            </div>
          </div>
          <img
            className="BandaListaItem__foto"
            src={banda.foto}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default BandaLista;
