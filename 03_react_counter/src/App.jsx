import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-blue-900 font-bold text-4xl m-4">hello world</h1>
      <button
        className="border-black border border-solid rounded-sm p-2 m-4"
        onClick={() => setCount((count) => count + 1)}>
        count {count}
      </button>
    </>
  );
}

export default App
