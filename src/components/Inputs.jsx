import React, { useState, useContext } from 'react';
import { blockContext } from '../blockContext';

const Inputs = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const { addBlock } = useContext(blockContext);

  function createBlock() {
    if (!width || !height || !backgroundColor) {
      alert('Some inputs are empty!');
      return;
    }

    let obj = {
      width,
      height,
      backgroundColor,
    };

    addBlock(obj);

    setWidth('');
    setHeight('');
    setBackgroundColor('');
  }

  return (
    <div
      style={{
        marginBottom: '25px',
      }}
    >
      <h2>Нужно писать в пикселях!</h2>
      <input
        type="text"
        placeholder="Enter width"
        onChange={(e) => setWidth(e.target.value)}
        value={width}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter height"
        onChange={(e) => setHeight(e.target.value)}
        value={height}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter color"
        onChange={(e) => setBackgroundColor(e.target.value)}
        value={backgroundColor}
      />
      <br />
      <br />
      <button onClick={createBlock}>SAVE</button>
    </div>
  );
};

export default Inputs;
