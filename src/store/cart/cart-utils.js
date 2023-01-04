export const addItemToCart = (cartItems = [], cartItemToAdd) => {
    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if(existingItem){
        return cartItems.map(item => item.id === cartItemToAdd.id ? {...cartItemToAdd, quantity : item.quantity + 1} : item)
    }
    return [...cartItems, {...cartItemToAdd, quantity : 1}];
}


export const removeItemFromCart = (cartItems, removeCartItem) => {
    const existingItem = cartItems.find(item => item.id === removeCartItem.id);

    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== removeCartItem.id);
    }
    return cartItems.map(item => item.id === removeCartItem.id ? {...removeCartItem, quantity : item.quantity - 1} : item)
};