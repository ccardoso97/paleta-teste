import React, {useState} from 'react';
import './PaletaLista.css'
import {paletas} from "mocks/paletas"
function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
  const adicionarItem = (paletaIndex) => {
          const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }
          setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
  }
  const removerItem = (paletaIndex) => {
    const paleta = {[paletaIndex]: Number(paletaSelecionada[paletaIndex] || setPaletaSelecionada()) -1 }
    setPaletaSelecionada({...paletaSelecionada, ...paleta});
  }
  const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>, <span className="PaletaListaItem__bagde" id="badge__remover"onClick={() => removerItem(index)}>{paletaSelecionada[index] > 0}-</span>);
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) =>
      <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
        {badgeCounter(paletaSelecionada[index], index)}
        <span className="PaletaListaItem__badge"> {paletaSelecionada[index] || 0} </span>
        <span className="PaletaListaItem__bagde" id="badge__remover"onClick={() => removerItem(index)}>{paletaSelecionada[index] > 0}-</span>
        <div>
            <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
            <div className='PaletaListaItem__preco'>R${paleta.preco.toFixed(2)}</div>
            <div className='PaletaListaItem__descricao'>{paleta.descricao}</div>
            <div className='PaletaListaItem__acoes Acoes'>
                <button className='Acoes__adicionar Acoes__adicionar--preencher' 
                onClick={() => adicionarItem(index)}>Adicionar
                </button>
            </div>
        </div>
        <img
          className="PaletaListaItem__foto"
          src={paleta.foto}
          alt={`Paleta de ${paleta.sabor}`}
        />
      </div>
      )};
    </div>
  );
}
export default PaletaLista;
