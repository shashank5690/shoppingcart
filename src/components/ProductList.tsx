import React, { useState, useEffect } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductItem from './ProductItem';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetchProducts } from '../utils/useFetchProducts';

const ProductList: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const [cartCount, setCartCount] = useState<number>(0);
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const handleCartClicking = () => {
    navigate('./cart');
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Listing
          </Typography>
          <IconButton color="inherit" onClick={handleCartClicking}>
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" sx={{ textAlign: 'center', marginTop: 2 }}>
          {error}
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: '80vh' }}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
