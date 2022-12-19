import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../store/cart/cart-actions';
import { selectCartItemsCount } from '../../store/cart/cart-selectors';

import { CartContainer, ItemCountContainer, ShoppingIconContainer } from './CartIcon-styles';


const CartIcon = ({toggleCartHidden, totalItem}) => {
    return (
        <CartContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer src={ShoppingIcon} />
            <ItemCountContainer>{totalItem}</ItemCountContainer>
            
        </CartContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    totalItem : selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
