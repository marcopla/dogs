import React from 'react';

const App = () => {
  const video = React.useRef();
  console.log(video);
  React.useEffect(() => console.log(video.current));
  return <div ref={video}>Teste</div>;
};

export default App;
