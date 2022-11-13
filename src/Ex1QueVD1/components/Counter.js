import store from "../redux/store";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(store.getState().value);

  const increase = () => {
    store.dispatch({
      type: "counter/incremented",
    });
  };

  const decrease = () => {
    store.dispatch({
      type: "counter/decremented",
    });
  };

  const updateDate = () => {
    store.subscribe(() => setCounter(store.getState().value));
  };

  updateDate();

  return (
    <div>
      <p>Value: {counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
