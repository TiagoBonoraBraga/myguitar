import "./BandaListaItem.css";

function BandaListaItem({
  banda,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="BandaListaItem__badge"> {quantidadeSelecionada} </span>
    );
  return (
    <div className="BandaListaItem" onClick={() => clickItem(banda.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="BandaListaItem__nome">{banda.nome}</div>
        <div className="BandaListaItem__estilo">{banda.estilo}</div>
        <div className="BandaListaItem__descricao">{banda.descricao}</div>
        <div className="BandaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`} 
            onClick={(e) =>{ e.stopPropagation(); onAdd(index); }} 
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img className="BandaListaItem__foto" src={banda.foto} alt="foto" />
    </div>
  );
}
export default BandaListaItem;
