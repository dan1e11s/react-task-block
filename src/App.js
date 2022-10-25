import React from 'react';
import Block from './components/Block';
import Inputs from './components/Inputs';
import BlockContextProvider from './blockContext';

const App = () => {
  return (
    <BlockContextProvider>
      <Inputs />
      <Block />
    </BlockContextProvider>
  );
};

export default App;
