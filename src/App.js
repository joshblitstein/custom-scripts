import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './containers/Home';
import About from './components/About/About';
import GetInTouch from './components/GetInTouch/GetInTouch';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
