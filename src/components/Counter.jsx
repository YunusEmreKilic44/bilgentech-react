import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState("Emre");

  useEffect(() => {
    console.log("Component DOM'a yüklendiğinde!");
  }, [title, count]);

  return (
    <div className="counter">
      <strong>{title}</strong>
      <button onClick={() => setTitle("Emin")}>Ismi Değiştir</button>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <strong>{count}</strong>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
