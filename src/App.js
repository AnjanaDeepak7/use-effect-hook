import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `new message(${value})`;
    }
  }, [value]);
  return (
    <section className="body-container">
      <h1>Counter</h1>
      <h1 className="value">{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </section>
  );
}

export default App;
