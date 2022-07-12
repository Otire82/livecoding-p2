import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import ActorPage from './components/ActorPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movie/:id' element={<MoviePage />} />
          <Route path='/actor/:id' element={<ActorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
