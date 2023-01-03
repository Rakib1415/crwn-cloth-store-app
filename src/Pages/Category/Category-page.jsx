import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../store/shop/shop-selectors';

import CollectionItem from '../../Components/CollectionItem/CollectionItem';

import { CategoryItemsContainer, CategoryPageContainer, CategoryTitle } from './CategoryPage-styles';

const CategoryPage = ({collection}) => {
    const {title, items} = collection;
  return (
    <CategoryPageContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryItemsContainer>
        {
            items.map(item => <CollectionItem key={item.id} item ={item}/>)
        }
      </CategoryItemsContainer>
    </CategoryPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
    const {categoryId} = useParams();  
    return{
        collection : selectCollection(categoryId)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage);
