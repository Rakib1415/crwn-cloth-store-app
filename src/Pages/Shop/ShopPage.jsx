import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { db } from '../../firebase/firebase';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase-util';
import { updateCollections } from '../../store/shop/shop-actions';




class ShopPage extends React.Component{
   
    unsubscribeFromSnapshot = null;
    getSnapshot =async() =>{
        const {updateCollections} = this.props;
        const collectionRef = collection(db, 'collections');
        const snapShot = await getDocs(collectionRef);
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.props.handleLoading();
    }
    componentDidMount(){
        this.getSnapshot();
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
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);