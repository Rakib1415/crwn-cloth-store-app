import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../Components/WithSpinner/WithSpinner';
import CategoryPage from './Category-page';

import { selectIsCollectionsLoaded } from '../../store/shop/shop-selectors';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state)
});

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CategoryPageContainer;