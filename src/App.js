import Weather from './Weather';
import './App.css';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />

    <footer>
This project was coded by Natali and is 
    <a href="https://github.com/Nwakomi/official-react-weather-app" rel="noreferrer" target="_blank"> open-sourced on Github</a>{" "}
          and is{" "}
          <a
            href="https://app.netlify.com/sites/jade-fox-c633d5/deploys"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
    </footer>
    </div>
    </div>
  );
}


