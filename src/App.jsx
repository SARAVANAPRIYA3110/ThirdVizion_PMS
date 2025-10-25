import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Dashboard/Admin';
import Login from './Login';
import User from './Dashboard/User';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path='/login' element={<Login />} />
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
