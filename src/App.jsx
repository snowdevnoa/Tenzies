import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App bg-white h-[80vh] w-[80vw] md:w-[60vw] max-w-[800px] rounded"></main>
  );
}

export default App;
