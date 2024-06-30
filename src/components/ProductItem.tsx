import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const { cart,  addToCart,  removeFromCart } = useCart(); 
  const isIncart = cart.some((item) => item.id ===  product.id);


  return (
    <Grid item xs={12} md={6} lg={6}> 

      <Card sx={{ display: 'flex', marginBottom: 2, alignItems: 'center', padding: 2, height: '100%' }}>
        <CardMedia
          component="img"
          sx={{ width: 240, height: 240, objectFit: 'contain', marginRight: 2 }}
          image={product.image}
          alt={product.title}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', marginTop: 1 }}>
            ${product.price.toFixed(2)}
          </Typography>
          {isIncart ? (
            <Button variant="contained" color="error" sx={{ marginTop: 1 }} onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="contained" sx={{ marginTop: 1 }} onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;