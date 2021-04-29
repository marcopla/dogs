import React from 'react';

const useLocalStorage = (key, inicial) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const request = React.useCallback(async (url, options) => {
    let reponse;
    let json;
    try {
      setError(null);
      setLoagin(true);
    }
  });
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
