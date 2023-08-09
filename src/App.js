import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Profile from './components/Profile.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} /> 
        <Route path="Resume" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
