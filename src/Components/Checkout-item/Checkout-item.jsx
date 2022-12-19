import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../store/cart/cart-actions';
// import './Checkout-item.scss';
import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from './Checkout-styles';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {name, imageUrl, quantity, price} = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item'/>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}> &#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart : (item) => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);
