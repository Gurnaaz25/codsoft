import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, Stepper, Step, StepLabel, Alert } from '@mui/material';
import { ShoppingCartCheckout, LocationOn, CreditCard, Email, Phone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const steps = ['Shipping Address', 'Payment Method', 'Review Order'];

const Checkout = ({ items, onPlaceOrder }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'credit-card'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.state || !formData.zip) {
        setError('Please fill in all required fields');
        return;
      }
    }
    if (activeStep === 1) {
      if (!formData.paymentMethod) {
        setError('Please select a payment method');
        return;
      }
    }
    setActiveStep((prevStep) => prevStep + 1);
    setError('');
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handlePlaceOrder = () => {
    if (activeStep !== steps.length - 1) return;

    const order = {
      ...formData,
      items,
      total,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    onPlaceOrder(order);
    navigate('/order-confirmation');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="State"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Zip Code"
              type="number"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              margin="normal"
              required
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>
            <Button
              variant={formData.paymentMethod === 'credit-card' ? 'contained' : 'outlined'}
              startIcon={<CreditCard />}
              fullWidth
              onClick={() => setFormData({ ...formData, paymentMethod: 'credit-card' })}
              sx={{ mb: 2 }}
            >
              Credit Card
            </Button>
            <Button
              variant={formData.paymentMethod === 'paypal' ? 'contained' : 'outlined'}
              startIcon={<Email />}
              fullWidth
              onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
              sx={{ mb: 2 }}
            >
              PayPal
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Subtotal:</Typography>
              <Typography>${total.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Shipping:</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Total:</Typography>
              <Typography>${total.toFixed(2)}</Typography>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Checkout
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

        {renderStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? handlePlaceOrder : handleNext}
          >
            {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Checkout;
