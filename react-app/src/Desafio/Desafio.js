import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const Desafio = () => {
  // function PageProdutos(event) {
  //   return (
  //     <section>
  //       <h1 style={{ color: 'green' }}>Produtos</h1>
  //       <div style={{ border: 'solid' }}>
  //         <p>
  //           {produtos.map(({ nome, propriedades }) => {
  //             return (
  //               <>
  //                 <p>{nome}</p>
  //                 {propriedades.map((propriedade, index) => (
  //                   <li key={index}>{propriedade}</li>
  //                 ))}
  //               </>
  //             );
  //           })}
  //         </p>
  //       </div>
  //     </section>
  //   );
  // }

  function PageHome(event) {
    return (
      <section>
        <h1 style={{ color: 'green' }}>Home</h1>
        <p>Essa é a home do site</p>
      </section>
    );
  }

  const { pathname } = window.location;
  let Pagina = Home;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default Desafio;
