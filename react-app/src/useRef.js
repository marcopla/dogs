import React from 'react';

const useRef = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  }, []);
  return <video ref={video}></video>;
};

export default useRef;
