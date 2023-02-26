import { useState } from "react";

export const HelloWorld = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    if (value !== "hello") {
      return;
    }

    setVisible((state) => !state);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} value={value} id="search" type="text" />
      <button id="toggle" onClick={toggle}>
        HELLO WORLD
      </button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  );
};
