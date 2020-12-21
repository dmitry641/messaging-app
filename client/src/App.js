import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const inc = () => setNumber((prev) => prev + 1);
  const dec = () => setNumber((prev) => prev - 1);

  return (
    <div>
      <button onClick={inc}>+</button>
      <p>{number}</p>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
