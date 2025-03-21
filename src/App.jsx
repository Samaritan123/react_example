import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        点击加1
      </button>
    </div>
  );
}

export default App;
