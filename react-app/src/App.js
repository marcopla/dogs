import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Marco', idade: '37' });
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  // ativo = !ativo;
  // console.log(ativo);

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <div> {modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default App;
