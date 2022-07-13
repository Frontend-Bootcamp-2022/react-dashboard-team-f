import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Memebers from './pages/Memebers';
import Modules from './pages/Modules';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Sprint from './pages/Sprint';
import Logout from './pages/Logout';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="/memebers" element={<Memebers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
