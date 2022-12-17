import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import { clearCart } from '../../store/cart/cart-actions';

const StripeButton = ({price, clearCart}) => {
    const navigate = useNavigate();
    const priceForStripe = price * 1000;
    const publishableKey = 'pk_test_nrblwZRKHQgcCDtJjkfyaZg000It4c3lxl';

    const onToken = token => {
        // console.log(token);
        alert('Your Payment Successful!');
        clearCart();
        navigate('/thankyou');
    }

    return (
        price > 0 ? (<StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />) : (<h2>Please Continue Shopping</h2>)
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart : () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(StripeButton);
