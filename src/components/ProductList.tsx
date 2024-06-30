import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../types/Product";
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

const ProductList: React.FC = () => {
    const[products,setproducts] = useState<Product[]>([]);
    const[cartCount,setcartCount] =  useState<number>(0);
    const[loading,setloading] = useState<boolean>(true);
    const navigate = useNavigate(); // for cart
    const { cart }  = useCart();


useEffect(() => {
    const fetchedProducts = async () => {
        try {
        const res = await axios.get<Product[]>('https://fakestoreapi.com/products');
        setproducts(res.data);
     } catch(error){
        console.log('error in fetching product:',error);
      } finally {
        setloading(false);
      }
    };

      fetchedProducts(); // initial call

  },[]); 

  // cart count 
  useEffect(() => {
    setcartCount(cart.length);
  }, [cart]);

  //cart click handle event
  const handleCartClicking = () => {
    navigate('./cart');
  }

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
      ) : (
      <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: '80vh' }}>
        {products.map((product) => (
          <ProductItem 
            key={product.id} 
            product={product} 
          />
        ))}
      </Box>
      )}
    </Box>
  );
};

export default ProductList;
