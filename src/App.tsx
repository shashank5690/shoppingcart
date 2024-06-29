import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<ProductListingPage/>} />
        <Route path='./cart' element={< CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
 