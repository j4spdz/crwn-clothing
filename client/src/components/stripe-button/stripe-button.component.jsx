import React from 'react';
import StrikeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe requires payment to be in cents
  const publishableKey = 'pk_test_51Gv0VnCP452dP4CX1CZih4kA7BBzkTlMquEYwZIimWWNcXoGN5tkFZvDwbK15J3CdVRbLeBpdzSNkZJergnef2CJ00pmuaqy1U';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card'
      );
    });
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