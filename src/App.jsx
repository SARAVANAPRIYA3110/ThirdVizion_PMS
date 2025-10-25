import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Admin';
import Login from './Login';


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/login' element={<Login />} />
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
