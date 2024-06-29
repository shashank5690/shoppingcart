import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Product } from "../types/Product";
import Box from '@mui/material/Box';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
    const[products,setproducts] = useState<Product[]>([]);


useEffect(() => {
    const fetchedProducts = async () => {
        try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setproducts(res.data);
     } catch(error){
        console.log('error in fetching product:',error);
      }
    };

    fetchedProducts(); // initial call

},[]); // khali dep.

return (
    <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: '80vh' }}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
