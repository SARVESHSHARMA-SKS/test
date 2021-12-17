import React from "react";
function Counter() {
  const [counter, setCounter] = React.useState(0);
  const hincre = (value) => {
    setCounter(counter + value);
  };
  const hdouble = () => {
    setCounter(counter + counter);
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => hincre(1)}>add</button>

      <button onClick={() => hincre(-1)}> delete</button>
      <button onClick={() => hdouble()}>Double</button>
    </>
  );
}
export default Counter;
