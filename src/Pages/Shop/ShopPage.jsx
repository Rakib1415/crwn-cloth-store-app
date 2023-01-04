
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchCollectionsStart } from '../../store/shop/shop-actions';

const ShopPage =({fetchCollectionsStart}) =>{

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

        return (
            <div>
              <Outlet/>
             </div>
            )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart :() => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);