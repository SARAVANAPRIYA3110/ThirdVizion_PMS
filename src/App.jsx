import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Dashboard/Admin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/admin" element={<Admin />} />
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
