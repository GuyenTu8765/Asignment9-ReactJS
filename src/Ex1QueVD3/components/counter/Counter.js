import {
  decrementedAction,
  incrementedAction,
} from "../../redux/actionCreators/counterActionCreator";
import selectCounter from "../../redux/selector/selectCounter";
import store from "../../redux/store";
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(selectCounter());

  const increase = () => {
    store.dispatch(incrementedAction());
  };

  const decrease = () => {
    store.dispatch(decrementedAction());
  };

  const updateDate = () => {
    store.subscribe(() => setCounter(selectCounter()));
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
