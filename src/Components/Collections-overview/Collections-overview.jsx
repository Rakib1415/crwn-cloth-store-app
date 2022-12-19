import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../store/shop/shop-selectors';


import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';


import { CollectionsOverviewContainer } from './CollectionOverview-styles';

const CollectionsOverview = ({collections}) => {
 
  return (
    <CollectionsOverviewContainer>
       {
            collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>)
        }
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
