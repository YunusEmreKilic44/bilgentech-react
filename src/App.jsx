import React, { useState } from "react";

const App = () => {
  // const myTitle = "Ahmet Demir";
  const [state, setState] = useState("Ahmet Demir");

  const handleTitleChange = () => {
    console.log("run");
    setState("Emin Başbayan");
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleTitleChange}>İsmi Değiştir</button>
    </>
  );
};

export default App;
