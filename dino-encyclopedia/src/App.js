import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Encyclopedia from './pages/Encyclopedia';
import Album from './pages/Album';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  );
}

export default App;
