import React, { useContext } from 'react';
import { blockContext } from '../blockContext';

const Block = () => {
  const { style } = useContext(blockContext);
  console.log(style);
  return <div style={style}></div>;
};

export default Block;
