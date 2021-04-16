import React from 'react';
import './App.css';
import Articles from './features/articles/Articles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Books List
        <Articles />
      </header>
    </div>
  );
}

export default App;
