import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaBandaModal.css";
import { BandaService } from "services/BandaService";

function AdicionaBandaModal({ closeModal, onCreateBanda }) {
  const form = {
    nome: "",
    estilo: "",
    descricao: "",
    foto: "",
  };
  const [state, setState] = useState(form); // assim o state começa com os valores zerados

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.nome.length &&
        state.estilo.length &&
        state.descricao.length &&
        state.foto.length
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });

  
const createBanda = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();

    const { nome, estilo, descricao, foto } = state;

    const banda = {
        nome,
        estilo,
        descricao,
        foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
    }

    const response = await BandaService.create(banda);
    onCreateBanda(response);
    closeModal();
}


  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaBandaModal">
        <form autoComplete="off">
          <h2>Adicionar Banda</h2>
          <div>
            <label className="AdicionaBandaModal__text" htmlFor="nome">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o nome da Banda:"
              value={state.nome}
              onChange={(e) => handleChange(e, "nome")}
              required
            />
          </div>
          <div>
            <label className="AdicionaBandaModal__text" htmlFor="estilo">
              Estilo:
            </label>
            <input
              type="text"
              id="estilo"
              placeholder="Digite o estilo da Banda:"
              value={state.estilo}
              onChange={(e) => handleChange(e, "estilo")}
              required
            />
          </div>
          <div>
            {" "}
            <label className="AdicionaBandaModal__text" htmlFor="descricao">
              Descrição:
            </label>
            <input
              type="text"
              id="descricao"
              placeholder="Digite uma breve descrição da Banda:"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            {" "}
            <label
              className="AdicionaBandaModal__text AdicionaBandaModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar imagem" : state.foto}
            </label>
            <input
              className="AdicionaBandaModal__foto"
              type="file"
              id="foto"
              accept="imagens/png, imagens/gif, imagens.jpeg, imagens.jpg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button type="button" disabled={canDisable} className="AdicionaBandaModal__enviar" onClick={createBanda}>
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}
export default AdicionaBandaModal;
