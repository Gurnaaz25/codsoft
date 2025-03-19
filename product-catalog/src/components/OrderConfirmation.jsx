import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Button, Divider } from '@mui/material';
import { CheckCircle, LocationOn, AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ order }) => {
  const navigate = useNavigate();

  const getOrderStatus = (status) => {
    switch (status) {
      case 'pending':
        return {
          color: 'warning.main',
          message: 'Order Placed',
          description: 'Your order has been successfully placed'
        };
      case 'processing':
        return {
          color: 'info.main',
          message: 'Processing',
          description: 'Your order is being processed'
        };
      case 'shipped':
        return {
          color: 'primary.main',
          message: 'Shipped',
          description: 'Your order has been shipped'
        };
      case 'delivered':
        return {
          color: 'success.main',
          message: 'Delivered',
          description: 'Your order has been delivered'
        };
      default:
        return {
          color: 'warning.main',
          message: 'Order Placed',
          description: 'Your order has been successfully placed'
        };
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
          <Typography variant="h5">
            Order Confirmed!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ mr: 1 }}>
            Order #:
          </Typography>
          <Typography variant="h6" color="primary">
            {order.orderId}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography>
            Order Date: {new Date(order.orderDate).toLocaleDateString()}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LocationOn sx={{ mr: 1 }} />
          <Typography>
            Delivery Address: {order.address}, {order.city}, {order.state} {order.zip}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ mr: 1 }}>
            Status:
          </Typography>
          <Typography variant="h6" sx={{ color: getOrderStatus(order.status).color }}>
            {getOrderStatus(order.status).message}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>

        <List>
          {order.items.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price} x ${item.quantity}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}

          <ListItem>
            <ListItemText
              primary="Total"
              secondary={`$${order.total.toFixed(2)}`}
            />
          </ListItem>
        </List>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/orders')}
          >
            Track Order
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate('/')} sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderConfirmation;
