import { useRef } from "react";

const TextInputFocusButton = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} className="border" type="text" />
      <button onClick={onButtonClick}>Focuslan</button>
    </div>
  );
};

export default TextInputFocusButton;
