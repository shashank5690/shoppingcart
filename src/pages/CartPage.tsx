import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



const Cartpage : React.FC = () => {
    return(
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                Shopping Cart
            </Typography>
            {/* cart ke items yaha */}
        </Container>
    );
};

export default Cartpage;