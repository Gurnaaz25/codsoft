import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Button, Divider, Grid, Paper } from '@mui/material';
import { LocationOn, AccessTime, CheckCircle, HourglassEmpty } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Orders = ({ orders }) => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'warning.main';
      case 'processing':
        return 'info.main';
      case 'shipped':
        return 'primary.main';
      case 'delivered':
        return 'success.main';
      default:
        return 'warning.main';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <HourglassEmpty />;
      case 'processing':
        return <AccessTime />;
      case 'shipped':
        return <LocationOn />;
      case 'delivered':
        return <CheckCircle />;
      default:
        return <HourglassEmpty />;
    }
  };

  return (
    <Grid container spacing={3}>
      {orders.map((order) => (
        <Grid item xs={12} md={6} lg={4} key={order.orderId}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {getStatusIcon(order.status)}
              <Typography variant="h6" sx={{ ml: 1 }}>
                Order #{order.orderId}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTime sx={{ mr: 1 }} />
              <Typography>
                {new Date(order.orderDate).toLocaleDateString()}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ mr: 1 }}>
                Status:
              </Typography>
              <Typography variant="h6" sx={{ color: getStatusColor(order.status) }}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <List>
              {order.items.slice(0, 2).map((item) => (
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
              {order.items.length > 2 && (
                <ListItem>
                  <ListItemText
                    primary={`${order.items.length - 2} more items...`}
                  />
                </ListItem>
              )}
            </List>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="h6">
                Total:
              </Typography>
              <Typography variant="h6" color="primary">
                ${order.total.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate(`/order/${order.orderId}`)}
              sx={{ mt: 2 }}
            >
              View Details
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Orders;
