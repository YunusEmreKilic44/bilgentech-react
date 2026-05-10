import { useState } from "react";
import Button from "./UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { arttir, azalt } from "../redux/counterSlice";

function Counter() {
  const [, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <Button
        variant="primary"
        onClick={() => {
          dispatch(arttir());
        }}
      >
        +
      </Button>
      <strong className="mx-4">{count}</strong>
      <Button
        variant="danger"
        onClick={() => {
          dispatch(azalt());
        }}
      >
        -
      </Button>
    </div>
  );
}

export default Counter;
