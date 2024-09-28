import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BlogPost from './components/blog/BlogPost';
import ReactGA from 'react-ga';

const App = () => {
  const TRACKING_ID ="G-51X21L9TRF";

  useEffect(()=> {
    ReactGA.initialize(TRACKING_ID);

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
