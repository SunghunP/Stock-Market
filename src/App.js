import './App.css';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Nav />
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stocks/:symbol" element={<Price />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
