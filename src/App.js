import React from 'react';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import Articles from './features/articles/Articles';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h3>Articles List</h3>
          <Articles />
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
