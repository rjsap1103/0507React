import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className='counter-container'>
      <h2>현재 숫자</h2>
      <h1 className='count-display'>{count}</h1>
      <div className='button-group'>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>초기화</button>
        <button onClick={increment}>증가</button>
      </div>
    </div>
  );
};

export default Counter;
