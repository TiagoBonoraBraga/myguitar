import "./BandaListaItem.css";

function BandaListaItem({banda, quantidadeSelecionada, index, onRemove, onAdd}) {
 
   
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="BandaListaItem__badge"> {quantidadeSelecionada} </span>
    );
  return (
    <div className="BandaListaItem" >
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="BandaListaItem__titulo">{banda.titulo}</div>
        <div className="BandaListaItem__descricao">{banda.descricao}</div>
        <div className="BandaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`} //mudar o tamanho do botao com click
            onClick={() => onAdd(index)} //add o index da paleta e ativa a função paraadd item passando o index da banda selecionada.
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img className="BandaListaItem__foto" src={banda.foto} alt="" />
    </div>
  );
}
export default BandaListaItem;
