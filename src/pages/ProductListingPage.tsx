import React from "react";
import ProductList from "../components/ProductList";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ProductListingPage: React.FC = () => {
    return(
    <Container>
      <Typography variant="h2" component="h1" sx={{ marginY: 4 ,textAlign:"center"}}>
        :::Our Products:::
      </Typography>
      <ProductList />
    </Container>
    );
};

export default ProductListingPage;