import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Notes from './components/Notes';
import Create from './components/Create';
import React from 'react';
import './style.css';

function App() {
  return (
    <div className="container">
      <nav className=" bg-dark navbar">
        <h4>
          <Link to={'/'} className="link px-2">
            Home
          </Link>
        </h4>
        <h4>
          <Link to={'/notes'} className="link px-2">
            Notes
          </Link>
        </h4>
        <h4>
          <Link to={'/create'} className="link px-2">
            Create Note
          </Link>
        </h4>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
