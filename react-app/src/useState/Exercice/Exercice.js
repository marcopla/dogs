import React from 'react';
import Button from './Button';
import Produto from './Produto';

const Exercice = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    console.log(response);
    const json = response.json();
    console.log(json);
  }
  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <Button name="notebook" onClick={handleClick} />
      <Button name="smartphone" />
      <Button name="tablet" />
      <Produto />
    </div>
  );
};

export default Exercice;
