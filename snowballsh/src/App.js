import './App.css';
import React from 'react';

import Homepage from './components/Home.jsx'
import TopAppbar from "./components/Topappbar";

//import Album from './components/Album'

function App() {
  return (
    <div className="App">
      <TopAppbar />
      <header className="App-header">
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
