import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Marco', idade: '37' });
  const [modal, setModal] = React.useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  });
  const [items, setItems] = React.useState('teste');

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }
  function trocarParaOutro() {
    setItems('Outro');
  }
  // ativo = !ativo;
  // console.log(ativo);

  return (
    <div>
      <p>{items}</p>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <div> {modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <button onClick={trocarParaOutro}>Trocar</button>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default App;
