import React from 'react';
import { connect } from 'react-redux';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../store/cart/cart-actions';
import { selectCartItemsCount } from '../../store/cart/cart-selectors';
import './CartIcon.scss';


const CartIcon = ({toggleCartHidden, totalItem}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img className='shopping-icon' src={ShoppingIcon} />
            <span className='item-count'>{totalItem}</span>
            
        </div>
    );
};

const mapStateToProps = (state) => ({
    totalItem : selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
