import React from 'react';
import StrikeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe requires payment to be in cents
  const publishableKey = 'pk_test_51Gv0VnCP452dP4CX1CZih4kA7BBzkTlMquEYwZIimWWNcXoGN5tkFZvDwbK15J3CdVRbLeBpdzSNkZJergnef2CJ00pmuaqy1U';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StrikeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;