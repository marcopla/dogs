import React from 'react';

const Desafio = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  const palavras = ['facebook', 'twitter'];

  return (
    <section>
      <h1 style={{ color: 'green' }}>Produtos</h1>
      <div style={{ border: 'solid' }}>
        <p>
          {produtos.map(({ nome, propriedades }) => {
            return (
              <>
                <p>{nome}</p>
                {propriedades.map((propriedade, index) => (
                  <li key={index}>{propriedade}</li>
                ))}
              </>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default Desafio;
