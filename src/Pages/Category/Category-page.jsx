import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../store/shop/shop-selectors';

import CollectionItem from '../../Components/CollectionItem/CollectionItem';
import './Category-page.scss';


const CategoryPage = ({collection}) => {
    const {title, items} = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
            items.map(item => <CollectionItem key={item.id} item ={item}/>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    const {categoryId} = useParams();  
    return{
        collection : selectCollection(categoryId)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage);
