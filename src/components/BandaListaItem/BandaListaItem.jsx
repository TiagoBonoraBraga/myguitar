import "./BandaListaItem.css";

function BandaListaItem() {
    const removerItem = (i) => console.log('remover' + i);
    const adicionarItem = (i) => console.log('adicionar' + i);
    const bandaSelecionada = [0];
    const index = 0;
    const banda = {
        titulo: "Alma Negra",
        descricao: "Estilo: Heavy Metal",
        foto: require("assets/imagens/almanegra.jpg")
    }
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="BandaListaItem__badge"> {bandaSelecionada[index]} </span>
    );
  return (
    <div className="BandaListaItem" >
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
  );
}
export default BandaListaItem;
