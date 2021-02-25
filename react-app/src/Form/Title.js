import React from 'react';

const Title = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto},{children}
    </h1>
  );
};

export default Title;
