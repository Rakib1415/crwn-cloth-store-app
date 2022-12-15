import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';
import './CartIcon.scss';
import { selectCartItemsCount } from '../../redux/cart/Cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
            
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state) 

})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);