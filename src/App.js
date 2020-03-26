import React from 'react';
import config from './config';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>

      <Dashboard sheetURL={config.spreadsheetLink} />
    </div>
  );
}

export default App;
