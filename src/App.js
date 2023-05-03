import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import DetailMovie from './pages/DetailMovie/DetailMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:list" element={<Movies />} />
        <Route path="/movies/search/:value" element={<Movies />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
