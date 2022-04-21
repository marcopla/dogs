import React from 'react';

const UseState = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Marco', idade: 20 });

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleItem() {
    setContar((contar) => {
      return contar + 1;
    });
  }

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }
  return (
    <>
      {dados.nome}
      {dados.idade}
      {dados.faculdade}
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <div>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <button onClick={handleItem}>{contar}</button>
      </div>
    </>
  );
};

export default UseState;
