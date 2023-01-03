import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/cart/cart-actions';
import { selectCartItems } from '../../store/cart/cart-selectors';

import CartItem from '../CartItem/CartItem';

import { CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './CartDropdown-styles';
import './CartDropdown.scss';

const CartDropdown = ({cartItems, toggleCartHidden}) => {
    const navigate = useNavigate();
  
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
               {
                cartItems?.length ? 
                (cartItems?.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :
                (<EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>)
               }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => { navigate('/checkout');
        toggleCartHidden();}}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
};


const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);