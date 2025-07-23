import React ,{ useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);  
    const reset = () => setCount(0);
    return (
        <div style={{textAlign:'center'}}>
            <h1>Counter App</h1>
            <p>Current Count: {count}</p>
            
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
      
        </div>
    );
}

export default App;