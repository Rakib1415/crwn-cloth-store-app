import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selectors';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../Custom-button/CustomButton';
import './CartDropdown.scss';

const CartDropdown = ({cartItems}) => {
  
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
               {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
               }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);