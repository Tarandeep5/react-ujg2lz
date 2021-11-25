import React from 'react';
import Second from './Second';

const First = () => {
  return (
    <div style={{ border: '2px solid black', padding: 20 }}>
      <h2> First</h2>
      <Second />
    </div>
  );
};

export default First;
