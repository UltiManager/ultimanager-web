import * as React from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => setCount(count + 1), [
    count,
    setCount
  ]);

  return (
    <div>
      <p>Counter value: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
