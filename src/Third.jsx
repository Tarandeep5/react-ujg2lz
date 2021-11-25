import React, { useContext } from 'react';
import { CounterContext } from './App';

const Third = () => {
  let { count, inc, dec } = useContext(CounterContext);

  return (
    <div style={{ border: '2px solid black', padding: 20 }}>
      <h2> Third</h2>
      <h4>{count}</h4>
      <button onClick={inc}> +</button>
      <button onClick={dec}> -</button>
    </div>
  );
};

export default Third;
