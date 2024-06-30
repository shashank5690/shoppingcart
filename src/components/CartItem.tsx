import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Product } from '../types/Product';

interface CartItemProps {
  product: Product;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2, alignItems: 'center', padding: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, objectFit: 'contain', marginRight: 2 }}
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ${product.price.toFixed(2)}
        </Typography>
        <Button variant="contained" color="error" onClick={onRemove}>
          Remove from Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
