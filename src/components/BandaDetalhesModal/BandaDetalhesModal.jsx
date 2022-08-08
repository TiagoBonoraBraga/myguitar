import "./BandaDetalhesModal.css";
import Modal from 'components/Modal/Modal';

function BandaDetalhesModal({banda, closeModal}){
    return(
        <Modal closeModal={closeModal}>
            <div className="BandaDetalhesModal">
                <div>
                    <div className="BandaDetalhesModal__nome">{banda.nome}</div>
                    <div className="BandaDetalhesModal__estilo"><b>Estilo:</b>{banda.estilo}</div>
                    <div className="BandaDetalhesModal__descricao"><b>Descrição:</b>{banda.descricao}</div>
                </div>
                <img src={banda.foto} alt={`Banda de ${banda.nome}`} className="BandaDetalhesModal__foto" />
            </div>
        </Modal>
    )
}

export default BandaDetalhesModal;