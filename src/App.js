import './App.css';
import { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Price from './pages/Price';
import Stocks from './pages/Stocks';

function App() {
  const [stock, setStock] = useState(null) 

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about/" element={<About />}></Route>
        <Route path="/stocks/:symbol/" element={<Price stock={stock} />}></Route>
        <Route path="/stocks/" element={<Stocks setStock={setStock} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
