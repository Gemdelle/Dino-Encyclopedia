import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/home';
import Encyclopedia from './pages/encyclopedia';
import Album from './pages/album';
import Map from "./pages/map";
import TriassicInferior from "./pages/triassic-inferior";
import TriassicMedio from "./pages/triassic-medio";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/album" element={<Album />} />
        <Route path="/map" element={<Map />} />
        <Route path="/triassic-inferior" element={<TriassicInferior />} />
        <Route path="/triassic-medio" element={<TriassicMedio />} />
      </Routes>
    </Router>
  );
}

export default App;
