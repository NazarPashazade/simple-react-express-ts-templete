import { useState } from 'react';

type CounterProps = {
  initialValue?: number;
};

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);

  return (
    <div style={{ textAlign: 'center' }}>
        
      <h2 data-testid={'count'}>Counter: {count}</h2>

      <button onClick={decrease}>- Decrease</button>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
}
