import React from 'react';
import './App.css';
import Articles from './features/articles/Articles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Articles List</h3>
        <Articles />
      </header>
    </div>
  );
}

export default App;
