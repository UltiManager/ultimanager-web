import * as React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => setCount(count + 1), 200);

    return () => clearInterval(interval);
  }, [count, setCount]);

  return <span>{count}</span>
}

export default Counter
