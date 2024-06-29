import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<ProductListingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
 