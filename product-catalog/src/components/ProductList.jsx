import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Rating } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {product.description}
              </Typography>
              <Rating value={product.rating} readOnly precision={0.5} />
              <Typography variant="body2" color="text.secondary">
                {product.reviews} reviews
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCart />}
                onClick={() => onAddToCart(product)}
                fullWidth
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
