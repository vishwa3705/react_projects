import './App.css'
import { useState,useEffect } from 'react';

function App() {
  let[count,setCount] = useState(0);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">hello</h1>
      <button>Click</button>
    </>
  );
}

export default App
