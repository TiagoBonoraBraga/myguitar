import React, { useState } from "react"; //importando o usestate
import { bandas } from "mocks/bandas.js";
import "./BandaLista.css";
function BandaLista() {
  const [bandaSelecionada, setBandaSelecionada] = useState({}); // dentro do colchete bandaSelecionada é o valor atual e setBandaSelecionada é a função q vai auterar o valor atual q recebe o valor inicial do state q no caso é vazio pois ainda nao foi selecionada a banda

  const adicionarItem = (bandaIndex) => {
    const banda = {
      [bandaIndex]: Number(bandaSelecionada[bandaIndex] || 0) + 1,
    }; //um objeto q recebe - [bandaindex] é a paleta selecionada e o resto é q quantidade d x q foi selecionada, pega o valor atual da paleta q é 0 e vai incrementar o numero 1 a cada clicada e somando +1
    setBandaSelecionada({ ...bandaSelecionada, ...banda }); //passa a paletaselecionada  e acrescenta o click, apos é só criar a config do botao abaixo e depois criar o span para modificar o valor dos clicks
  };

  const removerItem = (bandaIndex) => {
    const banda = {
      [bandaIndex]: Number(bandaSelecionada[bandaIndex] || 0) - 1,
    };
    setBandaSelecionada({ ...bandaSelecionada, ...banda });
  };

  // possue dois parametros a 1° a condição e 2° a index da banda selecionada
  //se o canRender for true ele renderiza o span senao não
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="BandaListaItem__badge"> {bandaSelecionada[index]} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        remover
      </button>
    );

  return (
    <div className="BandaLista">
      {bandas.map((banda, index) => (
        <div className="BandaListaItem" key={`BandaListaItem-${index}`}>
          {badgeCounter(bandaSelecionada[index], index)}
          <div>
            <div className="BandaListaItem__titulo">{banda.titulo}</div>
            <div className="BandaListaItem__descricao">{banda.descricao}</div>
            <div className="BandaListaItem__acoes Acoes">
              <button
                className={`Acoes__adicionar ${
                  !bandaSelecionada[index] && "Acoes__adicionar--preencher"
                }`} //mudar o tamanho do botao com click
                onClick={() => adicionarItem(index)} //add o index da paleta e ativa a função paraadd item passando o index da banda selecionada.
              >
                adicionar
              </button>
              {removeButton(bandaSelecionada[index], index)}
            </div>
          </div>
          <img className="BandaListaItem__foto" src={banda.foto} alt="" />
        </div>
      ))}
    </div>
  );
}

export default BandaLista;
