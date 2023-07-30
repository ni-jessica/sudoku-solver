import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import SudokuSolver from './Solve';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SudokuSolver />
  </React.StrictMode>
);