import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BlogPost from './components/blog/BlogPost';
import ReactGA from 'react-ga';

const App = () => {
  const TRACKING_ID = "G-51X21L9TRF";

  useEffect(() => {
    ReactGA.initialize({
      trackingId: TRACKING_ID
    });

    ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

    // Send a custom event
    ReactGA.event({
      category: "your category",
      action: "your action",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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