import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

