
import React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchCollectionsStartAsyn } from '../../store/shop/shop-actions';




class ShopPage extends React.Component{

    componentDidMount(){
        const {fetchCollectionsStartAsyn} = this.props;
        fetchCollectionsStartAsyn()
        
    }

    render(){
        return (
            <div>
              <Outlet/>
             </div>
            )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsyn :() => dispatch(fetchCollectionsStartAsyn())
});

export default connect(null, mapDispatchToProps)(ShopPage);