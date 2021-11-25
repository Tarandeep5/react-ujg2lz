import React, { useState } from 'react';
import './style.css';
import First from './First';

export const CounterContext = React.createContext();

export default function App() {
  const [count, setCount] = useState(5);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ border: '2px solid black', padding: 20 }}>
      <h2> App -- {count} </h2>
      <CounterContext.Provider value={{ count, inc, dec }}>
        <First />
      </CounterContext.Provider>
    </div>
  );
}
