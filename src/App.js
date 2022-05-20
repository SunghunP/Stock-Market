import './App.css';
import {Route, Routes} from "react-router-dom";
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Price from './pages/Price';
import Stocks from './pages/Stocks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about/" element={<About />}></Route>
        <Route path="/stocks/:symbol/" element={<Price />}></Route>
        <Route path="/stocks/" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
