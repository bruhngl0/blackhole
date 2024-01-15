import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Hero />} />
      </Switch>
    </Router>
  );
};

export default App;


