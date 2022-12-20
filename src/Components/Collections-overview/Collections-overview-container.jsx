import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsFetching } from '../../store/shop/shop-selectors';

import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './Collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;