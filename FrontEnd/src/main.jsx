import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from '../components/Contact.jsx';
import About from '../components/About.jsx';
import ContextState from '../Context/ContextState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextState><App /></ContextState>} />\
        <Route path="/about" element={<ContextState><About /></ContextState>} />\
        <Route path="/contact" element={<ContextState><Contact /></ContextState>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
