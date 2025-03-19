import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Container, Grid, Paper, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Orders from './components/Orders';
import './App.css';

// Sample product data
const productData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "images/headphone.png",
    description: "Premium wireless headphones with noise cancellation",
    rating: 4.5,
    reviews: 123
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    image: "images/smartphone.png",
    description: "Latest flagship smartphone with 5G support",
    rating: 4.8,
    reviews: 87
  },
  {
    id: 3,
    name: "Laptop",
    price: 999.99,
    image: "images/laptop.png",
    description: "High-performance gaming laptop",
    rating: 4.7,
    reviews: 56
  }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  const handlePlaceOrder = (order) => {
    const newOrder = {
      ...order,
      orderId: `ORD-${Date.now()}`,
      status: 'pending'
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setCurrentOrder(newOrder);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Product Catalog
            </Typography>
            <Button color="inherit" href="/orders">
              My Orders
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <ProductList 
                  products={productData} 
                  onAddToCart={handleAddToCart} 
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Cart 
                  items={cartItems} 
                  onRemove={handleRemoveFromCart}
                  onQuantityChange={handleQuantityChange}
                />
              </Paper>
            </Grid>
          </Grid>

          <Routes>
            <Route path="/checkout" element={
              <Checkout 
                items={cartItems} 
                onPlaceOrder={handlePlaceOrder} 
              />
            } />
            <Route path="/order-confirmation" element={
              currentOrder && <OrderConfirmation order={currentOrder} />
            } />
            <Route path="/orders" element={
              <Orders orders={orders} />
            } />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
