import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/Cart.selectors';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key = {cartItem.id} item={cartItem}></CartItem>)
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