
import React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchCollectionsStart } from '../../store/shop/shop-actions';




class ShopPage extends React.Component{

    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
        
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
    fetchCollectionsStart :() => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);