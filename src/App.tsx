import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PaginatedTable from './components/PaginatedTable';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<PaginatedTable />} />
          <Route path="*" element={<PaginatedTable />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
