import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Divider, Box } from '@mui/material';
import { Remove, Add, Delete, ShoppingCartCheckout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Cart = ({ items, onRemoveFromCart, onQuantityChange }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Shopping Cart
        </Typography>
        
        {items.length === 0 ? (
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Your cart is empty
          </Typography>
        ) : (
          <List>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price} x ${item.quantity}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                      onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Remove />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton
                      onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                    >
                      <Add />
                    </IconButton>
                    <IconButton
                      onClick={() => onRemoveFromCart(item.id)}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total: ${total.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<ShoppingCartCheckout />}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;
