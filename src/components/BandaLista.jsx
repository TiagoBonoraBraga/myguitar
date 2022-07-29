import React, { useState } from "react";
import { bandas } from "../mocks/bandas.js";
import "./BandaLista.css";
function BandaLista() {
  const [bandaSelecionada, setBandaSelecionada] = useState({});

  const adicionarItem = (bandaIndex) => {
    const banda = { [bandaIndex]: Number(bandaSelecionada[bandaIndex] || 0) +1 }
    setBandaSelecionada({ ...bandaSelecionada, ...banda});
}

  return (
    <div className="BandaLista">
      {bandas.map((banda, index) => (
        <div className="BandaListaItem" key={`BandaListaItem-${index}`}>
          <span className="BandaListaItem__badge"> {bandaSelecionada[index] || 0} </span>
          <div>
            <div className="BandaListaItem__titulo">{banda.titulo}</div>
            <div className="BandaListaItem__descricao">{banda.descricao}</div>
            <div className="BandaListaItem__acoes Acoes">
              <button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>
                adicionar
              </button>
            </div>
          </div>
          <img className="BandaListaItem__foto" src={banda.foto} alt="" />
        </div>
      ))}
    </div>
  );
}

export default BandaLista;
