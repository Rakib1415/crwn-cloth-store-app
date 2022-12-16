import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/cart/cart-actions';
import { selectCartItems } from '../../store/cart/cart-selectors';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../Custom-button/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({cartItems, toggleCartHidden}) => {
    const navigate = useNavigate();
  
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
               {
                cartItems.length ? 
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :
                (<span className='empty-message'>Your Cart is empty</span>)
               }
            </div>
            <CustomButton onClick={() => { navigate('/checkout');
        toggleCartHidden();}}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);