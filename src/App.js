import MovieNames from './pages/MovieNames';
import MovieSummary from './pages/MovieSummary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center' />
      <Routes>
        <Route path="/" element={<MovieNames />}/>
        <Route path="/summary/:id" element={<MovieSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
