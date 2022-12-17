import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../store/shop/shop-selectors';


import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import './Collections-overview.scss';

const CollectionsOverview = ({collections}) => {
  console.log(collections);
  return (
    <div className='collections-overview'>
       {
            collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>)
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
