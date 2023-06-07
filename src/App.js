import MovieNames from './pages/MovieNames';
import MovieSummary from './pages/MovieSummary';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieNames />}/>
        <Route path="/summary/:id" element={<MovieSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
