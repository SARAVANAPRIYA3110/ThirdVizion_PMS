import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Dashboard/Admin';
import Login from './Login';
import User from './Dashboard/User';
import Project from './AdminDashBoard/Project';
import Report from './AdminDashBoard/Report';
import Teams from './AdminDashBoard/Teams';
import Users from './AdminDashBoard/Users';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
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
