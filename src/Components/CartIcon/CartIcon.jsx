import React from 'react';
import { connect } from 'react-redux';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../store/cart/cart-actions';
import './CartIcon.scss';


const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img className='shopping-icon' src={ShoppingIcon} />
            <span className='item-count'>0</span>
            
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
