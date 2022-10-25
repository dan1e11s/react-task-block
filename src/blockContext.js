import React, { useState } from 'react';

export const blockContext = React.createContext();

const BlockContextProvider = ({ children }) => {
  const [style, setStyle] = useState({});

  function addBlock(obj) {
    setStyle(obj);
  }

  return (
    <blockContext.Provider
      value={{
        style: style,
        addBlock,
      }}
    >
      {children}
    </blockContext.Provider>
  );
};

export default BlockContextProvider;
