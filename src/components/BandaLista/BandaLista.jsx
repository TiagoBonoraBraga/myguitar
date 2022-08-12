import React, { useState, useEffect } from "react"; //importando o usestate
import "./BandaLista.css";
import BandaListaItem from "components/BandaListaItem/BandaListaItem";
import { BandaService } from "services/BandaService";
import BandaDetalhesModal from "components/BandaDetalhesModal/BandaDetalhesModal";
function BandaLista({ bandaCriada }) {
  const [bandas, setBandas] = useState([]);
  const [bandaSelecionada, setBandaSelecionada] = useState({});
  const [bandaModal, setBandaModal] = useState(false);

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
    console.log(response);
  };

  const getBandaById = async (bandaId) => {
    const response = await BandaService.getById(bandaId);
    // console.log(response, bandaId);
    setBandaModal(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  const adicionaBandaNaLista = (banda) => {
    const lista = [...bandas, banda];
    setBandas(lista);
  };

  useEffect(() => {
    if (bandaCriada) adicionaBandaNaLista(bandaCriada);
  }, [bandaCriada]);

  return (
    <div className="BandaLista">
      {bandas.map((banda, index) => (
        <BandaListaItem
          key={`BandaListaItem-${index}`}
          banda={banda}
          quantidadeSelecionada={bandaSelecionada[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(bandaId) => getBandaById(bandaId)}
        />
      ))}
      {bandaModal && (
        <BandaDetalhesModal
          banda={bandaModal}
          closeModal={() => setBandaModal(false)}
        />
      )}
    </div>
  );
}

export default BandaLista;
