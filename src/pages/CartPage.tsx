import React, { useState } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useCart } from '../context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
//   const [loading,setloading] =  useState<boolean>(true);



  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" component="p">
          Your cart is empty
        </Typography>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} onRemove={() => removeFromCart(product.id)} />
          ))}
          <Typography variant="h6" component="p" sx={{ marginTop: 2 }}>
            Total Price: ${getTotalPrice().toFixed(2)}
          </Typography>
          <Button variant="contained" color="error" sx={{ marginTop: 2 }} onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
