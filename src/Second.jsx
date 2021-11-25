import React from 'react';
import Third from './Third';

const Second = () => {
  return (
    <div style={{ border: '2px solid black', padding: 20 }}>
      <h2> Second</h2>
      <Third />
    </div>
  );
};

export default Second;
