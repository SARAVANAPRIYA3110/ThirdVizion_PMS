import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Admin';
import Login from './Login';
import Project from './AdminDashBoard/Project';
import Users from './AdminDashBoard/Users';
import Report from './AdminDashBoard/Report';
import Teams from './AdminDashBoard/Teams';


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
        <Route path='/project' element={<Project />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Report' element={<Report />} />
        <Route path='/teams' element={<Teams />} />
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
