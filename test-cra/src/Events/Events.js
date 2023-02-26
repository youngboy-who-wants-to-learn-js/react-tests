import { useState, useEffect } from "react";

export function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const handleToggle = () => {
    setToggle((state) => !state);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 150);
  }, []);

  return (
    <div className="App">
      <h1 data-testid="value-elem">{value}</h1>
      {toggle ? <div data-testid="toggle-elem">toggle</div> : null}
      {isVisible ? <div>tex1t</div> : null}
      <div>hello world</div>
      <button onClick={handleToggle} data-testid="btn-toggle">
        click me
      </button>
      <input
        data-testid="input-elem"
        value={value}
        onChange={onChange}
        type="text"
        placeholder="placeholder"
      />
    </div>
  );
}
