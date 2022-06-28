import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
