import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../store/reducers/counterReducer";
import { getCounterValue } from "../store/selectors/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={handleIncrement}>
        increment
      </button>
      <button data-testid="decrement-btn" onClick={handleDecrement}>
        decrement
      </button>
    </div>
  );
};
