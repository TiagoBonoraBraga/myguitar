import React, { useState, useEffect} from "react"; //importando o usestate
import "./BandaLista.css";
import BandaListaItem from "components/BandaListaItem/BandaListaItem";
import {BandaService} from "services/BandaService"
function BandaLista() {
  const [bandas, setBandas] = useState([])
  const [bandaSelecionada, setBandaSelecionada] = useState({}); // dentro do colchete bandaSelecionada é o valor atual e setBandaSelecionada é a função q vai auterar o valor atual q recebe o valor inicial do state q no caso é vazio pois ainda nao foi selecionada a banda

  const adicionarItem = (bandaIndex) => {
    const banda = {
      [bandaIndex]: Number(bandaSelecionada[bandaIndex] || 0) + 1,
    }; //um objeto q recebe - [bandaindex] é a banda selecionada e o resto é q quantidade d x q foi selecionada, pega o valor atual da paleta q é 0 e vai incrementar o numero 1 a cada clicada e somando +1
    setBandaSelecionada({ ...bandaSelecionada, ...banda }); //passa a paletaselecionada  e acrescenta o click, apos é só criar a config do botao abaixo e depois criar o span para modificar o valor dos clicks
  };

  const removerItem = (bandaIndex) => {
    const banda = {
      [bandaIndex]: Number(bandaSelecionada[bandaIndex] || 0) - 1,
    };
    setBandaSelecionada({ ...bandaSelecionada, ...banda });
  };

  const getLista = async () => {
    const response = await BandaService.getLista();
    setBandas(response);
  }

  useEffect(()=>{
    getLista();
  },[]);

  // possue dois parametros a 1° a condição e 2° a index da banda selecionada
  //se o canRender for true ele renderiza o span senao não

  return (
    <div className="BandaLista">
      {bandas.map((banda, index) => (
       <BandaListaItem 
          key={`BandaListaItem-${index}`}
          banda={banda}
          quantidadeSelecionada={bandaSelecionada[index]}
          index ={index}
          onRemove={index => removerItem(index)}
          onAdd={index => adicionarItem(index)} />
      ))}
    </div>
  );
}

export default BandaLista;
