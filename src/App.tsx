import React, { useState } from 'react';
import './App.css';
import Buttons from './Buttons/Buttons';
import Display from './Display/Display';

const MAX_COUNT = 5

function App() {
  const [count, setCount] = useState<number>(0)

  function increment() {
    if (count < MAX_COUNT)
      setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="Counter-wrapper">

      <Display count={count} maxCount={MAX_COUNT} />
      <Buttons increment={increment} reset={reset} count={count} maxCount={MAX_COUNT} />

    </div>
  );
}

export default App;
