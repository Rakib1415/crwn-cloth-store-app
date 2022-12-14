import React from 'react';
import CustomButton from '../Custom-button/CustomButton';
import './CollectionItem.scss';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted> Add to cart</CustomButton>
        </div>
    );
};

export default CollectionItem;