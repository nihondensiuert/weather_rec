import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';
import About from './pages/About';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link to="/" className="nav-link">ホーム</Link>
          <Link to="/weather" className="nav-link">天気予報</Link>
          <Link to="/about" className="nav-link">詳細</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
