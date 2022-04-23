import React from 'react';

const UseState = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Marco', idade: 20 });

  const [contar, setContar] = React.useState(1);
  let [items, setItems] = React.useState(['Item 1']);

  const active = window.localStorage.getItem('ativo');

  function handleItem() {
    setContar((contar) => {
      items = 'a';
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
