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
    <a href="https://github.com/Nwakomi/official-react-weather-app" rel="noreferrer" target="_blank"> open-sourced on Github</a>
    </footer>
    </div>
    </div>
  );
}


